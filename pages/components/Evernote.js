import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import styles from './Evernote.module.scss';

export default function Evernote() {
    const [isInputVisible, setInputVisible] = useState(false);
    const [note, setNote] = useState('');
    const [notesArray, setNotesArray] = useState([]);
    const addNote = () => {
        setInputVisible(true);
    }

    const saveNote = () => {
        setNotesArray([...notesArray, note]);
    }
    
    return (
    <div className={styles.mainContainer}>
        <div className={styles.btnContainer}>
            <button 
                onClick={addNote}
                className={styles.button}>
                Add a New Note
            </button>
        </div>
        {isInputVisible ? (
        <div className={styles.inputContainer}>
            <input 
            onChange={(e) => setNote(e.target.value)}
            className={styles.addInput}
            value={note}
            placeholder="Enter the title" 
            type="text" />

            <button 
                onClick={saveNote}
                className={styles.saveBtn}>
                Save Note
            </button>
        </div>
        ) : (
          <div>
              
          </div>  
        )}

        <div className={styles.showNotes}>
            {notesArray.length > 0 && notesArray.map((note) => {
                return (
                    <div className={styles.innerNotes}>
                        <AiFillEdit size={20} className={styles.editIcon} />
                        <p>{note}</p>
                    </div>
                )
            })}
        </div>
    </div>
    )
  }