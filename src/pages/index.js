import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHeader from "../components/page-header"
import { Section } from "../components/simple"
import { SectionHeader, ListItem, Text } from "../components/typography"
import styled from "styled-components"
import Step1Image from '../images/step1.png';
import Step2Image from '../images/step2.png';
import Step3Image from '../images/step3.png';
import Step4Image from '../images/step4.png';
import ShowcaseImage from '../images/showcase.png';
import CTA from "../components/cta";

const FeatureWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const Features = styled.div`
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: 6px;
  display: flex;
  align-items: stretch;

  > div {
    flex: 1;
  }
`

const Step = styled.div`
  position: relative;
  margin: 25rem 0;

  > div {
    position: relative;
    max-width: 50%;
  }

  img {
    position: absolute;
  }
`
const Step1 = styled(Step)`
  margin: 5rem 0 25rem 0;

  img {
    top: 3rem;
    right: -6rem;
    max-width: 40%;
  }

  @media (max-width: 1200px) {
    img { right: 0rem; }
  }
`
const Step2 = styled(Step)`
  > div {
    left: 60%;
  }

  img {
    top: -3rem;
    left: -6rem;
    max-width: 50%;
  }

  @media (max-width: 1200px) {
    img { left: 0rem; }
  }
`
const Step3 = styled(Step)`
  img {
    top: 3rem;
    right: -6rem;
    max-width: 50%;
  }

  @media (max-width: 1200px) {
    img { right: 0rem; }
  }
`
const Step4 = styled(Step)`
  > div {
    left: 60%;
  }

  img {
    top: -3rem;
    left: -6rem;
    max-width: 40%;
  }

  @media (max-width: 1200px) {
    img { left: 0rem; }
  }
`
const Step5 = styled(Step)`
  margin: 25rem 0 5rem 0;
`
const Showcase = styled.div`
  margin: 60px 0;
`

const IndexPage = () => {
  const features = [
    "No ads",
    "Chronological feeds",
    "Customization",
    "Portfolio site",
    "Seamless collaboration",
    "Forum style communities",
    "Private communities",
    "Custom themes",
    "Multi media post types",
    "Commission advertising",
    "Easy upload"
  ]

  const future = [
    "Collections of art",
    "Events",
    "D&D Campaigns",
    "DTIYS events",
    "Tips",
    "Gifting subscriptions"
  ]

  return (
    <Layout>
      <Seo title="Home" />

      <PageHeader
        header="Creating stories together"
        subHeader="
          A storytelling platform for visual, audio, and written creators. Seamlessly bring your stories together with
          the help of others!
        "
      />

      <CTA
        header="Become a Bard"
        subHeader="Start your musical, poetic, or visual storytelling journey today"
      />

      <Step1>
        <div>
          <SectionHeader>At a glance it may seem like another instagram for artists</SectionHeader>
          <Text>
            You start by posting your artwork, music, voice lines, stories, or poems.
            People like them, comment on them, you feel good.
          </Text>
        </div>
        <img src={Step1Image} alt="A painting"/>
      </Step1>

      <Step2>
        <img src={Step2Image} alt="A painting"/>
        <div>
          <SectionHeader>But we've added something special</SectionHeader>
          <Text>
            We believe that creating art is all about connecting with others and what better way to do that
            than storytelling.
          </Text>
        </div>
      </Step2>

      <Step3>
        <div>
          <SectionHeader>Seamlessly collaborate with others</SectionHeader>
          <Text>
            Most of us are not masters of every medium of artwork but if we work together 
            we can deliver more vibrant experiences to followers.
          </Text>
        </div>
        <img src={Step3Image} alt="A painting"/>
      </Step3>


      <Step4>
        <img src={Step4Image} alt="A painting"/>
        <div>
          <SectionHeader>Bring your stories to life</SectionHeader>
          <Text>
            Collaborating with others usually requires plenty of planning and overhead 
            but on Bard, you can add your complimentary work to any post at any time
          </Text>
        </div>
      </Step4>

      <Step5>
        <SectionHeader>Storytelling is the future</SectionHeader>
        <Text>
          Like Bard's in a tavern, we encourage open collaboration and offer a warm, cozy place to 
          jam with other creators and meet new friends online. Tell the stories that are currently 
          just in your imagination and we'll work on sharing your work with as many people as possible!
        </Text>
      </Step5>

      <Showcase>
        <img src={ShowcaseImage} alt="A showcase"/>
      </Showcase>

      <CTA
        header="Find your community"
        subHeader="Join a wide array of user lead communities"
      />

      <Section>
        <FeatureWrapper>
          <SectionHeader>Tavern services</SectionHeader>
          <Text>Not sold yet? Here's a list of all the services we offer</Text>
          <Features>
            <div>
              {features.slice(0, Math.ceil(features.length/2)).map((feature) => (
                <ListItem>{ feature }</ListItem>
              ))}
            </div>
            <div>
              {features.slice(Math.ceil(features.length/2), features.length).map((feature) => (
                <ListItem>{ feature }</ListItem>
              ))}
            </div>
          </Features>
          <Text>And some other things on our mind</Text>
          <Features>
            <div>
              {future.slice(0, Math.ceil(future.length/2)).map((idea) => (
                <ListItem>{ idea }</ListItem>
              ))}
            </div>
            <div>
              {future.slice(Math.ceil(future.length/2), future.length).map((idea) => (
                <ListItem>{ idea }</ListItem>
              ))}
            </div>
          </Features>
        </FeatureWrapper>
      </Section>
    </Layout>
  )
}

export default IndexPage
