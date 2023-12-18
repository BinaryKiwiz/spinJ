const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
let console = document.getElementById("console");

function rotatez(vector, theta){
    const rotationMatrix = math.matrix([[math.cos(theta), -math.sin(theta), 0], [math.sin(theta), math.cos(theta), 0], [0, 0, 1]])
    return math.multiply(rotationMatrix, vector);
}

function rotatey(vector, theta){
    const rotationMatrix = math.matrix([[math.cos(theta), 0, -math.sin(theta)], [0, 1, 0], [math.sin(theta), 0, math.cos(theta)]])
    return math.multiply(rotationMatrix, vector);
}

function rotatex(vector, theta){
    const rotationMatrix = math.matrix([[1, 0, 0], [0, math.cos(theta), -math.sin(theta)], [0, math.sin(theta), math.cos(theta)]])
    return math.multiply(rotationMatrix, vector);
}

function render(vector, context){
    context.beginPath();
    context.moveTo(265, 265);
    context.lineTo(265 + math.subset(vector, math.index(0)), 265 + math.subset(vector, math.index(1)));
    context.stroke();
}

let xaxis = math.matrix([100, 0, 0]);
let yaxis = math.matrix([0, 100, 0]);
let zaxis = math.matrix([0, 0, 100]);
let objects = [xaxis, yaxis, zaxis];

let [xspeed, yspeed, zspeed] = [0.02, 0.01, 0.01];

setInterval(() => {
    for(let i = 0; i < objects.length; i++){
        objects[i] = rotatex(rotatey(rotatez(objects[i], zspeed), yspeed), xspeed);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < objects.length; i++){
        render(objects[i], ctx);
    }
}, 10);