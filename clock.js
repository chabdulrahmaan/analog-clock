let hours = document.querySelector(".hr-hand");
let minutes = document.querySelector(".min-hand");
let seconds = document.querySelector(".sec-hand");
let themeButton = document.querySelector(".theme-btn");
let time = document.querySelector(".time");
let session = document.querySelector(".session");
let date = document.querySelector(".date");
let week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];

setInterval(() => {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    hours.style.transform = `rotateZ(${hr * 30 + min / 2}deg)`;
    minutes.style.transform = `rotateZ(${min * 6 + sec / 10}deg)`;
    seconds.style.transform = `rotateZ(${sec * 6}deg)`;

    hr = hr == 0 ? (hr = 12) : hr;
    hr = hr > 12 ? hr - 12 : hr;
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;

    session.innerHTML = d.getHours() < 12 ? "AM" : "PM";
    time.innerHTML = `${hr}:${min}`;
    date.innerHTML = `${week[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
});



themeButton.onclick = () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    let getCurrentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem("selected-theme", getCurrentTheme);
};

let selected_theme = localStorage.getItem('selected-theme');
if(selected_theme=='dark'){
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
}

