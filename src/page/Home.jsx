import Navbar from '../components/Navbar'
import Hero from '../assets/hero.png'
import aboutUs from '../assets/aboutUs.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import advantages from '../assets/advantages.png'

import { BrainCog, Calendar, CircleArrowOutUpRight, GamepadDirectional, Globe, NotebookPen, ShieldPlus } from 'lucide-react'

const Home = () => {

    // state
    const state = [
        {
            num: "34K+",
            text: "Success Stories"
        },
        {
            num: "210K+",
            text: "Professional Team"
        },
        {
            num: "54K+",
            text: "Satisfied Clients"
        },
        {
            num: "35K+",
            text: "Partners Circle"
        },
    ]

    // Range of Services
    const range = [
        {
            icon: <ShieldPlus />,
            title: "Life Insuranc",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci, ipsa possimus fuga ut perspiciatis officia vero veniam reiciendis obcaecati molestiae ex deleniti quas repellendus odit facilis ipsam et nostrum"
        },
        {
            icon: <GamepadDirectional />,
            title: "Health Insurance",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci, ipsa possimus fuga ut perspiciatis officia vero veniam reiciendis obcaecati molestiae ex deleniti quas repellendus odit facilis ipsam et nostrum"
        },
        {
            icon: <ShieldPlus />,
            title: "Auto Insurance",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci, ipsa possimus fuga ut perspiciatis officia vero veniam reiciendis obcaecati molestiae ex deleniti quas repellendus odit facilis ipsam et nostrum"
        },
        {
            icon: <BrainCog />,
            title: "Home Insurance",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci, ipsa possimus fuga ut perspiciatis officia vero veniam reiciendis obcaecati molestiae ex deleniti quas repellendus odit facilis ipsam et nostrum"
        },
    ]

    // Advantages
    const avtgs = [
        {
            icon: <NotebookPen />,
            title: "Experience and Expertise",
            des: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero pariatur placeat aspernatur, quis impedit at necessitatibus facere illum. Incidunt?"
        },
        {
            icon: <Globe />,
            title: "Comprehensive Coverage",
            des: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero pariatur placeat aspernatur, quis impedit at necessitatibus facere illum. Incidunt?"
        },
        {
            icon: <Calendar />,
            title: "Customer-Centric Approach",
            des: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero pariatur placeat aspernatur, quis impedit at necessitatibus facere illum. Incidunt?"
        }
    ]

    // Insurance Plans
    const inSurancePlans = [
        {
            price: 9883,
            data: "month",
            title: "Basic Plan",
            des: "reprehenderit nam labore at nobis similique alias, laboriosam iusto dolorem!",
            listTitle: "Lorem, ipsum.",
            list: "Lorem, ipsum dolor.",
            btn: "btn-black"
        },
        {
            price: 23,
            data: "day",
            title: "Advance Plan",
            des: "reprehenderit nam labore at nobis similique alias, laboriosam iusto dolorem!",
            listTitle: "Lorem, ipsum.",
            list: "Lorem, ipsum dolor.",
            btn: "btn-white"
        },
        {
            price: 876,
            data: "year",
            title: "Professional Plan",
            des: "reprehenderit nam labore at nobis similique alias, laboriosam iusto dolorem!",
            listTitle: "Lorem, ipsum.",
            list: "Lorem, ipsum dolor.",
            btn: "btn-black"
        },
    ]

    return (
        <div>
            <Navbar />

            {/* --- Hero --- */}
            <section className="bg-white py-16 px-4 md:px-30">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                    {/* Left side: Content */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                            Insurance Solutions <br />
                            <span className="text-blue-700">by Lumintu</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg">
                            Protect your future with our trusted insurance services.
                            We provide comprehensive coverage solutions for you and your family.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">
                                Get Started
                            </button>
                            <button className="border border-slate-300 px-6 py-2 rounded-lg font-semibold hover:bg-slate-50 transition">
                                Get a Quote
                            </button>
                        </div>
                    </div>

                    {/* Right side: Image / Visual */}
                    <div className="flex-1 w-full">
                        <div className="relative bg-blue-50 rounded-3xl p-8 flex justify-center">
                            {/* Replace this with your actual image */}
                            <div className="w-full h-80 bg-blue-200 rounded-2xl flex items-center justify-center text-blue-800 font-bold">
                                <img className="w-full h-full object-cover rounded" src={Hero} alt="" />
                            </div>
                            {/* Small badge for Social Proof */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                                <p className="text-sm font-bold">15% Discount</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- State/Counter --- */}
            <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 px-4 md:px-30 mt-10 bg-blue-900 gap-15 text-center text-gray-200'>
                {state.map((item, index) => {
                    return (
                        <div key={index} className=''>
                            <h3 className='text-4xl font-bold mb-2'>{item.num}</h3>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </section>

            {/* --- About-us --- */}
            <section className='grid lg:grid-cols-2 gap-10  px-4 md:px-30 my-20'>
                <div>
                    <img className='w-full h-[300px] object-cover rounded' src={aboutUs} alt="" />
                </div>
                <div>
                    <h5>About us</h5>
                    <h3 className='text-[30px] font-bold  leading-8.5'>Innovating Insurance <br /> Solutions</h3>
                    <h5 className='mt-5 font-bold text-[20px]'>Our Vision</h5>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste commodi numquam repudiandae quidem perspiciatis dignissimos rem in corporis culpa.</p>
                    <div className='mt-3'>
                        <button className='px-5 py-2 rounded-full bg-black hover:bg-gray-900 cursor-pointer text-white'>Learn More</button>

                    </div>
                </div>
            </section>

            {/* --- Logo --- */}
            <section className='grid md:grid-cols-3 lg:grid-cols-5 bg-gray-100 px-4 md:px-30 gap-15 py-20'>
                <img className='w-full h-[200px] object-contain' src={logo1} alt="" />
                <img className='w-full h-[200px] object-contain' src={logo3} alt="" />
                <img className='w-full h-[200px] object-contain' src={logo2} alt="" />
                <img className='w-full h-[200px] object-contain' src={logo4} alt="" />
                <img className='w-full h-[200px] object-contain' src={logo5} alt="" />
            </section>

            {/* --- Range Services --- */}
            <section className='px-4 md:px-30 gap-15 py-20'>
                <section className='flex justify-between'>
                    <h3 className='text-4xl font-bold'>Our Range of Services</h3>
                    <a className='text-green-600' href="">Learn More</a>
                </section>

                <section className='grid md:grid-cols-2 gap-4 mt-10'>
                    {
                        range.map((item, index) => {
                            return (
                                <div key={index} className='flex bg-gray-200 rounded p-4 gap-4'>
                                    <div className='p-2.5 rounded flex justify-center items-center w-10 h-10 bg-slate-900 text-white'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h5 className='font-bold text-2xl'>{item.title}</h5>
                                        <p>{item.des}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </section>

            {/* --- Why Lumintu ---- */}
            <section className='grid md:grid-cols-2 px-4 md:px-30 py-20 gap-15 bg-blue-950'>
                <div>
                    <h3 className='font-bold text-white text-4xl'>
                        Why Lumintu Stands <br />
                        Out in the Insurance <br />
                        Industry
                    </h3>
                    {
                        avtgs.map((avt, index) => {
                            return (
                                <div key={index}>
                                    <div className='mt-5 flex gap-2'>
                                        <div className=' p-2.5 rounded flex justify-center items-center w-10 h-10 bg-black text-white'>
                                            {avt.icon}
                                        </div>
                                        <div>
                                            <h5 className='text-white text-xl font-bold'>{avt.title}</h5>
                                            <p className='text-gray-300'>{avt.des}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <img className='h-[500px] object-cover rounded w-full' src={advantages} alt="" />
                </div>
            </section>

            {/* --- Insurance Plans --- */}
            <section className='px-4 md:px-30 py-20 bg-gray-100'>
                <div className='flex items-end justify-between'>
                    <h3 className='text-4xl font-bold'>Lumintu's Insurance <br /> Plane</h3>
                    <a className='text-blue-600 underline' href="">Learn More</a>
                </div>
                {/* main-box */}
                <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3 mt-4'>
                    {/* box */}
                    {
                        inSurancePlans.map((item, index) => (

                            <div className='p-8 rounded bg-gray-200'>
                                <div>
                                    <p className=''><span className='font-bold text-[20px]'>${item.price}</span> <span>{item.data}</span></p>
                                    <h5 className='mt-3 font-bold text-[30px]'>{item.title}</h5>
                                    <p>{item.des}</p>
                                </div>
                                <hr className='mt-6 mb-3 border-gray-400' />
                                <div>
                                    <h5 className='font-medium'>{item.listTitle}</h5>
                                    <ul className='list-disc pl-8'>
                                        <li>{item.list}</li>
                                        <li>{item.list}</li>
                                        <li>{item.list}</li>
                                        <li>{item.list}</li>
                                    </ul>
                                </div>
                                <div className='mt-2'>
                                    <h5 className='font-medium'>Lorem, ipsum.</h5>
                                    <ul className='list-disc pl-8'>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                    </ul>
                                </div>
                                <div className='mt-5'>
                                    <button className={item.btn}>Subscaib</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Home