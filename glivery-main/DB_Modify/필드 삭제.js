'use strict';

const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();


//Get the `FieldValue` object
const FieldValue = admin.firestore.FieldValue;

(async () => {
    const snapshot = await db.collection('users').get();
    const uidList=[]

    snapshot.forEach((doc) => {
      uidList.push(doc.data().uid)
    })
  
    uidList.forEach(async (uid) => {
      // Create a document reference
      const cityRef = db.collection('users').doc(uid);
    
      // Remove the 'capital' field from the document
      await cityRef.update({
          shardImage: FieldValue.delete()
      });
      
    });
  
})()