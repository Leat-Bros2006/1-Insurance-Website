import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    const navStyle = ({ isActive }) =>
        `
            px-4 py-1.5 hover:bg-blue-800 hover:text-white rounded ${isActive ? "bg-blue-800 text-white" : ""}
        `

    const openNabar = () => {
        setIsActive(true)
    }

    const closeNavbar = () => {
        setIsActive(false)
    }

    return (
        <>
            {/* Navbar */}
            <nav className='px-4 md:px-30 sticky top-0 z-10 bg-white flex justify-between items-center py-3 border-b border-b-gray-300'>
                <div>
                    <img className='w-11 h-11 object-cover rounded-full' src={logo} alt="" />
                </div>
                <div className='flex gap-1 items-center'>
                    <div className='hidden md:flex gap-1'>
                        <NavLink className={navStyle} to="/">Home</NavLink>
                        <NavLink className={navStyle} to="/about">About</NavLink>
                        <NavLink className={navStyle} to="/plans">Contact</NavLink>
                        <NavLink className={navStyle} to="/servicse">Servicse</NavLink>
                        <NavLink className={navStyle} to="/contact">Contact</NavLink>
                    </div>
                    <div
                        onClick={openNabar}
                        className='block md:hidden p-2 rounded hover:bg-gray-600 hover:text-white transition cursor-pointer'>
                        <Menu className='w-6 h-6' />
                    </div>
                </div>
            </nav>

            {/* SideBar */}
            <section className={`${isActive ? "left-0" : "-left-full"} z-99 bg-slate-800 h-screen fixed top-0 w-[300px] p-6 block md:hidden transition-all duration-300`}>
                <div className='flex justify-end'>
                    <button
                        onClick={closeNavbar}
                        className='p-2 border rounded-full text-white cursor-pointer hover:bg-gray-600 transition-all'>
                        <X />
                    </button>
                </div>
                <hr className='text-gray-500 my-4' />
                <div className='flex gap-1 flex-col md:block'>
                    <NavLink className="py-2 px-4 rounded text-white hover:bg-slate-600 transition-all" to="/">Home</NavLink>
                    <NavLink className="py-2 px-4 rounded text-white hover:bg-slate-600 transition-all" to="/about">About</NavLink>
                    <NavLink className="py-2 px-4 rounded text-white hover:bg-slate-600 transition-all" to="/plans">Contact</NavLink>
                    <NavLink className="py-2 px-4 rounded text-white hover:bg-slate-600 transition-all" to="/servicse">Servicse</NavLink>
                    <NavLink className="py-2 px-4 rounded text-white hover:bg-slate-600 transition-all" to="/contact">Contact</NavLink>
                </div>
            </section>
        </>
    )
}

export default Navbar