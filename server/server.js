const express = require('express');
const cors = require('cors');
const router= express.Router();
const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/",router);
app.listen(5000,()=> console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"jasonzhang785@gmail.com",
        pass:"mticmdopnxhxqksq"
    },
})

contactEmail.verify((error)=>{
    if (error){
        console.log(error);
    }else{
        console.log("Ready to Send");
    }
});

router.post("/contact",(req,res) => {
    const name=req.body.firstName+" "+req.body.lastName;
    const email=req.body.email;
    const message =req.body.message;
    const phone=req.body.phone;
    const mail={
        from:name,
        to:"jasonz000829@gmail.com",
        subject:"Contact Form Submission - Portfolio",
        html:`<p>Name:  ${name}</p>
        <p>Email:  ${email}</p>
        <p>Phone:  ${phone}</p>
        <p>Message:  ${message}</p>`,
    };

    const notifMail={
        from:"jasonzhang785@gmail.com",
        to:email,
        subject:"Thank you for your contact!",
        html:`<!DOCTYPE html>

        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
        <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
        <style>
                * {
                    box-sizing: border-box;
                }
        
                body {
                    margin: 0;
                    padding: 0;
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: inherit !important;
                }
        
                #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                }
        
                p {
                    line-height: inherit
                }
        
                .desktop_hide,
                .desktop_hide table {
                    mso-hide: all;
                    display: none;
                    max-height: 0px;
                    overflow: hidden;
                }
        
                .image_block img+div {
                    display: none;
                }
        
                @media (max-width:700px) {
        
                    .desktop_hide table.icons-inner,
                    .social_block.desktop_hide .social-table {
                        display: inline-block !important;
                    }
        
                    .icons-inner {
                        text-align: center;
                    }
        
                    .icons-inner td {
                        margin: 0 auto;
                    }
        
                    .mobile_hide {
                        display: none;
                    }
        
                    .row-content {
                        width: 100% !important;
                    }
        
                    .stack .column {
                        width: 100%;
                        display: block;
                    }
        
                    .mobile_hide {
                        min-height: 0;
                        max-height: 0;
                        max-width: 0;
                        overflow: hidden;
                        font-size: 0px;
                    }
        
                    .desktop_hide,
                    .desktop_hide table {
                        display: table !important;
                        max-height: none !important;
                    }
                }
            </style>
        </head>
        <body style="background-color: #f9f9f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px; margin: 0 auto;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="pad" style="width:100%;">
        <div align="center" class="alignment" style="line-height:10px">
        <div style="max-width: 680px;"><img alt="Yourlogo Light" src="./server/asset/head_1.png" style="display: block; height: auto; border: 0; width: 100%;" title="Yourlogo Light" width="680"/></div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; width: 680px; margin: 0 auto;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block block-1" style="height:70px;line-height:70px;font-size:1px;"> </div>
        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="pad" style="width:100%;">
        <div align="center" class="alignment" style="line-height:10px">
        <div style="max-width: 93px;"><img alt="Check Icon" src="images/check-icon.png" style="display: block; height: auto; border: 0; width: 100%;" title="Check Icon" width="93"/></div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td class="pad" style="padding-bottom:25px;padding-left:20px;padding-right:20px;padding-top:10px;">
        <div style="color:#2f2f2f;font-family:Georgia,Times,'Times New Roman',serif;font-size:42px;line-height:120%;text-align:center;mso-line-height-alt:50.4px;">
        <p style="margin: 0; word-break: break-word;"><span>Thank you for your email!</span></p>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td class="pad" style="padding-left:30px;padding-right:30px;padding-top:10px;">
        <div style="color:#2f2f2f;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
        <p style="margin: 0; word-break: break-word;"><span>Hi <strong><u>${name}</u></strong>,</span></p>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td class="pad" style="padding-left:30px;padding-right:30px;">
        <div style="color:#2f2f2f;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
        <p style="margin: 0; word-break: break-word;"> </p>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td class="pad" style="padding-left:30px;padding-right:30px;">
        <div style="color:#2f2f2f;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
        <p style="margin: 0; word-break: break-word;"><span>Thank you for your interest and email!</span><span><span></span></span></p>
        <p style="margin: 0; word-break: break-word;"><span>I will contact you shortly!</span></p>
        </div>
        </td>
        </tr>
        </table>
        <div class="spacer_block block-7" style="height:70px;line-height:70px;font-size:1px;"> </div>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; background-image: url('images/background.png'); background-repeat: no-repeat; background-size: cover; color: #000000; width: 680px; margin: 0 auto;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
        <div align="center" class="alignment" style="line-height:10px">
        <div style="max-width: 340px;"><img alt="Yourlogo Light" src="images/foot.png" style="display: block; height: auto; border: 0; width: 100%;" title="Yourlogo Light" width="340"/></div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="social_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="pad">
        <div align="center" class="alignment">
        <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="72px">
        <tr>
        <td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com" target="_blank"><img alt="Facebook" height="32" src="images/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
        <td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com" target="_blank"><img alt="Twitter" height="32" src="images/twitter2x.png" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
        </tr>
        </table>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td class="pad">
        <div style="color:#f9f9f9;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
        <p style="margin: 0; word-break: break-word;"><span style="color: #000000;">Jason Zhang</span></p>
        <p style="margin: 0; word-break: break-word;"><span style="color: #000000;">jasonz000829@gmail.com</span></p>
        <p style="margin: 0; word-break: break-word;"><span style="color: #000000;">0468453988</span></p>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td class="pad">
        <div style="color:#cfceca;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
        <p style="margin: 0; word-break: break-word;"><span style="color: #000000;">2024 © All Rights Reserved</span></p>
        </div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px; margin: 0 auto;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
        <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
        <!--[if !vml]><!-->
        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
        <tr>
        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Beefree Logo" class="icon" height="32" src="images/Beefree-logo.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
        <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" style="color: #1e0e4b; text-decoration: none;" target="_blank">Designed with Beefree</a></td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table><!-- End -->
        </body>
        </html>`,
    };

    contactEmail.sendMail(mail,(error) => {
        if(error){
            res.json(error);
        }else{
            //res.json({code:200,status:"Message Sent"});
            contactEmail.sendMail(notifMail,(error2)=>{
                if(error2){
                    res.json(error2);
                }else{
                    res.json({code:200,status:"Notification Message Sent"});
                }
            })
        }
    });

   
})