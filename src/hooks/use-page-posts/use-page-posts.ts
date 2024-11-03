"use client"

import { useEffect, useState } from "react";

import { getPostsByPage } from "@/services/posts/get-posts-by-page";
import { PostResponse } from "@/types";

import { START_PAGE } from "./config";

//TODO split pagination and data fetching

export const usePagePosts = () => {
  const [page, setPage] = useState(START_PAGE);
  const [data, setData] = useState<PostResponse>({
    posts: [],
    hasMore: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await getPostsByPage(page);
      setData(data);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  const loadPage = async (page: number) => {
    const newData = await getPostsByPage(page);
    setData(newData);
    setPage(page);
  };

  const prevPage = () => loadPage(page - 1);
  const nextPage = () => loadPage(page + 1);
  const isDisabledPrev = () => page === START_PAGE;
  const isDisabledNext = () => !data.hasMore;

  return {
    isLoading, posts: data.posts, prevPage, nextPage, isDisabledPrev, isDisabledNext,
  };
};