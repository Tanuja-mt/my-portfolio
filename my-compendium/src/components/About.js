import React from "react";

const AboutFun = () => {
  return (
    <div className="content-wrapper__inner">
      <div className="main-post-list">
        <ul className="post-list">
          <li>
            <h2 className="post-list__post-title post-title">
              <a href="/2018/skills/" title="Skills">Skills</a>
            </h2>
            <p className="excerpt">
              Being a Technologist, I love to explore and keep myself updated with the latest technologies.
              I am a full-stack solution designer and developer. Following are some of the technologies that I use frequently:
            </p>
            <div className="post-list__meta">
              <time dateTime="2018-10-01 15:04" className="post-list__meta--date date">
                1 Oct 2018
              </time>
              <span className="post-meta__tags">
                on <a href="/tags/#skills">skills</a>
              </span>
            </div>
          </li>
          <li>
            <h2 className="post-list__post-title post-title">
              <a href="/2018/aboutme/" title="About Me">About Me</a>
            </h2>
            <p className="excerpt">
              I’m a full-stack Software Engineer based in Bellevue, WA specializing in designing and developing
              exceptional, high-quality software and tools. I love working at the intersection of engineering and design.
            </p>
            <div className="post-list__meta">
              <time dateTime="2018-10-01 15:04" className="post-list__meta--date date">
                1 Oct 2018
              </time>
              <span className="post-meta__tags">
                on <a href="/tags/#about">about</a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutFun;
