import Typicode from "sdk-test";

const client = new Typicode({
  apiKey: "123",
});

client.getPosts().then((posts) => console.log(posts));

client.getPostById(1).then((post) => console.log(post));

client
  .createPost({
    title: "hi",
    body: "yoo",
    userId: 1,
  })
  .then((post) => console.log(`New Post created at ${post.id}`));
