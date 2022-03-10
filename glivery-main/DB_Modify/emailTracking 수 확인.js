const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();

(async () => {
  const snapshot = await db.collection('users')
    .doc('AOWk4cZufmfxL8BjV0L2izRNQfQ2')
    .collection('publications')
    .doc('EFz90IWjUOGEBm4IhkHu')
    .collection('emailTracking')
    .get();
  
    const uidList=[]
  
  snapshot.forEach(doc => {
    uidList.push(doc.data())
    // if (doc.data().event === 'temporary') {
    //   uidList.push(doc.data())
      
    //   }
    })
    
  //   // const result = await snapshot.orderBy('event', 'desc').limit(2).get();

  //   result.forEach((doc) => {
  //       uidList.push(doc.data())
  //   })
    
  console.log(uidList.length)
  
})()