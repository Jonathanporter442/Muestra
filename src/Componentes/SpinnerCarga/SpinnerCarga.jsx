import { ImSpinner } from 'react-icons/im';
import styles from "./SpinnerCarga.module.css"

export function SpinnerCarga() {
    return (
        <div className={styles.Spinnercarga}>
            <ImSpinner className={styles.Spinning} size={60}/>
        </div>
    )
}
