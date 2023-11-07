import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CourseInput from './components/CourseInput';
import { FlatList } from 'react-native';
useState

export default function App() {
  const [modalISVisble, setModalISVisble] = useState(false);
  const [coruses, setCoruses] = useState([])

  const startModal = () => {
    setModalISVisble(true);
  };
  const endModal = () => {
    setModalISVisble(false);
  }
  const onAddCourse = (coursTitle) => {
    // console.log(coursTitle);
    setCoruses((currentCourses) => [
      ...currentCourses,
      { text: coursTitle, id: Math.random().toString() }
    ]);
    endModal();
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Kurs Ekle' color={'red'} onPress={startModal} />
        <CourseInput
          visible={modalISVisble}
          onAddCourse={onAddCourse}
          onCancel={endModal}
        />
        <View>
          <FlatList data={coruses} renderItem={({ item }) => <View style={styles.courseItem}>
            <Text style={styles.courseText}>{item.text}</Text>
          </View>} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
    paddingHorizontal: 10,
  },
  courseItem: {
    backgroundColor: 'gray',
    margin: 8,
    borderRadius: 5,
  },
  courseText: {
    padding:8,
    color: 'white',
  },
});
