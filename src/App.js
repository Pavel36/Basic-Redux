import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Button, Input } from 'antd';
import {Radio} from 'antd'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash.cash)
  const customers = useSelector(state=>state.customers.customers)

  const getCash = (cashParam) => {
      dispatch({type:'GET_CASH', payload:cashParam})
  }

  const addCash = (cashParam) => {
    dispatch({type:'ADD_CASH', payload:cashParam})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({type:'ADD_CUSTOMER', payload:customer})
  }

  const removeCustomer = (customer) => {
    dispatch({type:'REMOVE_CUSTOMER', payload: customer.id})
  }

  return (
    <div className="App">
      <div style={{}} >
        <Radio.Group>
          <Input value={cash}/>
          <Button type='primary' onClick={()=>addCash(Number(prompt()))}>add cash</Button>
          <Button onClick={()=>getCash(Number(prompt()))}>get cash</Button>
        </Radio.Group>
      </div>   
      <div style={{marginTop:20}} >
        <Radio.Group>
          <Input value={customers.length}/>
          <Button type='primary' onClick={()=>addCustomer(prompt())}>add customer</Button>
          <Button onClick={()=>getCash(Number(prompt()))}>delete customer</Button>
        </Radio.Group>

      </div>
      {customers.length > 0 ? 
        <div>
          {customers.map(customer=>
            <div onClick={()=>removeCustomer(customer)}>
              {customer.name}
            </div>
            )}
        </div> 
        :
        <div>
          None customers!
        </div>
      }
    </div>
  );
}

export default App;
