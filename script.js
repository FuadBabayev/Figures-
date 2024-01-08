let count = 9;



// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
let figure1 = '';
for (let i = 1; i <= count; i++) {
    for (let j = 1; j <= i; j++) {
        figure1 += '* ';
    }
    figure1 += '\n';
}
console.log(figure1);



// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
let figure2 = '';
for (let i = 1; i <= count; i++) {
    for (let j = 1; j <= count; j++) {
        figure2 += '* ';
    }
    figure2 += '\n';
}
console.log(figure2);



// * * * * * * * *
// *             *
// *             *
// *             *
// *             *
// *             *
// * * * * * * * *
let figure3 = '';
for (let i = 1; i <= count; i++) {
    for (let j = 1; j <= count; j++) {
        if (i === 1 || i === count) {
            figure3 += '* ';
        } else {
            figure3 += (j === 1 || j === count) ? '* ' : '  ';
        }
    }
    figure3 += '\n';
}
console.log(figure3);



//     *
//    ***
//   *****
//  *******
// *********
// ! If there is a space between *
let figure4 = '';
for (let i = 1; i <= count; i++) {
    for (let j = i; j <= count; j++) {
        figure4 += ' ';
    }
    for (let j = 1; j <= i; j++) {
        figure4 += '* ';
    }
    figure4 += '\n';
}
console.log(figure4);
// ! If there is not a space between *
let figure5 = '';
for (let i = 1; i <= count; i++) {
    for (let j = i; j <= count; j++) {
        figure5 += ' ';
    }
    for (let j = 1; j <= i; j++) {
        figure5 += '*';
    }
    for (let j = 2; j <= i; j++) {
        figure5 += '*';
    }
    figure5 += '\n';
}
console.log(figure5);



//    1
//   2 3
//  4 5 6
// 7 8 9 10
let figure6 = '';
for (let i = 1; i <= 4; i++) {
    for (let j = i; j <= 4; j++) {
        figure6 += ` `;
    }
    for (let j = 1; j <= i; j++) {
        figure6 += ( i === 1) ? `${j} ` : (i === 2) ? `${j + 1} ` : (i === 3) ? `${j + 3} ` : `${j + 6} `;
    }
    figure6 += '\n';
}
console.log(figure6);



// * * * * * * * * *
// * * * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
let figure7 = '';
for (let i = 1; i <= count; i++) {
    for (let j = i; j <= count; j++) {
        figure7 += '* ';
    }
    figure7 += '\n';
}
console.log(figure7);



//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
let figure8 = '';
for (let i = 1; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
        figure8 += ` `;
    }
    for (let j = 1; j <= i; j++) {
        if (i === 1) {
            figure8 += `${String.fromCharCode(64 + j)} `;
        }
        else if (i === 2) {
            figure8 += `${String.fromCharCode(64 + j + 1)} `;
        } else if (i === 3) {
            figure8 += `${String.fromCharCode(64 + j + 3)} `;
        } else if (i === 4){
            figure8 += `${String.fromCharCode(64 + j + 6)} `;
        } else {
            figure8 += `${String.fromCharCode(64 + j + 10)} `;
        }
    }
    figure8 += '\n';
}
console.log(figure8);



// 1 X 1  = 1
// 1 X 10 = 10
// ----------------
// 2 X 1  = 2
// 2 X 10 = 20
// ----------------
// 10 X 10 = 100
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} X ${j} = ${i * j}`);
    }
    console.log("-----------------------");
}