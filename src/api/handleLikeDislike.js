import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function handleLikeDislike(name, isLike) {
  const backendUrl = `${BACKEND}/gifs/likedislike`;
  console.log(name, isLike)

  const { data } = await axios.post(
    backendUrl,
    { name: name, isLike: isLike },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}

export async function getHandleLikeDislike(name, isLike) {
  const backendUrl = `${BACKEND}/gifs/likedislike`;

  const { data } = await axios.get(
    backendUrl,
    { params: {
        name: name,
        isLike: isLike,
    }
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}