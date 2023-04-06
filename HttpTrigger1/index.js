async function add() {
    var a = 0;
    for (var i = 0; i < 1000; i++) {
        a += 1;
    };
    return a;
}

async function loga(context) {
    const x = await add();
    context.log(`count: ${x}`);
    return x;
}

module.exports = async function (context, req) {
    context.log('count 開始');
    const x = loga(context);
    context.res.body = `counted ${x} \n`;
    context.log('count 終了');
}
