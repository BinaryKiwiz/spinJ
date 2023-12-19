export default class Vector{
    constructor(vector){
        this.vector = vector;
    }

    render(canvas, context){
        context.beginPath();
        context.moveTo(canvas.width / 2, canvas.height / 2);
        context.lineTo(canvas.width / 2 + math.subset(this.vector, math.index(0)), canvas.height / 2 + math.subset(this.vector, math.index(1)));
        context.stroke();
    }

    transform(trans, ...args){
        this.vector = trans(this.vector, args[0]);
    }
}