import React, { useEffect } from 'react'
import Footer from './Footer'

function Home() {
    useEffect(() => {
        document.title = "Result | Home"
    }, [])
    const card = [
        {
            name: 'excel',
            title: 'Add with Excel Sheet',
            desc: 'You can add your marks with excel sheets '
        },
        {
            name: 'excel',
            title: 'Add with Excel Sheet',
            desc: 'You can add your marks with excel sheets '
        }
    ]
    return (
        <>
            <div className='text-center w-full h-full'>
                <div className='flex flex-col gap-5 my-10'>
                    <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Result Manager</span>
                    <h1 className='text-5xl font-bold'>Add all your result <br /> Easily <span className='text-[#6A38C2]'>Share</span></h1>
                    <p>Here you add all your result with easy and share options</p>
                </div>

                <div className='flex justify-center'>
                    {
                        card.map((item) => (
                            <div className="card bg-base-100 w-96 shadow-xl m-3">
                                <div key={item.name} className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Add Now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home