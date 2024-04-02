import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewTeam, getInitialTeam, teamSelector } from '../Redux/teamReducer';
import { Link } from 'react-router-dom';

const TeamList = () => {
    const {teams} = useSelector(teamSelector);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getInitialTeam());
    }, [dispatch]);

    const nameRef = useRef('');
    function handleAdd(){
        const userData = {name: nameRef.current.value};
        dispatch(addNewTeam(userData));
        nameRef.current.value = ''    
    }

  return (
    <>
    <div className='w-full h-52 border-b-2 flex justify-center items-center'>
            <label htmlFor="">Add New Team</label>
            <input ref={nameRef} className='w-1/2 h-10 ml-10 rounded-sm border-2 pl-2' type="text" />
            <button onClick={handleAdd} className='w-40 h-10 bg-blue-400 ml-10 rounded-sm text-white'>Add</button>
    </div>
    <div className='w-full h-full overflow-scroll flex'>
        {teams.map(item => (
            <Link className='ml-10' key={item._id} to={`/team/${item._id}`}>
                <span className='relative top-10 left-10 p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300 cursor-pointer'>{item.name}</span>
            </Link>
        ))}
    </div>
    </>
    
  )
}

export default TeamList
