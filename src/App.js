import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Button, Input } from 'antd';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash.cash)

  const getCash = (cashParam) => {
      dispatch({type:'GET_CASH', payload:cashParam})
  }

  const addCash = (cashParam) => {
    dispatch({type:'ADD_CASH', payload:cashParam})
  }

  return (
    <div className="App">
      <div style={{display: 'flex'}} >
        <Input value={cash}/>
        <Button type='primary' onClick={()=>addCash(Number(prompt()))}>add cash</Button>
        <Button onClick={()=>getCash(Number(prompt()))}>get cash</Button>
      </div>
    </div>
  );
}

export default App;
