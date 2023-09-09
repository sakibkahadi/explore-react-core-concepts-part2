import './App.css'
import Friends from './Friends'

import Team from './Team'
import Users from './Users'
import Counter from './counter'

function App() {
  function handleCLick(){
    confirm('button clicked')
  }
  const handleCLick2=()=>{
    alert('buton clicked')
  }
  const addToFive =(num)=>{
    alert(num + 5)
  }
  return (
    <>
      
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleCLick}>Click me</button>
      <button onClick={handleCLick2} >Click2</button>
      <button onClick={()=>{alert('third click')}}>Third</button>
      <button onClick={()=>addToFive(3)}>fourth</button>
    </>
  )
}

export default App
