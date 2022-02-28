import {Request, Response, NextFunction} from 'express';
const data = require("../transactions.json");


const getTransactions = async (req : Request, res : Response, next : NextFunction) => {
    let result : JSON = data;
    return res.status(200).json({
        message : result
    });
};

const postTransaction = async (req :Request, res : Response, next : NextFunction) => {
    let From : String = req.body.from;
    let To : String = req.body.to;
    let Amount : Number = req.body.amount;
    let Timestamp : String = req.body.timestamp;

    let Transaction = {
        from : From,
        to : To,
        amount : Amount,
        timestamp: Timestamp,
    }

    if(From == null || To == null || Amount == null){
        return res.status(404).json({
            message : "Pls fill all the data"
        });
    }
    else {
        let oldData = data;
        oldData.push(Transaction);
        res.status(200).json({
            message : oldData
        });

    }
};

export default{getTransactions,postTransaction};

