import {addComment} from '../redux/actions/commentActions';
import React, {useState} from 'react';
import {View, ImageBackground, Modal, TextInput} from 'react-native';
import {AddCommentButton} from '../components/buttons/AddCommentButton';
import {styles} from '../styles/styles';

interface IAddCommentModal {
  visible: boolean;
  toggle(boolean: boolean): void;
  nextCommentId: number;
  parentId: number;
}

export const AddCommentModal: React.FC<IAddCommentModal> = ({
  visible,
  toggle,
  nextCommentId,
  parentId,
}) => {
  const [text, setText] = useState('');
  const newComment = {
    postId: parentId + 1,
    id: nextCommentId,
    text,
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => {
        toggle(false);
        setText('');
      }}
      animationType="slide">
      <ImageBackground
        source={require('../img/screenBG.jpg')}
        style={styles.bg}>
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            autoCapitalize="sentences"
            multiline
            value={text}
            onChangeText={txt => setText(txt)}
            placeholder="Write ur comment"
            placeholderTextColor="grey"
            style={styles.textInput}
          />
        </View>
        <AddCommentButton
          buttonName="Add comment"
          toggle={toggle}
          action={addComment}
          content={newComment}
          setText={setText}
        />
      </ImageBackground>
    </Modal>
  );
};
