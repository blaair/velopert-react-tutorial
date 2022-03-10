const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();

const xlsxFile = require('read-excel-file/node');


(async () => {
    const ref = await db.collection('users').doc('UhL6k00kM6akBA0aZPExf5qPN9C2').collection('personalMailingList');
    const date = new Date();
    const emailList = []
    
    xlsxFile("list.xlsx").then((rows) => {
    for (const i in rows) {
        emailList.push(rows[i][1]);
    }
    
        //console.log(emailList)

    for (var i = 2; i < emailList.length; i++) {
         //console.log(emailList[i])
      const data = { email: emailList[i], creationTime: date };
      const result    = ref.add(data);
    }


    });

    
})();

