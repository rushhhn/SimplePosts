import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {TPostActions} from '../../redux/types/PostTypes';
import {IPost} from '../../redux/types/PostTypes';
import {IComment, TCommentActions} from '../../redux/types/CommentTypes';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IChangeButtonProps {
  buttonName: string;
  action(
    payload: IPost | IComment,
  ): (dispatch: Dispatch<TPostActions | TCommentActions>) => Promise<void>;
  payload: IPost | IComment;
  toggle(boolean: boolean): void;
}

export const ChangeButton: React.FC<IChangeButtonProps> = ({
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
    <TouchableOpacity style={styles.circle} onPress={pressHandler}>
      <Icon name="edit" size={18} color="white" />
    </TouchableOpacity>
  );
};
