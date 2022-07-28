import { NextApiHandler } from 'next';

let stateUsername = '';

const usernameApi: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.json(stateUsername);
      break;
    case 'POST':
      try {
        const username = JSON.parse(req.body);
        if (typeof username === 'string') {
          stateUsername = username;
        } else throw 'invalid body';
      } catch (e) {
        res.status(400);
        res.json('Bad Request');
      }
      break;
    default:
      res.status(405);
      res.json('Method Not Allowed');
      break;
  }
};

export default usernameApi;
