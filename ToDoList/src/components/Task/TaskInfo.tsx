import styles from './TaskInfo.module.css'

interface Props {
    tasksCounter: number
    checkedTasksCounter: number
  }

export function TaskInfo({tasksCounter, checkedTasksCounter}: Props){
    return (
        <header className={styles.container}>
            <aside>
                <p className={styles.blueMark}>Tarefas criadas</p>
                <span className={styles.taskCount}>{tasksCounter}</span>
            </aside>
            <aside>
                <p className={styles.purpleMark}>Concluídas</p>
                <span className={styles.taskCount}>
                    {tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`}
                </span>
            </aside>
        </header>
    );
}