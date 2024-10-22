import React, { useState } from 'react';
import Tree from './components/Tree';
import './styles.css';
const data = [
  {
    name: 'John Doe',
    jobDescription: 'Team Lead',
    parentId: '1',
    friends: 51,
    trainedDays: 50,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
    children: [
      {
        name: 'Jane Doe',
        jobDescription: 'Developer',
        chiledId: '1',
        trainedDays: 25,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
        children: [
          {
            name: 'Bob Smith',
            jobDescription: 'Sub Developer',
            SubchiledId: '1',
            trainedDays: 10,
            imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
          },
          {
            name: 'Alice Johnson',
            jobDescription: 'Sub Developer',
            SubchiledId: '2',
            trainedDays: 15,
            imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
          },
          {
            name: 'Michael Brown',
            jobDescription: 'Sub Developer',
            SubchiledId: '3',
            trainedDays: 18,
            imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
          },
        ],
      },
      {
        name: 'Emily Davis',
        jobDescription: 'Developer',
        trainedDays: 30,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Sarah Taylor',
        jobDescription: 'Developer',
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'David Lee',
        jobDescription: 'Junior Developer',
        trainedDays: 5,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
    ],
  },
  {
    name: 'Lisa Nguyen',
    jobDescription: 'Team Lead',
    parentId: '2',
    trainedDays: 40,
    friends: 51,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
    children: [
      {
        name: 'Kevin White',
        jobDescription: 'Developer',
        trainedDays: 35,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Olivia Martin',
        jobDescription: 'Developer',
        trainedDays: 20,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'William Harris',
        jobDescription: 'Senior Developer',
        trainedDays: 45,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Rachel Patel',
        jobDescription: 'Developer',
        chiledId: '4',
        trainedDays: 25,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
        children: [
          {
            name: 'Alex Chen',
            jobDescription: 'Intern',
            SubchiledId: '1',
            trainedDays: 3,
            imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
          },
        ],
      },
    ],
  },
  {
    name: 'James Kim',
    jobDescription: 'Team Lead',
    parentId: '3',
    trainedDays: 55,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
    children: [
      {
        name: 'Kate Lee',
        jobDescription: 'Developer',
        trainedDays: 40,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Justin Kim',
        jobDescription: 'Developer',
        trainedDays: 30,
        imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      },
      {
        name: 'Sophia Patel',
        jobDescription: 'Junior Developer',
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

