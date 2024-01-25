// Входные данные строка ‘a.b.c'
// Результат преобразования { a: { b: { c: {} } } }

const string = 'a.b.c';
const func = str => {
    const arr = str.split('.');
    let res = {};

    while (arr.length > 0) {
        const temp = arr.pop();
        const tempObj = {
            [temp]: res,
        };
        res = { ...tempObj };
    }

    return res;
};

console.log(func(string));
