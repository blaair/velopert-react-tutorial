'use strict';

const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();

(async () => {
  const ref = db.collection('subscriptions').doc();
  const date = new Date();

  const data = {
    isPaidSubscription: false,
    isPaymentSuccessThisMonth: true,
    monthlyFee: 0,
    pageName: 'Sacony Review',
    subdomain: 'saconyreview',
    subscribeDay: 10,
    subscribeMonth: 3,
    subscribeYear: 2022,
    subscribeTime: date,
    subscribeTo: 'XupnP4UR6YhxWsz5f1S31c6fCtw2',
    subscriber: 'Eno3OpQbpyZDSVLmhzdictI5M7g1',
    subscriberEmail: 'kimmyonghoon@gmail.com',
  };

  await ref.set(data);
})();

//ge0nu.two@gmail.com, kimmyonghoon@gmail.com
