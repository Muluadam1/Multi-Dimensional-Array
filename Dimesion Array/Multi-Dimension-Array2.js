//4D 
function dimentionArry(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            for (let k = 0; k < matrix[i][j].length; k++) {
                let rowSum = 0;
                for (let l = 0; l < matrix[i][j][k].length; l++) {
                    rowSum += matrix[i][j][k][l]
                }
                if (rowSum > 50) {
                    count++;
                }
            }
        }
    }
    return count;
}

function main() {
    let matrix = [
        [
            [
                [10, 20, 30],
                [40, 50, 60]
            ],
            [
                [70, 80, 90],
                [100, 110, 120]
            ]
        ],
        [
            [
                [130, 140, 150],
                [160, 170, 180]
            ],
            [
                [190, 200, 210],
                [220, 230, 240]
            ]
        ]
    ];
    console.log(dimentionArry(matrix));
}
main();