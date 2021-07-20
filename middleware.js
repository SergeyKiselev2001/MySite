
import colors from "colors";

export function dateTime(req, res, next){
    var b = new Date();

    req.dateTime = b.getDate();
    next();
}

export function logger(req, res, next){
    console.log(colors.red('Logger'));
    next();
}