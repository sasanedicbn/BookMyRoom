import React from 'react';

type ComponentType = 'componentWrapper' | 'tableWrapper';

interface ComponentWrapperProps {
  type: ComponentType;
  children: React.ReactNode;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ type, children }) => {
  const wrapper: { [key in ComponentType]: string } = {
    componentWrapper: 'base-container',
    tableWrapper: 'table-wrapper'
  };

  return (
    <div className={wrapper[type]}>
      {children}
    </div>
  );
};

export default ComponentWrapper;
