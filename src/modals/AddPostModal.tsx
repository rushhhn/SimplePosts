import React, {useState} from 'react';
import {View, Modal, ImageBackground} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from '../styles/styles';
import {AddPostButton} from '../components/buttons/AddPostButton';
import {addPost} from '../redux/actions/postActions';
import {useTypedSelector} from '../redux/hooks/typedSelectors';

interface IAddModalProps {
  visible: boolean;
  toggle(boolean: boolean): void;
}

export const AddPostModal: React.FC<IAddModalProps> = ({visible, toggle}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const posts = useTypedSelector(state => state.postsReducer.posts);
  const lastPostId = posts.length > 0 ? posts[posts.length - 1].id : 0;
  const nextId = lastPostId + 1;

  const newPost = {
    id: nextId,
    title,
    body,
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => toggle(false)}>
      <ImageBackground
        source={require('../img/screenBG.jpg')}
        style={styles.bg}>
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            value={title}
            onChangeText={text => setTitle(text)}
            style={styles.textInput}
            placeholder="Subject"
            placeholderTextColor="grey"
            multiline
            maxLength={40}
          />
          <TextInput
            value={body}
            onChangeText={text => setBody(text)}
            style={styles.textInput}
            placeholder="What's on ur mind?"
            placeholderTextColor="grey"
            multiline
            maxLength={1000}
          />
        </View>
        <AddPostButton
          buttonName="Add post"
          toggle={toggle}
          action={addPost}
          content={newPost}
          setTitle={setTitle}
          setBody={setBody}
        />
      </ImageBackground>
    </Modal>
  );
};
