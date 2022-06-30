// 부동 소수점으로 변환하면 값이 다르다고 해서 예제 만들어봄

let i;
let sum = 0;

for (i = 0; i < 1000; i++) {
    sum += 0.1;
}

console.log(sum);
