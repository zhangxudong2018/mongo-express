const jwt = require('jsonwebtoken');
const signkey = 'mes_qdhd_mobile_xhykjyxgs';

const expiresIn={
		expiresIn: 3600 * 24 * 3
	}

const setToken = function(username,userId,permission){
	return new Promise((resolve,reject)=>{
		const token = jwt.sign({
			username:username,
			userId:userId,
			permission:permission
		},signkey,{expiresIn:3600*24*3});
		resolve(token);
	})
}

const verToken = function(token){
	return new Promise((resolve,reject)=>{
		var info = jwt.verify(token, signkey ,(error,res) => { 
			var data={}
			if(error){
				data.code = '01';
				data.obj = error;
			}else{
				data.code = '00';
				data.obj = res;
			}
			return data
          });
		resolve(info);
	})
}

module.exports = { signkey, expiresIn, setToken, verToken }