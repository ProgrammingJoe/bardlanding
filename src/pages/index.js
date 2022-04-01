import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import StoryPart from "../components/story-part"

const IndexPage = () => {
  const storySteps = [{
    description: `
      Creators are no stranger to the passing high of posting their 
      work on current social media platforms for only a brief period 
      of likes, comments, and engagement.
    `
  }, {
    description: `
      Existing social media platforms for artists do a poor job of framing 
      the work of artists as an experience rather that elevates their work.
    `
  }, {
    description: `
      All creative mediums are a way to tell stories, express 
      emotions, and make others feel and experience your work.
    `
  }, {
    title: "Creatives deserve more",
    description: `
      Bard puts artists and storytelling at the front of it’s 
      platform and creative work that tells a story connects with it’s audience.
    `
  }, {
    description: `
      Audiences that feel connected are more likely to support 
      you, engage with you, and work with you
    `
  }, {
    description: `
      Bard elevates your work to further your career and storytelling abilities
    `
  }]

  const features = [
    "No ads",
    "Chronological feeds",
    "Customization",
    "Portfolio site",
    "Seamless collaboration",
    "Forum style communities",
    "Private communities",
  ]

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Storytelling for creatives</h1>
      <h2>A social media platform for artists and creators that respects and empowers creators</h2>

      <div>Collect email</div>

      {storySteps.map((step) => (
        <StoryPart story={step}/>
      ))}

      <div>Collect email</div>

      <div>
        {features.map((feature) => (
          <h4>{ feature }</h4>
        ))}
      </div>

    </Layout>
  )
}

export default IndexPage
