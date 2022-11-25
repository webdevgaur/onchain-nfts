import React, { useState, useContext } from "react";
import CharacterPanel from "../components/CharacterPanel";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import { TransactionContext } from "../context/TransactionContext";

export default function Home() {
  const { currentAccount } = useContext(TransactionContext);

  if (!currentAccount) return <Login />;
  return (
    <div className="">
      <div className="">
        <Navbar />
        <CharacterPanel />
      </div>
    </div>
  );
}
