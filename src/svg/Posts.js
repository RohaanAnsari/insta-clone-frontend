import React from 'react';

const Posts = ({ height, width, fill }) => {
  return (
    <div>
      <svg
        aria-label=""
        class="_8-yf5 "
        role="img"
        viewBox="0 0 48 48"
        fill={fill ? fill : '#8e8e8e'}
        height={height ? height : '12'}
        width={width ? width : '12'}
      >
        <path
          clip-rule="evenodd"
          d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default Posts;
