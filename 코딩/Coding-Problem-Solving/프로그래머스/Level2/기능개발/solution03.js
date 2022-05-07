function solution(progresses, speeds) {
  var answer = []; //배포된 기능의 수 
  let deploy = 0;
  //모든 작업이 끝날때까지
  while (progresses.length > 0) {
    //진행률 계산
    for (let i = 0; i < progresses.length; i++){
      //작업진도 + 작업속도 = 진행률 
      progresses[i] += speeds[i];
    } while (true) {
      //제일 앞에있는 기능이 완료된 상태면 배열에서 제거 
      if (progresses[0] >= 100) {
        deploy += 1; progresses.shift(); speeds.shift();
      }
      //아직 완료되지 않은 상태 
      else {
        //앞에 완료된 작업이있으면 개수 삽입후 종료 
        if (deploy !== 0) { answer.push(deploy); } deploy = 0; break;
      }
    }
  } return answer;
}

