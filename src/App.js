import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import {Provider} from 'react-redux';
import { store } from './Redux/store';
import AddUser from './Pages/AddUser';
import User from './Pages/User';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Navbar/>, children: [
      {path:'/', element: <Home/>, children:[
        {path:'/', element: <User/>, children:[
          {path:'add-user', element: <AddUser/>}
        ]}
        
      ]}
    ]}
  ])
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
