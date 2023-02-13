import React from 'react';
import { useHistory } from "react-router-dom"

const Post = ({ post, id }) => {
   // Получение истории
   const history = useHistory()

   const goToList = (hasPost) => {
      hasPost ? history.push("/posts") : history.replace("/posts");
   }

   return (
      <>
         <button onClick={goToList} type="button">
            В список записей
         </button>
         <h1>{post ? post.title : `post with id: ${id} is not found`}</h1>
      </>
   );
};

export default Post;