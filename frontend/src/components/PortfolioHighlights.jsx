import React from 'react';
import ProjectCard from './ProjectCard';
import NetflixGPT from '../images/NetflixGPT.png'
import FoodOrder from '../images/FoodOrder.png'
import WeatherApp from '../images/WeatherApp.png'
import PastPlay from '../images/PastPlay.png'

const PortfolioHighlights = () => {

  const projects = [
      {
        imgSrc: NetflixGPT,
        name: 'Netflix-GPT',
        stacks: ['React', 'GPT API', 'TMDB API', 'Tailwind CSS', 'Redux', 'React-Router', 'Firebase'],
        projectLink: 'netflixgpt-8068c.web.app'
      },
      {
        imgSrc: FoodOrder,
        name: 'Niwala',
        stacks: ['React', 'Redux', 'API', 'Tailwind CSS'],
        projectLink: 'https://github.com/RupakBoral/Niwala'
      },
      {
        imgSrc: PastPlay,
        name: 'Past Play',
        stacks: ['Web-design', 'Development', 'React', 'Tailwind CSS'],
        projectLink: ''
      },
      {
          imgSrc: WeatherApp,
          name: 'Weather App',
          stacks: ['Development', 'API', 'HTML', 'Tailwind CSS', 'JS'],
          projectLink: 'https://github.com/RupakBoral/Weather-App'
      },
    ];

  return (
      <div className='flex flex-col space-y-10'>
          <p className='reveal-up text-4xl font-semibold text-zinc-200 md:text-left text-center'>My Portfolio Highlights</p>
          <div className='grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 gap-x-3 gap-y-5'>
            {
              projects.map((item, index) => <ProjectCard image={item.imgSrc} name={item.name} stacks={item.stacks} link={item.projectLink} key={index}/>)
            }
          </div>
      </div>
  );
}

export default PortfolioHighlights;
