const express = require('express')
const app = express()
const port = 3000

const axios = require('axios');
"".split()

app.get('/', (req, res) => {
  axios.get('https://lidl.fr')
    .then(response => {
      // console.log(response.data)
      const imgTags = response.data.match(/<img.*?>|<img.*?\/>/g)
      const srcAttributes = imgTags.map((str) => 
        str.match(/src=".*?"/g).join("")
      )
      const src = srcAttributes.map((str) => str.split("\"")[1])
      console.log(src)
      const url = src.map((src) => 
        src.startsWith("https") ? src : 'https://lidl.fr' + src
      )
      const newImg = url.map((url) => 
        `<img src="${url}">`
      )
      console.log(url)
      res.send(newImg.join("<br>"))
    })
    .catch(error => {
      console.log(error);
    });
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})