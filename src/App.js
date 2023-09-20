
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
 //import ReversePromoteApp from './components/ReversePromoteApp'
// -------------------------------------------------------
// import Props from './components/Props';
// import Movies from './components/Movies'
//---------------------------------------------------------
// import TodoApp from './components/TodoApp';
//--------------------------------------------------------
 //import CRUDApp from './components/CRUDApp';
//--------------------------------------------------------------
// import { Provider } from 'react-redux';
// import store from './components/Store';
// import CakeCounter01 from './components/CakeCounter01';
// import CakeCounter02 from './components/CakeCounter02';
// import ContextAPI from './components/ContextAPI';
//------------------------------------------------------------------
import Home from './components/Pages/Home'
import Todo from './components/Pages/Todo'
import Post from './components/Pages/Post' 
import {Navigate,Routes, Route, BrowserRouter} from "react-router-dom"
import Menu from './components/Menu';
import SocialPost from './components/Pages/SocialPost';
import SocialDetails from './components/Pages/SocialDetails';
import NestedPost from './components/Pages/NestedPost';
import AddNewPost from './components/Pages/AddNewPost';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import CRUDApp from './components/Pages/CRUDApp';
import MovieApp from './components/Pages/MoviesApps/MovieApp';
import ReversePromoteApp from './components/Pages/ReverseandPromote/ReversePromoteApp';
import StateManagment from './components/Pages/StateManagment';
import TextChecker from './components/Pages/TextChecker';
import ReduxContextApi from './components/Pages/ReduxAndContext/ReduxContextApi';
// import ConditionJS from "./components/Pages/ConditionJS"

//-----------------------------------------------------


function App() {
  return (
    <div className='container'>

     {/* <ReversePromoteApp/> */}

      {/* //----------------------------------------------------- */}
      {/* Movie Card */}
      {/* <h1 className='text-center text-danger'>Movies Card</h1>
      <div className='row'>
      {
        Movies.map((movie,i)=>(
          <div className='col-md-4'>
          <Props Movi={movie} key={i}/>
          </div>
        ))
      }
      </div> */}
      {/*---------------------------------------------------- */}
    {/* Map Function */}
  
       <BrowserRouter>
        <Menu/>
       <Routes>
       <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path = "/CRUD" element={<CRUDApp/>}/>
        <Route path = "/MovieApp" element={<MovieApp/>}/>
        <Route path = "/reverse-promote" element={<ReversePromoteApp/>}/>
        <Route path="/state" element={<StateManagment/>}/>
        <Route path="/checker" element={<TextChecker/>}/>
        <Route path="/reduxcontext"element={<ReduxContextApi/>}/>
        {/* <Route path="/condition" element={<ConditionJS/>}/> */}
        <Route path="/post" element={<Post/>}/>
        <Route path="/social" element={<SocialPost/>}/>    
        <Route path="/social/:id" element={<SocialDetails/>}/>
        <Route path="/nested" element={<NestedPost/>}/>
        <Route path="/nested/*" element={<NestedPost/>}/>
        <Route path="/newpost" element={<AddNewPost/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
       </Routes>
      </BrowserRouter> 
      {/* ------------------------------------------------- */}
        {/* <Provider store={store}>
        <CakeCounter01/>
        <hr></hr>
        <CakeCounter02/>
        </Provider>
        <hr></hr>
       <ContextAPI/>
       <hr></hr> */}
       {/* ------------------------------------------------- */}
       {/* <CRUDApp/> */}
       {/* ------------------------------------------------- */}
       {/* <TodoApp/> */}
    </div>
  );
}

export default App;
