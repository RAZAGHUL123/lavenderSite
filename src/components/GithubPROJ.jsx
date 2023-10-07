import React from 'react';
import './GithubPROJ.css'; // Import your custom CSS file

function GithubPROJ() {
  // Sample user data
  const users = [
    { id: 1, name: 'Project 1', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' },
    { id: 2, name: 'Project 2', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' },
    { id: 3, name: 'Project 3', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' },
    { id: 4, name: 'Project 4', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' },
    { id: 5, name: 'Project 5', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' },
    // Add more users as needed
  ];

  return (
    <div className="container">
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.image}
              alt={user.name}
              className="profile-image"
            />
            <div className="user-name">{user.name}</div>
          </div>
        ))}
      </div>
      <div className="user-list">
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GithubPROJ;
