const Input = ({type,name,value,onChange,inputClassName}) => {
    return(
        <input
         type={type}
         name={name}
         value={value}
         onChange={onChange}
         className={inputClassName}/>
    )
}
 export default Input;

