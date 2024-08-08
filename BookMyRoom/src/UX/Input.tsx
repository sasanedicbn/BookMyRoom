const Input = ({className,labelText,text,name,value,onChange,inputClassName}) => {
    return(
      <div className={className}>
        <label>{labelText}</label>
        <input
         type={text}
         name={name}
         value={value}
         onChange={onChange}
         className={inputClassName}/>
      </div>
    )
}
 export default Input;

