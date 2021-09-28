import { Router } from 'express'
import { ExpressAdapter } from '../adapters/expressRouter';

import { addAccountFactory } from '../factories/addAccountFactory';

export const routes = Router();

routes.post('/signup', ExpressAdapter(addAccountFactory()));