import React, { useEffect, useRef, useState } from 'react'
import cross from "../img/cross.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddNewData } from '../Redux/userReducer';

const AddUser = () => {
    const [style, setStyle] = useState({transform: 'scale(0)'});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fRef = useRef('');
    const lRef = useRef('');
    const eRef = useRef('');
    const gRef = useRef('');
    const dRef = useRef('');
    const aRef = useRef(true);
    const iRef = useRef('');

    useEffect(()=>{
        setStyle({transform: 'scale(1)'});
    }, []);

    function handleBack(){
        setStyle({transform: 'scale(0)'});

        setTimeout(()=>{
            navigate('/');
        }, 300);
    }

    function handleAdd(e){

        e.preventDefault();

        const userData = {
            first_name: fRef.current.value,
            last_name: lRef.current.value,
            email: eRef.current.value,
            gender: gRef.current.value,
            domain: dRef.current.value,
            available: aRef.current.value,
            avatar: iRef.current.value
        }

        dispatch(AddNewData(userData));
        handleBack();

    }

  return (
    <div style={style} className='absolute inset-y-0 left-28 w-3/4 h-auto bg-white flex flex-col rounded-md shadow-xl transition duration-300 ease-in-out'>
        <div className='w-full h-6 border-b-2'>
            <div onClick={handleBack} className='close w-4 h-4 bg-red-400 rounded-full mt-1 ml-2'>
                <img className='closeImg w-11/2 h-10/2 invisible' src={cross} alt="" />
            </div>
        </div>
        <div className='w-full h-full flex'>
        <form className="w-full max-w-md m-auto" onSubmit={handleAdd}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                    <input ref={fRef} type="text" id="firstName" name="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your first name" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                    <input ref={lRef} type="text" id="lastName" name="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your last name" />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input ref={eRef} type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email address" />
            </div>
            <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <input ref={gRef} type="text" id="gender" name="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your gender" />
            </div>
            <div className="mb-4">
                <label htmlFor="domain" className="block text-gray-700 text-sm font-bold mb-2">Domain</label>
                <input ref={dRef} type="text" id="domain" name="domain" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your domain" />
            </div>
            <div className="mb-4">
                <label htmlFor="availability" className="block text-gray-700 text-sm font-bold mb-2">Availability</label>
                <select ref={aRef} id="availability" name="availability" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="avatar" className="block text-gray-700 text-sm font-bold mb-2">Avatar Link</label>
                <input ref={iRef} type="text" id="avatar" name="avatar" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your avatar link" />
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
        </form>
    </div>

    </div>
  )
}

export default AddUser
