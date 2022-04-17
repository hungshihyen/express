const express = require('express');
const { response } = require("express");
const app = express();
const port = 3001;


// 25822

const StreamChat = require('stream-chat').StreamChat;
const client = StreamChat.getInstance('k79p9js9fgaw', 'yqqgc63thz9zeh4fsxx494vgh4ea2hntvpvgxz6qs7jpw7csxk3p4x5rn265gya5');


app.get('/', async (req, res) => {


    // const {blocklists} = await client.listBlockLists();
    //
    // console.log(blocklists[0].words)
    //
    // await client.createBlockList({
    //     name: 'blocklist',
    //     words:[...blocklists[0].words, 'http'],
    // });


    const ressssss = await client.banUser('10009', {
        banned_by_id:'10009',
    });




    // console.log(client)
    //
    // await client.unbanUser('1379');

    // const response = await client.queryBannedUsers({channel_cid: 'commerce:public'});
    //
    // console.log(response)
    //
    // res.send(ressssss);

});

app.post('/answer', function (req, res) {
    res.send('123123');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});