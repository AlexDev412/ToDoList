import styles from '../Component/style';
import padding from '../../styles/common';

const FormBoard = (any : any) => {
    return (
        <div style={styles.Background}>
            <div style={styles.BoardBackground}>
                <div style={styles.BoardDirection}>
                <div style={padding['1O-pl']}></div>
                    <div style={styles.BoardTodo}>
                        <p>Todo</p>
                    </div>
                    <div style={padding['1O-pr']}></div>
                    <div style={styles.BoardProgress}>
                        <p>In progress</p>
                    </div>
                    <div style={padding['1O-pr']}></div>
                    <div style={styles.BoardDone}>
                        <p>Done</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormBoard