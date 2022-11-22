import React, {useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext'

const Navbar = () => {
    const {connectWallet, currentAccount} = useContext(TransactionContext)
  return (
    <div className='p-5  flex flex-wrap sm:justify-between justify-center items-center border-b  border-gray-200'>
        <div className="flex justify-between items-center space-x-5 w-screen ">
        <p className="text-2xl  font-bold py-1 px-2 rounded">
<<<<<<< HEAD
          Multi Player 🎮 
        </p>
        {!currentAccount ? (
 
=======
          Multi Player 🎮
        </p>
        {!currentAccount ? (

>>>>>>> 81bcc73118b02894c4ea77430083ce23a4bdbf2e
            <button type="button" onClick={() => connectWallet()}  className="text-xl  border rounded-full px-4 py-2  bg-violet-700 text-white hover:shadow-sm "> Connect Walllet</button>
        ): (
            <div className='bg-gray-100 px-4 py-3 rounded-md'>
                <p>{currentAccount.slice(0, 5)+"..."+ currentAccount.slice(-5)}</p>
            </div>
        )}
    </div>
    </div>
  )
}

export default Navbar