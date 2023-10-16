const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

const sendEmail = asyncHandler (async (data, req, res)=>{
    let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 587,
        secure:false,
        auth:{
            user: process.env.MAIL_ID,
            pass: process.env.MP,
        },
    });
    try{

        let info = await transporter.sendMail({
            from: '"BogoRetro" <ing2bogoretro@gmail.com>',
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.html,
        });
        console.log("Mensaje enviado: %s". info.messageId);
        console.log("Anterior url: %s". nodemailer.getTestMessageUrl(info));
        if (info && info.messageId) {
            console.log("Mensaje enviado: %s", info.messageId);
        } else {
            console.error("No se pudo enviar el mensaje o no se obtuvo una respuesta válida de nodemailer.");
        }
        
    }catch (err){
        console.error("Error enviando el email:", err);
    }
    
    
  

});
module.exports={sendEmail};