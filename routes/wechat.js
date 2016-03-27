var express = require('express');
var router = express.Router();

var wechat = require('wechat');
var config = require('../config.js');
// console.log(config);

router.use('/', wechat(config, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    console.info(req);
    conole.log(res);
    if (message.FromUserName === 'diaosi') {
        // 回复屌丝(普通回复)
        res.reply('hehe');
    } else if (message.FromUserName === 'text') {
        //你也可以这样回复text类型的信息
        res.reply({
            content: 'text object',
            type: 'text'
        });
    } else if (message.FromUserName === 'hehe') {
        // 回复一段音乐
        res.reply({
            type: "music",
            content: {
                title: "来段音乐吧",
                description: "一无所有",
                musicUrl: "http://mp3.com/xx.mp3",
                hqMusicUrl: "http://mp3.com/xx.mp3",
                thumbMediaId: "thisThumbMediaId"
            }
        });
    } else {
        // 回复高富帅(图文回复)
        res.reply([
            {
                title: '你来接我吧',
                description: '这是女神与高富帅之间的对话',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/iauSARNPGRmp1oVdTGVQzJaZWJyxmQfkq7uoyNH7IYqoWRMa0kCAqaSh9ib4A2a064lJQQC8LSJftXJ1nialicYB6w/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MzIyNDA2ODg0Ng==&mid=404282742&idx=1&sn=447837bf378f863b0f6cf88e5c7f8df5#rd'
            }
        ]);
    }
}));

module.exports = router;
