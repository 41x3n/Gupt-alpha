import React from "react";
import aboutStyles from "../styles/About.module.css";

const AboutUs = () => {
  return (
    <div className={aboutStyles.body}>
      <div className={aboutStyles.textContainer}>
        <p className={aboutStyles.p}>
          A group of friends who have been studying CS together for more than
          four years realizes that it will be harder to get a job amid the
          corona pandemic. Hell, even simple internships required months of
          grinding Leetcode. They tried hard but came up empty. So they just
          said whatever and started working on something which they would use
          personally. They hope this project will show people that it is okay if
          you are from a Tier 3/4 college in India. If you work hard and find
          people who also work hard, you can build amazing things. July 31,
          2021.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
