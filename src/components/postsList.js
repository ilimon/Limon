import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { TitleWrapper, SubTitleWrapper, MainTextWrapper } from '../components/xStyles'

// graphql query
const POST_LIST_QUERY = graphql`
  query BlogPostListing { 
    allMarkdownRemark(sort: {
      order: DESC
      fields:[frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`


const PostDate = styled.h3`
  font-size: 1rem;
  font-style: italic;
  font-weight: normal;
  margin-top: .25rem;
  color: #868e96;
`


const PostList = () => (
  <div>
    <TitleWrapper>
      <h1>Blog</h1>
    </TitleWrapper>

    <StaticQuery
      query={POST_LIST_QUERY}
      render={({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map(({ node }) => (
          <Fragment key={node.frontmatter.slug}>

            <MainTextWrapper>

              <SubTitleWrapper>
                <Link to={`/posts${node.frontmatter.slug}`} >
                  <h2>{node.frontmatter.title}</h2>
                </Link>
              </SubTitleWrapper>

              <p>{node.excerpt}</p>
              
              <PostDate>{node.frontmatter.date}</PostDate>
            
            </MainTextWrapper>

          </Fragment>
        ))
      )}
    />
  </div>
)

export default PostList
