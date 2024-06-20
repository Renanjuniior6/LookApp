/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Text, ScrollView } from '../index';
import Post from '.';

const PostList = () => {
  return (
    <Box hasPadding>
      {Array.from(Array(25))?.map((item) => (
        <Post />
      ))}
    </Box>
  );
};

export default PostList;
