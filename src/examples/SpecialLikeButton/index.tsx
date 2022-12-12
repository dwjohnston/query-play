import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FullExample } from "../../meta/FullExample";
import { SpecialLikeButtonApp } from './SpecialLikeButton1/App';
import { SpecialLikeButtonApp as SpecialLikeButtonApp2 } from './SpecialLikeButton2/App';
import { SpecialLikeButtonApp as SpecialLikeButtonApp3 } from './SpecialLikeButton3/App';
import { SpecialLikeButtonApp as SpecialLikeButtonApp4 } from './SpecialLikeButton4/App';
import { SpecialLikeButtonApp as SpecialLikeButtonApp4b } from './SpecialLikeButton4b/App';

const qc = new QueryClient();

export function SpecialLikeButtonExample() {


    return <FullExample>
        <QueryClientProvider client={qc}>

            <SpecialLikeButtonApp />
            <SpecialLikeButtonApp2 />
            <SpecialLikeButtonApp3 />

            <div style={{
                border: "solid 4px black"
            }}>

                <h2>Interlude 1 - use react-query in your library, pass async functions in</h2>

                <p>
                    At this point I'm not going to drill in to this approach, but it's worth mentioning.
                </p>

                <p>
                    The argument is, it would be perfectly fine to export a component library that relies on react-query internally; it's reasonable to require users to add a top level context provider; pass in an async function,
                    and the component library uses that async function with react-query internally.
                </p>

                <p>
                    My intution here is that this probably isn't going to work/be practical for a lot of use cases. For example, we would possibly want the mutation to do an optimisic update on a queryKey - in which case, how does the mutation know which query key? Do we need to provide that too?
                </p>
            </div>

            <SpecialLikeButtonApp4 />
            <SpecialLikeButtonApp4b />


        </QueryClientProvider>
    </FullExample>
}