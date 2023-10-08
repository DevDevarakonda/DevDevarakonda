gsap.to(".nav",{
    backgroundColor:"rgb(140,2,194)",
    duration:2000,
    height:"80px",
    delay:4,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:"1"
    },
});


gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });