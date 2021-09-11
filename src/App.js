import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Button } from 'antd';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash)

  const getCash = (cashParam) => {
      dispatch({type:'GET_CASH', payload:cashParam})
  }

  const addCash = (cashParam) => {
    dispatch({type:'ADD_CASH', payload:cashParam})
  }

  return (
    <div className="App">
      <div style={{display: 'flex'}} >
        <Button type='primary' onClick={()=>addCash()}>add cash</Button>
        <Button onClick={()=>getCash()}>get cash</Button>
      </div>
    </div>
  );
}

export default App;
