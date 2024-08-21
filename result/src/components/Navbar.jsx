import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const navItems = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/addMark',
            name: 'Add MArks'
        },
        {
            path: '/signin',
            name: 'SignIn'
        },
        {
            path: '/signup',
            name: 'SignUp'
        },

    ]
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost text-xl">Result <span className='text-green-500'>Manager</span></a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <ul className='flex '>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path}><button className="btn btn-ghost">{item.name}</button></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile

                                    </a>
                                </li>
                                <li><a href='/logout'>Logout</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar