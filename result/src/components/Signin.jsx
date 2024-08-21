import React, { useState, useEffect } from 'react'

function SignIn() {
    const [input, setInput] = useState({
        email: '',
        password: '',
        role: '',
    })
    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            email: input.email,
            password: input.password,
            role: input.role
        }
        console.log(data);

    }
    useEffect(() => {
        document.title = "Result | LoginIn"
    }, [])
    return (
        <>
            <div className='flex justify-center m-10'>
                <div className=' card bg-base-200 w-96 shadow-xl m-3 '>
                    <div className='card-body '>
                        <span className='text-3xl text-center text-green-500'>Sign In</span>
                        <form onSubmit={submitHandler} className='m-2'>

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">What is your email?</span>
                                </div>
                                <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs" name='email' onChange={inputHandler} />
                            </label>

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Enter  Password</span>
                                </div>
                                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" name='password' onChange={inputHandler} />
                            </label>

                            <div className='flex m-3'>
                                <label className='p-2' htmlFor="role">Student</label>
                                <input type="radio" name='role' value='student' onChange={inputHandler} />

                                <label className='p-2' htmlFor="role">Teacher</label>
                                <input type="radio" name='role' value='Teacher' onChange={inputHandler} />
                            </div>

                            <button type='submit' className="btn btn-ghost">SignIn</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn