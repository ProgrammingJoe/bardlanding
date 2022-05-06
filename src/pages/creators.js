import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from 'axios'
import { createStore } from "redux"
import styled, { useTheme } from "styled-components"
import WebsiteLink from "../components/website-link"
import UserImgDefault from "../components/user-img"

const Creator = styled.div`
  padding: 16px;
  border-radius: 6px;


`

const Tags = styled.div`
  display: flex;
  gap: 12px;
  text-transform: uppercase;

  span {
    background-color: ${({ theme }) => theme.colors.tag};
    padding: 2px;
    border-radius: 4px;
  }
`

const CommissionPage = () => {
  const [creators, setCreators] = useState([])
  const [offset, setOffset] = useState([])
  const theme = useTheme()

  useEffect(() => {
    console.log(theme)
    const getCreators = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/profiles/?pro_creators=true&offset=${offset * 10}&limit=10`
      );
      setCreators(response.data.results)
    }

    getCreators()
  }, [])

  const renderPost = (post) => {

    return (
      <div>a piece of art</div>
    )
  }

  return (
    <Layout>
      <Seo title="Commissions" />

      {creators.map((creator) => (
        <Creator key={creator.username}>
          <div>
            {/* <UserImgDefault user={creator}/> */}
            <div>
              <p>{creator.username}</p>
              <Tags>
                {creator.coms_open && <span>Commissions</span>}
                {creator.looking_for_work && <span>Looking for work</span>}
              </Tags>
              <WebsiteLink website={creator.website} />
            </div>
          </div>

          <div>
            {creator.posts && creator.posts.data.map((post) => (
              <div key={post.id}>{renderPost(post)}</div>
            ))}
          </div>
        </Creator>
      ))}
    </Layout>
  )
}

export default CommissionPage
