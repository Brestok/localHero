import React, { useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

function Home({ user }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Мария",
      text: "Нужна помощь с покупками",
      peopleNeeded: 2,
      dateTime: "2024-03-15T14:00:00Z",
      payment: 500,
      replies: [],
    },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), user, ...newPost, replies: [] }]);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">LocalHero - Запросы</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default Home;
