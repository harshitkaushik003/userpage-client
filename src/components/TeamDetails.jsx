import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom'
import { teamSelector } from '../Redux/teamReducer';

const TeamDetails = () => {
  const {id} = useParams();

  const {teams} = useSelector(teamSelector);
  console.log(teams);
  const team = teams.filter(item=>item._id === id)[0];
  
  return (
    <>
    <div className='relative w-full h-full overflow-scroll flex flex-col pl-40 pt-20'>
      <Link to={`add-user`}>
        <button className='absolute right-10 top-10 w-32 h-10 bg-blue-400 text-white hover:bg-blue-600 rounded-md shadow-md'>Add Users</button>
      </Link>
      <div className="mt-4">
          <span className='text-lg font-bold'>Name:</span>
          <span className='ml-2 text-lg'>{team.name}</span>
      </div>
      <div className="mt-4">
          <span className='text-lg font-bold'>Users:</span>
          <ul className="list-disc ml-6">
              {team.users.map(user => (
                  <li className="mt-2">{user.first_name + " " + user.last_name}</li>
              ))}
          </ul>
      </div>
      <Outlet/>
    </div>
    </>
    
  )
}

export default TeamDetails
