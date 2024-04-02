import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../Redux/userReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { addUserToTeam } from '../Redux/teamReducer';

const TeamUser = () => {
    const { users } = useSelector(userSelector);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    function handleAdd(id, userId){
        dispatch(addUserToTeam({id: id, userId: userId}));
        navigate(`/`);
    }

    return (
        <div className='absolute w-9/12 h-5/6 top-2 bg-gray-800 rounded-lg shadow-lg p-8 text-white overflow-hidden'>
            <h2 className="text-2xl font-semibold mb-6">Team Users</h2>
            <div className="overflow-y-auto max-h-full">
                {users.map(user => (
                    <div key={user._id} className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-lg font-bold">{user.first_name + " " + user.last_name}</span>
                            <span className={`px-2 py-1 rounded ${user.available ? 'bg-green-500' : 'bg-red-500'}`}>
                                {user.available ? "Available" : "Not Available"}
                            </span>
                        </div>
                        <p className="text-sm">{user.domain}</p>
                            <button onClick={()=>handleAdd(id, user._id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                                Add
                            </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamUser;
