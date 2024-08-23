const Modals = ({ children }) => {
  // const modalStyle = {
  //   'two-options': 'two-options',
  //   'three-options': 'three-options',
  // };

  return (
    <div className={`options-menu}`}>
      {children}
    </div>
  );
};

export default Modals;
