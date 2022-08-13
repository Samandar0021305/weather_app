const api = {
    key:"a5ccbd68de38d5a7bcc55e5d630b60e5",
    url:"https://api.openweathermap.org/data/2.5/"
}

var inputWeather = document.getElementById("inputWeather")
var title  = document.getElementById("title")
inputWeather.addEventListener("keyup",(e)=>{
    if(e.keyCode == 13){
        urlApi(inputWeather.value)
        console.log(inputWeather.value);
    }
})

function urlApi(weather){
    fetch(`${api.url}weather?q=${weather}&units=metric&APPID=${api.key}`)
    .then(Response =>{
        let data = Response.json()
        console.log(data)
        return data
    }).then(data=>{
        render(data)
    })
}

function render(data){
console.log(data);
title.textContent = data.main.temp
}