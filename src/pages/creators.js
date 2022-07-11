import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from 'axios'
import styled, { useTheme } from "styled-components"
import WebsiteLink from "../components/website-link"
import UserImgDefault from "../components/user-img"
import PageHeader from "../components/page-header"
import { FlexRow, FlexColumn, Tags } from "../components/simple"
import AudioPlayer from "../components/audio-player/index"

const Creator = styled.div`
  padding: 16px;
  border-radius: 6px;
`

const PostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  padding: 6px;
  border-radius: 6px;
  width: 33%;
  min-width: 200px;
`

const CommissionPage = () => {
  const [creators, setCreators] = useState([])
  const [offset, setOffset] = useState([])
  const theme = useTheme()

  useEffect(() => {
    const getCreators = async () => {
      const response = await axios.get(
        `${process.env.GATSBY_REACT_APP_API}/profiles/?pro_creators=true&offset=${offset * 10}&limit=10`
      );
      setCreators(response.data.results)
    }

    getCreators()
  }, [])

  const renderPost = (post, contentType) => (
    <>
      {contentType === 'visuals' && (
        <img
          src={`https://${process.env.GATSBY_REACT_APP_S3}/${post.file_path}`}
          alt="Unsuccessfully loaded."
        />
      )}
      {contentType === 'audios' && (
        <AudioPlayer
          id={`collab-audio-${post.id}`}
          audio={post}
          stacked
          key={`collab-audio-${post.id}`}
        />
      )}
      {contentType === 'writings' && (
        <div
          className="story"
          dangerouslySetInnerHTML={{ __html: post.writing }}
        />
      )}
      {contentType === 'voices' && (
        <AudioPlayer
          id={`collab-voice-${post.id}`}
          audio={post}
          stacked
          key={`collab-voice-${post.id}`}
        />
      )}
    </>
  );

  return (
    <Layout>
      <Seo
        title="Commissions"
      />

      <PageHeader
        header="Creators"
        subHeader="
          Here are some of the storytellers currently looking for work or with open commissions.
          Be sure to give them a shout quickly before they aren't available.
        "
      />

      <FlexColumn>
        {creators.map((creator) => (
          <Creator key={creator.username}>
            <FlexRow gap="20px">
              <UserImgDefault user={creator}/>
              <FlexColumn>
                <p>{creator.username}</p>
                <Tags>
                  {creator.coms_open && <span>Commissions</span>}
                  {creator.looking_for_work && <span>Looking for work</span>}
                </Tags>
                <WebsiteLink website={creator.website} />
              </FlexColumn>
              <FlexRow>
                {creator.posts && creator.posts.data.slice(0, 3).map((post) => (
                  <PostCard key={post.id}>{renderPost(post, creator.posts.key)}</PostCard>
                ))}
              </FlexRow>
            </FlexRow>
          </Creator>
        ))}
      </FlexColumn>
    </Layout>
  )
}

export default CommissionPage
