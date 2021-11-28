import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import {styles} from '../styles/styles';
import {useTypedSelector} from '../redux/hooks/typedSelectors';
import {useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {fetchPosts} from '../redux/actions/postActions';
import {IPost} from '../redux/types/PostTypes';
import {StackScreenProps} from '@react-navigation/stack';
import {AddPostModal} from '../modals/AddPostModal';
import {ChangePostModal} from '../modals/ChangePostModal';
import {ToggleButton} from './buttons/ToggleButton';
import {DeleteButton} from './buttons/DeleteButton';
import {deletePost} from '../redux/actions/postActions';
import {Header} from './Header';

type INavigationProps = {
  PostItem: {id: number};
};

export const PostList = ({navigation}: StackScreenProps<INavigationProps>) => {
  const dispatch = useDispatch();
  const [postModalVisible, toggleAddPostModal] = useState(false);
  const [changePostModalVisible, toggleChangePostModal] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(0);
  const [postTitle, setPostTitle] = useState<string>('');
  const [postBody, setPostBody] = useState<string>('');
  const {isLoading, error, posts} = useTypedSelector(
    state => state.postsReducer,
  );

  const onCardPress = (id: number) => {
    navigation.navigate('PostItem', {id});
  };

  const handleAddPostModal = () => toggleAddPostModal(true);

  const handleChangePostModal = (item: IPost) => {
    setCurrentPostId(item.id);
    setPostTitle(item.title);
    setPostBody(item.body);
  };

  const renderItem = ({item}: {item: IPost}) => {
    return (
      <View style={styles.cardContainer}>
        <DeleteButton action={deletePost} payload={item.id} />

        <TouchableOpacity
          style={styles.card}
          onPress={() => onCardPress(item.id)}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>
              {item.id} {item.title}
            </Text>
          </View>

          <View style={styles.postBody}>
            <Text style={styles.text}>{item.body}</Text>
          </View>
        </TouchableOpacity>
        <ToggleButton
          toggle={toggleChangePostModal}
          setContent={handleChangePostModal}
          content={item}
        />
      </View>
    );
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.screen}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        source={require('../img/screenBG.jpg')}
        style={styles.bg}>
        <Header title={'PostList'} />
        <FlatList
          data={posts}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={post => post.id.toString()}
          style={styles.flatlist}
        />
        <AddPostModal visible={postModalVisible} toggle={toggleAddPostModal} />
        <ChangePostModal
          visible={changePostModalVisible}
          toggle={toggleChangePostModal}
          id={currentPostId}
          title={postTitle}
          setTitle={setPostTitle}
          body={postBody}
          setBody={setPostBody}
        />
        <View style={styles.btnContainer}>
          <ToggleButton toggle={handleAddPostModal} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
