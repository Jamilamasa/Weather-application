const weather = new Weather();
const ui = new UI();
const searchForm = document.querySelector('.search');

searchForm.addEventListener('submit', (e)=>{
    const state = document.querySelector('.search-bar').value;
    if (state !== '') {
        weather.getWeather(state)
        .then((data)=>{
            if(data.cod != 404){
                ui.displayWeather(data)
            } else {
                alert('City Not Found');
            }
        })
    } else {
        alert('Please Enter A Valid Location')
    }


   
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", ()=>{
    const state = 'Nigeria';
        weather.getWeather(state)
        .then((data)=>{
            ui.displayWeather(data);
        })   
})