gsap.to(".box", { x: 200 })

gsap.to(".box2", { x: 40, fill: 'green', });

gsap.from(".box-from", { x: 200 });

// gsap.fromTo(".box-from-to", { x: 200 });

// let target = document.querySelector(".box3");
gsap.to(".box3", { 
    duration: 2,
    x: 200,
    rotation: 360,
});

/**
 *  x: 200, // use default of px
    x: "+=200" // relative values
    x: '40vw', // or pass in a string with a different unit for GSAP to parse
    x: () => window.innerWidth / 2, // you can even use functional values to do a calculation!
    rotation: 360 // use default of degrees
    rotation: "1.25rad" // use radians
 */

gsap.to(".svgBox", { 
    duration: 2,
    x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
    xPercent: -100,
    // or target SVG attributes
    attr: {
        fill: '#8d3dae',
        rx: 50, 
    },
});

/**
 * Animate non HTML elements with GSAP
 */

//create an object
let obj = { myNum: 10, myColor: "red" };

gsap.to(obj, {
  myNum: 200,
  myColor: "blue",
  onUpdate: () => console.log(obj.myNum, obj.myColor)
});

/**
 * REPEAT & YOYO
 */

gsap.to(".box-repeat", { 
    rotation: 360,
    x: '100vw',
    xPercent: -100,
    // special properties
    duration: 2, // how long the animation lasts
    // repeat: 2, // the number of repeats - this will play 3 times
    repeat: -1, // -1 means infinite repeats
    yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
  });
  

/**
 * REPEAT DELAY
 */

gsap.to(".box-delay-1", { 
    rotation: 360,
    duration: 1,
    repeat: 1,
    repeatDelay: 1,
  });
  
  
  gsap.to(".box-delay-2", { 
    rotation: 360,
    duration: 1,
    delay: 1 // delay the start of this animation
  });

/**
 * EASES
 */
gsap.to(".box-ease-not", { x: '100vw', duration: 2, ease: "none" });

gsap.to(".box-ease", { x: '100vw', duration: 2, ease: "bounce.out" });