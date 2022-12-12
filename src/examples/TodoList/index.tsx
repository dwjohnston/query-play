import { TodoList } from "./0TrivialCase/TodoList"

import { TodoList as TodoList2 } from "./1ComplexNaive/TodoList";
import { TodoList as TodoList3 } from "./1ComplexNaiveServiceInjection/TodoList";



import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { App } from "./2ComplexNotOptimised/App";
import { App as App2 } from "./2ComplexOptimised/App";
import { App as App3 } from "./3HookInjection/App";

import { App as App4 } from "./3HookInjection/App";

import { ExamplePanel } from "../../meta/ExamplePanel";

const qc = new QueryClient();

export function TodoListExample() {


    return <>

        <QueryClientProvider client={qc}>

            <ExamplePanel
                title="0TrivialCase"
                description={<>
                    <p>
                        This example shows a basic, working todo list
                    </p>
                </>}
            >

                <TodoList />
            </ExamplePanel>

            <ExamplePanel
                title="1ComplexNaive"
                description={<>
                    <p>
                        In this example we demonstrate some complex joining logic between API calls
                    </p>

                    <p>
                        This works fine, but is more difficult to test
                    </p>
                </>}>

                <TodoList2 />

            </ExamplePanel>


            <ExamplePanel
                title="1ComplexNaiveServiceInejection"
                description={<>
                    <p>
                        This example behaves the same way as the above example. 
                    </p>

                    <p>
                        This is a lot easier to test
                    </p>
                </>}>

                <TodoList3 />

            </ExamplePanel>

            <ExamplePanel
                title="2ComplexNotOptimised"
                description={<>
                    <p>
                        In this example we demonstrate how the above example is not well optimised.
                    </p>
                    <p>
                        We've intentionally made it so that the `/labels` endpoint is slower than `/todos`.
                    </p>
                    <p>
                        When we click to reveal the todos, we need to wait for refetch of labels, even though we already have them.
                    </p>
                </>}
            >

                <App />
            </ExamplePanel>

            <ExamplePanel
                title="2ComplexOptimised"
                description={<>
                    <p>
                        This example demonstrates optimising the above experience, by taking advantage of react-query's caching mechanism. 
                    </p>

                    <p>
                        However, we can't use the service injection pattern here, 
                    </p>
     
                </>}
            >

                <App2 />
            </ExamplePanel>


            <ExamplePanel
                title="2ComplexOptimisedWrapperPattern"
                description={<>
                    <p>
                        This example demonstrates the container and presentation components pattern. 
                    </p>

                    <p>
                        This is nice an easy to test, just shifts the problem. 
                    </p>
     
                </>}
            >

                <App3 />
            </ExamplePanel>



            <ExamplePanel
                title="3HookInjection"
                description={<>
                    <p>
                        This example demonstrates the optimised experience, while using the hook injection pattern. 
                    </p>

                    <p>
                        This is, IMO easier to test. 
                    </p>

                    <p>
                        However, we can see there is a lot of boiler plate to set up. 
                    </p>

                    <p> If I'm to put myself out on a limb a little, I would argue that this is where I think React needs improvement. I think service/dependency injection, including hook like dependencies, could be better supported</p>
     
                </>}
            >

                <App4 />
            </ExamplePanel>
        </QueryClientProvider>
    </>
}

