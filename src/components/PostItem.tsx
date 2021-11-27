import React from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import {styles} from '../styles/styles';
import {useTypedSelector} from '../redux/hooks/typedSelectors';
import {StackScreenProps} from '@react-navigation/stack';
import {TStackParamList} from '../../App';
import {Comments} from './Comments';
import {Header} from './Header';

type TPostItemProps = StackScreenProps<TStackParamList, 'PostItem'>;

export const PostItem: React.FC<TPostItemProps> = ({route}) => {
  const postId = route.params.id - 1;
  const post = useTypedSelector(state => state.postsReducer.posts[postId]);

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require('../img/screenBG.jpg')}
        style={styles.bg}>
        <Header title="PostItem" />
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>{post.title}</Text>
            </View>
            <View style={styles.postBody}>
              <Text style={styles.text}>{post.body}</Text>
            </View>
          </View>
        </View>
        <Comments postId={postId} />
      </ImageBackground>
    </SafeAreaView>
  );
};
