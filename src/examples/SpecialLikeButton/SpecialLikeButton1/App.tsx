import { SpecialLikeButton } from "./SpecialButton";

export const SpecialLikeButtonApp = () => {


    const widgets = ["1", "2", "3"]; 


    return <div style ={{
        border: "solid 4px black", 
        margin: "1em", 
        padding: "1em"
    }}>
 

    <h2>Example 1 - Basic Naive Example</h2>
    <p>
        This works perfectly fine. 
    </p>

    <p>
        However - what if I wanted to expose `SpecialLikeButton` as design system component? We don't want to have to force users to use our async function, or even react-query
    </p>

    <p>
        (Nb. the real objection is -  I want to be able to test the `SpecialLikeButton` as either a Storybook, or an RTL test. I don't want to have to be providing context providers in order to do this). 
    </p>
        {widgets.map((v) => {
            return <div style={{
                border: "solid 1px black", 
                padding: "1em"
            }}> 
                    Widget {v}

                    <SpecialLikeButton thingyId={v}/>

                </div>; 
        })}

    </div>

}