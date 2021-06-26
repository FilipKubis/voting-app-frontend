import React from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  path: string
  text: string
}

const Navlink = (props: IProps) => {
  return (
    <NavLink
      to={props.path}
      activeStyle={{
        backgroundColor: '#2196F3',
        borderRadius: '5px',
        color: 'white'
      }}
    >
      {props.text}
    </NavLink>
  )
}

export default Navlink
