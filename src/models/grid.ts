import {Coordinate} from "@/interface/unionBlock";


export interface Block {
    x: number;
    y: number;
    filled: boolean;
    weight: number;
    color?: string;
}

export interface GridInterface {
    array: Array<Array<Block>>;
    size: number;
}

export class Grid implements GridInterface {

    array: Array<Array<Block>>;
    size: number;


    copy(): Grid {
        const grid = new Grid(this.size);

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++)
                grid.array[i][j] = this.array[i][j];
        }

        return grid;
    }
    constructor(size: number) {

        this.size = size;

        this.array = Array<Array<Block>>(0);

        for (let i = 0; i < size; i++) {
            const row = Array<Block>(0);
            for (let j = 0; j < size; j++) {
                row.push({
                    x: j,
                    y: i,
                    filled:false,
                    weight: 1
                });
            }
            this.array[i] = row;
        }
    }

    getBlock(x: number, y: number, filled?: boolean): Block | null {
        if (x < 0 || x >= this.size || y < 0 || y >= this.size)
            return null;

        if (filled !== undefined)
            return this.array[y][x].filled === filled ? this.array[y][x] : null;
        return this.array[y][x];
    }

    getNeighbours(block: Block, filled?: boolean): Map<string, Block> {
        const result: Map<string, Block> = new Map();

        const top = this.getBlock(block.x, block.y - 1, filled);
        const bottom = this.getBlock(block.x, block.y + 1, filled);
        const left = this.getBlock(block.x - 1, block.y, filled);
        const right = this.getBlock(block.x + 1, block.y, filled);


        if (top)
            result.set(top.x + "," + top.y, top);
        if (bottom)
            result.set(bottom.x + "," + bottom.y, bottom);
        if (left)
            result.set(left.x + "," + left.y, left);
        if (right)
            result.set(right.x + "," + right.y, right);

        return result;
    }

    getBlockByCoordinate(coordinate: Coordinate): Block | null {
        if (coordinate.x < 0 || coordinate.x >= this.size || coordinate.y < 0 || coordinate.y >= this.size)
            return null;
        return this.array[coordinate.y][coordinate.x];
    }

    getAvailableBlocks(): Array<Block> {
        const weightedBlocks = this.array.flat().filter(block => block.weight > 0);
        const filledBlocks = this.array.flat().filter(block => block.filled);
        const notFilledBlocks = weightedBlocks.filter(block => !block.filled);

        if (filledBlocks.length === 0)
            return notFilledBlocks;
        else {
            const result = new Map<string, Block>();

            filledBlocks.forEach(block => {
                    const neighbours = this.getNeighbours(block, false);
                    neighbours.forEach(neighbour => {
                            if (neighbour.weight > 0)
                                result.set(neighbour.x + "," + neighbour.y, neighbour);
                        }
                    )
                }
            )

            return Array.from(result.values());
        }
    }


    checkWeight(coordinate : Coordinate, weight: number, color?: string) {
        const block = this.getBlockByCoordinate(coordinate);
        if (block === null)
        {
            return false;
        }

        block.weight = weight;
        block.color = color;

        return true;

    }

}