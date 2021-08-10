const express = require('express')
const app = express()

app.get('/sample', (req, res) => {
  res.send('Hello shravanakumar!')
})
app.post('/upload', (req, res) => {
  console.log(req);
  res.send('Hello shravanakumar!')
})
app.post('/uploads' ,(req, res) => {
  console.log(req.body);
  res.send('Hello shravanakumar!')
})
const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));