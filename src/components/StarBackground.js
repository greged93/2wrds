// StarsBackground.js
import React, { useEffect, useState } from 'react';
import ConnectButton from './ConnectButton';

export default function StarsBackground({ numberOfStars = 100 }) {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];

            for (let i = 0; i < numberOfStars; i++) {
                const x = Math.floor(Math.random() * 100);
                const y = Math.floor(Math.random() * 100);
                newStars.push({ id: i, x, y });
            }

            setStars(newStars);
        };

        generateStars();
    }, [numberOfStars]);

    return (
        <div className="relative w-screen h-screen bg-gray-900 flex">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: 2,
                        height: 2,
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        opacity: Math.random() * 0.8 + 0.2,
                    }}
                />
            ))}
            <div className="m-auto p-6 g:px-8">
                <ConnectButton />
            </div>
        </div>
    );
}
