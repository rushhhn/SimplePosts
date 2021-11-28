import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {TPostActions} from '../../redux/types/PostTypes';
import {TCommentActions} from '../../redux/types/CommentTypes';
import {DeleteIcon} from '../../icons/DeleteIcon';

interface IDeleteButtonProps {
  action(
    id: number,
  ): (dispatch: Dispatch<TPostActions | TCommentActions>) => Promise<void>;
  payload: number;
}

export const DeleteButton: React.FC<IDeleteButtonProps> = ({
  action,
  payload,
}) => {
  const dispatch = useDispatch();
  const pressHandler = () => {
    dispatch(action(payload));
  };
  return (
    <TouchableOpacity style={styles.circle} onPress={pressHandler}>
      <DeleteIcon />
    </TouchableOpacity>
  );
};
