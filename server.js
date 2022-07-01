const path = require('path');
const MTProto = require('@mtproto/core');
const api= require('./api')

const api_id = 15390000;
const api_hash = "e050c352a7b154ea7c8acce18af6aa41";

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
	getUser()
	
async function getUser() {
  try {
    const user = await api.call('users.getFullUser', {
      id: {
        _: 'inputUserSelf',
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}