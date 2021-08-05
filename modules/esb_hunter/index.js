//construct request
//encrypt the request
//call the hunter
//save into db

async function getUserData(params) {
	const users = {};//await models.user.findAll();
	res.status(200).json(users);
};

async function constructRequest(params){
    let request_header={};
    let request_body={};
}

//call encrypt service

//send request to hunter


async function callHunter(params){
    let userdata = await getUserData(params.app_ref_id);
    let request = await constructRequest(userdata);
}

//log the request and response


module.exports = {callHunter};

