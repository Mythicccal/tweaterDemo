let resetHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', resetHeight);
window.addEventListener('load', resetHeight);
window.addEventListener('orientationchange', resetHeight);