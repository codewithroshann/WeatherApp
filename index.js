let submit = document.getElementById("submit");
let weekday = document.getElementById("weekday");
let date = document.getElementById("date");
let add = document.getElementById("location");
let Temp = document.getElementById("we-temp");
let skyinfo = document.getElementById("sky-info");
let feelLike = document.getElementById("feel-like");
let precip = document.getElementById("precip");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let pressure = document.getElementById("pressure");
let uv = document.getElementById("uv");
let windDir = document.getElementById("wind-dir");
let windDeg = document.getElementById("wind-deg");
let vis = document.getElementById("vis");
let clearIcon = document.getElementById("clear-icon");

weekday.innerHTML = new Date().toLocaleDateString(undefined, { weekday: "long" });
date.innerHTML = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

function defualtWeather() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=5832375ad4bd4859b8383823232512&q=bilaspur`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            skyinfo.innerHTML = `${data.current.condition.text}`;
            Temp.innerHTML = `${data.current.temp_c}`;
            feelLike.innerHTML = `${data.current.feelslike_c}`;
            add.innerHTML = "Bilaspur";
            precip.innerHTML = `${data.current.precip_mm}`
            humidity.innerHTML = `${data.current.humidity}`
            windSpeed.innerHTML = `${data.current.wind_kph}`
            pressure.innerHTML = `${data.current.pressure_mb}`
            uv.innerHTML = `${data.current.uv}`
            windDir.innerHTML = `${data.current.wind_dir}`;
            windDeg.innerHTML = `${data.current.wind_degree}`;
            vis.innerHTML = `${data.current.vis_km}`;

        })
}
defualtWeather();

submit.addEventListener('click', () => {
    let input = document.getElementById("input").value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=5832375ad4bd4859b8383823232512&q=${input}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            skyinfo.innerHTML = `${data.current.condition.text}`;
            Temp.innerHTML = `${data.current.temp_c}`;
            feelLike.innerHTML = `${data.current.feelslike_c}`;
            precip.innerHTML = `${data.current.precip_mm}`
            humidity.innerHTML = `${data.current.humidity}`
            windSpeed.innerHTML = `${data.current.wind_kph}`
            pressure.innerHTML = `${data.current.pressure_mb}`
            uv.innerHTML = `${data.current.uv}`
            windDir.innerHTML = `${data.current.wind_dir}`;
            windDeg.innerHTML = `${data.current.wind_degree}`;
            vis.innerHTML = `${data.current.vis_km}`;


            weekday.innerHTML = new Date().toLocaleDateString(undefined, { weekday: "long" });
            date.innerHTML = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
            add.innerHTML = `${input}`;
        })
})

input.addEventListener('input', () => {
    clearIcon.style.opacity = input.value ? 1 : 0;
});

clearIcon.addEventListener('click', () => {
    input.value = '';
    clearIcon.style.opacity = 0;
});
