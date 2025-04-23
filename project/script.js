let tl = gsap.timeline({});

const A1_X_POSITION = "60vw";
const A1_WEAPON_X_POSITION = "55vw";
const A2_X_POSITION = "0vw";

/**
 * STAGE 1
 */

// A1 from top left to top almost center
tl.to("#a1", { 
    x: A1_X_POSITION ,
    duration: 2,
    ease: "power2.inOut",
})

// A1 drop to bottom
tl.to("#a1", { 
    x: A1_X_POSITION,
    y: "90vh",
    duration: 1,
    ease: "power2.inOut",
})

// A1 weapon release
tl.fromTo("#a1-weapon", 
    {
        opacity: 0,
        x: A1_WEAPON_X_POSITION,
        y: "95vh",
    },
    {
        opacity: 1,
        // x: A1_WEAPON_X_POSITION,
        // y: "85vh",
        duration: 1,
        ease: "slow",
    }
)

// A2 enter the room
tl.fromTo("#a2",
    {
        x: -100,
        y: "90vh",
        duration: 1,
        // ease: "power2.inOut",
        opacity: 0,
    },
    {
        x: "0vw",
        y: "90vh",
        duration: 1,
        // ease: "power2.inOut",
        opacity: 1,
    }
)


// A1 throw a weapon
tl.to("#a1-weapon", 
    {
        x: "3vw",
        y: "95vh",
        ease: "power2.inOut",
        duration: 0.5,
    },
)

// A2 take a damage
tl.to("#a2",
    {
        rotation: -90,
        opacity: 0,
        duration: 2,
    },
)