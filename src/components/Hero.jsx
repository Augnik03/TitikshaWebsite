import React from 'react';

export default function Hero() {
    return (
        <>
            <div
                className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('src/assets/main.jpeg')"
                }}>
                <h1 className='font-bold text-5xl text-white text-center pt-32'>The Titiksha Shushvir Welfare Society</h1>
            </div>
        </>
    );
}
