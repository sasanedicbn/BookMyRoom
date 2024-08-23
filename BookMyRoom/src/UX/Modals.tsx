const Modals = ({ children, type }) => {

  return (
    <div className={`options-menu ${type}`}>
      {children}
    </div>
  );
};

export default Modals;
