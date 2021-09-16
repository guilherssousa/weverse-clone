import Head from 'next/head'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Announcements from '../components/Announcements'
import Artists from '../components/Artists'
import Highlights from '../components/Highlights'
import PostMural from '../components/PostMural'

import artists from '../services/api/artists.json'
import highlights from '../services/api/highlights.json'
import magazine from '../services/api/magazine.json'
import fromArtists from '../services/api/from_artists.json'
import shop from '../services/api/shop.json'

const Container = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  width: 1136px;
  padding: 0px 48px;
`

const Label = styled.h2`
  font-size: 24px;
  font-family: "Noto Sans KR Bold", sans-serif;
  margin: 30px 0;
`

const Home = () => {

  const myArtists = artists.communities.filter(artist => artist.joined).slice(0, 4)
  const newArtists = artists.communities.sort((a,b) => b.id > a.id).slice(0, 4)
  const topArtists = artists.communities.sort((a,b) => b.memberCount > a.memberCount).slice(0, 4)

  return (
    <>
      <Head>
        <title>Weverse</title>
      </Head>
      <Layout>
        <Container>
          <Announcements />
          {myArtists.length && (<>
            <Label>My Artists</Label>
            <Artists key={'my'} artists={myArtists} />
          </>)}
          <Label>New Artists</Label>
          <Artists key={'new'} artists={newArtists} />
          <Label>Top Artists</Label>
          <Artists key={'top'} artists={topArtists} />
          <Artists />
          <Highlights title={"Weverse Highlight"} highlights={highlights} />
          <Highlights title={"Weverse Magazine"} highlights={magazine} />
          <PostMural posts={fromArtists} />
          <Highlights title={"Weverse Shop"} highlights={shop} />
        </Container>
      </Layout>
    </>
  )
}

export default Home