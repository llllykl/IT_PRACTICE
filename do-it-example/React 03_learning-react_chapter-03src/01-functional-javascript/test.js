let log = function(message) {
    console.log(message);
}

log("ㅈㅏ바스크립트에서는 함수를 변수에 넣을 수 있습니다.");

var createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
}

const scream = createScream(message => console.log(message));

scream('함수가 함수를 반환할 수도 있습니다.');
scream('createScream은 함수를 반환합니다.');
scream('scream은 createScream이ㅣ 반환한 함수를 가리킵니다.');

const obj = {
    message1: "함수를 다른 값과 마찬가지로 객체에 추가할 수도 있습니다.",
    log(message1) {
        console.log(message1)
    }
}

obj.log(obj.message1)

const log1 = message3 => console.log(message3);

log1("ES6 화살표 함수");