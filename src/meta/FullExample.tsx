
import React, { ReactNode } from 'react';

export type FulLExampleProps = React.PropsWithChildren<{

  description?: ReactNode; 
}>;



export const FullExample = (props: FulLExampleProps) => {
  const { children, description} = props;


  return (
    <div>
      {description}
      {children}
    </div>
  );
};
