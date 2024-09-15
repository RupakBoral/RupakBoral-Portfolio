import NavItems from './NavItems';
import { useState } from 'react';

const Navbar = () => {

  const navItems = [
      {
        label: 'Home',
        link: '#home',
      },
      {
        label: 'About',
        link: '#about',
      },
      {
        label: 'Skills',
        link: '#skills',
      },
      {
        label: 'Work',
        link: '#work',
      }
  ];
  
  const [activeItem, setActiveItem] = useState('#home'); 

  return (
      <nav className='md:flex hidden gap-10 backdrop-blur-sm rounded-xl text-center p-1'>
          {
              navItems.map(({label, link}, index) => (
                <NavItems 
                  label={label}
                  link={link}
                  key={index}
                  activeItem={activeItem}      // Pass activeItem state
                  setActiveItem={setActiveItem}  // Pass the state setter function
                />
              ))
          }
      </nav>
  );
}


export default Navbar;
