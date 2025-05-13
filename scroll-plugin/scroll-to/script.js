gsap.to(
    window,
    { 
        duration: 2, // Duration of the scroll animation
        ease: "power2",
        scrollTo: {
            y: "max", // Scroll to the bottom of the page
            // y: 400, // Scroll to 400px from the top of the page
            // x: 500, // Scroll to 500px from the left of the page
            autoKill: true, // If true, the scroll animation will stop if the user scrolls the page during the animation
        }
        // scrollTo: {
        //     y: "#gobox", // Scroll to the element with id "gobox"
        //     // Offset is 'normally when you use scrollTo some conmponent, the component will touch top.
        //     // However, if you use offsetY, the component will be 100px from the top.
        //     offsetY: 100 
        // }
    });

