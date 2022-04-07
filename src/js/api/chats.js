// import React from 'react';
import db from '../db/firestore';
import firebase from 'firebase/app';

const extractSnapshotData = snapshot => {
  return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
}

export const fetchChats = () =>
  db
    .collection('chats')
    .get()
    .then(extractSnapshotData)

export const createChat = formData => 
  db
    .collection('chats')
    .add(formData)
    .then(docRef => docRef.id)

export const joinChat = async (userId , chatId) => {
  const userRef = db.doc(`profiles/${userId}`);
  const chatRef = db.doc(`chats/${chatId}`);

  await userRef.update({joinchats:firebase.firestore.FieldValue.arrayUnion(chatRef)});
  await chatRef.update({joinUsers:firebase.firestore.FieldValue.arrayUnion(userRef)})
}

export const subscribeToChat = (chatId , onSubscribe) => 
  db
    .collection("chats")
    .doc(chatId)
    .onSnapshot(snapshot => {
      const chat = {id:snapshot.id, ...snapshot.data()}
      onSubscribe(chat)
    })

export const subscribeToProfile = (uid , onSubscribe) => 
  db
    .collection("profiles")
    .doc(uid)
    .onSnapshot(snapshot => onSubscribe(snapshot.data()))