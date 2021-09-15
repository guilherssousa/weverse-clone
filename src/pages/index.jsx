import styled from 'styled-components'
import Head from 'next/head'

import Layout from '../components/Layout'
import Announcements from '../components/Announcements'
import Artists from '../components/Artists'

const Container = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  width: 1136px;
  padding: 0px 48px;
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Weverse</title>
      </Head>
      <Layout>
        <Container>
          <Announcements />
          <Artists />
        </Container>
      </Layout>
    </>
  )
}

export default Home