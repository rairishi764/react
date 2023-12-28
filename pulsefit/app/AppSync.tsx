// Import React library for building React components
import React, { useEffect, useState } from 'react';

// Import Realm React hooks for interacting with Realm, such as useApp, useAuth, useQuery, useRealm, and useUser
import { useApp, useAuth, useQuery, useRealm, useUser } from '@realm/react';

// Import React Native components and styles
import { Pressable, StyleSheet, Text } from 'react-native';

// Import the Task model
import { Task } from './models/Task';

// Import the TaskManager and OfflineModeButton components
import { TaskManager } from './components/TaskManager';
import { OfflineModeButton } from './components/OfflineModeButton';

// Import buttonStyles and shadows from the 'styles' folder, and colors from 'styles/colors'
import { buttonStyles } from './styles/button';
import { shadows } from './styles/shadows';
import colors from './styles/colors';

// Define a functional component named AppSync
export const AppSync: React.FC = () => {
  // Access Realm, user, app, and authentication functions using Realm React hooks
  const realm = useRealm();
  const user = useUser();
  const app = useApp();
  const { logOut } = useAuth();

  // State to manage whether to show completed tasks
  const [showDone, setShowDone] = useState(false);

  // Query tasks based on the showDone state
  const tasks = useQuery(
    Task,
    (collection) =>
      showDone
        ? collection.sorted('createdAt')
        : collection.filtered('isComplete == false').sorted('createdAt'),
    [showDone],
  );

  // Subscribe to task updates when the component mounts or when tasks change
  useEffect(() => {
    realm.subscriptions.update((mutableSubs) => {
      mutableSubs.add(tasks);
    });
  }, [realm, tasks]);

  return (
    <>
      {/* Display the app id being used for syncing */}
      <Text style={styles.idText}>Syncing with app id: {app.id}</Text>

      {/* Render the TaskManager component to manage and display tasks */}
      <TaskManager
        tasks={tasks}
        userId={user?.id}
        setShowDone={setShowDone}
        showDone={showDone}
      />
      
      {/* Pressable button to log out the user */}
      <Pressable style={styles.authButton} onPress={logOut}>
        <Text style={styles.authButtonText}>{`Logout ${user?.profile.email} ${global.user}`}</Text>
      </Pressable>

      {/* Render the OfflineModeButton component */}
      <OfflineModeButton />
    </>
  );
};

// Define styles for the component using StyleSheet
const styles = StyleSheet.create({
  idText: {
    color: '#999',
    paddingHorizontal: 20,
  },
  authButton: {
    ...buttonStyles.button,
    ...shadows,
    backgroundColor: colors.purpleDark,
  },
  authButtonText: {
    ...buttonStyles.text,
  },
});
