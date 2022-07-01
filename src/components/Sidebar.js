import React, { useState } from 'react'
import Apps from '../components/Sidebar/Apps';
import Logo from '../components/Sidebar/Logo';

import { FcSettings } from 'react-icons/fc';
const Sidebar = () => {

    const [IsOpen, setIsOpen] = useState(false);

    const RunApp = () => {
        setIsOpen(!IsOpen);
    }


    return (
        <div className={'flex flex-col py-4 h-screen  drop-shadow-sm bg-white justify-between items-center  transition-all ' + (IsOpen ? 'w-28' : 'w-screen')} >
            <Logo />
            <Apps RunApp={RunApp} IsOpen={IsOpen} />
            <div className='flex flex-col items-center content-center justify-center gap-3'>
                <img src='/profile.jpg' className='w-12 h-12 rounded-lg' />
                <FcSettings size={24}></FcSettings>
            </div>
        </div>
    )
}

export default Sidebar