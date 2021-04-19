window.onload = function(){
    const navBar = document.querySelector('.navwrapper');
    const navToggle = document.querySelector('.bars');

    navToggle.addEventListener('click', function(){
        this.classList.toggle('active');

        if(this.classList.contains('active')){
            gsap.to('.navwrapper', {
                duration: 1,
                left: '0%',
            })
        }else{
            gsap.to('.navwrapper', {
                duration: 1,
                left: '-80%',
            })
        }
    })
}

var icon = document.getElementById("icon");
var imageChange = document.querySelector('.hero-image');
var logoChange = document.querySelector('.logo');
var footLogoChange = document.getElementById('footImage');

icon.onclick = function() {
    document.body.classList.toggle("lightTheme");
    if(document.body.classList.contains("lightTheme")){
        imageChange.src = "./assets/21034578 [Converted]white.png"
        logoChange.src = "/assets/3ca5c7fa-dc04-4652-b1f3-8da632fe970d synnoture white.png"
        footLogoChange.src = "/assets/3ca5c7fa-dc04-4652-b1f3-8da632fe970d synnoture white.png"
    }else{
        imageChange.src = "./assets/21034578 [Converted].png"
        logoChange.src = "./assets/3ca5c7fa-dc04-4652-b1f3-8da632fe970d synnoture.png"
        footLogoChange.src = "./assets/3ca5c7fa-dc04-4652-b1f3-8da632fe970d synnoture.png"
    }
}

gsap.to('.sitecoverContainer', {
    delay: 2,
    duration:1,
    clipPath: "circle(0.0% at 100% 0)",
    ease: "slow(0.7, 0.7, false)",
});

gsap.from('.hero-image',{
    x: 400,
    opacity: 0,
    duration: 2,
    delay: 4,
    ease: "slow(0.7, 0.7, false)",
})

gsap.from('.Big-Header', {
    delay: 4,
    duration: 2,
    x: -600,
    ease: "slow(0.7, 0.7, false)",
});

gsap.from('.hero-desc', {
    delay: 4,
    duration: 1.8,
    x: -600,
    ease: "slow(0.7, 0.7, false)",
})

gsap.registerPlugin(ScrollTrigger);

gsap.to('.hero-image', {
    scrollTrigger:{
        trigger: ".hero-image",
        start: "bottom center",
        scrub: true,
    },
    duration: 5,
    xPercent: 20,
    ease: "slow(0.7, 0.7, false)",
})

gsap.to('#introTextAnim', {
    scrollTrigger:{
        trigger: "#introTextAnim",
        start: "bottom center",
        scrub: true,
    },
    duration: 5,
    xPercent: -20,
    ease: "slow(0.7, 0.7, false)",
})

gsap.from('.wwaT', {
    scrollTrigger:{
        trigger: "#whoWeAre",
        start: "top center",
        end: "+=20%",
        scrub: true,
        toggleActions: "restart restart restart restart"
    },
    duration: 5,
    ease: "slow(0.7, 0.7, false)",
    y: 100
})

gsap.from('.cChild', {
    scrollTrigger:{
        trigger: "#whoWeAre",
        start: "center center",
        end: "+=20%",
        scrub: true,
        toggleActions: "restart restart restart restart"
    },
    duration: 5,
    y: 60,
    ease: "slow(0.7, 0.7, false)",
    delay: 2
})

gsap.from('.navP', {
    scrollTrigger:{
        trigger: "#whatWeDo",
        start: "top center",
        end: "+=20%",
        scrub: true,
        toggleActions: "restart restart restart restart"
    },
    duration: 5,
    y: 200,
    ease: "slow(0.7, 0.7, false)",
    delay: 2
})