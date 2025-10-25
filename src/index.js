import express from 'express';
import { connectDB } from './db.js';  // DB接続ファイル（あとで作る）

const app = express();

// ミドルウェア設定
app.use(express.json());

// DB接続
connectDB();

// テストルート
app.get('/', (req, res) => res.send('OK'));

// RenderがくれるPORTを使う
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
