import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Blog = () => (
  <Main
    title="Blog"
    description="Articles that Collins or alias he.wrotes is proud of"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/blog">Blog</Link>
          </h2>
        </div>
      </header>
      <div>Blog post goes here</div>
      <br />
      <div>Coming soon</div>
    </article>
  </Main>
);

export default Blog;
