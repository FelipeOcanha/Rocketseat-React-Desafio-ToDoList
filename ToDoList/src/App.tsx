import styles from './App.module.css'
import {Header} from './components/Header';
import {Input} from './components/Input'
import {Button} from './components/Button'
import {TaskInfo} from './components/Task/TaskInfo';
import {ListTask} from './components/Task/ListTask';

import { ChangeEvent, useState } from 'react';

import { PlusCircle } from '@phosphor-icons/react';
import { EmptyTaskList } from './components/Task/EmptyTaskList';


export interface ITask {
  id: number
  text: string
  isChecked: boolean
}


function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {

    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}/>

          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
          </div>
          
          <div className={styles.tasksList}>
            <TaskInfo tasksCounter={tasks.length} checkedTasksCounter={checkedTasksCounter} />
            </div>
            <div>
            {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <ListTask
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <EmptyTaskList />
          )}
            </div>
         
      </section>
    </main>
  );
}

export default App;
