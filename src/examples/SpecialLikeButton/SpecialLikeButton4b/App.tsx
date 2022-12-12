import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { SpecialButtonProps, SpecialLikeButton } from "./SpecialButton";


async function likeTheThing(id: string) {

    return new Promise((res) => {
        setTimeout(() => res({ success: true }), 1000);
    });
}



function determineStatus(details: ReturnType<typeof useMutation>) : SpecialButtonProps['thingyStatus']{


    if(details.isLoading){
        return "loading"
    }; 

    if(details.isError){
        return "error"
    }

    if(details.isIdle){
        return "idle"
    }

    if(details.isSuccess){
        return "success";
    }


    throw new Error("indeterminate status");

}



function useMultipleMutation(ids: Array<string>){


    const ref = useRef<Record<string, any>>({}); 

    ids.forEach((v) => {
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const result = useMutation(likeTheThing); 


        ref.current[v] = result; 
    })


    return ref; 
} 


export const SpecialLikeButtonApp = () => {





    const [widgets, setWidgets] = useState(["1", "2", "3"]); 


    const hackyRef = useMultipleMutation(widgets); 




    return  <div style ={{
        border: "solid 4px black", 
        margin: "1em", 
        padding: "1em"
    }}>


<h2>Example 4b - What's wrong with the hacky ref solution</h2>


<p>
    Click the button and see it error
    </p>


<p>

</p>


    <button onClick ={() => setWidgets([...widgets, "4"])}>Add a widget</button>



        {widgets.map((v) => {
            return <div style={{
                border: "solid 1px black", 
                padding: "1em"
            }}> 
                    Widget {v}

                    <SpecialLikeButton  onButtonClick={hackyRef.current[v].mutate} thingyStatus={determineStatus(hackyRef.current[v])}/>

                </div>; 
        })}

    </div>

}
