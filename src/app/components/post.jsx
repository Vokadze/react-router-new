import React from 'react';

const Post = ({ post, id, goToList }) => {
   return (
      <>
         <button onClick={()=>goToList(post)}>
            В список записей
         </button>
         <h1>{post ? post.title : `post with id: ${id} is not found`}</h1>
      </>
   );
};

export default Post;