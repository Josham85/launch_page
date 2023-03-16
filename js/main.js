const countdown = document.querySelector('.countdown');

//Set Launch Date

const launchDate = new Date ('August 31, 2023, 13:00:00').getTime();

// Update Interval every second
const intvl = setInterval(() => {
    // get todays date and time in milliseconds
    const now = new Date().getTime();

    // get distance between now and lauchn date
    const distance = launchDate - now;

    // time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    //display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    // if launch date passed
    if(distance < 0) {
        // stop countdown
        clearInterval(intvl);
        //Style and output Launched!
        countdown.style.color = '#374f7b';
        countdown.innerHTML = 'Launched!';
    }
}, 1000);

