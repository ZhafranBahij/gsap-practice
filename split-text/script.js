// split elements with the class "split-char" into words and characters
let split = SplitText.create(".split-char", { type: "words, chars" });

// now animate the characters in a staggered fashion
gsap.from(split.chars, {
  duration: 1, // Duration of the animation
//   x: 100,       // animate from 100px to the right 
  y: 100,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05 // 0.05 seconds between each
});

// split elements with the class "split" into words and characters
let split_word = SplitText.create(".split-word", { type: "words" });

// now animate the characters in a staggered fashion
gsap.from(split_word.words, {
  duration: 1, // Duration of the animation
  x: 100,       // animate from 100px to the right 
//   y: 100,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.3 // 0.05 seconds between each
});

// Using another split syntax
SplitText.create(".split-char-2", {
    type: "words, chars",
    onSplit(self) { // runs every time it splits
      gsap.from(self.chars, {
        duration: 1, 
        y: -100, 
        autoAlpha: 0, 
        stagger: 0.05
      });
    }
  });