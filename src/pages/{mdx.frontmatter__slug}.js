import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

export default function BlogPost({ data, children }) {

    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout>
            <h2>{data.mdx.frontmatter.title}</h2>
            <p>Data: {data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            {children}
        </Layout>
    )
}

export const query = graphql`
    query($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData(
                            width: 600
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>