"use client"

import { useFormStatus } from "react-dom";
import { IconButton } from "../IconButton";
import { Spinner } from "../Spinner";
import { ThumbsUp } from "../icons/ThumbsUp";

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus();
  
  return (
    <IconButton disabled={pending}>
      { pending ? <Spinner /> : <ThumbsUp />}    
    </IconButton>
  );
};
