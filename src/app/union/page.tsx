"use client";
import {mainClasses, mapleClasses, UnionCharacter} from "@/interface/stat";
import React from "react";
import {Grid} from "@/models/grid";
import {UnionBlock} from "@/models/unionBlock";
import CharacterAddSelect from "@/components/select/characterAddSelect";
import classNames from "@/utils/classNames";


export default function Page() {

    const [grid, setGrid] = React.useState<Grid>(new Grid(20));
    const [selected, setSelected] = React.useState<UnionBlock | null>(null);
    const [unionBlocks, setUnionBlocks] = React.useState<UnionBlock[]>(
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
                    console.log(newUnionBlock.transforms);

                    setUnionBlocks([...unionBlocks, newUnionBlock]);
                }
            }/>
        }
        {

            <div>
                <div className={"flex flex-col"}>
                    {
                        unionBlocks.map((v, i) => {
                            let leftMin = 999999;
                            let rightMax = -999999;
                            let bottomMin = 999999;
                            let topMax = -999999;

                            v.transforms.forEach((transform) => {
                                transform.coordinate.map((coordinate) => {
                                    if(coordinate.x < leftMin) {
                                        leftMin = coordinate.x;
                                    }
                                    if(coordinate.x > rightMax) {
                                        rightMax = coordinate.x;
                                    }
                                    if(coordinate.y < bottomMin) {
                                        bottomMin = coordinate.y;
                                    }
                                    if(coordinate.y > topMax) {
                                        topMax = coordinate.y;
                                    }
                                })
                            })

                            const width = rightMax - leftMin + 1;
                            const height = topMax - bottomMin + 1;


                            return <div className={"flex flex-col"}>
                                <button
                                    key={i}
                                    onClick={
                                        () => {
                                            setSelected(v);
                                        }
                                    }>
                                    {v.character.name}
                                </button>
                                {
                                    <div className={"grid grid-cols-4 gap-2"}>
                                        {
                                            v.transforms.map((transform) => {
                                                return <div className={"flex-col flex"}>
                                                    {
                                                        Array.from(Array(height).keys()).map((v, i) => {
                                                            return <div className={"flex flex-row "}>
                                                                {
                                                                    Array.from(Array(width).keys()).map((v, j) => {
                                                                        const isFilled = transform.coordinate.find((coordinate) => {
                                                                            return coordinate.x === j + leftMin && coordinate.y === i + bottomMin;
                                                                        })

                                                                        return <div
                                                                            style={{
                                                                                backgroundColor: isFilled ? "#ffffff" : "#000000",
                                                                            }}
                                                                            className={"w-full aspect-square border"}>
                                                                            {

                                                                            }
                                                                        </div>
                                                                    })
                                                                }
                                                            </div>
                                                        })
                                                    }
                                                </div>

                                            })
                                        }
                                    </div>

                                }


                            </div>

                        })
                    }
                    <button onClick={
                        () => {
                            setSelected(null);
                        }}>
                        empty
                    </button>
                </div>
                <div className={"flex flex-col w-[400px] h-[400px] border-white border-[0.5px] "}>
                    {
                        grid.array.map((row, i) => {
                                return <div className={"flex flex-row w-full"} key={i}>
                                    {
                                        row.map((v, j) => {

                                            const leftBlock = grid.array[i][j - 1] ? grid.array[i][j - 1] : null;
                                            const topBlock = grid.array[i - 1] ? grid.array[i - 1][j] : null;
                                            const rightBlock = grid.array[i][j + 1] ? grid.array[i][j + 1] : null;
                                            const bottomBlock = grid.array[i + 1] ? grid.array[i + 1][j] : null;

                                            let className = "shadow-inner shadow-white/20  w-full aspect-square border border-double drop-shadow border-transparent relative rounded-[0.5px]";
                                            if(leftBlock === null || leftBlock.filledId !== v.filledId) {
                                                className = classNames(className, "border-l-[#E5E0D7]")
                                            }
                                            if(topBlock === null || topBlock.filledId !== v.filledId) {
                                              className = classNames(className, "border-t-[#E5E0D7]")
                                            }
                                            if(rightBlock === null || rightBlock.filledId !== v.filledId) {
                                                className = classNames(className, "border-r-[#E5E0D7]")
                                            }
                                            if(bottomBlock === null || bottomBlock.filledId !== v.filledId) {
                                               className = classNames(className, "border-b-[#E5E0D7]")
                                            }

                                            if(v.color) {
                                                className = classNames(className, "bg-[#BF9C76]")
                                            } else if(v.weight) {
                                                className = classNames(className, "bg-[#202521] ")
                                            } else {
                                                className = classNames(className, "bg-[#000000]")
                                            }

                                            return <div
                                                className={className}
                                                style={{
                                                    borderWidth: "0.5px",
                                                }}
                                                onClick={() => {

                                                    if(selected) {

                                                        selected.transforms.forEach((transform) => {
                                                            if(selected.canPlaceAt(grid , {
                                                                x: v.x,
                                                                y: v.y
                                                            }, transform)) {

                                                                const newGrid = selected.placeAt(grid , {
                                                                    x: v.x,
                                                                    y: v.y
                                                                }, transform);
                                                                setGrid(newGrid);
                                                                return;
                                                            }

                                                        }
                                                        )

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
                                                key={j} >
                                                {
                                                    v.icon && <div

                                                        className={"absolute inset-0 flex items-center justify-center  "}>
                                                    <div
                                                        style={{

                                                            backgroundColor: v.color
                                                        }}
                                                        className={"w-[60%] h-[60%] mx-auto my-auto rounded-[1px] flex shadow-inner ring-[1px] ring-black/30 text-white shadow-white/40  z-[20] drop-shadow-sm "}>
                                                        <p
                                                            style={{
                                                                lineHeight: "0"
                                                            }}
                                                            className={"mx-auto my-auto  text-[5px]"}>
                                                            x
                                                        </p>
                                                    </div>

                                                    </div>
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