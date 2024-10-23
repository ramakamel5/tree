import React, { useState } from 'react';
import TreeNode from './TreeNode';

const Tree = ({ data }) => {
  const [expandedParentNode, setExpandedParentNode] = useState(null);
  const [expandedChildNodes, setExpandedChildNodes] = useState({});

  const handleExpandParent = (node) => {
    setExpandedParentNode((prevNode) =>
      prevNode === node.parentId ? null : node.parentId
    );
  };

  const handleExpandChild = (childNodeName) => {
    setExpandedChildNodes((prevState) => ({
      ...prevState,
      [childNodeName]: !prevState[childNodeName],
    }));
  };

  const getRootNodes = (nodes) => {
    return nodes.filter(
      (node) => node.parentId 
    );
  };

  const getChildrenNodes = (parentId) => {
    console.log(parentId,'firstNode')
    return data.filter(
      
      (node) => node.parentIds.includes(parentId)
    );
  };

  const rootNodes = getRootNodes(data);
  console.log(rootNodes,'rootNodes')
  return (
    <div className="tree">
      <ul>
        {rootNodes.map((node, index) => (
          <TreeNode
            key={index}
            node={node}
            expandedParentNode={expandedParentNode}
            expandedChildNodes={expandedChildNodes}
            handleExpandParent={handleExpandParent}
            handleExpandChild={handleExpandChild}
            getChildrenNodes={getChildrenNodes}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tree;
