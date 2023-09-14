import {Stat, UnionCharacter} from "@/interface/stat";
import {Coordinate} from "@/interface/unionBlock";
import {Grid} from "@/models/grid";

export class UnionBlock {

    placedAt?: Coordinate;
    rotated: number;
    reversed: boolean;
    coordinates: Coordinate[];
    character: UnionCharacter;
    pivot: Coordinate;
    matrix: Array<Array<number>>;

    constructor(character: UnionCharacter) {
        let puzzleGrade = 0;
        if (character.level >= 250)
            puzzleGrade = 4;
        else if (character.level >= 200)
            puzzleGrade = 3;
        else if (character.level >= 140)
            puzzleGrade = 2;
        else if (character.level >= 100)
            puzzleGrade = 1;
        else
            puzzleGrade = 0;

        this.character = character;

        this.rotated = 0;
        this.reversed = false;
        this.matrix = this.character.class.type.puzzles[puzzleGrade];
        this.pivot = {x: 0, y: 0};
        this.coordinates = this.getCoordinates();
    }

    getCoordinates(): Array<Coordinate> {

        const offset = this.getLeftTopOffset();

        const result = Array<Coordinate>(0);

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === 1) {
                    result.push({x: j - offset.x, y: i - offset.y});
                }
            }
        }
        return result;

    }

    getLeftTopOffset() {
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === 1) {
                    x = j;
                    y = i;
                    break;
                }
            }
        }

        return {x, y};
    }


    getWillBePlacedAt(coordinate: Coordinate): Array<Array<Coordinate>> {
        const result = Array<Coordinate>(0);

        const {x: startX, y: startY} = coordinate;


        this.getCoordinatesWithTransform(this.rotated, this.reversed).forEach((coordinate1) => {
                const x = coordinate.x + coordinate1.x;
                const y = coordinate.y + coordinate1.y;
                result.push({x, y});
            }
        );


        return result;
    }


    canPlaceAt(grid: Grid, coordinate: Coordinate): boolean {
        const {x: startX, y: startY} = coordinate;

        const willBePlacedAt = this.getWillBePlacedAt(coordinate);

        let canPlace = true;



        for (let i = 0; i < willBePlacedAt.length; i++) {
            const {x, y} = willBePlacedAt[i];
            const gridCell = grid.getBlock(x, y);
            if (!gridCell || gridCell.filled || gridCell.weight === 0) {
                canPlace = false;
                break;
            }
        }

        return canPlace;
    }


    placeAt(grid: Grid, coordinate: Coordinate) {

        const newGrid = grid.copy();

        const {x: startX, y: startY} = coordinate;

        const willBePlacedAt = this.getWillBePlacedAt(coordinate);

        for (let i = 0; i < willBePlacedAt.length; i++) {
            const {x, y} = willBePlacedAt[i];
            const gridCell = newGrid.getBlock(x, y);
            if (gridCell) {
                gridCell.filled = true;
                gridCell.weight = this.character.level;
                gridCell.color = this.character.class.type.color;
            }
        }

        this.placedAt = coordinate;
        return newGrid;
    }

    getCoordinatesWithTransform(rotation: number, reversed: boolean): Array<Coordinate> {
        const result = Array<Coordinate>(0);

        for(let i = 0, len = this.coordinates.length; i < len; i++) {
            switch (rotation) {
                case 0:
                    result.push({x: this.coordinates[i].x, y: this.coordinates[i].y});
                    break;
                case 1:
                    result.push({x: -this.coordinates[i].y, y: this.coordinates[i].x});
                    break;
                case 2:
                    result.push({x: -this.coordinates[i].x, y: -this.coordinates[i].y});
                    break;
                case 3:
                    result.push({x: this.coordinates[i].y, y: -this.coordinates[i].x});
                    break;
            }
        }

        if (reversed) {
            for(let i = 0, len = result.length; i < len; i++) {
                result[i].x = -result[i].x;
            }
        }

        console.log(result);

        return result;
    }
}