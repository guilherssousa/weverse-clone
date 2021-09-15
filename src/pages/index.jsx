import styled from 'styled-components'
import Head from 'next/head'

import Layout from '../components/Layout'
import Announcements from '../components/Announcements'
import Artists from '../components/Artists'

import artists from '../services/api/artists.json'

const Container = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  width: 1136px;
  padding: 0px 48px;
`

const Label = styled.h2`
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
          <Label>My Artists</Label>
          {myArtists.length && <Artists artists={myArtists} />}
          <Label>New Artists</Label>
          <Artists artists={newArtists} />
          <Label>Top Artists</Label>
          <Artists artists={topArtists} />
          <Artists />
        </Container>
      </Layout>
    </>
  )
}

export default Home