const scrollProgressElement = document.querySelector
('#scroll-progress');

function scrollProgress() {
    const totalheightOfWebPage = document.body.scrollheight;
    const currentDistanceFromTop = document.documentElement.
    scrollTop;

    const windowHeight = document.documentElement.clientHeight;
const scrolledPercentage = (cuurrentDistanceFromTop / (totalheightOfWebPage - windowHeight)) *100;

scrollProgressElement.computedStyleMap.width = Math.round(scrolledPercentage) + "%";  

}

document.addEventListener('scroll', scrollProgress);