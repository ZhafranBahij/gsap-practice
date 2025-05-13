/* Encoding is important!!!
//--------------------------------
// ffmpeg settings used:
//--------------------------------

ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4

// scale filtergraph optional
// ffmpeg docs: http://ffmpeg.org/ffmpeg.html

*/

const coolVideo = document.querySelector(".video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  }
});

// wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
coolVideo.onloadedmetadata = function () {
  tl.fromTo(coolVideo, 
    {
      currentTime: 14.15
    },
    {
      currentTime: 16
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

// window.addEventListener('scroll', () => {
//   if (window.scrollY > window.innerHeight * 1) { // 300vh
//     coolVideo.classList = 'video position-relative';
//   } else {
//     coolVideo.classList = 'video position-fixed top-0';
//   }
// });