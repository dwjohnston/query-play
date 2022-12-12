import React from 'react';

export type ExamplePanelProps = React.PropsWithChildren<{

    title: string; 
    description: React.ReactNode; 
}>;



export const ExamplePanel = (props: ExamplePanelProps) => {
  const {title, description, children} = props;


  return (
    <div className ="example-panel">

        <h2> {title}</h2>
        <div className ="description">
            {description}
        </div>

        {children}
    </div>
  );
};
