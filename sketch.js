//where do I want to go get boba
let boba = [{
  name: "7leaves",
  sugar: "medium"
}, {
  name: "tenRen",
  sugar: "low"
}, {
  name: "85c",
  sugar: "high"
}, {
  name: "happyLemon",
  sugar: "high"
}, {
  name: "truedan",
  sugar: "low"
}, {
  name: "TPtea",
  sugar: "medium"
}];

function setup() {
  createCanvas(600, 600);
  background(200);

  console.log(boba[int(random(boba.length))]);


}

function draw() {


}
