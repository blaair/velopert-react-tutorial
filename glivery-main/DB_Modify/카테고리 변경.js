'use strict';

const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();

(async () => {
  // 카테고리 프로퍼티 배열에 '음식' 이 있는 유저 document 가져오기
  const snapshot = await db
    .collection('users')
    .where('categories', 'array-contains-any', ['사회'])
    .get();

  // 유저 document 배열에서, uid만 뽑아서 uidList 배열에 넣기
  const uidList = [];
  snapshot.docs.forEach((doc) => {
    uidList.push(doc.data().uid);
  });

  console.log(uidList);

  // uid 리스트를 순회하면서 해당 uid 유저의 카테고리를 기타로 업데이트하기
  uidList.forEach(async (uid) => {
    await db
      .collection('users')
      .doc(uid)
      .update({ categories: ['기타'] });
    });
})();

// 변경된 카테고리
// [‘IT’, ‘과학‘, ‘테크’] -> [‘IT’, 테크’]
// [‘예술‘, ‘디자인‘] -> [‘예술‘, ‘문학’]

// 제거된 카테고리
// [‘취미‘, ‘스포츠‘]
// [‘건강‘, ‘운동‘]
// [‘음식‘, ‘요리’]
// [‘사회‘, ‘정치‘] -> [‘사회‘, ‘시사‘]
