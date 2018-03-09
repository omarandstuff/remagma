var Deployer = require('simple-deployer')
var os = require('os')

var deployer = new Deployer({
  host: 'ip',
  port: 22,
  username: 'user',
  showDeployMessages: true
})

var appname = 're-magma'
var deploy_to = '/home/user/apps/' + appname 

var current_path =  deploy_to + '/current'

var commands = []

commands.push({
  header: 'pm2:kill'
})

commands.push({
  command: ['pm2', 'delete', appname].join(' '),
  continueOnErrorCode: true
})

commands.push({
  header: 'pm2:start'
})

commands.push({
  command: ['pm2', 'start', current_path + '/server', '--name', appname].join(' ')
})

deployer.deploy(commands)
