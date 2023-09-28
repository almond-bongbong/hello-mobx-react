import React from 'react';

interface Props {
  children: () => React.ReactNode;
}

function RenderComponent({ children }: Props) {
  return <div>{children()}</div>;
}

export default RenderComponent;
