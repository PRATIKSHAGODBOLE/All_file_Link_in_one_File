

// import '../node_modules/bootstrap/dist/css/bootstrap.css'

import CakeCounter1 from './CakeCounter1';
import { Provider } from 'react-redux';
import store from './Store';
import CakeCounter2 from './CakeCounter2';
import ContextAssigment from './ContextAssigment';
import WithOutContext from './WithOutContext';
import WithContextAPI from './WithContextApi';



function ReduxContextApi() {
  return (
    <div className="container">

    <Provider store={store}>  {/*store ke andar ka data CakeCounter1 ko mil jayega */}
     <CakeCounter1 />
    <hr></hr>
    <CakeCounter2/> 
   {/* {<CounterContainer1/>} */}
   </Provider>
     <ContextAssigment /> 
     {<WithContextAPI/>}
     {<WithOutContext/>}

    </div>
  );
}

export default ReduxContextApi;
