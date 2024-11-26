"use client";

import { useState } from "react";

import { useService } from "@/hooks/use-service/use-service";
import { getPostsByPage } from "@/services/posts/get-posts-by-page";

import { START_PAGE } from "./config";


export const usePagePosts = () => {
  const [page, setPage] = useState(START_PAGE);
  const { isLoading, data } = useService(getPostsByPage, [page]);

  const prevPage = () => setPage(prevPage => prevPage - 1);
  const nextPage = () => setPage(prevPage => prevPage + 1);
  const isDisabledPrev = page === START_PAGE;
  const isDisabledNext = !data?.hasMore;

  return {
    isLoading, posts: data?.posts, prevPage, nextPage, isDisabledPrev, isDisabledNext,
  };
};