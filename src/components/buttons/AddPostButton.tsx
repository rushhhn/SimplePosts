import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import {useDispatch} from 'react-redux';
import {IPost, TPostActions} from '../../redux/types/PostTypes';
import {Dispatch} from 'redux';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IAddButtonProps {
  buttonName: string;
  toggle(boolean: boolean): void;
  action(content: IPost): (dispatch: Dispatch<TPostActions>) => Promise<void>;
  content: IPost;
  setTitle?(str: string): void;
  setBody(str: string): void;
}

export const AddPostButton: React.FC<IAddButtonProps> = ({
  buttonName,
  toggle,
  action,
  content,
  setTitle,
  setBody,
}) => {
  const dispatch = useDispatch();

  const pressHandler = () => {
    if (content.body === '' || content.title === '') {
      return;
    }
    toggle(false);
    dispatch(action(content));

    if (content.title !== '' && setTitle) {
      setTitle('');
    }
    setBody('');
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={pressHandler}>
      <Text style={styles.text}> {buttonName} </Text>
      <View style={styles.circle}>
        <Icon name="add" size={18} color="white" />
      </View>
    </TouchableOpacity>
  );
};
