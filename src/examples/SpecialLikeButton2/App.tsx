import { useMutation } from "@tanstack/react-query";
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


export const SpecialLikeButtonApp = () => {


    const widgets = ["1", "2", "3"]; 

    const mutationResult = useMutation(likeTheThing);

    //@ts-ignore - odd that this is erroring
    const status = determineStatus(mutationResult)

    return  <div style ={{
        border: "solid 4px black", 
        margin: "1em", 
        padding: "1em"
    }}>


<h2>Example 2 - Removes useMutation from the SpecialLikeButton</h2>

<p>
    This example demonstrates the basic problem - clicking a single button will cause loading flags for <i>all</i> the buttons
</p>

        {widgets.map((v) => {
            return <div style={{
                border: "solid 1px black", 
                padding: "1em"
            }}> 
                    Widget {v}

                    <SpecialLikeButton onButtonClick={()=> mutationResult.mutate(v)}
                        thingyStatus={status}
                    />

                </div>; 
        })}

    </div>

}