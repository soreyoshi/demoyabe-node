async function add() {
    var a = 0;
    for (var i = 0; i < 1000; i++) {
        a += 1;
    };
    return a;
}

async function loga(context) {
    const x = await add();
    context.log(`カウント: ${x}`);
    return x;
}

module.exports = async function (context, req) {
    context.log('カウント 開始');
    const x = await loga(context);
    context.res.body = `counted ${x} \n`;
    context.log('カウント 終了');
    var deprecate = require('depd')('my-module')
}
