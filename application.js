const express = require('express')
const app = express()

app.get('/sample', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));