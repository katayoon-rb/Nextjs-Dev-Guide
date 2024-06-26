import { Suspense } from "react";
import Link from "next/link";
import paths from "@/paths";
import PostShowLoading from "@/components/posts/post-show-loading";
import PostShow from "@/components/posts/post-show";
import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className='space-y-3'>
      <Link className='underline decoration-solid' href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>

      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>

      <CommentCreateForm postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
}
