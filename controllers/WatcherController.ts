import { Request, Response } from 'express';
import { WebcastPushConnection } from 'tiktok-live-connector';

export const Get_Comments = async (req: Request, res: Response) => {
    const tiktokUsername = 'tobikun11'; //change this to your username
    const tiktokConnection = new WebcastPushConnection(tiktokUsername);

    tiktokConnection.connect().then(state => {
        console.info(`Connected to ${state.roomId}'s live`);
    }).catch(err => {
    console.error('Failed to connect', err);
    });

    tiktokConnection.on('gift', data => {
        if (data.giftType === 1 && !data.repeatEnd) {
            console.log(`${data.uniqueId} is sending gift ${data.giftName} x${data.repeatCount}`);
        } else {
            console.log(`${data.uniqueId} has sent gift ${data.giftName} x${data.repeatCount}`);
        }
    })

    tiktokConnection.on('join', joined => {
        console.log(`${joined.nickname}: has joined the live stream.`);
    });

    tiktokConnection.on('follow', (data) => {
        console.log(data.uniqueId, "followed!");
    })

    tiktokConnection.on('like', data => {
        console.log(`${data.uniqueId} sent ${data.likeCount} likes, total likes: ${data.totalLikeCount}`);
    })

    tiktokConnection.on('chat', chat => {
        console.log(`${chat.nickname}: ${chat.comment}`);
    });

    tiktokConnection.on('follow', (data) => {
        console.log(data.uniqueId, "followed!");
    })

    tiktokConnection.on('roomUser', data => {
        console.log(`Viewer Count: ${data.viewerCount}`);
    })

}