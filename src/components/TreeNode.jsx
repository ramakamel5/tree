import React from 'react';
import CustomBox from './CustomBox';
import '../styles.css'; // Import the CSS file

const TreeNode = ({ node, isExpanded, onToggle, getChildrenNodes, expandedChildNodes, isParent }) => {
  const childrenNodes = getChildrenNodes(node.id);
  
  const shouldScroll = childrenNodes.length > 10; // Check if there are more than 5 children

  return (
    <li>
      {/* Render the node content */}
      <CustomBox childNode={node} onClick={() => onToggle(node.id, isParent)} />
      {/* Conditionally render child nodes if this node is expanded */}
      {isExpanded && childrenNodes.length > 0 && (
        <ul className={`child-nodes ${shouldScroll ? 'scrollable' : ''}`}>
          {childrenNodes.map((childNode) => (
            <TreeNode
              key={childNode.id}
              node={childNode}
              isExpanded={!!expandedChildNodes[childNode.id]} // Handle child node expansion state
              onToggle={onToggle} // Pass down the toggle function
              getChildrenNodes={getChildrenNodes}
              expandedChildNodes={expandedChildNodes} // Continue passing the expanded state for children
              isParent={false} // Children nodes are not parent nodes
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode
