//replaces yourElement's text with "This is the new text" 
gsap.to(".replacement", {
    duration: 2, // duration in seconds
    text: {
        value: "Yahoo, new text desu ~", // the new text
        ease: "power1.inOut", // the easing function to use
        delimiter: "", // the delimiter to use for splitting the text
        padSpace: true, // whether to pad spaces or not
        // preserveSpacesL: true, // whether to preserve spaces on the left or not
        // rtl: true, // rigt to left text
    }
  });