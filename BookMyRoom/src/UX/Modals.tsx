const Modals = ({ children, type }:{children:React.ReactNode,type: string}) => {

  return (
    <div className={`options-menu ${type}`}>
      {children}
    </div>
  );
};

export default Modals;
