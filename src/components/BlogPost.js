import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import { withNavigation } from '@react-navigation/compat';

const BlogPost = ({ post, navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Show', {
        id: post.id
      })}
    >
      <View style={styles.row}>
        <Text style={styles.title}>[{post.id}] {post.title}</Text>
        <TouchableOpacity
          onPress={() => deleteBlogPost(post.id)}
        >
          <FontAwesome style={styles.icon} name='trash-o' />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default withNavigation(BlogPost);
