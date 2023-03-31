// StarsBackground.js
import React, { useMemo } from 'react';
import CentralButton from './CentralButton';

export default function StarsBackground({ numberOfStars = 100, secret = 42 }) {
    const stars = useMemo(() => {
        const generateStars = () => {
            const newStars = [];

            for (let i = 0; i < numberOfStars; i++) {
                const x = Math.floor(Math.random() * 100);
                const y = Math.floor(Math.random() * 100);
                let f =
                    i !== secret
                        ? () => {
                              console.log('Not the secret');
                          }
                        : () => {
                              console.log('The secret');
                          };
                newStars.push({ id: i, x, y, f });
            }
            return newStars;
        };
        return generateStars();
    }, [numberOfStars, secret]);

    return (
        <div className="relative w-screen h-screen bg-gray-900 flex">
            {stars.map((star) => (
                <div
                    key={`star-container-${star.id}`}
                    className="absolute p-[4px] hover:cursor-pointer transform transition duration-100 ease-in-out hover:scale-150"
                    style={{
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                    }}
                    onClick={star.f}
                >
                    <div
                        key={star.id}
                        className="bg-white rounded-full"
                        style={{
                            width: 2,
                            height: 2,
                            opacity: Math.random() * 0.7 + 0.2,
                        }}
                    />
                </div>
            ))}
            <div className="m-auto p-6 g:px-8">
                <CentralButton />
            </div>
        </div>
    );
}
