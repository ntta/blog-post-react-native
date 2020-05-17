import React, { useState, useContext } from'react';
import { Text, Button, TextInput, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { addBlogPost } = useContext(BlogContext);

  return (
    <>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={title}
        style={styles.input}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title='Add Blog Post'
        onPress={() => {
          addBlogPost(title, content);
          navigation.navigate('Index');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CreateScreen;
