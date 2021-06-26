import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import Navbar from "../components/navbar";


// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <Seo title={"Home"}/>
      <div className={"bg-deep-blue min-h-screen"}>
        <Navbar/>
      </div>
    </Layout>
  )
}

export default IndexPage
