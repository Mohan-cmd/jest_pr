const Propsfunc =(props:{testFunc:()=>void})=>{
    return(
        <div>
            <button onClick={props.testFunc}>Click me</button>
        </div>
    )
}

export default Propsfunc;