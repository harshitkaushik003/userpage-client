import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResults, userSelector } from '../Redux/userReducer';
import Filters from '../components/Filters';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    const { totalPages } = useSelector(userSelector);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const inpRef = useRef(null);

    function handleSearch() {
        const searchTerm = inpRef.current.value;
        dispatch(getSearchResults(searchTerm));
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    return (
        <div className='home w-full flex mt-4 relative'>
            <div className='w-72 bg-white flex flex-col'>
                <Filters />
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
                        <input onChange={handleSearch} ref={inpRef} className="appearance-none w-4/5 h-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500" type="text" placeholder="Search by name" />
                        <button onClick={handleSearch} className='w-28 h-8 ml-4 bg-blue-400 text-white rounded-sm shadow-sm hover:bg-blue-700'>Search</button>
                    </div>
                    
                    <Outlet />
                    <div className="pagination-bar mb-10 w-full h-10 flex justify-center">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <Link to={`?page=${i+1}`}>
                            <button key={i + 1} onClick={() => handlePageChange(i + 1)} className={`pagination-button ${currentPage === i+1 ? 'bg-blue-600' : 'bg-white'} ml-20 mt-2 w-10 h-10 border-2 rounded-sm`}>
                                {i + 1}
                            </button>
                          </Link>
                            
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
