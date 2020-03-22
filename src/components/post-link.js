import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article class="card ">
    <header>
      <h2 className="post-title">
        <a href={post.url} className="post-link" target={"_blank"} rel="noopener noreferrer">
          {post.title}
        </a>
      </h2>
      <div class="post-meta">{post.date}</div>
    </header>
  </article>
)
export default PostLink
