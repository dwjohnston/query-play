import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FullExample } from "../../meta/FullExample";
import { App } from "./App";

export const qc = new QueryClient
    ();

export function DependantQueryExample() {



    return <>
        <FullExample
            description={<>
                In this example we are demonstrating more sophisticated usage of react-router
            </>}
        >

            <App />

        </FullExample>
    </>


}