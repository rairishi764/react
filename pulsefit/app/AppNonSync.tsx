// Import React library for building React components
import React from 'react';

// Import the Task model and TaskManager component
import { Task } from './models/Task';
import { TaskManager } from './components/TaskManager';

// Import the useQuery hook from '@realm/react'
import { useQuery } from '@realm/react';

// Define a functional component named AppNonSync
export const AppNonSync = () => {
  // State to manage whether to show completed tasks
  const [showDone, setShowDone] = React.useState(false);

  // Query tasks based on the showDone state
  const tasks = useQuery(
    Task,
    (collection) =>
      showDone
        ? collection.sorted('createdAt')
        : collection.filtered('isComplete == false').sorted('createdAt'),
    [showDone],
  );

  return (
    // Render the TaskManager component to manage and display tasks
    <TaskManager tasks={tasks} setShowDone={setShowDone} showDone={showDone} />
  );
};
