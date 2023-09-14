"use client";
import {mainClasses, mapleClasses, UnionCharacter} from "@/interface/stat";
import React from "react";
import {Grid} from "@/models/grid";
import {UnionBlock} from "@/models/unionBlock";
import CharacterAddSelect from "@/components/select/characterAddSelect";


export default function Page() {

    const [grid, setGrid] = React.useState<Grid>(new Grid(20));
    const [selected, setSelected] = React.useState<UnionCharacter | null>(null);

    const [classes, setClasses] = React.useState<UnionCharacter[]>(
        [
        ]
    );
    const runSimulation = () => {


    }

    return <main className="flex flex-col items-center gap-4 md:p-24 mx-auto max-w-6xl">
        {
            <CharacterAddSelect onAdd={
                (character) => {

                    const newUnionBlock = new UnionBlock(character);
                    console.log(newUnionBlock.coordinates);

                    setClasses([...classes, character]);
                }
            }/>
        }
        {

            <div>
                <div>
                    {
                        classes.map((v, i) => {
                            return <button onClick={
                                () => {
                                    setSelected(v);
                                }
                            }>
                                {v.name}
                            </button>
                        })

                    }
                    <button onClick={
                        () => {
                            setSelected(null);
                        }}>
                        empty
                    </button>
                </div>
                <div className={"flex flex-col w-[400px] h-[400px] "}>
                    {
                        grid.array.map((row, i) => {
                                return <div className={"flex flex-row w-full"} key={i}>
                                    {
                                        row.map((v, j) => {
                                            return <div
                                                style={{
                                                    backgroundColor: v.color ? v.color :  v.weight ? "#ffffff" : "#000000",
                                                }}
                                                onClick={() => {
                                                    if(selected) {
                                                        const unionBlock = new UnionBlock(selected);

                                                        for(let rotate = 0 ; rotate < 4 ; rotate++) {
                                                            unionBlock.rotated = rotate;
                                                            for(let reverse = 0; reverse < 2 ; reverse++) {
                                                                unionBlock.reversed = reverse === 1;
                                                                if(unionBlock.canPlaceAt(grid, {
                                                                    x: v.x,
                                                                    y: v.y
                                                                })) {
                                                                    const newGrid =  unionBlock.placeAt(grid, {
                                                                        x: v.x,
                                                                        y: v.y
                                                                    }
                                                                    );
                                                                    setGrid(newGrid);
                                                                    return;
                                                                }

                                                            }

                                                        }
                                                        return;
                                                    }


                                                    console.log(v);
                                                    grid.checkWeight({
                                                        x: v.x,
                                                        y: v.y
                                                    }, v.weight === 0 ? 1 : 0, v.weight === 0 ? "#ffffff" : undefined);
                                                    console.log(v);
                                                    setGrid(grid.copy());
                                                }
                                                }
                                                key={j} className={"w-full aspect-square border"}>
                                                {

                                                }
                                            </div>
                                        })
                                    }
                                </div>
                            }
                        )
                    }
                    {
                        <button onClick={runSimulation}>
                            Run

                        </button>
                    }
                </div>
            </div>
        }
    </main>
}