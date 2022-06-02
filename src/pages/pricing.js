import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { ItemHeader, ListItem, ItemSubHeader, SectionHeader, Text } from "../components/typography"
import { Link } from "gatsby"
import PageHeader from "../components/page-header"
import { Section } from "../components/simple"
import axios from 'axios'

const Pricing = styled.div`
  display: flex;
  gap: 30px;
  align-items: stretch;
  justify-content: center;
`

const Plan = styled.div`
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: 6px;
`

const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  display: flex;
  border-radius: 6px;
  
  > div:first-of-type {
    border-radius: 6px 0 0 6px;
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  div {
    padding: 10px;
  }
`

const PricingPage = () => {
  const [proCount, setProCount] = useState(0)

  useEffect(() => {
    getUsageInfo()
  }, [])

  const getUsageInfo = async () => {
    const stats = await axios.get(`${process.env.GATSBY_REACT_APP_API}/usage_stats/`);
    setProCount(stats.data.pro_count);
  };

  const revenue = proCount * 5
  return (
    <Layout>
      <Seo title="Pricing" />

      <PageHeader
        header="Pricing"
        subHeader="
          Join the college of Bards today! Bard is a free platform with an optional subscription. We 
          need to pay the bills in order for the college to survive, so if you can, toss a coin our way.
        "
      />

      <Section>
        <Pricing>
          <Plan>
            <ItemHeader>Free</ItemHeader>
            <ItemSubHeader margin="0 0 28px 0">$0 Forever</ItemSubHeader>

            <ListItem>Ad free timeline</ListItem>
            <ListItem>All your essential social media tools</ListItem>
            <ListItem>A chronological, unfiltered, timeline</ListItem>
            <ListItem>Collaborating features</ListItem>
            <ListItem>A feed from people you follow only</ListItem>
            <ListItem>Free updates forever</ListItem>
          </Plan>
          
          <Plan>
            <ItemHeader>College Member</ItemHeader>
            <ItemSubHeader margin="0 0 28px 0">$5/Month</ItemSubHeader>

            <ListItem>All free features</ListItem>
            <ListItem><Link to="/creators">Commission and service advertising</Link></ListItem>
            <ListItem>Profile flair</ListItem>
            <ListItem>Show up first in service listings</ListItem>
            <ListItem>More to come!</ListItem>
          </Plan>
        </Pricing>
      </Section>

      <Section>
        <SectionHeader>Keeping the place running</SectionHeader>
        <Text>
          We don't run advertisements, sell your data, or require a subscription but we do need to pay rent.
          Here is a progress bar for the minimum amount of money we need to make each month to keep the app running.
          Granted, this number will grow as Bard grows.
        </Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <Text>$0</Text>
          <Text>$300</Text>
        </div>
        <ProgressBar><div style={{ flex: revenue }}/><div style={{ flex: 300 - revenue }}/></ProgressBar>
      </Section>
    </Layout>
  )
}

export default PricingPage
