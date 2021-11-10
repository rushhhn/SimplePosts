import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  flatlist: {
    alignSelf: 'stretch',
    paddingVertical: 20,
    marginTop: 30,
  },
  card: {
    alignSelf: 'center',
    width: 0.75 * width,
    backgroundColor: 'grey',
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
  },
  cardContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardHeader: {
    backgroundColor: 'coral',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardHeaderText: {
    color: 'grey',
    borderColor: 'grey',
    margin: 5,
  },
  postBody: {
    paddingVertical: 20,
  },
  comment: {
    width: 0.75 * width,
    marginHorizontal: 5,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    padding: 20,
    margin: 20,
  },
  btnContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 40,
  },
  textInput: {
    width: 0.8 * width,
    color: 'white',
    backgroundColor: 'coral',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 5,
  },
  textInputContainer: {
    marginVertical: 30,
  },
  circle: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
    padding: 5,
    borderRadius: 100,
    backgroundColor: 'coral',
    elevation: 5,
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal: 5,
  },
  commentText: {color: 'grey', textAlign: 'left', marginHorizontal: 5},
});
