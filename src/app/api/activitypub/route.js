import express from 'express';
import { ActivityPubExpress } from 'activitypub-express';

const app = express();

const apex = new ActivityPubExpress({
  domain: 'https://www.yunghigue.com',
  actorParam: 'yunghigue',
  endpoints: {
    api: '/api/activitypub',
  },
});

app.use(apex);

export default function handler(req, res) {
  app(req, res);
}

