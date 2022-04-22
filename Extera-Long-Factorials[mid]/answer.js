function extraLongFactorials(n) {
    let result = BigInt(1);
    let step = 1;
    while(step <= n) {
        result = BigInt(step) * result;
        step++;
    }
    console.log(result.toString())
    return result.toString();

}