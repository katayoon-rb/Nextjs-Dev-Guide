import type { Comment } from "@prisma/client";
import { cache } from "react";
import { db } from "@/db";

export const fetchCommentsByPostId = cache(
  (postId: string): Promise<Comment[]> => {
    return db.comment.findMany({
      where: { postId },
    });
  }
);
