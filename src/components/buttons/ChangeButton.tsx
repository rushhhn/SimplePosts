import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../../styles/styles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {TPostActions} from '../../redux/types/PostTypes';
import {IPost} from '../../redux/types/PostTypes';
import {IComment, TCommentActions} from '../../redux/types/CommentTypes';
import {EditIcon} from '../../icons/EditIcon';

interface IChangeButtonProps {
  buttonName: string;
  action(
    payload: IPost | IComment,
  ): (dispatch: Dispatch<TPostActions | TCommentActions>) => Promise<void>;
  payload: IPost | IComment;
  toggle(boolean: boolean): void;
}

export const ChangeButton: React.FC<IChangeButtonProps> = ({
  buttonName,
  action,
  payload,
  toggle,
}) => {
  const dispatch = useDispatch();

  const pressHandler = () => {
    dispatch(action(payload));
    toggle(false);
  };
  return (
    <TouchableOpacity style={styles.btn} onPress={pressHandler}>
      <Text style={styles.text}>{buttonName}</Text>
      <View style={styles.circle}>
        <EditIcon />
      </View>
    </TouchableOpacity>
  );
};
