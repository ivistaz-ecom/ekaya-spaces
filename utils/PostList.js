// components/PostList.js
import { useState, useEffect } from 'react';
import { fetchPostsByCategory } from './Category';
import Link from 'next/link'
import Image from 'next/image'
import {RotatingLines} from 'react-loader-spinner'


    const PostList = ({ categorySlug }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

  const loadMorePosts = async () => {
    setLoading(true);
    const newPosts = await fetchPostsByCategory(categorySlug, page + 1);
    if (newPosts.length === 0) {
        // No more posts to load, hide the "Load More" button
        setHide(true);
      } else {
        setPosts([...posts, ...newPosts]);
        setPage(page + 1);
        
    }
    setLoading(false);

  };

  useEffect(() => {
    const loadInitialPosts = async () => {
      setLoading(true);
      const initialPosts = await fetchPostsByCategory(categorySlug);
      setPosts(initialPosts);
      setLoading(false);
        
    };

    loadInitialPosts();
  }, [categorySlug]);

  return (
      <div>
       hello
         
</div>

  );
};

export default PostList;