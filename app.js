 const express = require('express');

// Constants
const PORT = 3000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h3>Welcome to node app 2</h3>');
});

app.listen(PORT,()=>console.log(`App is runnning on localhost:${PORT}`));
