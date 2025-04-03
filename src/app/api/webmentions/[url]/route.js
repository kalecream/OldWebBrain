import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./webmentions.db');

export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  db.all(
    'SELECT * FROM webmentions WHERE target = ?',
    [url],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json(rows);
    }
  );
}
