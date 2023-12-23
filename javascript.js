import LineSegment from "./LineSegment.js";
import {rotatex, rotatey, rotatez} from "./transformations.js";
import Vector from "./Vector.js";
import RectangularPrism from "./RectangularPrism.js";
import J from "./J.js";

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
let garg = new J(math.matrix([-60, 60, -20]), 4);
let objects = [garg];
//let objects = [xaxis, yaxis, zaxis, new LineSegment(xaxis.vector, yaxis.vector), new LineSegment(yaxis.vector, zaxis.vector), new LineSegment(zaxis.vector, xaxis.vector)];

const base = 0.01;
let [xspeed, yspeed, zspeed] = [math.random() * base - (base / 2), math.random() * base - (base / 2), math.random() * base - (base / 2)];

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

    xspeed += math.random() * base / 10 - base / 20;
    yspeed += math.random() * base / 10 - base / 20;
    zspeed += math.random() * base / 10 - base / 20;
}, 10);

//4d experiments (you need stereographic projection to see perspective)
/*
let funnyStart = math.matrix([0, 0, 0, 0]);
let funnyEnd = math.matrix([100, 100, 100, 100]);
let theta = 0.01;
const xwrotationMatrix = math.matrix([[1, 0, 0, 0], [0, Math.cos(theta), -Math.sin(theta), 0], [0, Math.sin(theta), Math.cos(theta), 0], [0, 0, 0, 1]]);
const ywrotationMatrix = math.matrix([[1, 0, 0, 0], [0, Math.cos(theta), -Math.sin(theta), 0], [0, Math.sin(theta), Math.cos(theta), 0], [0, 0, 0, 1]]);
const zwrotationMatrix = math.matrix([[Math.cos(theta), -Math.sin(theta), 0, 0], [Math.sin(theta), Math.cos(theta), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);

const xyrotationMatrix = math.matrix([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, Math.cos(theta), -Math.sin(theta)], [0, 0, Math.sin(theta), Math.cos(theta)]]);
const xzrotationMatrix = math.matrix([[1, 0, 0, 0], [0, Math.cos(theta), 0, -Math.sin(theta)], [0, 0, 1, 0], [0, Math.sin(theta), 0, Math.cos(theta)]]);
const yzrotationMatrix = math.matrix([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, Math.cos(theta), -Math.sin(theta)], [0, 0, Math.sin(theta), Math.cos(theta)]]);

setInterval(() => {
    funnyStart = math.multiply(xzrotationMatrix, funnyStart);
    funnyEnd = math.multiply(xzrotationMatrix, funnyEnd);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + math.subset(funnyStart, math.index(0)), canvas.height / 2 + math.subset(funnyStart, math.index(1)));
    ctx.lineTo(canvas.width / 2 + math.subset(funnyEnd, math.index(0)), canvas.height / 2 + math.subset(funnyEnd, math.index(1)));
    ctx.stroke();
}, 10);*/