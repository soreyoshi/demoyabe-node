async function add() {
    var a = 0;
    for (var i = 0; i < 100; i++) {
        a += 1;
    }
    return a;
}

module.exports = async function (context, req) {
    context.log('開始');
    const x = add();
    context.log(`count: ${x}`);
    context.res = {
        body: context.executionContext.invocationId
    };
    context.log('終了');
}
