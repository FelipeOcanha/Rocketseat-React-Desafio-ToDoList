import styles from './EmptyTaskList.module.css'
import EmptyLogo from '../../images/Clipboard.png'

export function EmptyTaskList() {
    return (
        <div className={styles.container}>
            <img src={EmptyLogo} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}