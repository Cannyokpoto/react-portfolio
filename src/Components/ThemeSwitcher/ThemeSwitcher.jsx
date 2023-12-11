import React from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';
import ThemeList from '../Data/ThemeList';


const ThemeSwitcherStyles = styled.div`
    label{
        --gap: 7px;
        --size: 18px;
        --myAfter: 23px;

        height: 30px;
        width: 65px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: relative;
        cursor: pointer;
        padding: 2px;
        background-color: #cfc8f4;
        border-radius: 50px;
        z-index: 1;

        .icon{
            font-size: var(--size);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: var(--white);
        }
    }

    input{
        width: 0;
        height: 0;
        display: none;
        visibility: hidden;
    }

    
    label::after{
        height: var(--myAfter);
        width: var(--myAfter);
        position: absolute;
        top: 50%;
        left: var(--gap);
        content: "";
        background-color: var(--mediumSlateBlue);
        border-radius: 50px;
        z-index: -1;
        transform: translateY(-50%);
        transition: 0.5s ease left;
    }


    input:checked + label::after{
        left: calc(100% - var(--myAfter) - var(--gap));
    }

`


function ThemeSwitcher() {

    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherStyles>
      <input type="checkbox" id="switcher" 
        onChange={toggleTheme}
        checked={theme === ThemeList.dark}
      />
      <label htmlFor='switcher'>
            <div className='icon'>
                <MdOutlineWbSunny />
            </div>
            <div className='icon'>
                <IoMoonOutline />
            </div>
        </label>
    </ThemeSwitcherStyles>
  )
}

const SecondThemeSwitcherStyles = styled.div`

    label{
        --gap: 5px;
        --size: 18px;
        --myAfter: 23px;

        height: 30px;
        width: 65px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: relative;
        cursor: pointer;
        padding: 2px;
        background-color: #cfc8f4;
        border-radius: 50px;
        z-index: 1;

        .my-icon{
            font-size: var(--size);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: var(--white);
        }
    }

    input{
        width: 0;
        height: 0;
        display: none;
        visibility: hidden;
    }

    
    label::after{
        height: var(--myAfter);
        width: var(--myAfter);
        position: absolute;
        top: 50%;
        left: var(--gap);
        content: "";
        background-color: var(--mediumSlateBlue);
        border-radius: 50px;
        z-index: -1;
        transform: translateY(-50%);
        transition: 0.5s ease left;
    }


    input:checked + label::after{
        left: calc(100% - var(--myAfter) - var(--gap));
    }

`

function ThemeSwitcher2() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <SecondThemeSwitcherStyles>
        <input type="checkbox" id="my-switcher" 
            onChange={toggleTheme}
            checked={theme === ThemeList.dark}
        />
        <label htmlFor='my-switcher'>
              <div className='my-icon'>
                  <MdOutlineWbSunny />
              </div>
              <div className='my-icon'>
                  <IoMoonOutline />
              </div>
        </label>
      </SecondThemeSwitcherStyles>
    )
  }

export { ThemeSwitcher, ThemeSwitcher2};
