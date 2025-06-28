import React, { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react';
import  { useState } from 'react'


function ThemeToggle() {
        const[isDarkMode,setIsDarkMode] = useState(false);

        useEffect(()=>{
            const storedTheme = localStorage.getItem("theme");
            if(storedTheme === "dark"){
                setIsDarkMode(true)
                document.documentElement.classList.add("dark");
            }
            else{
                setIsDarkMode(false);
                document.documentElement.classList.remove("dark");
            }
        },[]);

        const toggleTheme = () =>{

            if(isDarkMode){

                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme","light");
                setIsDarkMode(false);
            }
            else{
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme","dark");
                setIsDarkMode(true);
            }

        };

  return (

        <button onClick={toggleTheme} className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden"> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"></Sun>:<Moon className="h-6 w-6 text-blue-900"></Moon>}</button>
  )
}

export default ThemeToggle