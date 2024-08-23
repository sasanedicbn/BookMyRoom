const Modals = ({ children, type }) => {
  const modalStyle = {
    'two-options': 'two-options',
    'three-options': 'three-options',
  };

  return (
    <div className={`options-menu ${modalStyle[type]}`}>
      {children}
    </div>
  );
};

export default Modals;
