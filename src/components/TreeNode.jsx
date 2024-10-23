import React from 'react';
import CustomBox from './CustomBox';

const TreeNode = ({
  node,
  expandedParentNode,
  expandedChildNodes,
  handleExpandParent,
  handleExpandChild,
  getChildrenNodes
}) => {
  const isParentExpanded = expandedParentNode === node.parentId;
  const childrenNodes = getChildrenNodes(node.parentId);
  
  console.log(childrenNodes, 'children');
  console.log(node, 'node');
  
  return (
    <li>
      <CustomBox childNode={node} onClick={() => handleExpandParent(node)} />
      {isParentExpanded && childrenNodes.length > 0 && (
        <ul>
          {childrenNodes.map((childNode, index) => (
            <TreeNode
              key={index}
              node={childNode}
              expandedParentNode={expandedParentNode}
              expandedChildNodes={expandedChildNodes}
              handleExpandParent={handleExpandParent}
              handleExpandChild={handleExpandChild}
              getChildrenNodes={getChildrenNodes}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
