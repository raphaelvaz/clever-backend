import { Router } from 'express'
import { ExpressAdapter } from '../adapters/expressRouter';

import { addAccountFactory } from '../factories/addAccountFactory';
import { addMetricFactory } from '../factories/addMetricFactory';

export const routes = Router();

routes.post('/signup', ExpressAdapter(addAccountFactory()));

routes.post('/metrics', ExpressAdapter(addMetricFactory()))