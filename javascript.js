import LineSegment from "./LineSegment.js";
import {rotatex, rotatey, rotatez} from "./transformations.js";
import Vector from "./Vector.js";
import RectangularPrism from "./RectangularPrism.js";

const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
let console = document.getElementById("console");

function render(vector, context){
    context.beginPath();
    context.moveTo(265, 265);
    context.lineTo(265 + math.subset(vector, math.index(0)), 265 + math.subset(vector, math.index(1)));
    context.stroke();
}

let xaxis = new Vector(math.matrix([100, 0, 0]));
let yaxis = new Vector(math.matrix([0, 100, 0]));
let zaxis = new Vector(math.matrix([0, 0, 100]));
let cube = new RectangularPrism(math.matrix([-50, -50, -50]), 100, 100, 100);
let objects = [cube];
//let objects = [xaxis, yaxis, zaxis, new LineSegment(xaxis.vector, yaxis.vector), new LineSegment(yaxis.vector, zaxis.vector), new LineSegment(zaxis.vector, xaxis.vector)];

let [xspeed, yspeed, zspeed] = [-0.01, -0.01, -0.01];

setInterval(() => {
    for(let i = 0; i < objects.length; i++){
        objects[i].transform(rotatex, xspeed);
        objects[i].transform(rotatey, yspeed);
        objects[i].transform(rotatez, zspeed);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < objects.length; i++){
        objects[i].render(canvas, ctx);
    }
}, 10);