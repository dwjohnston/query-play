import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FullExample } from "../../meta/FullExample";
import { Widget } from "./Widget";


const qc = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: true
        }
    }
});

export function SimpleSandbox() {



    return <>
        <FullExample>
            <QueryClientProvider client={qc}>

                <Widget id="1" />
                <Widget id="2" />

            </QueryClientProvider></FullExample>
    </>


}