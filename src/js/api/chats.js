// import React from 'react';
import db from '../db/firestore';

const extractSnapshotData = snapshot => {
  return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
}

export const fetchChats = () =>
  db
    .collection('chats')
    .get()
    .then(extractSnapshotData)