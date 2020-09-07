import { sendMessage, updateNewMessageText } from "../../redux/actionCreators";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import withLoginRedirect from "../../hoc/withLoginRedirect";

const withLoginRedirectDialogues = withLoginRedirect(Dialogues);

const mapsToProps = (state) => ({
  dialogues: state.dialogues.dialogues,
  messages: state.dialogues.messages,
  newMessageText: state.dialogues.newMessageText,
});

export default connect(mapsToProps, {
  sendMessage,
  updateNewMessageText,
})(withLoginRedirectDialogues);
