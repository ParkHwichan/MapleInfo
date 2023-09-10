import React, { useState, useRef, MouseEvent, useEffect, TouchEvent } from 'react';

export default function RangeSlider(

    props: {
        min: number,
        max: number,
        initialMin? : number,
        initialMax? : number,
        step? : number,

    }


) {

    const [dragging, setDragging] = useState<null | 'min' | 'max'>(null);

    const {min, max, initialMin, initialMax} = props;
    const [minValue, setMinValue] = useState(initialMin ?? min);
    const [maxValue, setMaxValue] = useState(initialMax ?? max);
    const step = props.step || 1;
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const handleStart = (clientX: number) => {

        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const totalWidth = rect.width;
            let newValue = min + ((x / totalWidth) * (max - min));
            newValue = Math.round(newValue / step) * step;

            if (Math.abs(minValue - newValue) < Math.abs(maxValue - newValue)) {
                setMinValue(Math.min(newValue, maxValue));
                setDragging('min');
            } else {
                setMaxValue(Math.max(newValue, minValue));
                setDragging('max');
            }
        }
    };

    const handleMove = (clientX: number) => {
        if (sliderRef.current && dragging) {
            const rect = sliderRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const totalWidth = rect.width;
            let newValue = min + ((x / totalWidth) * (max - min));
            newValue = Math.round(newValue / step) * step;

            if(newValue < min || newValue > max) return;

            if (dragging === 'min') {
                setMinValue(Math.min(newValue, maxValue));
            } else {
                setMaxValue(Math.max(newValue, minValue));
            }
        }
    };

    const handleEnd = () => {
        setDragging(null);
    };

    useEffect(() => {
        const handleMouseMove = (e: globalThis.MouseEvent) => {
            e.preventDefault();
            handleMove(e.clientX);
        };

        const handleTouchMove = (e: globalThis.TouchEvent) => {
            e.preventDefault();
            handleMove(e.touches[0].clientX);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [minValue, maxValue, dragging]);

    return (
        <div
            ref={sliderRef}
            className="relative w-full h-8 flex rounded-full cursor-pointer overflow-visible "
            onMouseDown={(e: React.MouseEvent) => handleStart(e.clientX)}
            onTouchStart={(e: React.TouchEvent) => handleStart(e.touches[0].clientX)}
        >
            <div className={"h-1 w-full my-auto  bg-green-400"} >

            </div>
            <div className="rounded-full ring-2 absolute top-[25%] bg-background-accent w-4 h-[50%] overflow-visible" style={{ left: `${(minValue/max) * 100}%` }}>
                <div className="
                pointer-events-none
                absolute bg-blue-900 py-2 px-4 rounded-full top-[100%] left-[0%] w-max flex flex-shrink-0 justify-center items-center text-white text-xs ">
                    {minValue}성 시작
                </div>
            </div>
            <div className="
                  pointer-events-none
            rounded-full ring-2 bg-background-accent drop-shadow-lg absolute top-[25%] w-4 h-[50%] " style={{ left: `${(maxValue/max)*100}%` }}>
                <div className="absolute bg-blue-900 py-2 px-4 rounded-full top-[100%] left-[0%] w-max flex flex-shrink-0 justify-center items-center text-white text-xs ">
                    목표 : {maxValue}성
                </div>
            </div>
        </div>
    );
};


