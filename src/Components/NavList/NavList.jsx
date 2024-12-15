import { useState } from 'react'
import StyleNav from './NavList.module.css'
import {NavLink} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export const NavList = ({link, children}) => {
  const [select, setSelect] = useState('')
  return (
        <li className={StyleNav.li}>
          <NavLink to={link} className={select ? 'active' :  ''} > {children} </NavLink> 
        </li>
  )
}