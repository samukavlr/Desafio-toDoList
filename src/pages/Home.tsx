import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';
import { Contador } from '../components/contador'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  // console.log(tasks.length)
  const [total,setTotal] = useState<number>(0)

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(oldTasks => [...oldTasks,newTask])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTask = tasks.map(task => ({ ...task}))


    const foundItem = updatedTask.find(item => item.id ===id)
    if(!foundItem)

    return; 
    foundItem.done =!foundItem.done
    setTasks(updatedTask)

    const total= updatedTask.reduce((total,{done}) => {
      if(done){
        return total+1


      }else{
        return total -0
      }
    },0)
    setTotal(total)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const removeTasks = tasks.filter(tasks => tasks.id !==id)
    setTasks(removeTasks)

    const total = removeTasks.reduce((total, {done}) => {
      if(done){ 
        return total + 1
      }else{ 
        return total - 0
      }
    },0)
    setTotal(total)
  }

  return (
    <View style={styles.container}>

      <Header tasksCounter={tasks.length} />
      <TodoInput addTask={handleAddTask} />
      <Contador taskcountercomplete={total} tasksCounter={tasks.length}/>

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  }
})