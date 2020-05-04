/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
  "number": {
    "value": 30,
    "density": {
      "enable": true,
      "value_area": 700 // Denser the smaller the number.
    }
  },
  "color": { // The color for every node, not the connecting lines.
    "value": "#01579b"// Or use an array of colors like "#01579b" ["#9b0000", "#001378", "#0b521f"]
  },
  "shape": {
      "type": "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
      "stroke": { // The border
        "width": 1,
        "color": "#145ea8"
      },
      "polygon": { // if the shape is a polygon
        "nb_sides": 2
      },
      "image": { // If the shape is an image
        "src": "",
        "width": 100,
        "height": 100
      }
  },
  "opacity": {
    "value": 0.7,
    "random": true
  },
  "size": {
    "value": 5,
    "random": true
  },
  "line_linked": {
    "enable": true,
    "distance": 200, // The radius before a line is added, the lower the number the more lines.
    "color": "#007ecc",
    "opacity": 0.5,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 2,
    "direction": "top", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
    "random": false,
    "straight": false, // Whether they'll shift left and right while moving.
    "out_mode": "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
    "bounce": false, 
    "attract": { // Make them start to clump together while moving.
      "enable": true,
      "rotateX": 600,
      "rotateY": 600
    }
  }
}
  }

);