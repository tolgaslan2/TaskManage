import React from 'react'

import { FaTasks, FaShareAlt, FaRegCalendar } from 'react-icons/fa';
import { BiMessageSquareDots } from 'react-icons/bi';
import { GiInfinity } from 'react-icons/gi';

import AppItem from '../AppItem';

const Apps = ({ RunApp, IsOpen }) => {

    const AppList = [
        {
            Icon: <FaTasks size={24}></FaTasks>
        },
        {
            Icon: <BiMessageSquareDots size={24}></BiMessageSquareDots>
        },
        {
            Icon: <FaShareAlt size={24}></FaShareAlt>
        },
        {
            Icon: <FaRegCalendar size={24}></FaRegCalendar>
        },
        {
            Icon: <GiInfinity size={24}></GiInfinity>
        }
    ]

    return (
        <div className={'flex gap-x-6 text-gray-400  transition-all ' + (IsOpen ? 'flex-col gap-y-6 opacity-100' : '')}>

            {AppList.map((value, key) => {
                return <AppItem key={key} onclick={RunApp}> {value.Icon} </AppItem>
            })}



        </div>
    )
}

export default Apps