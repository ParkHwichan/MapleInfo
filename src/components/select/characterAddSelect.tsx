import {Class, mapleClasses, UnionCharacter} from "@/interface/stat";
import React from "react";

export default function CharacterAddSelect(
    props: {
        onAdd: (character: UnionCharacter) => void;
    }
) {

    const [selected, setSelected] = React.useState<Class>(
        mapleClasses[0]
    )
    const [level, setLevel] = React.useState<number>(200);

    const onAdd = () => {
        props.onAdd({
            name: selected.name,
            level: level,
            class: selected
        })
    }

    return (

        <div>
            <select
                className={"border-2 border-black text-black"}
                onChange={
                    (e) => {
                        const selected = mapleClasses.find(v => v.name === e.currentTarget.value);
                        if(selected) {
                            setSelected(selected);
                        }
                    }
                }>
                {
                    mapleClasses.map((v, i) => {
                            return <option key={v.name} value={v.name}>
                                {v.name}
                            </option>
                        }
                    )
                }
            </select>
            <input
                className={"border-2 border-black text-black"}
                type={"number"}
                max={300}
                min={0}

                onChange={
                    (e) => {
                        if(e.currentTarget.value === "")
                            setLevel(0);
                        else
                            setLevel(Number(e.currentTarget.value));
                    }
                }
            />
            <button onClick={onAdd}>
                add
            </button>

        </div>


    )
}