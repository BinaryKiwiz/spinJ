export default class LineSegment{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }

    render(canvas, context){
        context.beginPath();
        context.moveTo(canvas.width / 2 + math.subset(this.start, math.index(0)), canvas.height / 2 + math.subset(this.start, math.index(1)));
        context.lineTo(canvas.width / 2 + math.subset(this.end, math.index(0)), canvas.height / 2 + math.subset(this.end, math.index(1)));
        context.stroke();
    }

    transform(trans, ...args){
        this.start = trans(this.start, args[0]);
        this.end = trans(this.end, args[0]);
    }
}