const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const uid = `nZVg9hd2yRPvtCwvF4mwXtLMt7v2`; //이메일 변경할 유저의 uid
const email = `1324charisma@kakao.com`; // 변경할 이메일
// 1. ${email} 로 가입한 유저가있는지 중복확인, 중복 이메일이 아니라면 계속진행
// 2. users 컬렉션의 ${uid} 문서를 읽어들이고 기존 email을 ${email}로 변경한다
// 3. subscriptions 컬렉션에서 subscriber가 ${uid}인 문서를 찾아서
// 기존 subscriberEmail 을 ${email}로 변경한다.
// 4. 아래 코드도 실행해서 auth의 이메일도 변경한다.
// 이게 하나의 트랜잭션이 되면 좋겠는데 어떻게해야될지는 고민해봐야될듯
(async () => {
  try {
    const userRecord = await admin.auth().updateUser(uid, { email });
    console.log('이메일 변경 완료 : ', userRecord.toJSON());
    admin.app().delete();
  } catch (error) {
    console.log('에러 : ', error);
  }
})();