CMD to INSTALL: npm install
CMD to RUN: node server.js

************************************************************************************

HOST : http://localhost:4000/

************************************************************************************

API URL : api/auth/login 
METHOD : POST
PAYLOAD : 
{
	"username": "admin",
	"password": "admin"
}
RESPONSE :
{
    "status": "ok",
    "message": "Login Success"
}

************************************************************************************

API URL : api/job 
METHOD : POST
PAYLOAD : 
{
    "companyDetails": {
        "StateDepartment": "test1",
        "StateDivison": "test1",
        "address": "test1",
        "city": "test1",
        "country": "test1",
        "zipcode": "test1"
    },
    "billingContact": {
        "name": "test data",
        "phone": "test data",
        "email": "test data",
        "sameAsCompanyAddress": false,
        "address": "test data",
        "city": "test data",
        "zipcode": "test data",
        "state": "test data",
        "country": "test data"
    },
    "positionDetail": {
        "schedule": [
            "Monday",
            "Tuesday"
        ],
        "title": "test data",
        "description": "test data",
        "sameAsboveAddress": false,
        "address": "test data",
        "city": "test data",
        "zipcode": "test data",
        "state": "test data",
        "country": "test data",
        "hourlyWage": "test data",
        "scheduledHours": "test data",
        "shiftStartTime": "test data",
        "shiftEndTime": "test data",
        "startDate": null,
        "endDate": null
    },
    "supervisorDetails": {
        "name": "test data",
        "phone": "test data",
        "email": "test data"
    }
}

RESPONSE:

{
    "status": "ok",
    "data": {
        "positionDetail": {
            "schedule": [
                "Monday",
                "Tuesday"
            ],
            "title": "test data",
            "description": "test data",
            "sameAsboveAddress": false,
            "address": "test data",
            "city": "test data",
            "zipcode": "test data",
            "country": "test data",
            "hourlyWage": "test data",
            "scheduledHours": "test data",
            "shiftStartTime": "test data",
            "shiftEndTime": "test data",
            "startDate": null,
            "endDate": null
        },
        "_id": "6006906053dbbf3694875f2d",
        "companyDetails": {
            "StateDepartment": "test1",
            "StateDivison": "test1",
            "address": "test1",
            "city": "test1",
            "country": "test1",
            "zipcode": "test1"
        },
        "billingContact": {
            "name": "test data",
            "phone": "test data",
            "email": "test data",
            "sameAsCompanyAddress": false,
            "address": "test data",
            "city": "test data",
            "zipcode": "test data",
            "state": "test data",
            "country": "test data"
        },
        "supervisorDetails": {
            "name": "test data",
            "phone": "test data",
            "email": "test data"
        },
        "status": "OPEN",
        "__v": 0
    }
}

************************************************************************************


API URL : api/job/get?status=OPEN&size=10&page=1
METHOD : GET

RESPONSE: 

{
    "status": "ok",
    "response": [
        {
            "companyDetails": {
                "StateDepartment": "test1",
                "StateDivison": "test1",
                "address": "test1",
                "city": "test1",
                "country": "test1",
                "zipcode": "test1"
            },
            "billingContact": {
                "name": "test data",
                "phone": "test data",
                "email": "test data",
                "sameAsCompanyAddress": false,
                "address": "test data",
                "city": "test data",
                "zipcode": "test data",
                "state": "test data",
                "country": "test data"
            },
            "positionDetail": {
                "schedule": [
                    "Monday",
                    "Tuesday"
                ],
                "title": "test data",
                "description": "test data",
                "sameAsboveAddress": false,
                "address": "test data",
                "city": "test data",
                "zipcode": "test data",
                "state": "test data",
                "country": "test data",
                "hourlyWage": "test data",
                "scheduledHours": "test data",
                "shiftStartTime": "test data",
                "shiftEndTime": "test data",
                "startDate": null,
                "endDate": null
            },
            "supervisorDetails": {
                "name": "test data",
                "phone": "test data",
                "email": "test data"
            },
            "_id": "5ffa796b44c3df21784e18bd",
            "status": "OPEN",
            "subcontractorId": "",
            "__v": 0
        }
    ]
}

************************************************************************************

API URL : api/job/library
METHOD : GET
RESPONSE : 
{
    "status": "ok",
    "division": [],
    "position": []
}

************************************************************************************

API URL : api/job/?id=6006906053dbbf3694875f2d 
METHOD : GET
RESPONSE :

{
        "positionDetail": {
            "schedule": [
                "Monday",
                "Tuesday"
            ],
            "title": "test data",
            "description": "test data",
            "sameAsboveAddress": false,
            "address": "test data",
            "city": "test data",
            "zipcode": "test data",
            "country": "test data",
            "hourlyWage": "test data",
            "scheduledHours": "test data",
            "shiftStartTime": "test data",
            "shiftEndTime": "test data",
            "startDate": null,
            "endDate": null
        },
        "_id": "6006906053dbbf3694875f2d",
        "companyDetails": {
            "StateDepartment": "test1",
            "StateDivison": "test1",
            "address": "test1",
            "city": "test1",
            "country": "test1",
            "zipcode": "test1"
        },
        "billingContact": {
            "name": "test data",
            "phone": "test data",
            "email": "test data",
            "sameAsCompanyAddress": false,
            "address": "test data",
            "city": "test data",
            "zipcode": "test data",
            "state": "test data",
            "country": "test data"
        },
        "supervisorDetails": {
            "name": "test data",
            "phone": "test data",
            "email": "test data"
        },
        "status": "OPEN",
        "__v": 0
}

************************************************************************************

API URL : api/subcontractor/get
METHOD : GET
RESPONSE : 
{
    "status": "ok",
    "response": [
        {
            "_id": "6006906053dbbf3694875f2d",
            "username": "admin",
            "name": "test data",
            "phone": "test data",
            "email": "test data",
            "status": "ACTIVE",
            "__v": 0
        }
    ]
}


************************************************************************************


API URL : api/subcontractor/jobs?subcontractorId=6006906053dbbf3694875f2d
METHOD : GET
RESPONSE : 
{
    "status": "ok",
    "response": []
}
Jobs Response

************************************************************************************


API URL : api/job/assign
METHOD : POST
PAYLOAD : 
{
	"_id":"6006906053dbbf3694875f2d",
	"subcontractorId": "6006906053dbbf3694875f2d"
}

RESPONSE:
Job Response

************************************************************************************

API URL : api/job/close
METHOD : POST
PAYLOAD : 
{
	"_id":"6006906053dbbf3694875f2d",
	"endDate": "",
    "reason": ""
}

RESPONSE:
Job Response

************************************************************************************

API URL : api/job/open
METHOD : POST
PAYLOAD : 
{
	"_id":"6006906053dbbf3694875f2d"
}

RESPONSE:
Job Response

************************************************************************************