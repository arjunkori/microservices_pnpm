const { models } = require('orm');

//construct request
//encrypt the request
//call the hunter
//save into db

async function getUserData(params) {
	const users = await models.customer_info.findAll();
    return users;
	//res.status(200).json(users);
};

function constructRequest(params){
    let request_header={};
    let request_body = {header:'',body:''};
    return request_body;
}

//call encrypt service

//send request to hunter


async function callHunter(params){
    let userdata = await getUserData(params);
    let request = constructRequest(userdata);
    return request;
}

//log the request and response


module.exports = {callHunter};

