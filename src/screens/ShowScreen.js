import React, { useContext } from'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { withNavigation } from '@react-navigation/compat';
import { AntDesign } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find(blogPost => blogPost.id === route.params.id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Edit',{ id: route.params.id })
          }
          style={styles.editButton}
        >
          <AntDesign name='edit' size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  editButton: {
    marginHorizontal: 5,
  },
});

export default withNavigation(ShowScreen);
