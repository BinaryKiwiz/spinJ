import LineSegment from "./LineSegment.js";

export default class J{
    constructor(positionVector, fontSize){
        this.position = positionVector;

        const xUnit = math.matrix([10 * fontSize, 0, 0]);
        const yUnit = math.matrix([0, 10 * fontSize, 0]);
        const zUnit = math.matrix([0, 0, 10 * fontSize]);

        this.edges = [new LineSegment(positionVector, math.add(zUnit, this.position)), new LineSegment(positionVector, math.add(positionVector, math.multiply(-2, yUnit))), new LineSegment(positionVector, math.add(positionVector, math.multiply(3, xUnit)))];
        this.edges.push(this.edges[1].continue(xUnit));
        this.edges.push(this.edges[this.edges.length - 1].continue(math.multiply(1, yUnit)));
        this.edges.push(this.edges[this.edges.length - 1].continue(xUnit));
        this.edges.push(this.edges[this.edges.length - 1].continue(math.multiply(-3, yUnit)));
        this.edges.push(this.edges[this.edges.length - 1].continue(math.multiply(-1.5, xUnit)));
        this.edges.push(this.edges[this.edges.length - 1].continue(math.multiply(-1, yUnit)));
        this.edges.push(this.edges[this.edges.length - 1].continue(math.multiply(4, xUnit)));
        this.edges.push(this.edges[this.edges.length - 1].continue(math.multiply(1, yUnit)));
        this.edges.push(this.edges[this.edges.length - 1].continue(math.multiply(-1.5, xUnit)));
        this.edges.push(this.edges[this.edges.length - 1].continue(math.multiply(4, yUnit)));

        for(let i = this.edges.length - 1; i > 0; i--){
            this.edges.push(this.edges[i].continue(zUnit));
        }

        for(let i = 1; i < 13; i++){
            this.edges.push(this.edges[i].translate(zUnit));
        }
    }

    render(canvas, context){
        for(const segment of this.edges){
            segment.render(canvas, context);
        }
    }

    transform(trans, ...args){
        for(const segment of this.edges){
            segment.transform(trans, args[0]);
        }
    }
}