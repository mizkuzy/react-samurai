import {
  sendNewMessageActionCreator,
  onUpdateNewMessageTextActionCreator,
} from "../../redux/actionCreators";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";

const mapsToProps = (state) => ({
  dialogues: state.dialogues.dialogues,
  messages: state.dialogues.messages,
  newMessageText: state.dialogues.newMessageText,
});

const mapsToDispatch = (dispatch) => ({
  sendMessage: () => {
    dispatch(sendNewMessageActionCreator());
  },
  updateNewMessageText: (text) => {
    dispatch(onUpdateNewMessageTextActionCreator(text));
  },
});

export default connect(mapsToProps, mapsToDispatch)(Dialogues);
