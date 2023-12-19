import LineSegment from "./LineSegment.js";

export default class RectangularPrism{
    constructor(positionVector, width, height, depth){
      this.position = positionVector;  

      const oppositeVector = math.add(positionVector, math.matrix([width, height, depth]));
      const widthVector = math.matrix([width, 0, 0]);
      const heightVector = math.matrix([0, height, 0]);
      const depthVector = math.matrix([0, 0, depth]);
      this.edges = [new LineSegment(positionVector, math.add(positionVector, widthVector)), // From starting point
                    new LineSegment(positionVector, math.add(positionVector, heightVector)), // outwards in all
                    new LineSegment(positionVector, math.add(positionVector, depthVector)), // 3 directions
                    new LineSegment(oppositeVector, math.add(oppositeVector, math.multiply(-1, widthVector))), // From point opposite to starting point
                    new LineSegment(oppositeVector, math.add(oppositeVector, math.multiply(-1, heightVector))), // outwards in 3 directions
                    new LineSegment(oppositeVector, math.add(oppositeVector, math.multiply(-1, depthVector))), // opposite to the directions extruded from the starting point
                    new LineSegment(math.add(positionVector, heightVector), math.add(oppositeVector, math.multiply(-1, widthVector))), // 2 segments in the z direction
                    new LineSegment(math.add(positionVector, widthVector), math.add(oppositeVector, math.multiply(-1, heightVector))),
                    new LineSegment(math.add(positionVector, depthVector), math.add(oppositeVector, math.multiply(-1, widthVector))), // 2 lines in the y direction
                    new LineSegment(math.add(positionVector, widthVector), math.add(oppositeVector, math.multiply(-1, depthVector))),
                    new LineSegment(math.add(positionVector, heightVector), math.add(oppositeVector, math.multiply(-1, depthVector))), // 2 lines in the x direction
                    new LineSegment(math.add(positionVector, depthVector), math.add(oppositeVector, math.multiply(-1, heightVector)))
                  ];
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