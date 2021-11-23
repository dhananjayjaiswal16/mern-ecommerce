import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";


const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGI3MmVkNjY4MDE0ZWFkODY4MmJmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzY5MDE2OSwiZXhwIjoxNjM3OTQ5MzY5fQ.J2xtHO380VjIuhKS7tTJCb2bSiIAgmZV1ahJkPO5sVs";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: TOKEN },
});