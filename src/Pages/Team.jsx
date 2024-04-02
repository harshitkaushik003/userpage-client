import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTeam, getInitialTeam } from '../Redux/teamReducer'
import { Outlet } from 'react-router-dom';

const Team = () => {
    
  return (
    <div className='relative w-full h-full flex flex-col'>
        <Outlet/>
    </div>
  )
}

export default Team
