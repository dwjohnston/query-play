import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addWidget, getAllWidgets, Widget } from "./services/WidgetService";


export function useWidgets() {
    const query = useQuery({ queryKey: ['widgets'], queryFn: getAllWidgets }); 
    return query; 

}


export function useAddWidget() {
    const queryClient = useQueryClient();
    const addWidgetMutation = useMutation(
        {
            mutationFn:         addWidget,

          // When mutate is called:
          onMutate: async (widget) => {
            // Cancel any outgoing refetches
            // (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries(['widgets'])
    

              },
          // If the mutation fails,
          // use the context returned from onMutate to roll back
          // Always refetch after error or success:
          onSettled: () => {
            queryClient.invalidateQueries(['widgets'])
          },
        },
      )
    return addWidgetMutation; 
}



export function useWidgetsHook() {

    const widgetsQuery = useWidgets(); 
    const addWidgetMutation = useAddWidget(); 


    return {
        getAllWidgets: widgetsQuery, 
        addWidget: addWidgetMutation
    }; 
}