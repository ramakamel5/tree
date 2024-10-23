import React, { useState } from 'react';
import Tree from './components/Tree';
import './styles.css';
const data = [
    {
    name: 'John Doe',
    jobDescription: 'Team Lead',
    parentId: '1', 
    friends: 51,
    parentIds: [],
    trainedDays: 50,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
    },
    {
    name: 'Mouhammad Ali',
    jobDescription: 'Team Lead',
    parentId: '2', 
    friends: 51,
    parentIds: [],
    trainedDays: 50,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
  {
    name: 'ali Doe',
    jobDescription: 'Developer',
    parentId: null,
    parentIds: ['1'],
    trainedDays: 25,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
  {
    name: 'David Lee',
    jobDescription: 'Junior Developer',
    parentId: '3', 
    parentIds: ['1','2'],
    trainedDays: 5,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
    {
    name: 'Jounior David Lee',
    jobDescription: 'Junior Developer',
    parentId: null, 
    parentIds: ['3'],
    trainedDays: 5,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterTree = (nodes, query) => {
    if (!query) return nodes;

    return nodes
      .map(node => {
        const hasMatch =
          node.name.toLowerCase().includes(query.toLowerCase()) ||
          (node.children &&
            filterTree(node.children, query).length > 0);

        if (!hasMatch) {
          return null;
        }
        return {
          ...node,
          children: node.children
            ? filterTree(node.children, query)
            : [],
        };
      })
      .filter(node => node !== null);
  };

  const filteredData = filterTree(data, searchTerm);

  return (
    <div>
      <h1>Team Leads and Developers Training Tree</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display the filtered tree */}
      <Tree data={filteredData} />
    </div>
  );
};

export default App;

