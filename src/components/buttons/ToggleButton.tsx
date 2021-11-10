import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import {IComment} from '../../redux/types/CommentTypes';
import {IPost} from '../../redux/types/PostTypes';

interface IToggleButtonProps {
  buttonIcon: JSX.Element;
  toggle(boolean: boolean): void;
  content?: IComment | IPost;
  setContent?(comment: IComment | IPost): void;
}

export const ToggleButton: React.FC<IToggleButtonProps> = ({
  buttonIcon,
  toggle,
  content,
  setContent,
}) => {
  const pressHandler = () => {
    if (content && setContent) {
      setContent(content);
    }

    toggle(true);
  };
  return (
    <TouchableOpacity style={styles.circle} onPress={pressHandler}>
      {buttonIcon}
    </TouchableOpacity>
  );
};
