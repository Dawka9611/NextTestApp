import { BsYoutube } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'

const NavigationBar = () => {
    return (
        <div className=' p-4 flex flex-row justify-between items-center' >
            <div className='flex items-center gap-6'>
                <HiOutlineMenu className='' size={30} />
                <div className='flex items-center gap-1'>
                    <BsYoutube className=' text-red-500' size={30} />
                    <div className='text-xl font-semibold'>Youtube</div>
                </div>
            </div>
            <div className='hidden sm:flex min-w-[300px] lg:w-[62 0px]'>
                <input placeholder='Search' className='w-full text-zinc-200 p-1 bg-zinc-800 border-[1px] border-zinc-500 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400 ' />
            </div>
            <div>User</div>
        </div>
    )
}

export default NavigationBar