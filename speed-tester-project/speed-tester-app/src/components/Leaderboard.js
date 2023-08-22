import React, { useState, useEffect } from 'react';
import LeaderboardService from '../services/LeaderboardService';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    const response = await LeaderboardService.getLeaderboard(); // You would implement this service.
    setScores(response.scores);
  };

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.username}: {score.score} WPM
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
