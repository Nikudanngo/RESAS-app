import React, { useState, useEffect } from "react";

interface prefecturesItem {
  prefCode: number;
  prefName: string;
  statusCode: number;
  id: number;
  title: string;
}

const Fetch = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState<prefecturesItem[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      //   headers: {
      //     "X-API-KEY": `${process.env.REACT_APP_RESAS_API_KEY}`,
      //   },
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPosts(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: エラー</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul>
          {posts.map((prop) => (
            <li key={prop.id}>{prop.title}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Fetch;
