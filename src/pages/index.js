import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHeader from "../components/page-header"
import { Section, TextIndent } from "../components/simple"
import { SectionHeader, ListItem, Text, SectionText } from "../components/typography"
import styled from "styled-components"
import Step1PNG from '../images/step1.png';
import Step1WEBP from '../images/step1.webp';
import Step2PNG from '../images/step2.png';
import Step2WEBP from '../images/step2.webp';
import Step3PNG from '../images/step3.png';
import Step3WEBP from '../images/step3.webp';
import Step4PNG from '../images/step4.png';
import Step4WEBP from '../images/step4.webp';
import Step5PNG from '../images/step5.png';
import Step5WEBP from '../images/step5.webp';
import Step6PNG from '../images/step6.png';
import Step6WEBP from '../images/step6.webp';
import CharraPNG from '../images/charra.png';
import CharraWEBP from '../images/charra.webp';
import CommunityPNG from '../images/community.png';
import CommunityWEBP from '../images/community.webp';
import ShowcasePNG from '../images/showcase.png';
import ShowcaseWEBP from '../images/showcase.webp';
import HeroPNG from "../images/hero.png";
import HeroWEBP from "../images/hero.webp";
import Cta from "../components/cta";
import Picture from "../components/picture";

const Testimonial = styled.div`
  img {
    height: 50px;
    margin-top: 8px;
  }
`

const Features = styled.div`
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: 6px;
  display: flex;
  align-items: stretch;
  margin-bottom: 18px;
  gap: 10px;

  > div {
    flex: 1;
  }
`

const HeroWrapper = styled.div`
  display: flex;
  gap: 40px;

  > div {
    flex: 3;
  }
  picture {
    width: 100%;
    height: auto;
    flex: 2;
    align-self: center;
    margin-right: -2rem;
  }

  @media (max-width: 1000px) {
    picture {
      margin-right: 0px;
    }
  }

  @media (max-width: 800px) {
    picture {
      display: none;
    }
  }
`

const Step = styled.div`
  position: relative;
  margin-bottom: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;

  > div {
    position: relative;
    max-width: 50%;
  }

  picture {
    max-width: 50%;
  }

  p {
    color: ${({ theme }) => theme.colors.subtext};
  }

  @media (max-width: 1160px) {
    picture {
      margin-right: 0px !important;
      margin-left: 0px !important;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 8rem;

    > div {
      max-width: 90%;
    }
    picture {
      max-width: 60%;
    }
  }

  @media (max-width: 600px) {
    picture {
      max-width: 90%;
    }
  }
`
const Step1 = styled(Step)`
  margin: 5rem 0px 15rem 0px;
  picture { margin-right: -4rem; }
`
const Step2 = styled(Step)`
  picture { margin-left: -4rem; }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`
const Step3 = styled(Step)`
  picture { margin-right: -4rem; }
`
const Step4 = styled(Step)`
  picture { margin-left: -4rem; }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`
const Step5 = styled(Step)`
  picture { margin-right: -4rem; }
`
const Step6 = styled(Step)`
  margin: 15rem 0px 5rem 0px; 
  picture { margin-left: -4rem; }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`

const Showcase = styled.div`
  margin: 60px 0;
`

const IndexPage = () => {
  const features = [
    "No ads",
    "No 'algorithm'",
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
      <Seo
        title="Bard | Community based storytelling social media platform"
        description="
          A storytelling platform for visual, audio, and written
          creators. Seamlessly bring your stories together with the help of others!
        "
      />

      <HeroWrapper>
        <PageHeader
          header="Creating stories together"
          subHeader="
            A community based storytelling platform for visual, audio, and written creators. Seamlessly
            bring your stories together with the help of others!
          "
        />
        <Picture png={HeroPNG} webp={HeroWEBP} alt="Image of collaboration"/>
      </HeroWrapper>

      <Cta
        header="Become a Bard!"
        subHeader="Sign up for the release announcement"
      />

      <Section>
        <TextIndent>
          <SectionText>
            Existing social media platforms are poor at fostering
            communities and are sometimes outright exhausting for creators
          </SectionText>
        </TextIndent>
      </Section>

      <Step1>
        <div>
          <SectionHeader>It’s time for a change</SectionHeader>
          <Text>
            You spend 12 hours on a painting, post it, half your followers see
            it, you get some likes, comments, and a bit of dopamine
          </Text>
        </div>
        <Picture png={Step1PNG} webp={Step1WEBP} alt="An image of a social media feed and like buttons"/>
      </Step1>

      <Step2>
        <Picture png={Step2PNG} webp={Step2WEBP} alt="An image of a story"/>
        <div>
          <SectionHeader>Let's try something new together</SectionHeader>
          <Text>
            We believe that creating art is all about connecting
            with others and what better way to do that than storytelling
          </Text>
        </div>
      </Step2>

      <Step3>
        <div>
          <SectionHeader>Post your work</SectionHeader>
          <Text>
            We support visual work, music, voice lines, songs, poems, stories, and more!
          </Text>
        </div>
        <Picture png={Step3PNG} webp={Step3WEBP} alt="A painting"/>
      </Step3>

      <Step4>
        <Picture png={Step4PNG} webp={Step4WEBP} alt="A painting with music being added to it"/>
        <div>
          <SectionHeader>Watch others collaborate with you</SectionHeader>
          <Text>
            Anyone can seamlessly pair their work with yours, on the fly, an unlimited number
            of times. Usually collaboration requires a lot of planning, but not here.
          </Text>
        </div>
      </Step4>

      <Step5>
        <div>
          <SectionHeader>Experiment with different mediums</SectionHeader>
          <Text>
            Storytelling is done through all sorts of mediums. Sing a song, let
            music tell your tale, or bring the visuals together with a painting
          </Text>
        </div>
        <Picture png={Step5PNG} webp={Step5WEBP} alt="A collaboration with writing being added to it"/>
      </Step5>

      <Step6>
        <Picture png={Step6PNG} webp={Step6WEBP} alt="A complete collaboration of art"/>
        <div>
          <SectionHeader>Rejoice in the experiences you create</SectionHeader>
          <Text>
            It creates an emotional experience that connects with you, your peers, and others
          </Text>
        </div>
      </Step6>

      <Section>
        <SectionText>
          Like Bard's in a tavern, we encourage open collaboration and offer a
          warm, cozy place to jam with other creators and meet new friends online. Tell
          the stories that are currently just in your imagination and we'll work on sharing
          your work with as many people as possible!
        </SectionText>
      </Section>

      <Showcase>
        <Picture png={ShowcasePNG} webp={ShowcaseWEBP} alt="A showcase of collaborations"/>
      </Showcase>

      <Cta
        header="Sign up for updates"
        subHeader="We'll let you know once the doors are open"
      />

      <Section>
        <TextIndent>
          <SectionHeader>Not convinced it's for you? Hear what our users have to say</SectionHeader>
          <Text>
            Collaborating with complete strangers is always an act of trust, and this
            platform gave me the confidence to share my work freely without fear of losing
            attribution. And then when I got to read the delighted comments by artists
            for whom sharing work was usually a one-way street, it brought me so much joy!
          </Text>
          <Testimonial>
            <Picture png={CharraPNG} webp={CharraWEBP} alt="Charra's profile picture"/>
          </Testimonial>
        </TextIndent>
      </Section>

      <Section>
        <SectionText>
          To tie it altogether, we also offer a set of user moderated forum style
          communities. Start or join a group and build some real connections
          with people on the internet.
        </SectionText>
      </Section>

      <Showcase>
        <Picture png={CommunityPNG} webp={CommunityWEBP} alt="A showcase of art on Bard"/>
      </Showcase>

      <Cta
        header="Find your community"
        subHeader="Sign up to get notified of the release"
      />

      <Section>
        <SectionText>
          And if you need some final convincing, here's a list of everything we offer
        </SectionText>
      </Section>

      <Section>
        <TextIndent>
          <SectionHeader>Tavern services</SectionHeader>
          <Text>Services we currently offer</Text>
        </TextIndent>
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
        <TextIndent>
          <Text>And some other things on our mind</Text>
        </TextIndent>
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
      </Section>

      <Cta
        header="Sign me up!"
        subHeader="We'll let you know when it's open"
      />
    </Layout>
  )
}

export default IndexPage
