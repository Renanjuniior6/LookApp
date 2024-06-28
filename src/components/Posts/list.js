/* eslint-disable prettier/prettier */
import React from 'react';
import { Box } from '../index';
import Post from '.';

const PostList = ({posts}) => {
  return (
    <Box style={{
      minWidth: '100%',
    }}>
      {posts?.map((post) => (
        <Post post={post}/>
      ))}
    </Box>
  );
};

export default PostList;
