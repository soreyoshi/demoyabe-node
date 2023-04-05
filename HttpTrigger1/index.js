async function add() {
    var a = 0;
    for (var i = 0; i < 1000; i++) {
        a += 1;
    }
    return a;
}

module.exports = async function (context, req) {
    context.log('count 開始');
    const x = await add();
    context.log(`count: ${x}`);
    context.res = {
        body: context.executionContext.invocationId
    };
    context.log('count 終了');
}
