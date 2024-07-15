import React, { useState, useEffect } from 'react';
import { getActivities } from '../api/api';
import { useAuth } from '../context/AuthContext';

interface Activity {
  id: number;
  userId: string;
  type: string;
  date: string;
  description: string;
}

const ActivityLogs: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      getActivities(token).then((response) => setActivities(response.data));
    }
  }, [token]);

  return (
    <div>
      <h2>Activity Logs</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>User ID: {activity.userId}</p>
            <p>Type: {activity.type}</p>
            <p>Date: {activity.date}</p>
            <p>Description: {activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLogs;
