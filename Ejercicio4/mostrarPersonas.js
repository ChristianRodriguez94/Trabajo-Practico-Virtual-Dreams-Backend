const requestPromise = require("request-promise")

requestPromise({
uri: "https://reclutamiento-14cf7.firebaseio.com/personas.json",
json: true
}).then(function(response) {
    console.log(response)
  })
  
  