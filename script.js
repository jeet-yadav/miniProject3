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