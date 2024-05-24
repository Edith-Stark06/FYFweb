"use client"
import Image from 'next/image';
import React from 'react'
import logo3 from "../../../public/logo3.jpg"
import Button from '../Button/Button';
import styled from 'styled-components';

function Header() {
  return( 
  
    <div className='w-full h-full bg-cover bg-banner-bg'>
    <HeaderStyled>
    <nav>
        <div className="logo">
           <Image src={logo3} alt="logo" width={35}/>
           <h1 className='text-2xl uppercase font-bold'>FYF</h1  > 
        </div>
        <div className='max-w-sceen-2xl h-full mx-auto px-4 flex items-center justify-between'>
        <ul className=" nav-items flex item-center gap-6 uppercase text-sm font-semibold">
            <li className='hover:text-hoverColor cursor-pointer duration-300'>
                <a href="#">Home</a>
            </li >
            <li className='hover:text-hoverColor cursor-pointer duration-300'>
                <a href="#">Team</a>
            </li>
            <li className='hover:text-hoverColor cursor-pointer duration-300'>
                <a href="#">profile</a>
            </li>
            <li className='hover:text-hoverColor cursor-pointer duration-300'>
                <a href="#">About</a>
            </li>
            
            
        </ul>
        </div>
        <div><Button /></div>
    </nav>
  </HeaderStyled>
  </div>
);
}
const HeaderStyled = styled.header`
nav{
    padding:0 4rem;
    min-height: 10vh;
    border-bottom: 1.5px solid var(--color-border);
    display:flex;
    justify-content:space-between;
    align-items:center; 
    .logo{
        display:flex;
        align-items:center;
        gap:1rem;
        cursor:pointer;
    } 
    .nav-items{
        display:flex;
        align-item:center;
        gap:2rem;
        li{
            transition: all 0.2s ease-in-out;
            &:hover{
                color:Black;
                transform:scale(1.1);
            }
        }

    }
    }
}
`;

export default Header