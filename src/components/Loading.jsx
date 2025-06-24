import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Loading = () => {
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center bg-white">
            <div className="animate-bounce">
                <img
                title='Loading Logo'
                    src="https://res.cloudinary.com/mrumairkhan74/image/upload/v1750769146/A_Plus_Logo_wnc4rr.png"
                    className="w-40 h-auto drop-shadow-xl drop-shadow-red-300"
                    alt="A+ Marketing Loader"
                />
                <h5 className='text-center text-xl text-red-500'>
                    <Typewriter
                        words={['Loading...']}
                        loop={true}
                        cursor
                        cursorStyle="."
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={1000}
                    />
                </h5>
            </div>
        </div>
    </>
  )
}

export default Loading
