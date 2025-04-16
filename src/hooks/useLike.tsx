/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "wisehub.likedPosts";

function useLike(postId: number) {
  const [isLiked, setIsLiked] = useState(false);

  const isBrowser = (): boolean => typeof window !== "undefined";

  const getLikedPosts = (): number[] => {
    if (!isBrowser()) return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const saveLikedPosts = (posts: number[]): void => {
    if (!isBrowser()) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch {}
  };

  const updateLikeState = () => {
    const posts = getLikedPosts();
    setIsLiked(posts.includes(postId));
  };

  const toggle = () => {
    const posts = getLikedPosts();
    const isAlreadyLiked = posts.includes(postId);

    const updatedPosts = isAlreadyLiked
      ? posts.filter((id) => id !== postId)
      : [...posts, postId];

    saveLikedPosts(updatedPosts);
    setIsLiked(!isAlreadyLiked);
  };

  useEffect(() => {
    updateLikeState();
  }, [postId]);

  return { isLiked, toggle };
}

export default useLike;
