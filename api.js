const express = require('express')
const app = express()
const port = 3000

const axios = require('axios');

const searchUrls = []

app.get('/getimages', (req, res) => {
  
  try{
    const searchedUrl = req.query.url

    if(!searchedUrl){
      return res.json({"error": "Bad request", "message":  "No url to search"})
    }
    
    if(!(searchUrls.indexOf(searchedUrl) >= 0)){
      searchUrls.push(searchedUrl)
    }

    // Requesting the entered url
    axios.get(searchedUrl)
      .then(response => {
        const imgTags = response.data?.match(/<img.*?>|<img.*?\/>/g)
        
        console.log(imgTags)

        const srcAttributes = imgTags?.map((img) => 
          img.match(/src=".*?"/g) ? img.match(/src=".*?"/g).join("") : img
        )
        
        // The sources are allows at the same position because there is always a 'src="' in front 
        const src = srcAttributes?.map((src) => src.split("\"")[1])
        
        const urls = src?.map((src) => 
          src.startsWith("https") ? src : searchedUrl + src
        )
        
        const newImgs = urls?.map((url) => 
          `<img src="${url}">`
        )
  
        res.send(newImgs?.join("<br>"))
      })
      .catch(error => {
        console.log(error)
      });
  }
  catch(error){
    console.log(error)
  }
})

app.get("/researches", (req, res) => {
  try {
    return res.json({"status": "OK", "researches": searchUrls})
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})