import React, { useEffect } from 'react'

function About() {
    useEffect(() => {
        document.title = "Result | About"
    }, [])
    return (
        <>
            <div className='flex justify-center m-4'>
                <p>This is a result Manager Application with eassy and useful
                    Made by <span className='text-orange-700 text-3xl'>Sudhir Yadav</span></p>
            </div>
            <a href="https://github.com/SudhirYadav5678" className='m-4'>GithHub</a>
            <a href="https://x.com/SudhirYadav5678">X</a>
        </>
    )
}

export default About