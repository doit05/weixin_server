var express = require('express'),
    router = express.Router(),
    log = require('console').log;

var wechat = require('wechat');
var config = require('../config.js');
// console.log(config);

router.use('/', wechat(config, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    try{
        log("req: ");
    console.info(req);
    log('-------------------');
    log("res");
    console.log(res);
    if (message.MsgType === 'text') {
        // 回复屌丝(普通回复)
        // res.reply('hehe');
        //你也可以这样回复text类型的信息
        res.reply({
            content: 'text object',
            type: 'text'
        });
    } else if (message.MsgType === 'image') {
        //图片消息
    } else if (message.MsgType === 'voice') {
        //语音消息
    }else if (message.MsgType === 'shortvideo') {
        //语音消息
    }else if (message.MsgType === 'video') {
        // 视频消息
        res.reply({
            type: "music",
            content: {
                title: "来段视频吧",
                description: "一无所有",
                musicUrl: "http://",
                hqMusicUrl: "http://mp3.com/xx.video",
                thumbMediaId: "thisThumbMediaId"
            }
        });
    }else if (message.MsgType === 'location') {
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
    }else if (message.MsgType === 'link') {
        //语音消息
    }else if (message.MsgType === 'device_text') {
        //设备消息消息
    }else {
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
    }catch(err){
        console.log(err);
        throw err;
    }
}));

module.exports = router;
