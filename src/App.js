import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import {Provider} from 'react-redux';
import { store } from './Redux/store';
import AddUser from './Pages/AddUser';
import User from './Pages/User';
import Team from './Pages/Team';
import TeamDetails from './components/TeamDetails';
import TeamList from './components/TeamList';
import TeamUser from './components/TeamUser';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Navbar/>, children: [
      {path:'/', element: <Home/>, children:[
        {path:'/', element: <User/>, children:[
          {path:'add-user', element: <AddUser/>}
        ]}
        
      ]},
      {path: '/team', element:<Team/>, children:[
        {path: '', element: <TeamList/>},
        {path: ':id', element: <TeamDetails/>, children:[
          {path: 'add-user', element: <TeamUser/>}
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
