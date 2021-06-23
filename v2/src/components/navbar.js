import React from "react";
import LoaderIcon from "../icons/LoaderIcon";

const Navbar = () => {
  const icon = (
    <div className={"w-12"}>
      <LoaderIcon isOnLoader={false}/>
    </div>
  )

  return (
    <div className={"pt-4 pl-6 pr-6"}>
      {icon}
    </div>
  )
}

export default Navbar