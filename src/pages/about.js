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
        subHeader="Learn a bit about me, what we believe in, and what we stand for"
      />

      <Section>
        <SectionHeader>What is Bard?</SectionHeader>
        <Text>
          Storytelling is one of the easiest ways to connect with others. It
          brings us together through shared emotional experiences and feelings.
          Bard is a platform where storytelling with others is at the heart of what we do.
          We want to create experiences for others that are somewhere less than a full cinematic experience
          but more than an instagram post. A place where creativity is expressed, but also fully experienced by others.
          And most importantly, a place for people to connect over the stories that they're sharing.
        </Text>
      </Section>
      <Section>
        <SectionHeader>About Me</SectionHeader>
        <Text>
          Hi! I'm Joe, the sole person behind Bard. I'm {age}, from BC Canada, and I have a corgi named Gimli.
          I went to school for software engineering and business in 2012. After 6 years of school I left with
          a passion for solving problems with software, not necessarily the software itself. Soundtracks and original compositions
          on Youtube were a staple that got me through school but I often wondered, how much money were these channels that take other peoples music
          and other peoples art making? Why don't I build a platform that allows the creators themselves to combine their
          complimentary artwork with others and get paid for it? And that's Bard.
        </Text>
      </Section>
      <Section>
        <SectionHeader>Our politics</SectionHeader>
        <Text>
          While I believe that companies virtue signalling for everything they can is problematic, I also
          believe that the beliefs behind Bard should be made clear. Bard does not stand for the discrimination of or prejudice against
          any underrepresented groups on the basis of sexuality, race, gender, age, disability, religion, ethnicity, or
          any other qualities that people can use to isolate others. I will be continuously educating myself to better
          understand how Bard can support underrepresented groups but if you ever think I can do more or I've made a mistake
          I would appreciate it if you let me know so I can work to fix the problem. If this doesn't sit well with you, you
          don't have to stay but I'd also encourage you to ask yourself why that doesn't sit well with you.
        </Text>
      </Section>
    </Layout>
  )
}

export default AboutPage
