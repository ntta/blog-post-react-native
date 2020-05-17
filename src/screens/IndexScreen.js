import React, { useContext, useEffect, useLayoutEffect, useCallback } from'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPost from '../components/BlogPost';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts } = useContext(BlogContext);

  useFocusEffect(
    useCallback(() => {
      getBlogPosts();
    }, [])
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Create')}
          style={styles.addButton}
        >
          <Feather name='plus' size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <BlogPost post={item} />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  addButton: {
    marginHorizontal: 5,
  },
});

export default IndexScreen;
