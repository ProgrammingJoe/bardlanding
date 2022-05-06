import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { ItemHeader, ListItem, ItemSubHeader } from "../components/typography"

const Pricing = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: stretch;
`

const Plan = styled.div`
  border-radius: 8px;
  padding: 30px;
`

const PricingPage = () => {

  return (
    <Layout>
      <Seo title="Pricing" />

      <Pricing>
        <Plan>
          <ItemHeader>Free</ItemHeader>
          <ItemSubHeader>$0 Forever</ItemSubHeader>

          <ListItem>Ad free timeline</ListItem>
          <ListItem>All your essential social media tools</ListItem>
          <ListItem>A chronological, unfiltered, timeline</ListItem>
          <ListItem>Collaborating features</ListItem>
          <ListItem>A feed from people you follow only</ListItem>
          <ListItem>Free updates forever</ListItem>
        </Plan>
        
        <Plan>
          <ItemHeader>College Member</ItemHeader>
          <ItemSubHeader>$5/Month</ItemSubHeader>

          <ListItem>All free features</ListItem>
          <ListItem>Commission and service advertising</ListItem>
          <ListItem>Profile flair</ListItem>
          <ListItem>Show up first in service listings</ListItem>
          <ListItem>More to come!</ListItem>
        </Plan>
      </Pricing>
    </Layout>
  )
}

export default PricingPage
