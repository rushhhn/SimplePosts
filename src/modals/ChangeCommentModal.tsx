import React from 'react';
import {View, Modal, TextInput, ImageBackground} from 'react-native';
import {ChangeButton} from '../components/buttons/ChangeButton';
import {changeComment} from '../redux/actions/commentActions';
import {IComment} from '../redux/types/CommentTypes';
import {styles} from '../styles/styles';

interface IChangeCommentModal {
  visible: boolean;
  toggle(boolean: boolean): void;
  comment: IComment;
  setComment(newComment: IComment): void;
}

export const ChangeCommentModal: React.FC<IChangeCommentModal> = ({
  visible,
  toggle,
  comment,
  setComment,
}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={() => toggle(false)}
      animationType="slide">
      <ImageBackground
        source={require('../img/screenBG.jpg')}
        style={styles.bg}>
        <View style={styles.textInputContainer}>
          <TextInput
            autoFocus
            multiline
            autoCapitalize="sentences"
            value={comment.text}
            onChangeText={text => setComment({...comment, text: text})}
            placeholder="Add ur comment"
            placeholderTextColor="grey"
            style={styles.textInput}
          />
        </View>
        <ChangeButton
          buttonName="P"
          action={changeComment}
          payload={comment}
          toggle={toggle}
        />
      </ImageBackground>
    </Modal>
  );
};
