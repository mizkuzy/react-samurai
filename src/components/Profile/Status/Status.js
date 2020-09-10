import React, { useEffect, useState } from "react";

const Status = ({ text, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus(text);
  }, [text]);

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  const onBlurClick = (e) => {
    deactivateEditMode();
    updateStatus(e.currentTarget.value);
  };

  return (
      <>
        {!editMode && (
            <div>
          <span onDoubleClick={activateEditMode}>
            {text || "DOUBLE CLICK TO UPDATE A STATUS"}
          </span>
            </div>
        )}
        {editMode && (
            <div>
              <input
                  autoFocus={true}
                  onChange={onStatusChange}
                  onBlur={onBlurClick}
                  value={status}
              />
            </div>
        )}
      </>
  );
};

export default Status;
