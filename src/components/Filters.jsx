import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { applyFilters, getInitialState } from '../Redux/userReducer';

const Filters = () => {
    const dispatch = useDispatch();
    
    const domainRef = useRef(null);
    const genderRef = useRef(null);
    const availRef = useRef(null);

    function handleFilters(){
        dispatch(applyFilters({arg1: domainRef.current.value, arg2: genderRef.current.value, arg3: availRef.current.value}));
    }

    function handleReset(){
        domainRef.current.value = null;
        genderRef.current.value = null;
        availRef.current.value = null;
        dispatch(getInitialState(1));

    }
  return (
    <>
    <div className='h-10 w-full text-center mt-4'>
        <span className='text-xl'>Filters</span>
    </div>
    <div className='w-full h-full flex flex-col items-center mt-10'>
        <input ref={domainRef} type="text" placeholder='domain' className='rounded-sm pl-3 w-52 h-7 mb-10 border-2'/>
        <input ref={genderRef} type="text" placeholder='gender' className='rounded-sm pl-3 w-52 h-7 mb-10 border-2'/>
        <select ref={availRef} name="" id="" className='rounded-sm pl-2 w-52 h-7 border-2'>
            <option value={''} selected>Select Availability</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <button onClick={handleFilters} className='w-52 h-10 shadow-lg mt-10 rounded-sm bg-purple-500 text-white'>Apply Filters</button>
        <button onClick={handleReset} className='w-52 h-10 shadow-lg mt-10 rounded-sm bg-purple-500 text-white'>Reset Filters</button>
    </div>
    </>
  )
}

export default Filters
