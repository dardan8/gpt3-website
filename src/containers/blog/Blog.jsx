import React from "react";
import "./blog.css";
import { Article } from "../../components/";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, we are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgURL={blog01}
            date="June 26, 2022"
            title="This is the article title - what is GPT3 and OpenAI"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgURL={blog02}
            date="June 26, 2022"
            title="This is the article title - what is GPT3 and OpenAI"
          />
          <Article
            imgURL={blog03}
            date="June 26, 2022"
            title="This is the article title - what is GPT3 and OpenAI"
          />
          <Article
            imgURL={blog04}
            date="June 26, 2022"
            title="This is the article title - what is GPT3 and OpenAI"
          />
          <Article
            imgURL={blog05}
            date="June 26, 2022"
            title="This is the article title - what is GPT3 and OpenAI"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
