import { LocalStorageManager } from "@/utils";
import { useEffect, useState } from "react";

function useLike() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  useEffect(() => {
    const posts = LocalStorageManager.getLikedPosts();
    setLikedPosts(posts);
  }, []);

  const addLikedPost = (postId: number) => {
    if (!likedPosts.includes(postId)) {
      LocalStorageManager.addLikedPost(postId);
      setLikedPosts((prev) => [...prev, postId]);
    }
  };

  const removeLikedPost = (postId: number) => {
    if (likedPosts.includes(postId)) {
      LocalStorageManager.removeLikedPost(postId);
      setLikedPosts((prev) => prev.filter((id) => id !== postId));
    }
  };

  const isPostLiked = (postId: number): boolean => {
    return likedPosts.includes(postId);
  };

  return { likedPosts, addLikedPost, removeLikedPost, isPostLiked };
}

export default useLike;
