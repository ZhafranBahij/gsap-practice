/**
 * DRAGGABLE
 */
Draggable.create(".box");

Draggable.create(".box-2", {
    type: "y",
    bounds: document.querySelector(".container"),
    inertia: true,
    onClick: function () {
      console.log("clicked");
    },
    onDragEnd: function () {
      console.log("drag ended");
    },
});

Draggable.create(".box-3", {
    type: "rotation",
    inertia: true,
});

Draggable.create(".box-4", {
    type: "rotation",
    inertia: true,
    snap: function (value) {
      //this function gets called by InertiaPlugin when the mouse/finger is released and it plots where rotation
      //should normally end and we can alter that value and return a new one instead. This gives us an easy way to
      //apply custom snapping behavior with any logic we want. In this case, we'll just make sure the end value snaps
      //to 90-degree increments but only when the "snap" checkbox is selected.
      return Math.round(value / 90) * 90;
    },
  });


/**
 * SNAP
 */
Draggable.create(".box-snap", {
  type: "x,y",
  liveSnap: {
    //snaps to the closest point in the array, but only when it's within 15px (new in GSAP 1.20.0 release):
    points: [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 200, y: 50 },
    ],
    radius: 15,
  },
});

// The box will move like draggable, but cannot freely move.
Draggable.create(".box-snap-2", {
  type: "x,y",
  liveSnap: {
    //x and y (or top and left) can each have their own array of values to snap to:
    x: [0, 100, 200, 300],
    y: [0, 50, 100, 150],
    radius: 15,
  },
});

/** 
 * VELOCITY
*/
//positional velocity
Draggable.create(".box-velocity", {
  type: "x,y",
  inertia: true,
  onDragEnd: function () {
    console.log(
      "x velocity is: " +
        InertiaPlugin.getVelocity(this.target, "x") +
        " and the duration is " +
        this.tween.duration() +
        " seconds."
    );
  },
});