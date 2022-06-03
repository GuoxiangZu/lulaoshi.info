import React, { useEffect } from 'react';
import DocItem from '@theme-original/DocItem';

export default function DocItemWrapper(props) {

  /* utterance comment begin */
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "luweizheng/lulaoshi.info");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    script.crossOrigin = "anonymous";
    script.async = true;

    document.getElementById("comment-system").appendChild(script);
  }, []);
  /* utterance comment end */

  return (
    <>
      <DocItem {...props} />
      {/* utterance comment begin */}
      <div id="comment-system"></div>
      {/* utterance comment end */}
    </>
  );
}
