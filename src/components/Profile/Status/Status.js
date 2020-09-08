import React from "react";

class Status extends React.Component {
  state = {
    editMode: false,
    text: this.props.text,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.text !== this.props.text) {
      this.setState({
        text: this.props.text,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  onBlurClick = (e) => {
    this.deactivateEditMode();
    this.props.updateStatus(e.currentTarget.value);
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  onStatusChange = (e) => {
    this.setState({
      text: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.text || "DOUBLE CLICK TO UPDATE A STATUS"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onChange={this.onStatusChange}
              onBlur={this.onBlurClick}
              value={this.state.text}
            />
          </div>
        )}
      </>
    );
  }
}

export default Status;
