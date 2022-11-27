import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Logo from "../img/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  return (
    <div className="p-2 flex flex-wrap sm:justify-between justify-center items-center border-b px-6  border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <div className="flex items-center cursor-pointer">
          <Image src={Logo} alt="sword battle logo" width={60} height={60} />
          <h3 className="logo ">Sword Battle</h3>
        </div>
        {!currentAccount ? (
          <button
            type="button"
            onClick={() => connectWallet()}
            className="text-xl  border rounded-full px-4 py-2  bg-violet-700 text-white hover:shadow-sm "
          >
            {" "}
            Connect Walllet
          </button>
        ) : (
          <div className="bg-gray-100 px-4 py-3 rounded-md">
            <p>
              {currentAccount.slice(0, 5) + "..." + currentAccount.slice(-5)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}; 

export default Navbar;
