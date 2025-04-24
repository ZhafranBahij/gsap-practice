gsap.to('.box', {
    scrollTrigger: {
        trigger: '.box',
        scrub: true,
    }, // start the animation when ".box" enters the viewport (once)
    x: 500
});

// You can use a ScrollTrigger in a tween or timeline
let tl = gsap.timeline({
  scrollTrigger: {

    // Element that triggers the animation
    trigger: ".box-b",

    // Starting point to trigger the animation
    // "top bottom" means top of the trigger element hits the bottom of the viewport
    start: "top bottom",
    // Ending point to trigger the animation
    // "bottom top" means bottom of the trigger element hits the top of the viewport
    end: "bottom top",
    // Scrub for allow you animation based on scroll position
    scrub: true,
    // markers for display a mark
    // markers: true,
    id: "scrub"
    } 
})
tl.to(".box-b", {
  duration: 1,
  x: 400,
  rotation: 360,
})
.to(".box-b", {
  duration: 2,
  scale: 2
});


// Or you can attach a tween or timeline to a ScrollTrigger later
const anim = gsap.to(".box-c", {
  x: 400,
  rotation: 360,
  duration: 3
});

ScrollTrigger.create({
  trigger: ".box-c",

  // Put animation in the trigger element
  animation: anim,
  // Uncomment these to see how they affect the ScrollTrigger
//   markers: true,
  start: "top center",
  end: "top 100px",
  toggleClass: "active",
  // pin: true,
  scrub: 1,
  // onUpdate: self => {
  //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  // }
});
