/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Loader from "./loader";


const Layout = ({ children, location }) => {
  const isHome = location.pathname === "/"
  const [isLoading, setIsLoading] = React.useState(isHome);
  return (
    <>
      {(isLoading && isHome) ? (
        <Loader finishLoading={()=>setIsLoading(false)}/>
      ): (
        <div>
          {children}
        </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
