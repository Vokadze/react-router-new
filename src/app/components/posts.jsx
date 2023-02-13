import React from 'react';
import PostList from './postList';
import Post from './post';
import {useParams} from "react-router-dom"
import Offer from './offer';

const Posts = () => {

   const {postId} = useParams(); // Можно сразу получить postId
   const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

   const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' },
   ]

   return (
      <>
         <Offer/>
         {postId ? (
            <Post 
            post={getPost(postId)} 
            id={postId} 
            />
         ) : (
            <PostList posts={posts} />
         )}
      </>
   )
}

export default Posts;