
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export type WidgetProps = {
    id: string; 
};


function useWidget(id: string){
    return useQuery({
        queryFn: () => {

            if (id==="2"){
                throw new Error("Some kind of error")
            }

            return "Widget" + id; 
        }, 
        queryKey: ["widget", id]
    })
}

export const WidgetInner = (props: WidgetProps) => {
  const { id } = props;


  const {data, isLoading, isError} = useWidget(id);

  return (
    <div style ={{border: "solid 1px red"}}>
      {data}

      {isError}
    </div>
  );
};

export const  Widget =(props: WidgetProps) => {
  return <ErrorBoundary>
    <WidgetInner id={props.id}/>
  </ErrorBoundary>
}


type ErrorBoundaryProps = React.PropsWithChildren<{

}>;

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {


  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false};
  }

  static getDerivedStateFromError(error : any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error : any,
     errorInfo: any ) {
    // Any error reporting here
  }

  render() {

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{color: "red"}}>
          this component is in error
        </div>
      );
    }

    return <div>{this.props.children}</div>;
  }
}
