import express from 'express';
import controller from '../controllers/transactions';
const router = express.Router();

router.get('/transactions', controller.getTransactions);
router.post('/transactions', controller.postTransaction);

export = router;