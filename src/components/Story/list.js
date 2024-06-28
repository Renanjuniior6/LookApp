/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Text, ScrollView } from '../index';
import Story from '.';

const StoryList = ({stories}) => {
  return (
    <Box fluid height="260px">
      <Box row fluid justify="space-between" hasPadding height="60px">
        <Text bold color="dark">
          Stories
        </Text>
        <Text color="danger" underline>
          Show All
        </Text>
      </Box>
      <ScrollView horizontal style={{ paddingLeft: 20 }}>
        {stories?.map((story) => (
          <Story story={story}/>
        ))}
      </ScrollView>
    </Box>
  );
};

export default StoryList;
