import { useWidgets, useWidgetsHook } from "./useWidgets"

export function WidgetDisplay() {



    //const widgets = useWidgets();

    const r = useWidgetsHook()
    const widgets = r.getAllWidgets;
    return <>


        {widgets.data?.map((v) => {
                return <div key={v.id}>
                    {v.value}
                </div>
        })}
    </>
}