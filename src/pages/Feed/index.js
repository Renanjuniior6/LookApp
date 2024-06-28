/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */

import React, { useState, useEffect } from 'react';
import { Box, Spacer, ScrollView } from '../../components';

import Header from '../../components/Header';
import StoryList from '../../components/Story/list';
import PostList from '../../components/Posts/list';
import Empty from '../../components/Empty';
import api from '../../services/api';


const Feed = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState({
    stories: [],
    posts: [],
  });

  const getFeed = async () => {

    try {
      setLoading(true);
      setTimeout(async () => {
        const { data: feedData } = await api.get('/feed');
        setFeed(feedData);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  // FOCUS
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getFeed();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Box background="light">
        <Header title="Explore"/>
        {loading && <Empty loading message="Erro ao carregar o feed!"/>}
        {!loading && (
        <ScrollView>
        <StoryList stories={feed?.stories}/>
        <Spacer />
        <PostList posts={feed?.posts}/>
        </ScrollView>
        )}
    </Box>
  );
};

export default Feed;
