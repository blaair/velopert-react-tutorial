'use strict';

const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();


(async () => {
  const snapshot = await db.collection('users').get();
  const uidList=[]

   snapshot.forEach((doc) => {
    uidList.push(doc.data().uid)
   })
  
  uidList.forEach(async (uid) => {
    await db.collection('users').doc(uid).set({
    sharedImage: null
    }, { merge: true });
  });


})();
