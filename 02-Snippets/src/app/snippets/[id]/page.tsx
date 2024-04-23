import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { deleteSnippet } from "@/actions";

interface SnippetShowProps {
  params: {
    id: string;
  };
}

export default async function SnippetShow(props: SnippetShowProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className='flex m-4 justify-between items-center'>
        <h1 className='text-xl font-bold'>{snippet.title}</h1>
        <div className='flex gap-4'>
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className='p-2 border rounded'
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className='p-2 border rounded'>Delete</button>
          </form>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-300'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
