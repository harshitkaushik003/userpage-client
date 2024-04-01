import React, { useEffect } from 'react'
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialState, userSelector } from '../Redux/userReducer';
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

  return (
    <div className='home w-full flex mt-4'>
      <div className='w-72 bg-red-200'></div>
      <div className='w-full  flex flex-col  items-center'>
        <div className='w-full h-16 flex justify-between items-center px-8'>
          <span className='text-2xl font-sans'>USERS</span>
          <button className='w-28 h-10 bg-blue-400 text-white rounded-sm shadow-sm hover:bg-blue-700'>Add User</button>
        </div>
        <div className='relative main rounded-md flex flex-col pt-4'>
          <div className='w-full h-10 flex justify-center'>
            <input className="appearance-none w-4/5 h-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500" type="text" placeholder="Search by name"/>
            <button className='w-28 h-8 ml-4 bg-blue-400 text-white rounded-sm shadow-sm hover:bg-blue-700'>Search</button>
          </div>
          <div className='w-full h-full flex flex-col items-center mt-2 overflow-scroll divide-y'>
            {users.map((item, index)=>(
              <Card key={index} item={item} index={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
