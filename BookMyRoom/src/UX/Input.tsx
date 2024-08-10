const Input = ({className,text,name,value,onChange,inputClassName}) => {
    return(
      <div className={className}>
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

