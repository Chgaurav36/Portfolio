function animation(){

    var tl = gsap.timeline()
    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    
    })
    
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    },"anim")
    
    tl.to(".loader h1", {
        delay: 0.6,
        duration: 0.7,
        color: "black",
    },"anim")
    
    tl.to(".loader",{
        display: "none"
    })
    tl.to(".navbar", {
        zIndex: 50,
        
        ease: "power1.out",
    })
    
}

animation();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});