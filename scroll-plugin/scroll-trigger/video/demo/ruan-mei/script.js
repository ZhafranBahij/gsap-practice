/* Encoding is important!!!
//--------------------------------
// ffmpeg settings used:
//--------------------------------

ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4

// scale filtergraph optional
// ffmpeg docs: http://ffmpeg.org/ffmpeg.html

*/

// create the scrollSmoother before your scrollTriggers
// ScrollSmoother.create({
//   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true, // looks for data-speed and data-lag attributes on elements
//   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
// });

const coolVideo = document.querySelector(".video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top top",
    end: "bottom top",
    scrub: true,
    // markers: true,
  }
});

// wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
coolVideo.onloadedmetadata = function () {
  tl.fromTo(coolVideo, 
    {
      currentTime: 45
    },
    {
      currentTime: 46.6
    }
  );
};

// Dealing with devices
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (isTouchDevice()) {
  coolVideo.play();
  coolVideo.pause();
}

/**
 * Scrolltrigger
 */

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#content",
    start: "top bottom",
    // end: "+=500",
    // scrub: true,
    markers: true,
  }
});

tl2.from("#title", {
  scrambleText: {

    // Display text
    text: "", 
    
    // Character display options in scramble
    chars: "XY", 

    // Delay before revealing characters
    revealDelay: 0.1, 
    
    // Speed of revealing characters
    speed: 1, 

    // If you include " ", it will scramble words instead of characters
    delimiter: "",

    //
    oldclass: "text-white bg-cyan-300",

    // tweenLength: true,

    // Animation from right to left
    rightToLeft: false,
  }
});

tl2.from("#subtitle", {
  duration: 1,
  opacity: 0,
  x: -300,
});

tl2.from("#subtitle", {
  scrambleText: {

    // Display text
    text: "", 
    
    // Character display options in scramble
    chars: "XY", 

    // Delay before revealing characters
    revealDelay: 0.1, 
    
    // Speed of revealing characters
    speed: 1, 

    // If you include " ", it will scramble words instead of characters
    delimiter: "",

    //
    oldclass: "text-white bg-cyan-300",

    // tweenLength: true,

    // Animation from right to left
    rightToLeft: false,
  }
});