
const Modals = ({ children,type }) => {


  const modalStyle = {
    'two-options': 'two-options',
     'three-options': 'three-options',
     'addNewRoom': 'modal-addnewRoom'
  }
  return (
      <div className={modalStyle[type]}>
          {children}

      </div>
  );
};

export default Modals;
