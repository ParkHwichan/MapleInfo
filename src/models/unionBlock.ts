import {Stat, UnionCharacter} from "@/interface/stat";
import {Coordinate} from "@/interface/unionBlock";
import {Grid} from "@/models/grid";
import {getAllValidTransforms, getWillBePlacedCoordinates, Transform} from "@/app/lib/transform";



export class UnionBlock {

    placedAt?: Coordinate;
    transforms: Array<Transform>;
    character: UnionCharacter;
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


        this.matrix = this.character.class.type.puzzles[puzzleGrade];

        this.transforms = getAllValidTransforms(this.matrix);
    }

    canPlaceAt(grid: Grid, coordinate: Coordinate, transform : Transform): boolean {
        const willBePlacedAt = getWillBePlacedCoordinates(coordinate, transform.coordinate);

        for (let i = 0; i < willBePlacedAt.length; i++) {
            const {x, y} = willBePlacedAt[i];
            const gridCell = grid.getBlock(x, y);
            if (!gridCell || gridCell.filled || gridCell.weight === 0) {
                return false;
            }
        }

        return true;
    }


    placeAt(grid: Grid, coordinate: Coordinate, transform: Transform): Grid {
        const newGrid = grid.copy();

        const {x: startX, y: startY} = coordinate;

        const willBePlacedAt = getWillBePlacedCoordinates(coordinate, transform.coordinate)

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



}