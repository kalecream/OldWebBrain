export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const { source, target } = req.body;
  
    if (!source || !target) {
      return res.status(400).json({ error: 'Missing source or target' });
    }
  
    if (!target.startsWith('https://www.yunghigue.com')) {
      return res.status(400).json({ error: 'Invalid target URL' });
    }
  
    const metadata = await fetchMetadata(source);
    if (metadata) {
      storeWebMention(source, target, metadata.author, metadata.content);
    }
  
    res.status(202).json({ message: 'WebMention received' });
  }

import fetch from 'node-fetch';

async function fetchMetadata(source) {
  try {
    const response = await fetch(source);
    const html = await response.text();

    const $ = cheerio.load(html);
    const title = $('title').text();
    const author = $('meta[name="author"]').attr('content') || 'Unknown';
    const content = $('article').text() || $('body').text();

    return { title, author, content };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return null;
  }
}

import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./webmentions.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS webmentions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source TEXT NOT NULL,
      target TEXT NOT NULL,
      author TEXT,
      content TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

function storeWebMention(source, target, author, content) {
  db.run(
    'INSERT INTO webmentions (source, target, author, content) VALUES (?, ?, ?, ?)',
    [source, target, author, content],
    (err) => {
      if (err) {
        console.error('Error storing WebMention:', err);
      }
    }
  );
}
