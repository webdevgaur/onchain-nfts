import React, {useContext} from 'react'
import Image from 'next/image'
import Logo from "../img/logo.svg"
import { TransactionContext } from '../context/TransactionContext'

const Login = () => {
  const {connectWallet} = useContext(TransactionContext)
  return (
    <div className='h-screen overflow-hidden'>
      <div className="login-header shadow-sm h-20 flex w-full items-center justify-center mx-auto">
        <Image src={Logo} alt="sword battle logo" width={60} height={60} />
        <h3 className="logo ">Sword Battle</h3>
      </div>
      <div className="-mt-10 main h-full w-full flex justify-evenly items-center max-w-[1300px] mx-auto borde bordr-2 spac-28">
        <div className="left  flex flex-col  justify-end">
          <div>
            <h1 className='text-5xl font-bold leading max-w-[500px]	 '>Create Your Own Unique Character and Play</h1>
          </div>
          <div>
            <button onClick={() => connectWallet()} className='bg-[#2A8AD7] text-white mt-4 cursor-pointer px-5 py-3 text-sm rounded-md'>Get Started</button>
          </div>
        </div>
        {/* right */}
        <div className="right ">
          <div className="h-[300px] w-[300px] bg-blue-400"></div>
        </div>
      </div>
    </div>
  )
}

export default Login