var Deployer = require('simple-deployer')
var os = require('os')

var deployer = new Deployer({
  host: 'ip',
  port: 22,
  username: 'user',
  showDeployMessages: true
})

var host = 'ip'
var appname = 're-magma'
var deploy_to = '/home/user/apps/' + appname 
var repo_url = 'git@github.com:omarandstuff/re-magma.git'
var limit_release_count = 20

var date = new Date();
var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
var repo_path = deploy_to + '/repo'
var releases_path = deploy_to + '/releases';
var current_path =  deploy_to + '/current'
var deployed_to = ""

var commands = []

commands.push({
  header: 'git:clone'
})

commands.push({
  command: ['mkdir -p', repo_path].join(' ')
})

commands.push({
  command: ['git clone', repo_url, repo_path].join(' '),
  continueOnErrorCode: true
})

commands.push({
  command: ['cd', repo_path, '&& git remote update --prune'].join(' ')
})

commands.push({
  command: ['cd', repo_path, '&& git fetch'].join(' ')
})

commands.push({
  header: 'npm:install dependecies'
})

commands.push({
  command: ['cd', repo_path, '&& npm install'].join(' '),
})

commands.push({
  header: 'npm:generate build'
})

commands.push({
  command: ['cd', repo_path, '&& npm run build'].join(' ')
})

commands.push({
  header: 'task:generate release'
})

commands.push({
  command: ['mkdir', '-p', releases_path + '/unit'].join(' ')
})

commands.push({
  command: ['ls', '-dt', releases_path + '/*'].join(' ')
})

commands.push({
  dynamic: function(lastResult, code) {
    var lastDirectory = lastResult.split('\n')[1]
    var today_position = lastDirectory.indexOf(today)
    var today_count = 1

    if(today_position != -1) {
      today_count = Number(lastDirectory.slice(today_position + today.length + 1)) + 1
    }

    deployed_to = releases_path + '/' + today + '-' + today_count

    return { command: ['mkdir', '-p', deployed_to].join(' ') }
  }
})

commands.push({
  dynamic: function(lastResult, code) {
    return { 
      command: ['cp', '-a', repo_path +  '/.', deployed_to].join(' ')
    }
  }
})

commands.push({
  dynamic: function(lastResult, code) {
    return { 
      command: ['touch', deployed_to + '/deploy.txt'].join(' ')
    }
  }
})

commands.push({
  header: 'task:clean up'
})

commands.push({
  command: ['rm', '-rf', repo_path].join(' ')
})

commands.push({
  header: 'task:clean up releases'
})

commands.push({
  command: ['rm', '-rf', releases_path + '/unit'].join(' ')
})

commands.push({
  command: ['ls', '-dt', releases_path + '/*'].join(' ')
})

commands.push({
  dynamic: function(lastResult, code) {
    var files = lastResult.split('\n')

    if(files.length <= limit_release_count) {
      return { command: '' }
    } else {
      var command = ''

      for(var i = limit_release_count; i < files.length - 1; i++) {
        command +=  command !== '' ? ' && ' : ''
        command += 'rm -rf ' + files[i]
      }

      return { command: command }
    }
  }
})

commands.push({
  header: 'pm2:kill'
})

commands.push({
  command: ['pm2', 'delete', appname].join(' '),
  continueOnErrorCode: true
})

commands.push({
  header: 'task:point to current'
})

commands.push({
  command: ['rm', '-f', current_path].join(' ')
})

commands.push({
  dynamic: function(lastResult, code) {
    return { 
      command: ['ln', '-s', deployed_to, current_path].join(' ')
    }
  }
})

commands.push({
  header: 'pm2:start'
})

commands.push({
  command: ['pm2', 'start', current_path + '/server', '--name', appname].join(' ')
})

commands.push({
  header: 'deploy:revision'
})

commands.push({
  dynamic: function(lastResult, code) {
    return { 
      command: ['echo', '"' + date + ': deploy on ' + deployed_to + ' by ' + os.hostname() + '"', '>>', deploy_to + '/deploy_revision.log'].join(' ')
    }
  }
})

deployer.deploy(commands)
