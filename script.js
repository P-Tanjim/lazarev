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

function page2Animation() {
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
            if (e.ClintX < elem.getBoundingClientRect.x) {
                img.style.opacity = 0;
                img.style.scale = 0;
            }
            img.style.left = `${e.x - elem.getBoundingClientRect().x}px`;
            img.style.top = `${e.y - elem.getBoundingClientRect().y}px`;
            img.style.transform = 'translate(-50%, -50%)';
        })
    })
}

function page3Animation() {
    videoPlay.addEventListener("click", () => {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            top: 0,
            opacity: 1,
            borderRadius: 0
        });
        video.currentTime = 0
    });
    video.addEventListener("click", () => {
        video.pause();
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            top: "35%",
            opacity: 0,
            borderRadius: "30px"
        })
    });
}

const rightElem = document.querySelectorAll(".right-elem");
const videoPlay = document.querySelector(".video-play .icon");
const video = document.querySelector("#page3 video");
const rightSecVideo = document.querySelectorAll(".sec-right");
const pageFiveBottomVideo = document.querySelectorAll('.block-one');

rightSecVideo.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        elem.querySelector("video").style.opacity= 1;
        elem.querySelector('video').currentTime = 0;
        elem.querySelector('video').play();
    })
    elem.addEventListener("mouseleave", () => {
        elem.querySelector("video").style.opacity= 0;
        elem.querySelector('video').pause();
    })
});

pageFiveBottomVideo.forEach((elem) => {
    const video = elem.querySelector("video");
    elem.addEventListener("mouseenter", () => {
        video.style.opacity = 1;
        video.currentTime = 0;
        video.play();
    });
    elem.addEventListener("mouseleave", () => {
        video.style.opacity= 0;
        video.pause();
    })
});

navAnimation();
page2Animation();
page3Animation();