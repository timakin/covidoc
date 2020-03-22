import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        <a href={"https://docs.google.com/spreadsheets/d/1Ca54x1WzuLqq96VxJ23vdQkHiFty-AE4puu00JZhKto/edit#gid=0"} target={"_blank"} rel="noopener noreferrer" className="button -primary">Add resource &rarr;</a>
      </div>
    )}
  />
)
