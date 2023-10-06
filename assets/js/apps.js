const apps = [
    {
        name: 'PicQuest',
        url: 'https://shielded-spire-14458-df45cd7a37c0.herokuapp.com',
        description: 'The "PicQuest" application was created by a team of developers. It allows uploads and sharing of professional photos.',
        github: 'https://github.com/jasoncano1/PicQuest',
        image: 'assets/images/picquest.png',
    },
    {
        name: 'Note Taker',
        url: 'https://notetaker-jc-7e9b2e3fe567.herokuapp.com',
        description: 'This is a Heroku hosted application that allows you to create, save, and delete notes.',
        github: 'https://github.com/jasoncano1/notetaker',
        image: 'assets/images/note-taker.png'
    },
    {
        name: 'Quiz-Game',
        url: 'https://jasoncano1.github.io/quiz-game',
        description: 'A 5 question quiz style game for javascript questions.',
        github: 'https://github.com/jasoncano1/quiz-game',
        image: 'assets/images/quiz-game.gif',
    },
    {
        name: 'Weater Dashboard',
        url: 'https://jasoncano1.github.io/weather-dashboard',
        description: 'A 5 day forecaster that will also give current weather values for your city search.',
        github: 'https://github.com/jasoncano1/weather-dashboard',
        image: 'assets/images/weather.png',
    },
    {
        name: 'MVC Tech Blog',
        url: 'https://mvc-tech-blog-jc-79d395df94ac.herokuapp.com',
        description: 'This is my portfolio website. It is a single page application built with Vue.js and Tailwind CSS.',
        github: 'https://github.com/jasoncano1/mvc-tech-blog',
        image: 'assets/images/mvc.gif'
    }
]

apps.forEach((app, i) => {
    document.querySelector('#appNav').innerHTML += `
            <img onclick="getApp(${i})" src="${app.image}" alt="Application">`
});

const getApp = i => {
    a1.href = apps[i].url;
    a2.href = apps[i].url;
    a3.href = apps[i].github;
    h1.innerHTML = apps[i].name;
    info.style.animation = 'unset';
    img1.style.animation = 'unset';
    p1.innerHTML = apps[i].description;
    setTimeout(() => img1.src = apps[i].image, 600);
    setTimeout(()=>info.style.animation = 'activeInfo 1s linear',100);
    setTimeout(() => img1.style.animation = 'activeApp 1s linear', 100);
}

getApp(0)

const mobileResponse = () => {
    
}
