import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"

export default function Article({ data }) {
  return <Layout>
    {data.datoCmsArticle.title}
    <img src={data.datoCmsArticle.articlePicture.url} alt=""/>
    <p>Test</p>
  </Layout>
}

export const query = graphql`
  query($urlSegment: String!) {
    datoCmsArticle(urlSegment: { eq: $urlSegment }) {
      title
      articlePicture{
        url
      }
    }
  }
`