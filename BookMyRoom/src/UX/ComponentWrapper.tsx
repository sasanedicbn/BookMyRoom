const ComponentWrapper = ({type, children}) => {

    const wrapper = {
        componentWrapper: 'base-container',
        tableWrapper: 'table-wrapper'
    }
   
    return(
        <div className={wrapper[type]}>
          {children}
        </div>
    )
}

export default ComponentWrapper