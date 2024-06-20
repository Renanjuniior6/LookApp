/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Spacer, ScrollView } from '../../components';

import Header from '../../components/Header';
import StoryList from '../../components/Story/list';
import PostList from '../../components/Posts/list';

const Feed = () => {
  return (
    <Box background="light">
        <Header title="Explore"/>
        <ScrollView>
        <StoryList />
        <Spacer />
        <PostList />
        </ScrollView>
    </Box>
  );
};

export default Feed;
