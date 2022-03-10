const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();

(async () => {
  const snapshot = await db
    .collection("subscriptions")
    .where("subscribeTo", "==", "XupnP4UR6YhxWsz5f1S31c6fCtw2")
    .get();

  const uidList = []
  const paidList = []

  snapshot.forEach((doc) => {
    if (doc.data().isPaidSubscription) {
      paidList.push(doc.data().subscriberEmail)
    }

  })

  console.log(paidList)
  // console.log(uidList.length)

  
})()