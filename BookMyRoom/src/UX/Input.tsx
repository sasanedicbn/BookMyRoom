const Input = ({className,labelText,text,name,value,onChange}) => {
    return(
      <div className={className}>
        <label>{labelText}</label>
        <input
         type={text}
         name={name}
         value={value}
         onChange={onChange}/>
      </div>
    )
}
 export default Input;

