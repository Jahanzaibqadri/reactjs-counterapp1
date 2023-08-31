function Button ({children, onclick}){
    return (
        <div onClick={onclick}>
        <span className= 'p-5 font-bold bg-red-400 m-2 rounded text-white' >
          {children}
        </span>
      </div> 
    )
}
export default Button