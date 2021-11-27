import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {styles} from '../styles/styles';
import {useDispatch} from 'react-redux';
import {fetchComments} from '../redux/actions/commentActions';
import {IComment} from '../redux/types/CommentTypes';
import {useTypedSelector} from '../redux/hooks/typedSelectors';
import {deleteComment} from '../redux/actions/commentActions';
import {DeleteButton} from '../components/buttons/DeleteButton';
import {ChangeCommentModal} from '../modals/ChangeCommentModal';
import {AddCommentModal} from '../modals/AddCommentModal';
import {ToggleButton} from './buttons/ToggleButton';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ICommentsProps {
  postId: number;
}

export const Comments: React.FC<ICommentsProps> = ({postId}) => {
  const dispatch = useDispatch();
  const {isLoading, error, comments} = useTypedSelector(
    state => state.commentsReducer,
  );
  const mockPost = {
    postId: 0,
    id: 0,
    text: '',
  };
  const [currentComment, setCurrentComment] = useState(mockPost);
  const [addCommentModalVisible, toggleChangeCommentModalVisible] =
    useState(false);
  const [addCommentModal, toggleAddCommentModal] = useState(false);

  const thisPostComments = comments.filter(
    (comment: IComment) => comment.postId === postId + 1,
  );

  let nextCommentId = 1;
  if (thisPostComments.length) {
    nextCommentId = thisPostComments[thisPostComments.length - 1].id + 1;
  }

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const handleAddCommentModal = (item: IComment) => {
    setCurrentComment(item);
  };

  const renderItem = ({item}: {item: IComment}) => {
    return (
      <View style={styles.commentContainer}>
        <DeleteButton
          buttonIcon={deleteIcon}
          action={deleteComment}
          payload={item.id}
        />
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            {item.id} {item.text}
          </Text>
        </View>
        <ToggleButton
          buttonIcon={editIcon}
          toggle={toggleChangeCommentModalVisible}
          setContent={handleAddCommentModal}
          content={item}
        />
      </View>
    );
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="white" style={{flex: 1}} />;
  }

  if (error) {
    return <View style={styles.screen}>{error}</View>;
  }

  return (
    <>
      <FlatList
        data={thisPostComments}
        renderItem={renderItem}
        style={styles.flatlist}
      />
      <ChangeCommentModal
        visible={addCommentModalVisible}
        toggle={toggleChangeCommentModalVisible}
        comment={currentComment}
        setComment={setCurrentComment}
      />
      <AddCommentModal
        visible={addCommentModal}
        toggle={toggleAddCommentModal}
        nextCommentId={nextCommentId}
        parentId={postId}
      />
      <View style={styles.btnContainer}>
        <ToggleButton buttonIcon={addIcon} toggle={toggleAddCommentModal} />
      </View>
    </>
  );
};

const addIcon = <Icon name="add" size={18} color="white" />;
const editIcon = <Icon name="edit" size={18} color="white" />;
const deleteIcon = <Icon name="delete" size={18} color="white" />;
