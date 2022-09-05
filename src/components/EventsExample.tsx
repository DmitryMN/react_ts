import React, { ChangeEvent, useState } from 'react'

export const EventsExample: React.FC = () => {

    const [value, setValue] = useState<string>('');

    const changeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeEvent}/>
            <button>Ok</button>
        </div>
    )
}
