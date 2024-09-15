import React from 'react';
import ItemsList from './ItemsList';
import reactIcon from '../images/react.jpeg'
import TailwindIcon from '../images/tailwindcss.png'
import reduxIcon from '../images/redux.png'
import figmaIcon from '../images/figma.png'
import jsIcon from '../images/js.png'
import cssIcon from '../images/css.png'
import htmlIcon from '../images/html.png'
import nodejsIcon from '../images/nodejs.jpeg'
import CppIcon from '../images/cpp.png'

const Skills = () => {

    const skillItem = [
        {
            imgSrc: reactIcon,
            label: 'React',
            desc: 'JS Library'
        },
        {
            imgSrc: TailwindIcon,
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        {
            imgSrc: reduxIcon,
            label: 'Redux',
            desc: 'Design tool'
        },
        {
          imgSrc: cssIcon,
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: jsIcon,
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
            imgSrc: htmlIcon,
            label: 'HTML',
            desc: 'Building Structure'
        },
        {
          imgSrc: nodejsIcon,
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
            imgSrc: figmaIcon,
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: CppIcon,
            label: 'CPP',
            desc: 'Problem Solving'
        },
    ];

    return (
        <div id='skills' className='space-y-6'>
            <h1 className='text-4xl font-semibold text-zinc-200'>Skills</h1>
            <p className='w-1/2 text-zinc-300'>Discover the powerful tools and technologies I use to create exceptional websites and applications.</p>
            <div className='grid md:grid-cols-3 gap-4 flex-wrap'>
                {
                    skillItem.map((item, index) => <ItemsList icon={item.imgSrc} skill={item.label} desc={item.desc} key={index} />)
                }
            </div>
        </div>
    );
}

export default Skills;
