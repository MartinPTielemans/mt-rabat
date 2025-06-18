import Link from "next/link";

import { sanityFetch } from "@/sanity/lib/live";
import { morePostsQuery, allPostsQuery } from "@/sanity/lib/queries";
import { Post as PostType, AllPostsQueryResult } from "@/sanity.types";
import DateComponent from "@/app/components/Date";
import OnBoarding from "@/app/components/Onboarding";
import Avatar from "@/app/components/Avatar";
import { createDataAttribute } from "next-sanity";
import { draftMode } from "next/headers";

const Post = ({ post }: { post: AllPostsQueryResult[number] }) => {
  const { _id, title, slug, excerpt, date, author } = post;

  const attr = createDataAttribute({
    id: _id,
    type: "post",
    path: "title",
  });

  return (
    <article
      data-sanity={attr()}
      key={_id}
      className="border border-gray-200 rounded-sm p-6 bg-gray-50 flex flex-col justify-between transition-colors hover:bg-white relative"
    >
      <Link
        className="hover:text-brand underline transition-colors"
        href={`/posts/${slug}`}
      >
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>

        <p className="line-clamp-3 text-sm leading-6 text-gray-600 max-w-[70ch]">
          {excerpt}
        </p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        {author && author.firstName && author.lastName && (
          <div className="flex items-center">
            <Avatar person={author} small={true} />
          </div>
        )}
        <time className="text-gray-500 text-xs font-mono" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>
    </article>
  );
};

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div>
    {heading && (
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )}
    <div className="pt-6 space-y-6">{children}</div>
  </div>
);

const EmptyState = () => (
  <div className="text-center py-12">
    <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
      <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ingen projekter endnu</h3>
    <p className="text-gray-600 mb-8 max-w-md mx-auto">
      Vi arbejder på spændende nye projekter. Kom tilbage snart for at se vores seneste arbejde og opdateringer.
    </p>
    <Link
      href="/kontakt"
      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
    >
      Kontakt os for dit projekt
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
);

export const MorePosts = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading={`Recent Posts (${data?.length})`}>
      {data?.map((post: any) => <Post key={post._id} post={post} />)}
    </Posts>
  );
};

export const AllPosts = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery });
  const { isEnabled: isDraftMode } = await draftMode();

  if (!data || data.length === 0) {
    // Show onboarding only in draft mode for content creators
    if (isDraftMode) {
      return <OnBoarding />;
    }
    // Show user-friendly empty state on live site
    return <EmptyState />;
  }

  return (
    <Posts
      heading="Recent Posts"
      subHeading={`${data.length === 1 ? "This blog post is" : `These ${data.length} blog posts are`} populated from your Sanity Studio.`}
    >
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};
