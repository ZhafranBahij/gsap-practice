console.clear();
gsap.registerPlugin(ScrollTrigger);

const coolVideo = document.querySelector("video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: {
      startColor: "white",
      endColor: "white",
      fontSize: "18px",
      fontWeight: "bold",
      indent: 20
    }
  }
});

const texts = gsap.utils.toArray(".text-p");
texts.forEach((text, index) => {
  tl.from(text, { scale: 0, autoAlpha: 0, duration: 1 }).to(
    text,
    { scale: 5, autoAlpha: 0, duration: 1 },
    ">+=1"
  );
});

coolVideo.onloadedmetadata = function () {
  tl.to(
    coolVideo,
    { currentTime: coolVideo.duration, duration: () => tl.duration() },
    0
  );
};