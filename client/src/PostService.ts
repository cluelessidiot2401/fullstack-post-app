import axios from "axios";

const url = "/api/posts";

// Get Posts
export function getPosts() {
  return new Promise((resolve, reject) => {
    axios.get(url).then(
      (resp) => {
        const data = resp.data;
        resolve(
          data.map(
            (post: { createdAt: string | number | Date; text: string }) => ({
              ...post,
              createdAt: new Date(post.createdAt),
            })
          )
        );
      },
      (err) => reject(err)
    );
  });
}

// Create Posts
export function insertPost(text: string) {
  return axios.post(url, {
    text,
  });
}

// Delete Posts
export function deletePost(id: number) {
  return axios.delete(`${url}/${id}`);
}
