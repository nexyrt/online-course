import React from 'react'
import Navbar from '../components/navbar';
import Cards from '../components/Cards';

const Home = () => {
    const cards = [
        {
            title: 'JavaScript Course',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: 'https://i.imgur.com/xItw4Lj.jpg'
        },
        {
            title: 'Python Course',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: 'https://i.imgur.com/xItw4Lj.jpg'
        },
        {
            title: 'Web Programming Course',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: 'https://i.imgur.com/xItw4Lj.jpg'
        },
        {
            title: 'MySQL Course',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: 'https://i.imgur.com/xItw4Lj.jpg'
        },
        {
            title: 'React.js Course',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: 'https://i.imgur.com/xItw4Lj.jpg'
        },
        {
            title: 'Tensor Flow Course',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: 'https://i.imgur.com/xItw4Lj.jpg'
        },
        {
            title: 'TypeScript Course',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: 'https://i.imgur.com/xItw4Lj.jpg'
        },
        {
            title: 'Java Course',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: 'https://i.imgur.com/xItw4Lj.jpg'
        },
    ]
    return (
        <div>
            <Navbar />
            <Cards cardData={cards} />
        </div>
    );
}

export default Home