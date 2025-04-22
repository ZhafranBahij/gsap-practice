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

/**
 * STAGGER
 * Assume stagger is turn based element. 
 * First element start animate, but second element wait  until stagger duration clear.
 */
gsap.to('.box-stagger', {
    x: 100,
    stagger: 0.4 // 0.1 seconds between when each ".box" element starts animating
});

// Stagger with advanced options
gsap.to('.box-stagger-advanced', {
    x: 250,
    stagger: {
        // wrap advanced options in an object
        each: 0.1,
        from: 'center',
        grid: 'auto',
        ease: 'power2.inOut',
        repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish,
        yoyo: true // Alternates back and forth between the start and end values
    }
});

// Stagger with advanced options repeat outside
gsap.to('.box-stagger-advanced-2', {
    x: 250,
    repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish,
    yoyo: true, // Alternates back and forth between the start and end values
    stagger: {
        // wrap advanced options in an object
        each: 0.1,
        from: 'center',
        grid: 'auto',
        ease: 'power2.inOut',
    }
});

/**
 * GSAP Timeline
 */

// create a timeline
let tl = gsap.timeline()

// add the tweens to the timeline - Note we're using tl.to not gsap.to
tl.to(".box-timeline-1", { x: 600, duration: 1 });
tl.to(".box-timeline-2", { x: 600, duration: 0.5 });
tl.to(".box-timeline-3", { x: 600, duration: 0.5 });
// Example of delay in the timeline
tl.to(".box-timeline-4", { x: 600, duration: 0.5, delay: 0.5 });

// Giving start time
let tl2 = gsap.timeline()

// add the tweens to the timeline - Note we're using tl.to not gsap.to
tl2.to(".box-timeline-position-1", { x: 450, duration: 1 }, 1);
tl2.to(".box-timeline-position-2", { x: 450, duration: 0.5 }, '+=0.5'); // 0.5 seconds after the previous animation
tl2.to(".box-timeline-position-3", { x: 450, duration: 0.3 }, '<');
tl2.to(".box-timeline-position-4", { x: 450, duration: 0.3 }, "-=50%");
// tl.to(".box-timeline-position-4", { x: 600, duration: 0.5, delay: 0.5 });
// Example of delay in the timeline

// If you want to same duration in timeline, you can do this
// create a timeline
let tl3 = gsap.timeline({defaults: {duration: 0.5}});

// add the tweens to the timeline - Note we're using tl3.to not gsap.to
tl3.to(".box-timeline-5", { x: 600 });
tl3.to(".box-timeline-6", { x: 600 });
tl3.to(".box-timeline-7", { x: 600 });
// Example of delay in the timeline
tl3.to(".box-timeline-8", { x: 600, delay: 0.5 });