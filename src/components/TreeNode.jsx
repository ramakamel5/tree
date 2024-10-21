import React, { useState } from 'react';
import '../styles.css';
const TreeNode = ({ node, expandedParentNode, expandedChildNodes, handleExpandParent, handleExpandChild }) => {
  const isParentExpanded = expandedParentNode === node.name;

  return (
    <li className="tree-node">
      <div className="node-box">
        <a href="#" onClick={() => handleExpandParent(node)} className="node-content">
          {node.imageFileUrl && (
            <img src={node.imageFileUrl} alt={node.name} className="node-image" />
          )}
          <div className="node-text">
            <div className="node-name">{node.name}</div>
            <div className="node-days">Days Trained: {node.trainedDays}</div>
          </div>
        </a>
      </div>

      {/* Only display children if parent is expanded */}
      {node.children && isParentExpanded && (
        <ul>
          {node.children.map((childNode, index) => (
            <li key={index} className="tree-node">
              <div className="node-box">
                {/* Child click handling */}
                <a
                  href="#"
                  onClick={() => handleExpandChild(node.name, childNode.name)}
                  className="node-content"
                >
                  {childNode.imageFileUrl && (
                    <img src={childNode.imageFileUrl} alt={childNode.name} className="node-image" />
                  )}
                  <div className="node-text">
                    <div className="node-name">{childNode.name}</div>
                    <div className="node-days">Days Trained: {childNode.trainedDays}</div>
                  </div>
                </a>
              </div>

              {/* Sub-children expansion */}
              {childNode.children && expandedChildNodes[childNode.name] && (
                <ul>
                  {childNode.children.map((subChild, index) => (
                    <li key={index} className="tree-node">
                      <div className="node-box">
                        <a href="#" className="node-content">
                          {subChild.imageFileUrl && (
                            <img src={subChild.imageFileUrl} alt={subChild.name} className="node-image" />
                          )}
                          <div className="node-text">
                            <div className="node-name">{subChild.name}</div>
                            <div className="node-days">Days Trained: {subChild.trainedDays}</div>
                          </div>
                        </a>
                      </div>
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

