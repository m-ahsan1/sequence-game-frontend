import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./style.css"
import "./cards.css"
import { Card } from "./components/card";

export default function App(){
  return (
    <div className="App">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

    </div>

  )
}
