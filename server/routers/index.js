const router = require('koa-router')();

router.get('/', async (ctx) => {
    ctx.body = '首页'
})

router.get('/slider', (ctx) => {
    const data = [{
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
    ctx.body = data
})
router.get('/titles', async (ctx) => {
    const user = [
            { 
                name: '今日热门',
                id: 1,
                title: [
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:1
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:2
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:3
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:4
                    },
                ]
            },
            { 
                name: '今日热门',
                id: 2,
                title: [
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:1
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:2
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:3
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:4
                    },
                ]
            },
            { 
                name: '今日热门',
                id: 3,
                title: [
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课,+++++++++++++++++',
                        url: 'https://vip.open.163.com/courses/174',
                        id:1
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:2
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:3
                    },
                    {
                        img: 'https://open-image.nosdn.127.net/ced0766102d44d6796b95e2dd03c6d2e.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85',
                        text: '老路：用得上的商学课',
                        url: 'https://vip.open.163.com/courses/174',
                        id:4
                    },
                ]
            }
    ]
    
    ctx.body = user
})

module.exports = router