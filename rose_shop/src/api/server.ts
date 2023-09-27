let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTc1NzUxMSwianRpIjoiYmRmM2QzZGItMDljYS00NmYyLWI5MGEtNTYzNWU5NzgzMDZlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgMTI3IFNxdWFkIiwibmJmIjoxNjk1NzU3NTExLCJleHAiOjE3MjcyOTM1MTF9.m2A75OPZYZtss4DeXLaTeiTb6n55iwA5UWbt65YcxEE" //our backend access_token from flask
let userId = localStorage.getItem('token') // our users signed into React, this is their userId

export const serverCalls = {

    getShop: async () => {

        const response = await fetch(`https://rangers127.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    }
}