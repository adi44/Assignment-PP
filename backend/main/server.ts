import http from 'http';
import express, {Express} from 'express';
import morgan from 'morgan';
const cors = require('cors');
import routes from './routes/transactions';

const router : Express = express();

router.use(morgan('dev'));

router.use(express.urlencoded({ extended: false }));
router.use(cors())
router.use(express.json());

router.use('/',routes);

router.use((req,res,next)=>{
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

const PORT: any = 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));