
import React from 'react';

export type FulLExampleProps = React.PropsWithChildren<{
}>;



export const FullExample = (props: FulLExampleProps) => {
  const { children} = props;


  return (
    <div>
      {children}
    </div>
  );
};
