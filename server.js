const path = require('path');
const MTProto = require('@mtproto/core');
const api= require('./api');

const bodyParser=require('body-parser')
const express= require('express');

const phone= "+251912356845"
// const code= 

const app = express()

app.use(bodyParser.json())


const api_id = 15390000;
const api_hash = "";

// 1. Create instance

const mtproto = new MTProto({
  api_id,
  api_hash,

  storageOptions: {
    path: path.resolve(__dirname, './data/1.json'),
  },
});

// 2. Print the user country code
mtproto.call('help.getNearestDc').then(result => {
  console.log('country:', result.country);
});


function sendCode() {
  return api.call('auth.sendCode', {
    phone_number: "+251983482804",
    settings: {
      _: 'codeSettings',
    },
  });
}


 sendCode()

// signIn({code:14117,phone:phone,phone_code_hash:14117})


function signIn({ code, phone, phone_code_hash }) {
  return api.call('auth.signIn', {
    phone_code: code,
    phone_number: phone,
    phone_code_hash: phone_code_hash,
  });
}
app.get('/',(req,res)=>{
  res.send("server UP!")
})

app.listen(process.env.PORT || 5000, async () =>{
  console.log("listening on port", 5000 || process.env.PORT)
  // await init()
})