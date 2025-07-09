import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import handleOtherMethod from './helper'
import User from './User'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState('')
  const [reqData,setReqData] = useState('')
  const login =false;
  const [isData,setIsData] = useState(false)
  const [isbtnVisible,setIsbtnVisible] = useState(false)
  const [lastName,setLastName] = useState('')

  useEffect(()=>{
    setTimeout(()=>{
      setIsData(true)
    },1000)
  },[])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" title ='React logo' alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input type="text" placeholder="Enter your name" aria-label='Username'
      value={data} onChange={(e)=>setData(e.target.value)}/>
      <label htmlFor='Password'>Password</label>
      <input type="text" placeholder="Enter your password" id='Password'
        />
      <button onClick={()=>setReqData('updated Data')} name='Submit'>Submit</button> 
      <h1>{reqData}</h1>
      <button onClick={handleOtherMethod}>Other Method</button>
      <button>Click Me1</button>
      <button>Click Me2</button>

      <select>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>

      <label htmlFor='skill'>Select</label>
            <input type='checkbox' id='skill' checked={true}/>
      
      <div data-testid="div-test-id">
        testing with testid
      </div>
      <input type='text' defaultValue={'first name'} aria-label='name'/>
       {/* can be tested with getByDisplayValue */}
      {/* <textarea name='textarea' id='textarea' /> */}

      <span title="click me"></span>
      <input
      type='text'
      defaultValue={'mohan fsdv'}
      name='inputttusername'
      id='inputttusername'
      >
      </input>

      <button className='btn-test-class' id='btn-test-id'>Clickee</button>
      <div >Hello World</div>

      login ? <div>Login</div> : <div>Logout</div>
      {isData && <div>Data is loaded</div>}
      <div> afscdf111
         <p>HI</p>
         <p>How</p>
         <h1>Are you</h1>
      </div>

      <button onClick={()=>setIsbtnVisible(!isbtnVisible)}>
        IsButtonVisible
      </button>
      {isbtnVisible && <h1>Buttonisvisible</h1>}

      <input type='text' placeholder='Enter your lasttname' onChange={(e)=>setLastName(e.target.value)} aria-label='lastname'/>
      <h1>{lastName}</h1>
      <User name='dewfd'/>
      
    </>
  )
}

export default App
