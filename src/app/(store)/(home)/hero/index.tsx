"use client";

import CarouselContainer from "./carousel";

export const products = [
    {
        id: '1',
        image: '/honey.png',
        title: 'TIMEPIECES THAT MAKE A STATEMENT',
        subtitle: 'SHOP TO GET WHAT YOU LOVE',
        offer: 'UP TO 40% OFF',
        buttonText: 'Start Buying',
        onButtonClick: () => console.log('Timepieces - Start buying clicked!')
    },
    {
        id: '2',
        image: '/date.jpg',
        title: 'PREMIUM HEADPHONES THAT MAKE A STATEMENT',
        subtitle: 'SHOP TO GET WHAT YOU LOVE',
        offer: 'UP TO 40% OFF',
        buttonText: 'Start Buying',
        onButtonClick: () => console.log('Headphones - Start buying clicked!')
    }
];

export default function Hero() {
    return <div className="flex items-stretch gap-3 justify-between">
        <CarouselContainer
            slides={products}
            autoPlay
            interval={5000}
            showArrow={true}
            showDot={true}
            contentPosition="start"
            className="rounded-md"
        />
    </div>
}