const data = require('./data')
const router = require('koa-router')();

router.get('/', async (ctx) => {
    ctx.body = '首页'
})

router.get('/data', (ctx) => {
    ctx.body = data
})

router.get('/slider', (ctx) => {
    const slider = [{
        id:16805,
        linkUrl:"https://y.qq.com/m/act/HappyCamp/index.html?ADTAG=jiaodiantu",
        picUrl:"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/310076.jpg"
     },
     {
        id:16806,
        linkUrl:"https://y.qq.com/m/act/HappyCamp/index.html?ADTAG=jiaodiantu",
        picUrl:"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/310112.jpg"
        },
        {
        id:16807,
        linkUrl:"https://y.qq.com/m/act/HappyCamp/index.html?ADTAG=jiaodiantu",
        picUrl:"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/310134.jpg"
    }]
    ctx.body = slider
})
router.get('/titles', async (ctx) => {
    const user = [
            { 
                name: '今日热门',
                id: 1,
                title: [
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2018/8/7/e/233579368d9b4de6a271906484817e7e.jpg_180x100x1x95.jpg',
                        text: '9种高智力类型，你是哪一种？',
                        id:1
                    },
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2016/11/f/6/2b6b04cfc83b4fc2a85608eac002c1f6.jpg_180x100x1x95.jpg',
                        text: '不穿宇航服在太空待60秒会怎么样',
                        id:2
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/image/snapshot_movie/2018/8/O/K/MDN768MOK.jpg?imageView&thumbnail=700y400&enlarge=1',
                        text: '如果你一辈子不刷牙会怎样',
                        id:8
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/image/snapshot_movie/2018/8/1/N/MDN76BH1N.jpg?imageView&thumbnail=700y400&enlarge=1',
                        text: '负面情绪竟然有这么多好处',
                        id:7
                    },
                ]
            },
            { 
                name: 'TED',
                id: 2,
                title: [
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2016/11/9/2/64dc98b207b74789aa1908c813ae6d92.jpg_280x158x1x95.jpg',
                        text: '【TEDx】不要等到来不及',
                        id:5
                    },
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://vimg1.ws.126.net/image/snapshot_movie/2016/9/5/6/MBVF3AA56.jpg_180x100x1x95.jpg',
                        text: '【TEDx】别对爱你的人飙狠话',
                        id:6
                    },
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2016/11/b/a/c36e048e284c459686133e66a79e2eba.jpg_280x158x1x95.jpg',
                        text: '【TEDx】提升自信的技巧',
                        id:4
                    },
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2016/11/f/9/0e6edd7662884652992d25f35dc178f9.jpg_280x158x1x95.jpg',
                        text: '【TEDx】你真的想你所想吗？',
                        id:3
                    },
                ]
            },
            { 
                name: '今日热门',
                id: 3,
                title: [
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2018/8/7/e/233579368d9b4de6a271906484817e7e.jpg_180x100x1x95.jpg',
                        text: '9种高智力类型，你是哪一种？',
                        id:1
                    },
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2016/11/f/6/2b6b04cfc83b4fc2a85608eac002c1f6.jpg_180x100x1x95.jpg',
                        text: '不穿宇航服在太空待60秒会怎么样',
                        id:2
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/image/snapshot_movie/2018/8/O/K/MDN768MOK.jpg?imageView&thumbnail=700y400&enlarge=1',
                        text: '如果你一辈子不刷牙会怎样',
                        id:8
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/image/snapshot_movie/2018/8/1/N/MDN76BH1N.jpg?imageView&thumbnail=700y400&enlarge=1',
                        text: '负面情绪竟然有这么多好处',
                        id:7
                    },
                ]
            },
            { 
                name: 'TED',
                id: 4,
                title: [
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2016/11/9/2/64dc98b207b74789aa1908c813ae6d92.jpg_280x158x1x95.jpg',
                        text: '【TEDx】不要等到来不及',
                        id:5
                    },
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://vimg1.ws.126.net/image/snapshot_movie/2016/9/5/6/MBVF3AA56.jpg_180x100x1x95.jpg',
                        text: '【TEDx】别对爱你的人飙狠话',
                        id:6
                    },
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2016/11/b/a/c36e048e284c459686133e66a79e2eba.jpg_280x158x1x95.jpg',
                        text: '【TEDx】提升自信的技巧',
                        id:4
                    },
                    {
                        img: 'https://imgsize.ph.126.net/?enlarge=true&imgurl=http://open-image.nosdn.127.net/image/snapshot_movie/2016/11/f/9/0e6edd7662884652992d25f35dc178f9.jpg_280x158x1x95.jpg',
                        text: '【TEDx】你真的想你所想吗？',
                        id:3
                    },
                ]
            },
    ]

    ctx.body = user
})

module.exports = router