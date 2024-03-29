import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Footer from '../components/footer'
import { Title, Container, ImageWrapper, SubTitle, ExternalLink } from '../elements'
import { grey } from '../utils'
import { projects } from '../data'


const Projects = ({ data }) => {

  const imageGallery = Object.values(data)
  const images = []

  imageGallery.map((img, i) => (
    images.push(<Img key={i} fluid={img.childImageSharp.fluid} alt={`Image of '${projects[i].title}' project`} />)
  ))

  return (
    <Layout>
      <Title>Projects</Title>

      <Container>
        <p>Explore some of my favorite projects I've worked on over the last few months.</p>
        <Fragment>
          {
            projects.map((project, i) => (

              <div key={i}>
                <ExternalLink href={`${projects[i].link}`}>
                  <SubTitle>{projects[i].title}</SubTitle>
                </ExternalLink>

                <ImageWrapper>
                  <ExternalLink href={`${projects[i].link}`}>
                    {
                      images[i]
                    }
                  </ExternalLink>
                </ImageWrapper>

                <p style={{color: `${grey}`}}>{projects[i].desc}</p>
              </div>

            ))
          }
        </Fragment>
      </Container>

      <Footer />
    </Layout>
  )
}

export default Projects


export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query imageGallery {
    image27: file(relativePath: { regex: "/27.png/" }) {
      ...fluidImage
    }
    image26: file(relativePath: { regex: "/26.png/" }) {
      ...fluidImage
    }
    image25: file(relativePath: { regex: "/25.png/" }) {
      ...fluidImage
    }
    image24: file(relativePath: { regex: "/24.png/" }) {
      ...fluidImage
    }
    image23: file(relativePath: { regex: "/23.png/" }) {
      ...fluidImage
    }
    image22: file(relativePath: { regex: "/22.png/" }) {
      ...fluidImage
    }
    image21: file(relativePath: { regex: "/21.png/" }) {
      ...fluidImage
    }
    image20: file(relativePath: { regex: "/20.png/" }) {
      ...fluidImage
    }
    image19: file(relativePath: { regex: "/19.png/" }) {
      ...fluidImage
    }
    image18: file(relativePath: { regex: "/18.png/" }) {
      ...fluidImage
    }
    image17: file(relativePath: { regex: "/17.png/" }) {
      ...fluidImage
    }
    image16: file(relativePath: { regex: "/16.png/" }) {
      ...fluidImage
    }
    image15: file(relativePath: { regex: "/15.png/" }) {
      ...fluidImage
    }
    image14: file(relativePath: { regex: "/14.png/" }) {
      ...fluidImage
    }
    image13: file(relativePath: { regex: "/13.png/" }) {
      ...fluidImage
    }
    image12: file(relativePath: { regex: "/12.png/" }) {
      ...fluidImage
    }
    image11: file(relativePath: { regex: "/11.png/" }) {
      ...fluidImage
    }
    image10: file(relativePath: { regex: "/10.png/" }) {
      ...fluidImage
    }
    image9: file(relativePath: { regex: "/09.png/" }) {
      ...fluidImage
    }
    image8: file(relativePath: { regex: "/08.png/" }) {
      ...fluidImage
    }
    image7: file(relativePath: { regex: "/07.png/" }) {
      ...fluidImage
    }
    image6: file(relativePath: { regex: "/06.png/" }) {
      ...fluidImage
    }
    image5: file(relativePath: { regex: "/05.png/" }) {
      ...fluidImage
    }
    image4: file(relativePath: { regex: "/04.png/" }) {
      ...fluidImage
    }
    image3: file(relativePath: { regex: "/03.png/" }) {
      ...fluidImage
    }
    image2: file(relativePath: { regex: "/02.png/" }) {
      ...fluidImage
    }
    image1: file(relativePath: { regex: "/01.png/" }) {
      ...fluidImage
    }
  }
`
