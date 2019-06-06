import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  NEW_POST
} from "./types";
import * as contentful from "contentful";

const SPACE_ID = "2o7i5rffnbsj";
const ACCESS_TOKEN =
  "4dbc8368687b2685d3b7472abf0c642d2e8c8d9a1cbdcd21a153050d74881bb6";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

// export const fetchPosts = () => dispatch => {
//   console.log("fetching!!!!!!!");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };

export const fetchPosts = searchString => dispatch => {
  console.log("fetching!!!!!!!");
  dispatch({ type: FETCH_POSTS_REQUEST, loading: true });
  client
    .getEntries({
      content_type: "blogPost",
      query: searchString
    })
    .then(response =>
      dispatch({
        type: FETCH_POSTS,
        payload: response.items
      })
    )
    .catch(error =>
      dispatch({
        type: FETCH_POSTS_ERROR,
        payload: error,
        error: true
      })
    );
};

// const error = err => console.log(err);
// export function fetchPosts() {
//   return dispatch =>
//     client
//       .getEntries()
//       .then(({ posts }) => {
//         dispatch({
//           type: FETCH_POSTS,
//           payload: posts
//         });
//       })
//       .catch(error);
// }

export const createPost = postData => dispatch => {
  console.log("Create!!!!!!!");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
