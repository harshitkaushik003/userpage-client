import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux';
import { getInitialState, userSelector } from '../Redux/userReducer';
import { useLocation } from 'react-router-dom';


const User = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(userSelector);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');

    useEffect(() => {
        async function fetchData() {
            dispatch(getInitialState(page));
        }
        fetchData();
    }, [dispatch, page]);


  return (
    <div className='w-full h-full flex flex-col items-center mt-2 overflow-scroll divide-y'>
        {users.map((item, index) => (
            <Card key={index} item={item} index={index} />
        ))}
    </div>  
  )
}

export default User
