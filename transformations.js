export function rotatex(vector, theta){
    const rotationMatrix = math.matrix([[1, 0, 0], [0, math.cos(theta), -math.sin(theta)], [0, math.sin(theta), math.cos(theta)]])
    return math.multiply(rotationMatrix, vector);
}

export function rotatey(vector, theta){
    const rotationMatrix = math.matrix([[math.cos(theta), 0, -math.sin(theta)], [0, 1, 0], [math.sin(theta), 0, math.cos(theta)]])
    return math.multiply(rotationMatrix, vector);
}

export function rotatez(vector, theta){
    const rotationMatrix = math.matrix([[math.cos(theta), -math.sin(theta), 0], [math.sin(theta), math.cos(theta), 0], [0, 0, 1]])
    return math.multiply(rotationMatrix, vector);
}