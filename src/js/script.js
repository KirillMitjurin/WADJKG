fetch('https://api.jsonbin.io/v3/b/6726882ce41b4d34e44d3941')
.then((response) => response.json())
.then(json => {
    console.log(json)
})