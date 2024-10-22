import React from 'react';
import '../styles.css';
import CustomBox from './CustomBox';

const TreeNode = ({ node, expandedParentNode, expandedChildNodes, handleExpandParent, handleExpandChild }) => {
  const isParentExpanded = expandedParentNode === node.name;

  return (
    <li className="tree-node">
      <CustomBox
        childNode={node}
        onClick={() => handleExpandParent(node)}
      />
      {node.children && isParentExpanded && (
        <ul>
          {node.children.map((childNode, index) => (
            <li key={index} className="tree-node">
              <CustomBox
                childNode={childNode}
                onClick={() => handleExpandChild(node.name, childNode.name)}
              />

              {childNode.children && expandedChildNodes[childNode.name] && (
                <ul>
                  {childNode.children.map((subChild, index) => (
                    <li key={index} className="tree-node">
                      <CustomBox
                        childNode={subChild}
                        onClick={() => handleExpandChild(node.name, subChild.name)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;