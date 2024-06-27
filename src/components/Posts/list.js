/* eslint-disable prettier/prettier */
import React from 'react';
import { Box } from '../index';
import Post from '.';

const PostList = ({posts}) => {
  return (
    <Box hasPadding>
      {Array.from(Array(6))?.map((item) => (
        <Post />
      ))}
    </Box>
  );
};

export default PostList;
