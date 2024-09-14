import React from 'react';

const NavItems = ({label, link, activeItem, setActiveItem}) => {
    
    return (
        <a 
            href={link} 
            className={`font-medium text-lg cursor-pointer p-2 rounded-lg transition-all duration-300 ease-in-out ${(activeItem === link) ? 'bg-white text-zinc-700' : 'bg-transparent text-zinc-200'}`}
            onClick={() => setActiveItem(link)}
        >
            {label}
        </a>
    );
}

export default NavItems;
