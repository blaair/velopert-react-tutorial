const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();

(async () => {
  const recipient = 'pjy6892@naver.com';


  const subSnapshot = await db.collection('users').doc('bygNvpmCd4VbWlx5FZI8RHxUMlC2').collection('personalMailingList').where('email', '==', recipient).get();
  
  subSnapshot.forEach((doc) => {
      if (doc.data().email === recipient)
        console.log(doc.data())

  })

  
})()