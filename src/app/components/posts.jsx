import React, { useEffect, useState } from 'react';
import PostList from './postList';
import Post from './post';
import qs from "query-string";

const Posts = ({ match, location }) => {
   const [showOffer, setShowOffer] = useState(true)
   const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' },
   ]

   const search = qs.parse(location.search)
   const { fromUrl, block } = search

   useEffect(() => {
      if (!showOffer && fromUrl && block) {
         setShowOffer(true)
      }
   }, [fromUrl, block, showOffer]);
   // Получение URL параметра
   const postId = match.params.postId;

   // Логика получения записи перенесена из Post
   const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

   // Если есть postId, то возвращаем Post, иначе PostList
   return (
      <>
         {showOffer && <div>Специальное предложение</div>}
         {postId ? (
            <Post post={getPost(postId)} id={postId} />
         ) : (
            <PostList posts={posts} />
         )}
      </>
   )
}

export default Posts;