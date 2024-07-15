import React from 'react';

interface Activity {
  id: number;
  userId: string;
  type: string;
  date: string;
  description: string;
}

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
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
  );
};

export default ActivityList;
