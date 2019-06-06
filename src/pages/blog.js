import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show here...</p>
      {postsFromData(data.allMarkdownRemark.edges)}
    </Layout>
  )
}

const postsFromData = (dataArr) => {
  return (
    <ol>
      {dataArr.map(post => {
        return (
          <li >
            <Link to={`/blog/${post.node.fields.slug}`}>
              <h2 >{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default BlogPage