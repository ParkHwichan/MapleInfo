import classNames from "@/utils/classNames";

export default function Container(
    props: {
        children: React.ReactNode,
        className?: string
    }
) {

    const className = classNames(
        "p-4 bg-container rounded-md",
        props.className
    )

    return <div className={className}>
        {props.children}
    </div>
}