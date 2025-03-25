import React, { useEffect, useState } from "react";

function AuthorInfo() {
  const [authorInfo, setAuthorInfo] = useState([])
  useEffect(() => {
    fetch('/public/authorinfo.json')
      .then(res => res.json())
      .then(data => setAuthorInfo(data))
  }, []);

  return (
    <div className="flex gap-4 items-center mt-6 w-full text-sm">
      <img
        src={authorInfo.avatarUrl}
        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
      />
      <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
        <div className="font-semibold">{authorInfo.name}</div>
        <div className="flex gap-2 items-center w-full">
          <time className="self-stretch my-auto">{authorInfo.date}</time>
          <span className="self-stretch my-auto text-lg">•</span>
          <span className="self-stretch my-auto">{authorInfo.readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
