gsap.to('.scramble', {
  duration: 3, 

  // Scramble the text
  scrambleText: {

    // Display text
    text: "Yahallo, this is a new text!", 
    
    // Character display options in scramble
    // chars: "01", 

    // Delay before revealing characters
    revealDelay: 0.1, 
    
    // Speed of revealing characters
    speed: 0.1, 

    // If you include " ", it will scramble words instead of characters
    delimiter: "",

    // tweenLength: true,

    // Animation from right to left
    rightToLeft: false,
  }
});