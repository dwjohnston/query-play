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



    return  <div style ={{
        border: "solid 4px black", 
        margin: "1em", 
        padding: "1em"
    }}>


<h2>Example 3 - Removes useMutation from the SpecialLikeButton - use Wrapper/Container components</h2>

<p>
    This solution demonstrates one solution to the above solution, by using a wrapper/container pattern. 
</p>
<p>
    The problem with this is that moves the problem up a level - what if this component itself also wanted to be a exposed as a library component.  
</p>


        {widgets.map((v) => {
            return <div style={{
                border: "solid 1px black", 
                padding: "1em"
            }}> 
                    Widget {v}

                    <WrappedSpecialLikeButton  id ={v}                    />

                </div>; 
        })}

    </div>

}


function WrappedSpecialLikeButton(props: {id: string}) {

    const mutationResult = useMutation(likeTheThing);

    //@ts-ignore - odd that this is erroring
    const status = determineStatus(mutationResult)


    return <SpecialLikeButton thingyStatus={status} onButtonClick={()=> mutationResult.mutate(props.id)}/>

}