import React, { useState } from 'react';
import Tree from './components/Tree';
import './styles.css';
const data = [
  {
    name: 'Team Lead 1',
    parentId: '1',
    trainedDays: 50,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
    children: [
      {
        name: 'Developer 1',
        chiledId: '1',
        trainedDays: 25,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
        children: [
          {
            name: 'Sub Developer 1',
            SubchiledId: '1',
            trainedDays: 10,
            imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
          },
          {
            name: 'Sub Developer 2',
            SubchiledId: '2',
            trainedDays: 15,
            imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
          },
          {
            name: 'Sub Developer 3',
            SubchiledId: '3',
            trainedDays: 18,
            imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
          },
        ],
      },
      {
        name: 'Developer 2',
        trainedDays: 30,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Developer 3',
        trainedDays: 20,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Junior Developer 1',
        trainedDays: 5,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
    ],
  },
  {
    name: 'Team Lead 2',
    parentId: '2',
    trainedDays: 40,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
    children: [
      {
        name: 'Developer 4',
        trainedDays: 35,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Developer 5',
        trainedDays: 20,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Senior Developer 1',
        trainedDays: 45,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Developer 6',
        chiledId: '4',
        trainedDays: 25,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
        children: [
          {
            name: 'Intern 1',
            SubchiledId: '1',
            trainedDays: 3,
            imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
          },
        ],
      },
    ],
  },
  {
    name: 'Team Lead 3',
    parentId: '3',
    trainedDays: 55,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
    children: [
      {
        name: 'Developer 7',
        trainedDays: 40,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Developer 8',
        trainedDays: 30,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Junior Developer 2',
        trainedDays: 12,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
    ],
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
