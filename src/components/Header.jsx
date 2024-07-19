import styles from './header.module.css'

export default function Header (){
    return(
        
        <div className={styles.header}>My To Do List
        <p className={styles.note}>Note : Click on the item to mark it as completed</p></div>
    );
}