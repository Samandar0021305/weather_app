var city = document.getElementById("city");
var weatherText = document.getElementById("weatherText");
var searchId = document.getElementById("searchId");

var country = document.getElementById("country");

var img = document.getElementById("img");

searchId.value = "ohangaron";

const api = {
    key:"d7619de7c1782d871c6e08354b78f9a0",
    url:"https://api.openweathermap.org/data/2.5/"
}

searchId.addEventListener("keyup",(event)=>{
    if(event.keyCode == 13){
        console.log(searchId.value);
        apiRender(searchId.value);

        searchId.value = ""
    }
});

function apiRender(weather){
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
    city.textContent = data.name;
    weatherText.textContent = data.main.temp;
    country.textContent = data.sys.country;
}