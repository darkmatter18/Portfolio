import React from "react";
import LoaderIcon from "../icons/LoaderIcon";
import NavButton from "./navButton";

const Navbar = () => {
  const navLinks = [{name: '01. About', url: "#about"}]
  const icon = (
    <div className={"w-12 m-0 float-left"}>
      <LoaderIcon isOnLoader={false}/>
    </div>
  )

  return (
    <div className={"pt-4 pl-6 pr-6"}>
      {icon}
      <div className={"float-right"}>
        {navLinks.map((navLink, i) => {
          return (
            <NavButton key={i} url={navLink.url} name={navLink.name}/>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar