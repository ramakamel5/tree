import React, { useState } from 'react';
import TreeNode from './TreeNode';

const Tree = ({ data }) => {
  const [expandedParentNode, setExpandedParentNode] = useState(null); // Track the expanded parent
  const [expandedChildNodes, setExpandedChildNodes] = useState({}); // Track the expanded child nodes

  // Toggle function to expand/collapse nodes
  const handleToggle = (nodeId, isParent) => {
    if (isParent) {
      setExpandedParentNode((prevState) => (prevState === nodeId ? null : nodeId)); // Toggle parent node
    } else {
      setExpandedChildNodes((prevState) => ({
        ...prevState,
        [nodeId]: !prevState[nodeId], // Toggle child node
      }));
    }
  };

  // Function to get the child nodes of a parent node
  const getChildrenNodes = (parentId) => {
    const parentNode = data.find((node) => node.id === parentId);
    return parentNode?.children
      ? data.filter((node) => parentNode.children.includes(node.id))
      : [];
  };

  // Function to find the top-level nodes (nodes that don't have a parent)
  const getRootNodes = () => {
    const childNodeIds = data.flatMap(node => node.children);
    return data.filter(node => !childNodeIds.includes(node.id)); // Nodes not listed as children anywhere
  };

  return (
    <div className="tree">
      <ul>
        {getRootNodes().map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            isExpanded={expandedParentNode === node.id} // Handle parent-specific expansion state
            onToggle={handleToggle}
            getChildrenNodes={getChildrenNodes}
            expandedChildNodes={expandedChildNodes} // Pass expanded child nodes
            isParent
          />
        ))}
      </ul>
    </div>
  );
};

export default Tree;
