const db = require('../db/database');
var dbFunc = require('../db/db-function');

var NotificationModel = {
    getNotiById,
    getNotiByIdWStatus,
    addNotification,
    updateNotificationStatus
}

function getNotiById(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Notification where to_id = ?', id,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });  
}

function getNotiByIdWStatus(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Notification where to_id = ? and status = ?', [id.id, id.status],(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });  
}

function addNotification(date,id,title,message) {
    //TODO: set "Notification" attribute appropriate to the data passing -- checkout ../document/add_notification.txt 
    var val=[date,id,title,message]
    return new Promise((resolve,reject) => {
        console.log(val);
        
        db.query(`CALL add_notification(?,?,?,?)`,val,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

function updateNotificationStatus(notification) {
    return new Promise((resolve,reject) => {
        db.query(`CALL update_noti_to_read(?)`,[notification.id],(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

module.exports = NotificationModel;