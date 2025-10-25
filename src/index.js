import express from 'express';
import path from 'path';

const app = express();

// public フォルダの静的ファイルを提供
app.use(express.static(path.join(process.cwd(), 'public')));

// APIやDB接続はここに追加可能
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
