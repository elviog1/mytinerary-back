const nodemailer = require('nodemailer')
const {google} = require ('googleapis')
const { auth } = require('google-auth-library')
const OAuth2 = google.auth.OAuth2

const sendMail = async(mail, code) =>{
     const client = new OAuth2(
        process.env.GOOGLE_ID,
        process.env.GOOGLE_SECRET,
        process.env.GOOGLE_URL
     )
     client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH
     })
     const  accessToken= client.getAccessToken()
     const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GOOGLE_USER,
            type: 'OAuth2',
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            refreshToken: process.env.GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
     })
     const mailOptions = {
        from: process.env.GOOGLE_USER,
        to: mail,
        subject: 'Verify your My Tinerary account',
        html: `
        <div>
           <h1>Hola rey todo bien</h1>
           <a href='http://localhost:4000/auth/verify/${code}'>click here to verify your account</a>
        </div>`
     }
     await transport.sendMail(mailOptions,(error,response)=>{
        if(error){
            console.log(error)
        }else{
            console.log(response)
        }
     })
}

module.exports = sendMail