import { sendMessage, updateNewMessageText } from "../../redux/actionCreators";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { compose } from "redux";
import withLoginRedirect from "../../hoc/withLoginRedirect";

const mapsToProps = (state) => ({
  dialogues: state.dialogues.dialogues,
  messages: state.dialogues.messages,
  newMessageText: state.dialogues.newMessageText,
});

export default compose(
  withLoginRedirect,
  connect(mapsToProps, {
    sendMessage,
    updateNewMessageText,
  })
)(Dialogues);
