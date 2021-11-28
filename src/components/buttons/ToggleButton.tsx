import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import {IComment} from '../../redux/types/CommentTypes';
import {IPost} from '../../redux/types/PostTypes';
import {EditIcon} from '../../icons/EditIcon';
import {AddIcon} from '../../icons/AddIcon';

interface IToggleButtonProps {
  toggle(boolean: boolean): void;
  content?: IComment | IPost;
  setContent?(comment: IComment | IPost): void;
}

export const ToggleButton: React.FC<IToggleButtonProps> = ({
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
      {content ? <EditIcon /> : <AddIcon />}
    </TouchableOpacity>
  );
};
