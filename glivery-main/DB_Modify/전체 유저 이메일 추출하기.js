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
        uidList.push(doc.data().email)
    })
    
  process.stdout.write(uidList + '\n') //줄바꿈 없이 출력
  console.log(uidList.length)

  
})()