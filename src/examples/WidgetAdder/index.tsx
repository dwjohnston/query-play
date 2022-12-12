import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FullExample } from "../../meta/FullExample";
import { WidgetAdder } from "./WidgetAdder";
import { WidgetDisplay } from "./WidgetDisplay";


const qc = new QueryClient();

export function WidgetAdderExample() {



    return <>
        <FullExample>
            <QueryClientProvider client={qc}>

                <WidgetAdder id="1" />
                <WidgetAdder id="2" />

                <WidgetDisplay />

            </QueryClientProvider></FullExample>
    </>


}