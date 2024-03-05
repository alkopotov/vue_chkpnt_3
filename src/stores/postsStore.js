import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import {v4 as uuidv4} from 'uuid';

let data = [
  {
    id: '1',
    title: "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
    comments: [
      { id: '1', text: "Самый яркий комментарий в этом посте" },
      { id: '2', text: "Один из бессмыссленных комментариев в этом посте"}
    ],
    commentsVisible: false
  },
  {
    id: '2',
    title: "Краткосрочное вымышленное преломление может выполнять особую роль в пространстве главной роли игрока ",
    comments: [
      { id: '1', text: "Очень научно и непонятно" },
    ],
    commentsVisible: false
  }
]


export const usePostsStore = defineStore('postsStore', () => {
  let posts = ref(JSON.parse(localStorage.getItem('posts')) ?? data);

  const addPost = (title) => {
    posts.value.push({id: uuidv4(), title, comments: []});
  }

  const deletePostById = (id) => {
    posts.value = posts.value.filter(elem => elem.id !== id)
  }

  const switchCommentsVisibility = (id) => {
    posts.value = posts.value.map(elem => {
      if (elem.id === id) {
        elem.commentsVisible = !elem.commentsVisible;
        return elem;
      } else {
        return elem;
      }
    })
  }

  const addCommentToPost = (id, text) => {
    posts.value = posts.value.map(elem => {
      if (elem.id === id) {
        elem.comments.push({id: uuidv4(), text: text})
        return elem;
      } else {
        return elem;
      }
    })
  }

  const deleteComment = (idPost, idComment) => {
    posts.value = posts.value.map(post => {
      if (post.id === idPost) {
        post.comments = post.comments.filter(comment => comment.id !== idComment);
        return post
      } else {
        return post
      }
    })
  }

  const updatePostTitle = (id, title) => {
    posts.value = posts.value.map(post => {
      if (post.id === id) {
        post.title = title;
        return post
      } else {
        return post
      }
    })
  }

  watch(
    () => posts,
    () => {
      localStorage.setItem('posts', JSON.stringify(posts.value))
    },
    {deep: true}
  )

  return {
    posts,
    addPost,
    deletePostById,
    switchCommentsVisibility,
    addCommentToPost,
    deleteComment,
    updatePostTitle
    }
})
