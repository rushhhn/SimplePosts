import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {TPostActions} from '../../redux/types/PostTypes';
import {TCommentActions} from '../../redux/types/CommentTypes';

interface IDeleteButtonProps {
  action(
    id: number,
  ): (dispatch: Dispatch<TPostActions | TCommentActions>) => Promise<void>;
  payload: number;
  buttonIcon: JSX.Element;
}

export const DeleteButton: React.FC<IDeleteButtonProps> = ({
  action,
  payload,
  buttonIcon,
}) => {
  const dispatch = useDispatch();
  const pressHandler = () => {
    dispatch(action(payload));
  };
  return (
    <TouchableOpacity style={styles.circle} onPress={pressHandler}>
      {buttonIcon}
    </TouchableOpacity>
  );
};
