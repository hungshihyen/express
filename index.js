const express = require('express');
const app = express();
const port = 3001;


const StreamChat = require('stream-chat').StreamChat;
const client = StreamChat.getInstance('92uhdv5t2jke','rrhnsf286ntc5kswmknbvqtpz4czr2wuy8ckjvwhvjn3ak8vhntvmstxzvxg5tqx');


app.get('/',async (req, res) => {


    const {blocklists} = await client.listBlockLists();

    console.log(blocklists[0].words)

    await client.createBlockList({
        name: 'blocklist',
        words:[...blocklists[0].words, 'http'],
    });


    // await client.banUser('1379', {
    //     banned_by_id: '1379', // ID of the user who is performing the ban (Server-side auth)
    //     timeout: 60,
    //     reason: 'Banned for one hour',
    // });
    //

    // console.log(client)
    //
    // await client.unbanUser('1378');
    //
    //
    // const response = await client.queryBannedUsers({channel_cid: 'commerce:public'});
    //
    // console.log(response)

    res.send(response);

});

app.post('/answer', function (req, res){
    res.send('123123');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});