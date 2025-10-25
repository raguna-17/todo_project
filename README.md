1. タイトル
# Simple ToDo App

2. 概要（What / Why）
シンプルなタスク管理アプリです。  
「日々の作業を整理しやすくする」を目的に作成しました。
ReactとNode.jsを使い、フロントからバックまで一通り実装しています。

3. デモURL
https://todo-example.vercel.app  
テストユーザー: test@example.com / password: 123456

4. 使用技術
フロント: React (Vite)  
バックエンド: Express + Node.js  
DB: PostgreSQL  
認証: JWT  
デプロイ: Render  

5. 主な機能
- ユーザー登録 / ログイン  
- タスクの追加・編集・削除  
- 完了状態の切り替え  
- フィルター（未完了 / 完了済み）

6. 工夫点・設計意図
- RESTful API設計を意識  
- バリデーションをサーバー側で実装  
- UIをコンポーネント化して再利用性を確保  

7. 今後の改善点
- テストコードの追加  
- タグ機能の実装  
- レスポンシブ対応

8. スクリーンショット
（スクショを /assets に置いて、Markdownで貼る）
![screenshot](./assets/todo-demo.png)
