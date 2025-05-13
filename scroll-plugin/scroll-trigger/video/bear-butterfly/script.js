console.clear();

gsap.registerPlugin(Observer);

const video = document.querySelector("video");

const speedVideo = () => {
  console.log("event", Date.now());
  gsap.
  timeline().
  to(video, { playbackRate: 2, duration: 0.2 }).
  to(video, { playbackRate: 1, duration: 0.5 }, "+=1");
};

const intentObserver = Observer.create({
  target: window,
  type: "wheel",
  onUp: speedVideo,
  onDown: speedVideo });