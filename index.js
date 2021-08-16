
function foo(input) {
    const output = input.splice(0);
    let i = 0;
    while (i < output.length) {
        for (let j = i + 1; j < output.length; j++) {
            let isInclude = false;
            if (output[i][0] <= output[j][0] && output[i][1] >= output[j][0]) {
                isInclude = true;
            } else if (output[i][0] <= output[j][1] && output[i][1] >= output[j][1]) {
                isInclude = true;
            } else if (output[j][0] <= output[i][0] && output[j][1] >= output[i][0]) {
                isInclude = true;
            } else if (output[j][0] <= output[i][1] && output[j][1] >= output[i][1]) {
                isInclude = true;
            }
            if (isInclude) {
                const indiceBegin = output[i][0] <= output[j][0] ? output[i][0] : output[j][0];
                const indiceEnd = output[i][1] >= output[j][1] ? output[i][1] : output[j][1];
                output.splice(i, 1, [indiceBegin, indiceEnd]);
                output.splice(j, 1);
                i = -1;
                break;
            }
        }
        i++;
    }
    return output;
}

const jeuxTest = [
    [[0, 3], [6, 10]],
    [[0, 5], [3, 10]],
    [[0, 5], [2, 4]],
    [[7, 8], [3, 6], [2, 4]],
    [[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]
];

for (const unJeu of jeuxTest) {
    console.log('[' + foo(unJeu).map(item => `[${item[0]}, ${item[1]}]`).join(', ') + ']');
}