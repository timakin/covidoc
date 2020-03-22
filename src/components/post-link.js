import React from "react"
import moment from "moment";

const PostLink = ({ post }) => (
  <article class="card ">
    <header>
      <h2 className="post-title">
        <a href={post.url} className="post-link" target={"_blank"} rel="noopener noreferrer">
          {post.title}
        </a>
      </h2>
      <div class="post-meta">{moment(post.date).format("DD/MM/YYYY")}</div>
    </header>
  </article>
)
export default PostLink
