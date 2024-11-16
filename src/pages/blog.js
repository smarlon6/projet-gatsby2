import * as React from 'react';
import Layout from "../components/Layout";
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function BlogPage() {

    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {frontmatter: {date: DESC}}) {
                nodes {
                    frontmatter {
                        date(formatString: "DD/MM/YYYY")
                        title
                        slug
                    }
                    id
                    excerpt
                }
            }      
        }`);

    return (
        <Layout>
            <p>Esses são os últimos Posts:</p>
            {
                data.allMdx.nodes.map(item => (
                    <article key={item.id}>
                         <h3>
                        <Link to={`/${item.frontmatter.slug}`}>
                            {item.frontmatter.title}
                        </Link>
                        </h3>
                        <p>Data: {item.frontmatter.date}</p>
                        <p>{item.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const Head = () => <title>Meu Blog - Posts</title>