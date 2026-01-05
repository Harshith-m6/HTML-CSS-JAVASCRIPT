let str = "programming";

for (let i = 0; i < str.length; i++) {
    let count = 1;
    if (str[i] === '*') continue;

    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
            str = str.replace(str[j], '*');
        }
    }

    if (count > 1)
        console.log(str[i], count);
}
