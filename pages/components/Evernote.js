import { useState, useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import styles from './Evernote.module.scss';
import { app, database } from '../../firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import ReactQuill from './ReactQuill.js';


const dbInstance = collection(database, 'notes');
export default function Evernote() {
    useEffect(() => {
       getData()
    }, [])

    const getData = () => {
        getDocs(dbInstance)
        .then((data) => {
            setNotesArray(data.docs.map(item => {
                return {...item.data(), id: item.id}
            }))
        })
    }

    const [id, setId] = useState(null)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isInputVisible, setInputVisible] = useState(false);
    const [note, setNote] = useState('');
    const [noteDesc, setNoteDesc] = useState('');
    const [notesArray, setNotesArray] = useState([]);
    
    const addNote = () => {
        setIsUpdate(false)
        setInputVisible(true);
    }

    const addNoteDesc = (e) => {
        console.log('setting add note desc...')
        setNoteDesc(e);
        console.log('value: ', e)
    }

    const saveNote = () => {
        setNote('')
        setNoteDesc('')
        // setNotesArray([...notesArray, note]);

        addDoc(dbInstance, {
            note: note,
            noteDesc: noteDesc
        })
        .then(() => {
            getData()
        })
    }

    const editNote = () => {
        setNote('')
        // setNoteDesc('')
        const collectionById = doc(database, 'notes', id)

        updateDoc(collectionById, {
            note: note,
            noteDesc: noteDesc
        })
        .then(() => {
            getData()
        })
    }

    const getId = (id, note) => {
        setId(id)
        setIsUpdate(true)
        setInputVisible(true)
        setNote(note)
        setNoteDesc(noteDesc)

        const collectionById = doc(database, 'notes', id)

        updateDoc(collectionById, {
            note: note
        })
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
            type="text" 
            />
            <div className={styles.reactQuill}>
            <ReactQuill 
                addNoteDesc={addNoteDesc} />
            </div>
            {isUpdate ? (
                <button 
                    onClick={editNote}
                    className={styles.saveBtn}>
                    Update Note
                </button>
            ) : (
                <button 
                    onClick={saveNote}
                    className={styles.saveBtn}>
                    Save Note
                </button>
            )}
            
        </div>
        ) : (
          <div>
              
          </div>  
        )}

        <div className={styles.showNotes}>
            {notesArray.length > 0 && notesArray.map((note) => {
                return (
                    <div className={styles.innerNotes}>
                        <AiFillEdit 
                            onClick={() => getId(note.id, note.note)}
                            size={20} 
                            className={styles.editIcon} />
                        <p>{note.note}</p>
                    </div>
                )
            })}
        </div>
    </div>
    )
  }