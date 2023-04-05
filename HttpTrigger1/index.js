async function add() {
    const a = 0;
    for (var i = 0; i < 100; i++) {
        a += 1;
    }
    return a;
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const a = await add();
    context.log(`count: ${a}`);
    context.res = {
        body: context.executionContext.invocationId
    };
}
