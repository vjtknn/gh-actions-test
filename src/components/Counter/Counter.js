import {useState} from 'react'
function Counter() {
  const [counter, setCounter] = useState(1)
  return (
    <div>
      <p>{counter}</p>
      <button type='button' onClick={()=>setCounter(counter*1)}>+</button>
    </div>
  )
}

export default Counter
