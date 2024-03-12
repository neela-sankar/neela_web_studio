'use client'

import {RiInstagramFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiDribbbleFill} from 'react-icons/ri'
import Link from 'next/link'

const icons = [
    {
        path: 'https://www.instagram.com/neela_webstudio/',
        name: <RiInstagramFill />,
    },
    {
        path: 'https://www.linkedin.com/in/neelavathi-sankar/',
        name: <RiLinkedinFill />,
    },
    {
        path: 'https://github.com/neela-sankar/',
        name: <RiGithubFill />,
    },
    {
        path: 'https://www.facebook.com/neelavathi.sankar.1',
        name: <RiFacebookFill />,
    },
    {
        path: 'https://dribbble.com/neela_webstudio',
        name: <RiDribbbleFill />,
    },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index)=>{
            return (
                <Link href={icon.path} key={index}>
                    <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            )
        })}
    </div>
  )
}

export default Socials