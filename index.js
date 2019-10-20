const { RTMClient } = require('@slack/rtm-api');
let CronJob = require('cron');

let request = require('request');
let firebase = require("firebase");
let headers = {'Content-type': 'application/json'};


//firebaseの認証はここに
//

let db = firebase.database();
let ref = db.ref("社員ID/");



// Read a token from the environment variables
//const token = process.env.SLACK_BOT_TOKEN; Slackのトークンをこのしたに
//
const controller = Botkit.slackbot();

if (typeof token === 'undefined') {
    throw 'Env variable SLACK_BOT_TOKEN is missing'
}

// Initialize
const rtm = new RTMClient(token);
//住所変更フラグ
let flag = 0;



// Attach listeners to events by type. See: https://api.slack.com/events/message
//応答部分
rtm.on('message', async (event) => {
    console.log(event);


    //自動で送るやつ
    new CronJob({
        cronTime: '* * * * * 1-5',
        onTick: function() {
            //rtm.sendMessage(`進捗どうですか？`, event.channel);
            console.log("てst");
        },
        start: true,
        timeZone: 'Asia/Tokyo'
    });


    if (event.text === '社員の出席情報を教えて') {
        try {
            // Send a welcome message to the same channel where the new member just joined, and mention the user.
            const reply = await rtm.sendMessage(`わかりました, <@${event.user}>さん`, event.channel);
            rtm.sendMessage(`シキメグルさんは今日はお休みみたいです`, event.channel);
            rtm.sendMessage(`せーとくさんは今日出社するようです`, event.channel);
            //このしたに表を表示するもしくはウェブぺーじへのリンクを出させるコードをかく
            console.log('Message sent successfully', reply.ts);
            flag=0;
        } catch (error) {
            console.log('An error occurred', error);
            flag=0;
        }
    }
    
    if (event.text === '災害状況を教えて') {
        try {
            // Send a welcome message to the same channel where the new member just joined, and mention the user.
            const reply = await rtm.sendMessage(`<@${event.user}>さんの居住地で災害が発生しています。`, event.channel);
            // rtm.sendMessage(``, event.channel);
            console.log('Message sent successfully', reply.ts);
            flag = 0;
        } catch (error) {
            console.log('An error occurred', error);
            flag = 0;
        }
    }
    
    if (event.text === '会社周辺の警報を教えて') {
        try {
            const reply = await rtm.sendMessage(`現在会社周辺では大雨警報が発令中です。`, event.channel);
            console.log('Message sent successfully', reply.ts);
            flag=0;
        } catch (error) {
            console.log('An error occurred', error);
            flag=0;
        }
    }
    if (event.text === '台風の情報を教えて') {
        try {
            const reply = await rtm.sendMessage(`現在の台風情報をお知らせします。`, event.channel);
            rtm.sendMessage(`非常に強い台風16号は20日2時には串間市付近の北緯31度10分、東経135度55分にあって1時間におよそ30キロの速さで進んでいます。`, event.channel);
            console.log('Message sent successfully', reply.ts);
            flag=0;
        } catch (error) {
            console.log('An error occurred', error);
            flag=0;
        }
    }

    if (event.text === '津波の情報を教えて') {
        try {
            const reply = await rtm.sendMessage(`津波の情報をお知らせします。`, event.channel);
            rtm.sendMessage(`現在津波はありません。`, event.channel);
            console.log('Message sent successfully', reply.ts);
            flag=0;
        } catch (error) {
            console.log('An error occurred', error);
            flag=0;
        }
    }

    if (event.text === '社員の状態を教えて') {
        try {
            // Send a welcome message to the same channel where the new member just joined, and mention the user.
            const reply = await rtm.sendMessage(`わかりました, <@${event.user}>さん`, event.channel);
            //
            console.log('Message sent successfully', reply.ts);
            flag=0;
        } catch (error) {
            console.log('An error occurred', error);
            flag=0;
        }
    }
    if(event.text === '住所変更お願いします'){
        try {
            const reply = await rtm.sendMessage(`了解しました, <@${event.user}>さん、このメッセージの後に郵便番号を入力してください`, event.channel);
            console.log('Message sent successfully', reply.ts);
            flag = 1;
        } catch (error) {
            console.log('An error occurred', error);
            flag=0;
        }
    }
    if(flag===1){
        //郵便番号の正規表現
        if (/^\d{3}[-]\d{4}$|^\d{3}[-]\d{2}$|^\d{3}$|^\d{5}$|^\d{7}$/.test(event.text)) {
            try {
                let options = {
                    url: 'https://slack.com/api/users.info?token=xoxb-801439395765-801468466640-MoR7EJNOSFwu1rg0GsvDO3WN&user='+event.user+'&pretty=1',
                    method: 'GET',
                    headers: headers,
                    json: true,
                };

                function myPromise() {
                    return new Promise(function (resolve) {
                        request(options, function (error, response, body) {
                            resolve(body);
                        });
                    });
                }
                let name;

                //データ書き込み部分
                myPromise().then(function(data) { name= data.user.real_name;
                    let usersRef = ref.child((name));
                    usersRef.set({
                        address: event.text,
                        name: event.user
                    });
                });
                const reply = await rtm.sendMessage(`${event.text}ですね、変更完了しました`, event.channel);
                console.log('Message sent successfully', reply.ts);
                flag=0;

            } catch (error) {
                console.log('郵便番号の形式で入力してください', error);
                flag=0;
            }

        }
    }
});

(async () => {
    // Connect to Slack
    const { self, team } = await rtm.start();
})();

