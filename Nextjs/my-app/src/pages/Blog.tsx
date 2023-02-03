import React from 'react';
import style from "../styles/blog.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};

const Blog = ({ data }: any) => {
  return (
    <div>
      <h1 className={style.heading}>Hello World Blog</h1>

      {data.map((curEle: any) => {
        return (
            <div key={curEle.id}>
                <h3>{curEle.id}</h3>
                <h2>{curEle.title}</h2>
                <p>{curEle.body}</p>
            </div>
        );
      })}
    </div>
  )
}

export default Blog