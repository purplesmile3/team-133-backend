const app = require('./app')
const config = require('../src/config/config.json');

const startApp = async () => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
   
  app.listen(config.app.port, () =>
    console.log('Server listening on port 3000!'),
  );
};

startApp()
