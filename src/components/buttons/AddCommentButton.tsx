import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {IComment, TCommentActions} from '../../redux/types/CommentTypes';
import {AddIcon} from '../../icons/AddIcon';

interface IAddButtonProps {
  buttonName: string;
  toggle(boolean: boolean): void;
  action(
    content: IComment,
  ): (dispatch: Dispatch<TCommentActions>) => Promise<void>;
  content: IComment;
  setText(str: string): void;
}

export const AddCommentButton: React.FC<IAddButtonProps> = ({
  buttonName,
  toggle,
  action,
  content,
  setText,
}) => {
  const dispatch = useDispatch();

  const pressHandler = () => {
    if (content.text === '') {
      return;
    }

    toggle(false);
    dispatch(action(content));

    if (content.text !== '' && setText) {
      setText('');
    }
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={pressHandler}>
      <Text style={styles.text}> {buttonName} </Text>
      <View style={styles.circle}>
        <AddIcon />
      </View>
    </TouchableOpacity>
  );
};
