import { useState } from "react";
import { addEmitHelper } from "typescript";
import { useAddWidget, useWidgetsHook } from "./useWidgets"



export function WidgetAdder(props:{id: string}) {

    console.log("render widget adder", props.id);

    const r = useWidgetsHook();
    const addWidget = r.addWidget; 
    // const addWidget =useAddWidget();


    const [text, setText] = useState('');
    return <>

            <input type ="text" onChange={(e) => setText(e.target.value)} value={text}/>

            <button onClick ={() => addWidget.mutate({
                value: text
            })}>Click me</button>


    </>
}