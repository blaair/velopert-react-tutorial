'use strict';

const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();


(async () => {
  const email = [
      "pjy6892@naver.com", "xoxojy@naver.com"
    ]

    const ref           = db.collection('users').doc('bygNvpmCd4VbWlx5FZI8RHxUMlC2').collection('personalMailingList');
    // const snapshot      = await ref.where('email', '==', email).get();

  // if (snapshot.empty) {
    const date = new Date();
    
    for (var i in email) {
      const data = { email: email[i], creationTime: date };
      const result    = await ref.add(data);
    }

})();


  
  