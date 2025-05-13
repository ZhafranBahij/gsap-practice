var frame_count  = 9,
    offset_value = 100;

gsap.to(".viewer", {
  backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
//   ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=" + (frame_count * offset_value),
    pin: true,
    scrub: true
  }
});