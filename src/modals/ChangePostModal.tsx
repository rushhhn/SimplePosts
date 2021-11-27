import React from 'react';
import {View, Modal, TextInput, ImageBackground} from 'react-native';
import {ChangeButton} from '../components/buttons/ChangeButton';
import {changePost} from '../redux/actions/postActions';
import {styles} from '../styles/styles';

interface IChangePostModalProps {
  visible: boolean;
  toggle(boolean: boolean): void;
  id: number;
  title: string;
  setTitle(title: string): void;
  body: string;
  setBody(body: string): void;
}

export const ChangePostModal: React.FC<IChangePostModalProps> = ({
  visible,
  toggle,
  id,
  title,
  setTitle,
  body,
  setBody,
}) => {
  const newPost = {
    id,
    title,
    body,
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => toggle(false)}
      animationType="slide">
      <ImageBackground
        source={require('../img/screenBG.jpg')}
        style={styles.bg}>
        <View style={styles.inputContainer}>
          <TextInput
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder="Subject"
            placeholderTextColor="grey"
            style={styles.textInput}
          />
          <TextInput
            value={body}
            onChangeText={text => setBody(text)}
            placeholder="What's on ur mind?"
            placeholderTextColor="grey"
            style={styles.textInput}
          />
        </View>
        <ChangeButton
          buttonName="V"
          action={changePost}
          payload={newPost}
          toggle={toggle}
        />
      </ImageBackground>
    </Modal>
  );
};
