import React from 'react';
import { Link } from "react-router-dom"

const PostList = ({ posts }) => {
   return (
      <>
         {posts.map((post) => (
            <p key={post.id}>
               {post.title} <Link to={`/posts/${post.id}`}>читать</Link>
            </p>
         ))}
      </>
   )
}

export default PostList;