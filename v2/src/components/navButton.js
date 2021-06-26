import React from "react";
import PropTypes from 'prop-types'
import {Link} from "gatsby";

const NavButton = ({url, name}) => {
  return (
    <Link className={"bg-transparent text-white hover:text-neon-green font-semibold text-sm py-2 px-4"} to={url}>
      {name}
    </Link>

  )
}

NavButton.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default NavButton