import React, { useEffect, useRef } from 'react'
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import {getInitialState, getSearchResults, userSelector } from '../Redux/userReducer';
import Filters from '../components/Filters';
import { Link, Outlet } from 'react-router-dom';
const Home = () => {
    
    const {users} = useSelector(userSelector);
    const dispatch = useDispatch();
    
    useEffect(()=>{

        async function fetchData(){
            dispatch(getInitialState());
        }
        fetchData();
        console.log(users);
    }, [dispatch])

    const inpRef = useRef(null);
    function handleSearch(){

      if(inpRef.current.value === ''){
        inpRef.current.value = null;
      }
      dispatch(getSearchResults(inpRef.current.value));
    }

  return (
    <div className='home w-full flex mt-4 relative'>
      <div className='w-72 bg-white flex flex-col'>
        <Filters/>
      </div>
      <div className='w-full  flex flex-col  items-center bg-slate-100'>
        <div className='w-full h-16 flex justify-between items-center px-8'>
          <span className='text-2xl font-sans'>USERS</span>
          <Link to={'/add-user'}>
            <button className='w-28 h-10 bg-blue-400 text-white rounded-sm shadow-sm hover:bg-blue-700'>Add User</button>
          </Link>
          
        </div>
        <div className='relative main rounded-md flex flex-col pt-4'>
          <div className='w-full h-10 flex justify-center'>
            <input onChange={handleSearch} ref={inpRef} className="appearance-none w-4/5 h-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500" type="text" placeholder="Search by name"/>
            <button onClick={handleSearch} className='w-28 h-8 ml-4 bg-blue-400 text-white rounded-sm shadow-sm hover:bg-blue-700'>Search</button>
          </div>
          <div className='w-full h-full flex flex-col items-center mt-2 overflow-scroll divide-y'>
            {users.map((item, index)=>(
              <Card key={index} item={item} index={index}/>
            ))}
          </div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Home
