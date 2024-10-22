import React, { useState } from 'react';
import TreeNode from './TreeNode';
import { List } from 'react-virtualized';

const Tree = ({ data }) => {
  const [expandedParentNode, setExpandedParentNode] = useState(null);
  const [expandedChildNodes, setExpandedChildNodes] = useState({}); 

  const handleExpandParent = (node) => {
    if (expandedParentNode === node.name) {
      setExpandedParentNode(null);
    } else {
      setExpandedParentNode(node.name);
    }
  };

  const handleExpandChild = (parentNodeName, childNodeName) => {
    setExpandedChildNodes((prevState) => ({
      ...prevState,
      [childNodeName]: !prevState[childNodeName], 
    }));
  };


  const filterNodesWithParentId = (nodes) => {
    return nodes.filter((node) => node.parentId); 
  };

  const filteredData = filterNodesWithParentId(data); 

  return (
    <div className="tree">
      <ul>
        {filteredData.map((node, index) => (
          <TreeNode
            key={index}
            node={node}
            expandedParentNode={expandedParentNode} 
            expandedChildNodes={expandedChildNodes} 
            handleExpandParent={handleExpandParent}
            handleExpandChild={handleExpandChild} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Tree;