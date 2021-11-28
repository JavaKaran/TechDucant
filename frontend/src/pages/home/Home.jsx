import { useEffect, useState } from 'react';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Home = () => {
    const[posts, setPosts] = useState([]);
    const { search } = useLocation();
    const URL = "http://localhost:5000/api";
    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${URL}/posts` + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className = "home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;
