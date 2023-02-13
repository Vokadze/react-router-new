import React from 'react';

const Post = ({post, id}) => {
   //const postId = match.params.postId
   // В хранилище записей id - число, 
    // а значения в match.params всегда строки
   // const getPost = (postId) => posts.find(({ id }) => String(id) === postId);
   // const post = getPost(postId);

    // Выведем заголовок если есть запись и сообщение об ошибке если нет
    return (
        <h1>{post ? post.title : `post with id: ${id} is not found`}</h1>
    );
};
 
export default Post;