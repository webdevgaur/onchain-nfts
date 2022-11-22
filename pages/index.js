import React, { useState } from "react";
import CharacterPanel from "../components/CharacterPanel";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <CharacterPanel />
      </div>
    </div>
  );
}
