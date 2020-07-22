 const express = require('express');

// Constants
const PORT = 3000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h3>Message from node app 3</h3>');
});

app.listen(PORT,()=>console.log(`App is runnning on localhost:${PORT}`));
