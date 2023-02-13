import React from 'react';
import PostsList from './postList';
import Post from './post';

const Posts = ({match}) => {
   
const posts = [
   { id: 1, title: 'Post 1' },
   { id: 2, title: 'Post 2' },
   { id: 3, title: 'Post 3' },
 ]
 // Получение URL параметра
 const postId = match.params.postId

 // Логика получения записи перенесена из Post
 const getPost = (postId) => posts.find(({id}) => String(id) === postId)

 // Если есть postId, то возвращаем Post, иначе PostList
   return postId ? (
      <Post post={getPost(postId)} id={postId} />
   ) : (
      <PostsList posts={posts} />
   )
}
 
export default Posts;