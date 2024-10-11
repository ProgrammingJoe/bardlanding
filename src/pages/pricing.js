import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { ItemHeader, ListItem, ItemSubHeader, SectionHeader, Text } from "../components/typography"
import PageHeader from "../components/page-header"
import { Section } from "../components/simple"
import axios from 'axios'

const Pricing = styled.div`
  display: flex;
  gap: 30px;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`

const Plan = styled.div`
  flex: 1;
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
  const [proCount, setProCount] = useState(8)

  useEffect(() => {
    getUsageInfo()
  }, [])

  const getUsageInfo = async () => {
    const stats = await axios.get(`https://web-production-11db1.up.railway.app/api/usage_stats/`);
    if (stats.data.pro_count > 8) {
      setProCount(stats.data.pro_count);
    }
  };

  const revenue = proCount * 5
  return (
    <Layout>
      <Seo title="Pricing" />

      <PageHeader
        header="Pricing"
        subHeader="
          Bard is a free platform with an optional subscription that offers a number of benefits
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
            <ListItem>Free updates forever</ListItem>
          </Plan>
          
          <Plan>
            <ItemHeader>Pro Plan</ItemHeader>
            <ItemSubHeader margin="0 0 28px 0">$5/Month</ItemSubHeader>

            <ListItem>All free features</ListItem>
            <ListItem>Profile flair</ListItem>
            <ListItem>More to come!</ListItem>
          </Plan>
        </Pricing>
      </Section>

      <Section>
        <SectionHeader>Keeping the place running</SectionHeader>
        <Text>
          We don't run advertisements, sell your data, or require a subscription but we do need to pay the bills.
          Here is a progress bar for the minimum amount of money we need to make each month to keep the app running.
        </Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <Text>${revenue}/month</Text>
          <Text>$300</Text>
        </div>
        <ProgressBar><div style={{ flex: revenue }}/><div style={{ flex: 300 - revenue }}/></ProgressBar>
      </Section>
    </Layout>
  )
}

export default PricingPage
