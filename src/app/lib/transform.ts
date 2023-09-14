import {Coordinate} from "@/interface/unionBlock";


export type Matrix = Array<Array<number>>;

export interface Transform {
    xShift: number;
    yShift: number;
    matrix: Matrix;
    coordinate: Array<Coordinate>;
}

export const rotateTransform = (transform: Transform, degree: number): Transform => {
    const result = {...transform};
    result.matrix = rotateMatrix(transform.matrix, degree);
    return result;
}

export const rotateMatrix = (matrix: Matrix, degree: number): Matrix => {
    const result = Array<Array<number>>(0);

    let width = matrix[0].length;
    let height = matrix.length;

    if (degree === 90 || degree === 270) {
        width = matrix.length;
        height = matrix[0].length;
    }

    for (let i = 0; i < height; i++) {
        const row = Array<number>(0);
        for (let j = 0; j < width; j++) {
            row.push(0);
        }
        result.push(row);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {

            let x = j;
            let y = i;

            if (degree === 90) {
                x = i;
                y = matrix[0].length - 1 - j;
            }
            else if (degree === 180) {
                x = matrix[0].length - 1 - j;
                y = matrix.length - 1 - i;
            }
            else if (degree === 270) {
                x = matrix.length - 1 - i;
                y = j;
            }

            result[y][x] = matrix[i][j];

        }
    }

    return result;
}

export const reverseMatrix = (matrix: Matrix): Matrix => {
    const result = Array<Array<number>>(0);

    for (let i = 0; i < matrix.length; i++) {
        const row = Array<number>(0);
        for (let j = 0; j < matrix[i].length; j++) {
            row.push(matrix[i][matrix[i].length - 1 - j]);
        }
        result.push(row);
    }

    return result;
}

export const removeDuplicateMatrix =  (matrixArray: Array<Matrix>): Array<Matrix> => {

    const result = Array<Matrix>(0);

    for (let i = 0; i < matrixArray.length; i++) {
        let duplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (matrixArray[i].length !== result[j].length)
                continue;
            if (matrixArray[i].every((row, index) => row.every((val, index2) => val === result[j][index][index2]))){
                duplicate = true;
                break;
            }
        }
        if (!duplicate)
            result.push(matrixArray[i]);
    }

    return result;
}

export const getWillBePlacedCoordinates = (point : Coordinate, coordinate : Array<Coordinate>): Array<Coordinate> => {
    const result = Array<Coordinate>(0);

    for (let i = 0; i < coordinate.length; i++) {
        result.push({x: point.x + coordinate[i].x, y: point.y + coordinate[i].y});
    }

    return result;
}


export const getAllValidTransforms = (matrix: Matrix): Array<Transform> => {

    const matrixArray = Array<Matrix>(0);

    matrixArray.push(matrix);
    matrixArray.push(rotateMatrix(matrix, 90));
    matrixArray.push(rotateMatrix(matrix, 180));
    matrixArray.push(rotateMatrix(matrix, 270));

    matrixArray.push(reverseMatrix(matrix));
    matrixArray.push(rotateMatrix(reverseMatrix(matrix), 90));
    matrixArray.push(rotateMatrix(reverseMatrix(matrix), 180));
    matrixArray.push(rotateMatrix(reverseMatrix(matrix), 270));

    const duplicateRemovedMatrixArray = removeDuplicateMatrix(matrixArray);

    let result = Array<Transform>(0);

    for (let i = 0; i < duplicateRemovedMatrixArray.length; i++) {
        const xShiftMax = duplicateRemovedMatrixArray[i][0].length - 1;
        const yShiftMax = duplicateRemovedMatrixArray[i].length - 1;

        for (let xShift = xShiftMax * -1; xShift <= xShiftMax; xShift++) {
        for (let yShift = yShiftMax * -1; yShift <= yShiftMax; yShift++) {
                const transform: Transform = {
                    xShift: xShift,
                    yShift: yShift,
                    matrix: duplicateRemovedMatrixArray[i],
                    coordinate: Array<Coordinate>(0)
                }

                for (let y = 0; y < duplicateRemovedMatrixArray[i].length; y++) {
                    for (let x = 0; x < duplicateRemovedMatrixArray[i][y].length; x++) {
                        if (duplicateRemovedMatrixArray[i][y][x] === 1)
                            transform.coordinate.push({x: x - xShift, y: y - yShift});
                    }
                }

                result.push(transform);
            }
        }
    }


    result = removeWhereZeroIsNotOne(result);
    return removeDuplicateTransform(result);
}

export const removeDuplicateTransform = (transformArray: Array<Transform>): Array<Transform> => {
    const result = Array<Transform>(0);

    for (let i = 0; i < transformArray.length; i++) {
        let duplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (transformArray[i].coordinate.length !== result[j].coordinate.length)
                continue;
            if (transformArray[i].coordinate.every((coordinate, index) => coordinate.x === result[j].coordinate[index].x && coordinate.y === result[j].coordinate[index].y)){
                duplicate = true;
                break;
            }
        }
        if (!duplicate)
            result.push(transformArray[i]);
    }

    return result;
}

export const removeWhereZeroIsNotOne = (transfroms : Array<Transform>): Array<Transform> => {
    const result = Array<Transform>(0);

    transfroms.map((transform) => {
        let flag = false;
        transform.coordinate.map((coordinate) => {
           if(coordinate.x ===0 && coordinate.y === 0){
               flag = true;
           }
        });

        if(flag){
            result.push(transform);
        }
    }
    );

    return result;
}