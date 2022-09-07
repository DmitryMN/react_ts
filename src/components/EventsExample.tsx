import React, { ChangeEvent, useState, MouseEvent, DragEvent, useRef } from 'react'

export const EventsExample: React.FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setDrag] = useState<boolean>(false);
    const textInput = useRef<HTMLInputElement>(null);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(textInput.current?.value);
    }

    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        setDrag(false);
    }

    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder="управляемый"/>
            <input type="text" ref={textInput} placeholder="неуправляемый"/>
            <button onClick={clickHandler}>Ok</button>
            <div draggable style={{width: "100px", height: "100px", background: "red"}}></div>
            <div onDragOver={dragWithPreventHandler} onDragLeave={leaveHandler} style={{width: "100px", height: "100px", background: isDrag ? "blue": "red" , marginTop: '10px'}}></div>
        </div>
    )
}
