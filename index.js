const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const generatePostItem = require('./src/posts');

const PORT = 8080;

app.use(
    cors({
        origin: ['*.dev.postype.net'],
        credentials: true,
    }),
);

const mock = [
    { postId: 56, postTitle: '술을 좋아하세요', postPrice: 3000 },
    { postId: 67, postTitle: '밥을 먹다가 생각이 났어', postPrice: 4500 },
    { postId: 78, postTitle: '배가 고ㄴ 사ㅁ', postPrice: 5000 },
    {
        postId: 88,
        postTitle:
            '치즈를 먹다가치즈를 먹다가치즈를 먹다가치즈를 먹다가치즈를 먹다가치즈를 먹다가',
        postPrice: 34500,
    },
    { postId: 34, postTitle: '술', postPrice: 5000 },
    {
        postId: 45,
        postTitle:
            '오히오히도이호디오히도잏ㄷㄴㄷ랴랴러랴리댜러아ㅣㄴ댜러니ㅏ어리나얼',
        postPrice: 3000,
    },
    { postId: 1, postTitle: '술을하세요', postPrice: 3000 },
    { postId: 2, postTitle: '밥을 생각이 났어', postPrice: 4500 },
    { postId: 3, postTitle: '배가  사ㅁ', postPrice: 5000 },
    { postId: 4, postTitle: '술을 아닙니다아아아아아', postPrice: 3000 },
    // { postId: 5, postTitle: '밥을 먹었니?', postPrice: 4500 },
    // { postId: 6, postTitle: '배가고프니?', postPrice: 500 },
    // { postId: 7, postTitle: '피곤한 사람', postPrice: 300 },
    // { postId: 8, postTitle: '졸린 사람 생각이 났어', postPrice: 200 },
    // { postId: 9, postTitle: '배가 고ㄴ 사ㅁ', postPrice: 500 },
    // { postId: 0, postTitle: '언젠가 나도 사랑을 하겠지', postPrice: 3000 },
    // { postId: 10, postTitle: '포타 오리지널', postPrice: 700 },
    // { postId: 11, postTitle: '상수리나무 아래에서', postPrice: 1200 },
    // { postId: 12, postTitle: '술을하세요', postPrice: 3000 },
    // { postId: 13, postTitle: '밥을 생각이 났어', postPrice: 4500 },
    // { postId: 14, postTitle: '배가  사ㅁ', postPrice: 5000 },
    // { postId: 15, postTitle: '술을 아닙니다아아아아아', postPrice: 3000 },
    // { postId: 16, postTitle: '밥을 먹었니?', postPrice: 4500 },
    // { postId: 17, postTitle: '배가고프니?', postPrice: 500 },
    // { postId: 18, postTitle: '피곤한 사람', postPrice: 300 },
    // { postId: 19, postTitle: '졸린 사람 생각이 났어', postPrice: 200 },
    // { postId: 29, postTitle: '배가 고ㄴ 사ㅁ', postPrice: 500 },
    // {
    //     postId: 2342654,
    //     postTitle: '언젠가 나도 사랑을 하겠지',
    //     postPrice: 3000,
    // },
    // { postId: 13123342, postTitle: '포타 오리지널', postPrice: 700 },
    // { postId: 4564412356, postTitle: '상수리나무 아래에서', postPrice: 1200 },
];

app.get('/', (req, res) => {
    const html = mock.map((data) => generatePostItem(data));

    const response = {
        status: 200,
        message: '성공...',
        data: html,
        total_items: 6,
        total_pages: 5,
        page: 1,
        current: 1,
    };
    res.send(JSON.stringify(response));
});

app.post('/', (req, res) => {
    console.log(req.data);
    const response = {
        status: 'success',
        message: '아 뭐... 성공',
    };
    res.send({
        status: 200,
        message: '성공...',
        data: JSON.stringify(response),
    });
});

app.listen(PORT, () => {
    console.log(`MOCK SERVER listening on port ${PORT}`);
});
