//selectors
export const getAllPosts = state => state.posts;
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);
export const removePost = payload => ({ type: REMOVE_POST, payload });
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
      case REMOVE_POST:
        return [...statePart.filter(post =>post.id !== action.payload)];
    default:
      return statePart;
  };
};

export default postsReducer;