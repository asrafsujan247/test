import React from 'react'

const Subscribe: React.FC = () => {
  return (
    <div className="py-10 pe-10 relative">
        <img src="img/subscribe-year.png" alt="image" className='absolute top-5 end-5 hidden xl:block' />
        <span className="text-white text-xs font-bold">Subscribe Now </span>
        <h2 className="text-white max-w-[15ch] mt-3">Let's get started with us.</h2>
        <form action='' className="relative w-full xl:w-10/12 border border-gray-5 rounded-lg mt-8">
            <input type="email" className="w-full p-4 !bg-transparent rounded-lg" placeholder="Email address "></input>
            <button type='submit' className='city-btn text-white !rounded-l-none hover:bg-white hover:text-brand absolute top-[1px] end-[0px]'>
                <span className='hidden sm:block'>Check properties</span>
                <span className='sm:hidden'>Check</span>
            </button>
        </form>
    </div>
  )
}

export default Subscribe