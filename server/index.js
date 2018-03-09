'use strict';

const app = require('./app');

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`App listening on port ${ PORT }!`);
});
