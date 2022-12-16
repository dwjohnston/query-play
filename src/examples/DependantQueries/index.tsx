import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FullExample } from "../../meta/FullExample";
import { App } from "./App";

const qc = new QueryClient
();

export function DependantQueryExample() {



    return <>
        <FullExample>
            <QueryClientProvider client={qc}>

                    <App/>

            </QueryClientProvider></FullExample>
    </>


}