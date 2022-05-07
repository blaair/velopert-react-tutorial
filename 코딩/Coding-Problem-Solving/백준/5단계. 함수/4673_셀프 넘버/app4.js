function d(n) {
    let result = n;
    let resm = n.toString().split('');

    for (let i = 0; i < resm.length; i++) {
        result += parseInt(resm[i])
    }

    return result;
}