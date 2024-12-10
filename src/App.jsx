import { useEffect, useState } from "react";

export default function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
