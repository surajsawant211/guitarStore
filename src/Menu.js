import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import Menuapi from './components/Menuapi'
import MenuItems from './components/MenuItems'

const Menu = () => {

    const [items,setItems] = useState(Menuapi)

    const filterItem=(categItem)=>{
        const updatedItems = Menuapi.filter((curElem) =>{
            return curElem.category === categItem
        })
        setItems(updatedItems)

    }

    return (
        <>
            <div className='title'>
            <h1><span>G</span>uitar<span className='span2'> A</span>dda</h1></div>
            <hr />
            <div className='menu_style'>
                
                    <NavLink exact activeClassName='active_class' to="/"><button className='btn' onClick={()=>filterItem('/')}>About</button> </NavLink>
                
                
                    <NavLink exact activeClassName='active_class' to="/acoustic_guitar"><button className='btn' onClick={() => filterItem('Acoustic')}>Acoustic Guitar</button></NavLink>
                
                
                    <NavLink exact activeClassName='active_class' to="/semi_acoustic"><button className='btn' onClick={() => filterItem('Semi Acoustic')}>Semi Acoustic </button></NavLink>
               
                
                    <NavLink exact activeClassName='active_class' to="/electric_guitar"><button className='btn' onClick={() => filterItem('Electric')}>Electric Guitar</button></NavLink>
                
                
                    <NavLink exact activeClassName='active_class' to="/all"><button className='btn' onClick={() => setItems(Menuapi)}>All</button></NavLink>
                
            </div>
            <MenuItems  items={items} />
        </>
        
        
    )
        }

export default Menu
