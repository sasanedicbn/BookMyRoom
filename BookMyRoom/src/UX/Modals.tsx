const Modals = ({ children, type }:{children:React.ReactNode}) => {

  return (
    <div className={`options-menu ${type}`}>
      {children}
    </div>
  );
};

export default Modals;
