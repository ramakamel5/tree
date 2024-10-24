import React, { useState } from 'react';
import Tree from './components/Tree';
import './styles.css';

const data = [
  {
    id: '1',
    children: ['2', '3', '4','7', '6', '5', '8', '9', '11','10'],
    name: 'John Doe',
    jobDescription: 'Team Lead',
    friends: 51,
    trainedDays: 50,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
  {
    id: '2',
    name: 'Mouhammad Ali',
    children: [],
    jobDescription: 'Team Lead',
    friends: 51,
    trainedDays: 50,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
    {
    id: '2',
    name: 'Mouhammad Ali',
    children: [],
    jobDescription: 'Team Lead',
    friends: 51,
    trainedDays: 50,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
  {
    id: '3',
    name: 'Ali Doe',
    children: [],
    jobDescription: 'Developer',
    trainedDays: 25,
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
  {
    id: '4',
    name: 'David Lee',
    jobDescription: 'Junior Developer',
    trainedDays: 5,
    children: [],
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
    {
    id: '5',
    name: 'poe',
    jobDescription: 'soft Developer',
    trainedDays: 5,
    children: ['12'],
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
    {
    id: '6',
    name: 'boby',
    jobDescription: 'soft Developer',
    trainedDays: 5,
    children: [],
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
   {
    id: '7',
    name: 'kamel',
    jobDescription: 'soft Developer',
    trainedDays: 5,
    children: [],
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
      {
    id: '8',
    name: 'bob',
    jobDescription: 'soft Developer',
    trainedDays: 5,
    children: [],
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
   {
    id: '9',
    name: 'kamel',
    jobDescription: 'soft Developer',
    trainedDays: 5,
    children: [],
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },    {
    id: '10',
    name: 'kope',
    jobDescription: 'soft Developer',
    trainedDays: 5,
    children: [],
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
   {
    id: '11',
    name: 'kamel',
    jobDescription: 'soft Developer',
    trainedDays: 5,
    children: [],
    imageFileUrl: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
  },
     {
    id: '12',
    name: 'samer',
    jobDescription: 'soft Developer',
    trainedDays: 5,
    children: [],
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
            filterTree(
              nodes.filter(child => node.children.includes(child.id)),
              query
            ).length > 0);

        if (!hasMatch) {
          return null;
        }

        return {
          ...node,
          children: node.children
            ? filterTree(
                nodes.filter(child => node.children.includes(child.id)),
                query
              )
            : [],
        };
      })
      .filter(node => node !== null);
  };

  const filteredData = filterTree(data, searchTerm);

  return (
    <div className="app-container">
      <h1>Team Leads and Developers Training Tree</h1>

      <div className="search-box-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tree data={filteredData} />
    </div>
  );
};

export default App;
