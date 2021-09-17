import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, Modal, TextInput, FLatList } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {ListItem} from 'react-native-elements';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState(' ');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={modalVisible}>
        <View style={styles.modal}>
          <TextInput
          style={styles.textInput}
          value={newTask}
          onChangeText={text => setNewTask(text)}
        />
        <View style={{flexDirection: 'row'}}>
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
          <Button title="Confirm" onPress={() => insertTask()} />
        </View>
      </View>
    </Modal>
      <View style={styles.listSection}>
        <FlatList
          keyExtractor={keyExtractor}
          data={tasks}
          renderItem={renderItem}
        />
      </View>
      <Text style={styles.text}>Hello World</Text>
    <View style={styles.buttonSection}>
      <Button title="Add task" onPress={() => setModalVisible(true)} />
    </View>
    </SafeAreaView>
  );
};

const insertTask = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState(' ');
  const [tasks, setTasks] = useState([]);

  let task = {task: newTask, done: false};

  let newTasks = tasks;
  newTasks.push(task);
  setTasks(newTasks);

  useEffect(() => {
    getTasks();
  }, []);
}
const getTasks = () => {
  let list = [
    {
      id: 1,
      task: 'Task number 1',
      done: true,
    },
    {
      id: 2,
      task: 'Task number 2', 
      done: false},
    {
      id: 3,
      task: 'Task number 3',
      done: false,
    },
    {
      id: 4,
      task: 'Task number 4',
      done: false,
    },
  ];
  setTasks(list);
};


const renderItem = ({item}) => {
  return (
    <ListItem
    title={item.task}
    bottomDivider={true}
    onPress={() => false}
    onLongPress={() => false }
    checkmark={item.done}
    />
  );
};

const keyExtractor = (item, index) => index.toString();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 8,
    fontWeight: '600',
    color: '#000',
  },
});

export default Home;