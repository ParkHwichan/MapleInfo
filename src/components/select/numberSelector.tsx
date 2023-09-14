import {useState} from "react";
import classNames from "@/utils/classNames";

const tabs = [
    { name: 'My Account', href: '#', current: true },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
]

export default function NumberSelector(
    props: {
        label?: string,
        values: number[],
        initialValue?: number,
        onChange: (value: number) => void,
    }
) {

    const [value, setValue] = useState(props.initialValue ?? props.values[0]);



    return <div>
        <label htmlFor="tabs" className="">
            {props.label}
        </label>
        <div
            className={"w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2 self-center justify-start mx-auto"}
        >
            {
                props.values.map((v, i) => {
                    const className = classNames(
                        "flex w-full items-center justify-center border rounded-md py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 bg-backgroundHover hover:bg-backgroundHover ",
                        v === value ? "bg-gradient-purple text-white hover:text-white hover:opacity-[0.8]" : "bg-white text-gray-500"
                    )

                    return <button
                        key={i}
                        onClick={() => {
                            setValue(v);
                            props.onChange(v);
                        }
                        }
                        className={className}
                        aria-current={v === value ? 'page' : undefined}
                    >
                        {v}
                    </button>
                })
            }
        </div>
    </div>
}