import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

function CustomBox({ childNode, onClick }) {
  const hasTrainedDays = childNode.trainedDays !== undefined && childNode.trainedDays !== null;
  const hasFriends = childNode.friends !== undefined && childNode.friends !== null;

  return (
    <>
      <div className="node-box">
        <a href="#" onClick={onClick} className="node-content">
          {childNode.imageFileUrl && (
            <img src={childNode.imageFileUrl} alt={childNode.name} className="node-image" />
          )}
          <div className="node-text">
            <div className="node-name">{childNode.name}</div>
            <div className="node-job-description">
              {childNode.jobDescription}
            </div>
          </div>
        </a>
      </div>
      {(hasTrainedDays || hasFriends) && (
        <div className="trained-days-box">
          {hasTrainedDays && (
            <div>
              <MdPerson size={20} className="trained-days-icon" />
              <span className="trained-days-text">{childNode.trainedDays}</span>
            </div>
          )}
          {hasFriends && (
            <div>
              <FaUserFriends size={20} className="trained-days-icon" />
              <span className="trained-days-text">{childNode.friends}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CustomBox;


