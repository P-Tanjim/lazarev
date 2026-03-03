function navAnimation() {
    const nav = document.querySelector('nav');
    let tl = gsap.timeline({
        pause: false
    });
    tl.to("#bottom-nav", {
        height: '25vh'
    });
    tl.to(".nav-list h5", {
        display: 'block'
    })
    tl.to(".nav-list h5 span", {
        y: 0,
        stagger: {
            amount: 0.6
        }
    })
    nav.addEventListener("mouseenter", () => {
        tl.play();
    });
    nav.addEventListener("mouseleave", () => {
        tl.reverse();
    });
}
navAnimation();