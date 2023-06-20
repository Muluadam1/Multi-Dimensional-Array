//3D matrix
function dimentionArray(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[j].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix[i][j].length; k++) {
                sum += matrix[i][j][k];
            }
            if (sum > 50) {
                count++;
            }
        }
    }
    return count;
}

function main() {
    let matrix = [
        [
            [1, 20, 3],
            [40, 50, 60]
        ],
        [
            [70, 80, 90],
            [100, 110, 120]
        ],
        [
            [13, 14, 15],
            [160, 170, 180],
        ],
    ];
    console.log(dimentionArray(matrix));
}
main();