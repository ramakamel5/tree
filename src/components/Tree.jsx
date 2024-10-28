import React, { useState } from 'react';
import TreeNode from './TreeNode';

const Tree = ({ data }) => {
  const [isLeaderExpanded, setIsLeaderExpanded] = useState(false);
  const [previousNode, setPreviousNode] = useState(null);
    console.log("data",data);

  const handleToggleLeader = () => {
    setIsLeaderExpanded((prev) => !prev);
    setPreviousNode(null);
    console.log("Leader node clicked, sending empty request");
  };


  const handleChildClick = (childNode) => {
    console.log("Child node clicked", childNode);
    console.log("Previous node:", previousNode);
    setPreviousNode(childNode); 
  };

  return (
    <div className="tree">
      <ul>
        <TreeNode
          node={{ name: "Leader", number_of_hadiths: 0 }} // Placeholder for leader
          onToggle={handleToggleLeader}
          childrenData={data} // Pass the child nodes data here
          onChildClick={handleChildClick} // Pass the click handler for children
          isDataPresent={false}
        />
      </ul>
    </div>
  );
};

export default Tree;
