/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box } from '../index';
import Post from '.';

const PostList = ({posts}) => {
  return (
    <Box style={{
      minWidth: '100%',
    }}>
      {posts?.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </Box>
  );
};

export default PostList;
