import { useWidgets, useWidgetsHook } from "./useWidgets"

export function WidgetDisplay() {



    const widgets = useWidgets();

    // const r = useWidgetsHook()
    // const widgets = r.getAllWidgets;


    console.log(widgets);
    return <>
    Widgets:

        {widgets.data?.map((v) => {

            console.log(v);
                return <div key={v.id}>
                    {v.value}
                </div>
        })}
    </>
}