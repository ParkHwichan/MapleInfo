"use client";
import Card from "@/components/card/card";
import Image from "next/image";
import Container from "@/components/container/container";
import Select from "@/components/select/numberSelector";
import {useState} from "react";
import {StarForce} from "@/models/starforce";
import {commaSeparator} from "@/utils/string";
import NumberSelector from "@/components/select/numberSelector";
import RangeSlider from "@/components/slider/rangeSlider";


const itemLevels = [
    100, 110, 115, 120, 130, 135, 140, 150, 160, 200, 250
]
export default function Page() {

    const [itemLevel, setItemLevel] = useState(160);
    const [discount, setDiscount] = useState(0);
    const [initialStarForce, setInitialStarForce] = useState(0);
    const [targetStarForce, setTargetStarForce] = useState(0);

    const starForceChance = StarForce.generateStarForceChances();
    return <main className="flex min-h-screen flex-col mx-auto max-w-6xl">
        <h1>
            스타포스 시뮬레이터

        </h1>
        <p className={""}>
            스타포스 기대값 계산
        </p>

        <Container>
            <table>
                <colgroup>
                    <col className={"w-[100px]"}/>
                    <col className={"*"}/>
                </colgroup>
                <tbody>
                <tr>
                    <td>
                        아이템 레벨
                    </td>
                    <td >
                        <NumberSelector
                            initialValue={itemLevel}
                            values={
                                itemLevels
                            } onChange={v => setItemLevel(v)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        목표 스타포스
                    </td>
                    <td className={"py-12"}>
                        <RangeSlider
                            min={0}
                            max={25}
                            initialMax={17}
                            step={1}

                        ></RangeSlider>
                    </td>
                </tr>
                </tbody>
            </table>
        </Container>
        <label>
            스타포스 확률
        </label>
        <div className={"grid  md:grid-cols-2 grid-cols-1 gap-4 mt-4"}>

            <Container className={""}>
                {
                    <table className={"w-full"}>
                        <thead>
                        <tr>
                            <th>스타포스</th>
                            <th className={"w-max"}>비용</th>
                            <th>성공률</th>
                            <th>실패시 하락</th>
                            <th>유지</th>
                            <th>파괴</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Array.from({length: 25}, (v, i) => i).map((v, i) => {
                                try {
                                    return <
                                        tr
                                    >
                                        <td className={"text-center"}>
                                            {
                                                i + 1
                                            }
                                        </td>
                                        <td className={"text-center"}>
                                            {
                                                commaSeparator(StarForce.getStarForceCost(v, itemLevel))
                                            },
                                        </td>
                                        <td className={"text-center"}>
                                            {
                                                starForceChance[i].success + "%"
                                            }
                                        </td>
                                        <td className={"text-center"}>
                                            {
                                                (starForceChance[i].downgradeOnFail ? starForceChance[i].fail : 0) + "%"
                                            }
                                        </td>
                                        <td className={"text-center"}>
                                            {
                                                (starForceChance[i].downgradeOnFail ? 0 : starForceChance[i].fail) + "%"
                                            }
                                        </td>
                                        <td className={"text-center"}>
                                            {
                                                starForceChance[i].destroy + "%"
                                            }
                                        </td>
                                    </tr>
                                } catch (e) {
                                    return <>

                                    </>
                                }


                            })
                        }
                        </tbody>
                    </table>
                }
            </Container>
            <Container className={""}>
                {
                    "ss"
                }
            </Container>
        </div>


    </main>
}