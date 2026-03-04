function navAnimation() {
    const nav = document.querySelector('nav');
    let tl = gsap.timeline({
        paused: true
    });
    tl.to(".nav-list h5", {
        display: 'block'
    });
    tl.to("#bottom-nav", {
        height: '25vh',
        duration: 0.2,
        ease: "power3.in"
    }, "<");
    tl.to(".nav-list h5 span", {
        y: 0,
        stagger: {
            amount: 0.6
        }
    });
    nav.addEventListener("mouseenter", () => {
        tl.timeScale(1).play();
    });
    nav.addEventListener("mouseleave", () => {
        tl.timeScale(2).reverse();
    });
}
const rightElem = document.querySelectorAll(".right-elem");

function page2Animation(){
    rightElem.forEach((elem) => {
    const img = elem.querySelector("img");
    elem.addEventListener("mouseenter", () => {
        img.style.opacity = 1;
        img.style.scale = 1;
    });
    elem.addEventListener("mouseleave", () => {
        img.style.opacity = 0;
        img.style.scale = 0;
    });
    elem.addEventListener("mousemove", (e) => {
        if(e.ClintX < elem.getBoundingClientRect.x){ 
            img.style.opacity = 0;
            img.style.scale = 0;
        }
        img.style.left = `${e.x -elem.getBoundingClientRect().x}px`;
        img.style.top = `${e.y -elem.getBoundingClientRect().y}px`;
        img.style.transform = 'translate(-50%, -50%)';
    })
})
}
navAnimation();
page2Animation();