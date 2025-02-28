import React from "react";

const AboutFun = () =>{
    return(
        <div class="content-wrapper__inner">
            <div class="main-post-list">
                <ul class="post-list">
                    <li>
                        <h2 class="post-list__post-title post-title"><a href="/2018/skills/" title="Skills">Skills</a></h2>
                        <p class="excerpt">Being a Technologist, I love to explore and keep myself updated with latest technologies. I am a full stack solution designer and developer. Following are some of the technologies that I use frequently:</p>
                        <div class="post-list__meta">
                            <time datetime="2018-10-01 15:04" class="post-list__meta--date date">1 Oct 2018</time>
                            <span class="post-meta__tags">on <a href="/tags/#skills">skills</a> </span>
                        </div>
                    </li>
                    <li>
                        <h2 class="post-list__post-title post-title"><a href="/2018/aboutme/" title="About Me">About Me</a></h2>
                        <p class="excerpt">I’m a full stack Software Engineer based in Bellevue, WA specializing in designing and developing exceptional, high-quality software and tools. I love working at the intersection of engineering and design.

                            …</p>
                        <div class="post-list__meta">
                            <time datetime="2018-10-01 15:04" class="post-list__meta--date date">1 Oct 2018</time>

                             <span class="post-meta__tags">on <a href="/tags/#about">about</a> </span>

                        </div>
                    </li>

                </ul>
            </div>
        </div>    
    )
}
export default AboutFun;