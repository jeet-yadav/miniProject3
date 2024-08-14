function page1Animation(){
    var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
    y:-15,
    opacity:0,
    delay:0.5,
    stagger:0.2
})
tl.from(".center-part1",{
    x:-500,
    opacity:0,
    duration:0.7,
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.7,
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.3
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5
},"-=1")//starts 1 sec before
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
})
}
function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start: "top 50%",
            end: "top 0",
            scrub:2,
        }
    })
    
    tl2.from(".services",{
        x:-300,
        opacity:0
    })
    tl2.from("#box1, #box2",{
        x:-300
    })
    tl2.from("#box3, #box4",{
        x:300
    })
}
page1Animation()
page2Animation()