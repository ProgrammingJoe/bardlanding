import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SectionHeader, Text } from "../components/typography"
import { Section, TextIndent } from "../components/simple"
import PageHeader from "../components/page-header"


const AboutPage = () => {

  const getAge = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-28");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const age = getAge()
  return (
    <Layout>
      <Seo title="About" />

      <PageHeader
        header="About"
        subHeader="Learn a bit the team and the origins of Bard"
      />

      <Section>
        <SectionHeader>What is Bard?</SectionHeader>
        <Text>
          Storytelling is one of the easiest ways to connect with others. It
          brings us together through shared emotional experiences.
          Bard is a platform where storytelling and world building with others is at the heart of what we do.
          We want to create experiences for others that are somewhere less than a full cinematic experience
          but more than an instagram post. A place where creativity is expressed, but also fully experienced by others.
          And most importantly, a place for people to connect over the stories that they're sharing.
        </Text>
      </Section>
      <Section>
        <SectionHeader>About Me</SectionHeader>
        <Text>
          Hi! I'm Joe, the sole person behind Bard. I'm {age}, from BC Canada, and I have a corgi named Gimli.
          I went to school for software engineering and business in 2012. Soundtracks and original compositions
          on Youtube were a staple that got me through school but I often wondered, how much money were these channels,
          that take other peoples music and other peoples art, making? Why don't I build a platform that allows the
          creators themselves to combine their complimentary artwork with others and get paid for it?
          That's how Bard started but since then I have learned much about the creative industries and we have adapted into
          a storytelling and world building platform. I've also picked up my old creative hobbies and found new ones and for that I am grateful.
        </Text>
      </Section>
    </Layout>
  )
}

export default AboutPage
