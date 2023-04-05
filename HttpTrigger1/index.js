module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const a = 0;
    for (var i = 0; i < 10000; i++) {
        a += 1;
    }
    context.log(`count: ${a}`);
    context.res = {
        body: context.executionContext.invocationId
    };
}
