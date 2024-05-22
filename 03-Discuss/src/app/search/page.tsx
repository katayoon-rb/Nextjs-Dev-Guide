import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import Link from "next/link";

interface SearchPageProps {
  searchParams: { term: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if (!term) redirect("/");

  return (
    <div>
      <Link className='underline decoration-solid' href={"/"}>
        {"< "}Back to Home Page
      </Link>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
