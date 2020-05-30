const express = require('express');

// Constants
const PORT = 3000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h3>Hello from node-js app</h3>');
});

app.listen(PORT,()=>console.log(`App is runnning on localhost:${PORT}`));
