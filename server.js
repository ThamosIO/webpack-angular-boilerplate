const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./config')

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// dev
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/root.html'));
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});