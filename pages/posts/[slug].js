import React from "react";
import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),

    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  console.log("post-page-static props", slug);
  const post = await getPost(slug);
  return {
    props: { post },
  };
};

const PostPage = ({ post }) => {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
      </main>
    </>
  );
};

export default PostPage;
