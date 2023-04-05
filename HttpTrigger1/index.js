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
}

module.exports = async function (context, req) {
    context.log('count 開始');
    loga(context);
    context.res = {
        status: 200
    };
    context.log('count 終了');
}
