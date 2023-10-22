import Dexie from 'dexie';

export const db = new Dexie('myDatabase');

db.version(1).stores({
    tasks: '++id, task, notes, deadLine, completed', // Primary key and indexed props
});