const apps = [
    {
        name: 'PicQuest',
        url: 'https://shielded-spire-14458-df45cd7a37c0.herokuapp.com',
        description: 'The "PicQuest" application was created by a team of developers. It allows uploads and sharing of professional photos.',
        github: 'https://github.com/jasoncano1/PicQuest',
        image: 'assets/images/picquest.png',
    },
    {
        name: 'Week Scheduler',
        url: 'https://workweekscheduler-f0d43aaa27a0.herokuapp.com/',
        description: 'This is application is a work week scheduler that will save your tasks to local storage.',
        github: 'https://github.com/jasoncano1/Workday-Scheduler',
        image: 'assets/images/weekscheduler.png'
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
];

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
    setTimeout(() => img1.src = apps[i].image, 300);
    setTimeout(() => info.style.animation = 'activeInfo .25s linear', 100);
    setTimeout(() => img1.style.animation = 'activeApp .25s linear', 100);
}

getApp(0)

let animateContact = true;
const contactAnimation = () => {

    if (animateContact) {
        animateContact = false;

        God.style.animation = 'unset';
        adam.style.animation = 'unset';

        document.querySelectorAll('#contact>*').forEach(el=>{
            el.style.animation = 'btn 3s linear';
            el.style.opacity = '1';
        });

        setTimeout(() => {
            God.style.animation = 'God 3s';
            adam.style.animation = 'adam 1.5s linear';

            God.style.opacity = '1';
            adam.style.opacity = '1';
        }, 100)
    };
};

window.addEventListener('scroll', () => {
    if (contactImg.getClientRects()[0].top <= window.innerHeight/2) contactAnimation();
});

const resetContact = () => {
    document.querySelectorAll('#contact>*').forEach(el=>{
        el.style.animation = 'unset';
        el.style.opacity = '0';
    });
    animateContact = true;
};
