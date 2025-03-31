import styles from './App.module.css'
import {Header} from './components/Header';
import {Input} from './components/Input'
import {Button} from './components/Button'
import {TaskInfo} from './components/Task/TaskInfo';
import { useState } from 'react';

import { PlusCircle } from '@phosphor-icons/react';
import { EmptyTaskList } from './components/Task/EmptyTaskList';

function App() {
  interface Task {
    id: number,
    name: string
  }

  const taskList: Task[] = [];



  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if (!inputValue) {
      return
    }
  }
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />

          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
          </div>
          <div className={styles.tasksList}>
            <TaskInfo tasksCounter={0} checkedTasksCounter={0} />
          </div>
          <div>
            { taskList.length == 0 ? 
            ( 
              < EmptyTaskList />
            ) : (<div></div>)
            }
          </div>
      </section>
    </main>
  );
}

export default App;
