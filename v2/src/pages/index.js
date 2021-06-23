import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";


// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <Seo title={"Home"}/>
      <div className={"bg-gradient-to-br from-green-400 to-pink-500 min-h-screen"}>
        Hello
      </div>
    </Layout>
  )
}

export default IndexPage
