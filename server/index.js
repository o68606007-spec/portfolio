// import 'dotenv/config';
// import express from 'express';
// import { QiitaArticles } from './routes/articles.js';

// const app = express();

// app.get('/api/articles', async (req, res) => {
//   try {
//     const articles = await QiitaArticles();
//     res.json(articles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: 'Qiita articles fetch failed',
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });

// export default app;