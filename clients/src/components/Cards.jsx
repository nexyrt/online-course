import React from 'react'
import Card from './Card'

const Cards = ({ cardData }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center max-w-full">
            {cardData.map((card) => (
                <Card title={card.title} desc={card.desc} link={card.link} />
            ))}
        </div>
    )
}

export default Cards