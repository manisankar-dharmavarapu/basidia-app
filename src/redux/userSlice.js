import { createSlice } from '@reduxjs/toolkit'

const statesData = [
    {
        "code": "AN",
        "name": "Andaman and Nicobar Islands",
        "city":'Port Blair'
    },
    {
        "code": "AP",
        "name": "Andhra Pradesh",
        "city":'Amaravati'
    },
    {
        "code": "AR",
        "name": "Arunachal Pradesh",
        "city":'Itanagar'
    },
    {
        "code": "AS",
        "name": "Assam",
        "city":'Dispur'
    },
    {
        "code": "BR",
        "name": "Bihar",
        "city":'Patna'
    },
    {
        "code": "CG",
        "name": "Chandigarh",
        "city":'Chandigarh'
    },
    {
        "code": "CH",
        "name": "Chhattisgarh",
        "city":'Raipur'
    },
    {
        "code": "DH",
        "name": "Dadra and Nagar Haveli",
        "city":'Silvassa'
    },
    {
        "code": "DD",
        "name": "Daman and Diu",
        "city":'Daman'
    },
    {
        "code": "DL",
        "name": "Delhi",
        "city":'New Delhi'
    },
    {
        "code": "GA",
        "name": "Goa",
        "city":'Panaji'
    },
    {
        "code": "GJ",
        "name": "Gujarat",
        "city":'Gandhinagar'
    },
    {
        "code": "HR",
        "name": "Haryana",
        "city":'Haryana'
    },
    {
        "code": "HP",
        "name": "Himachal Pradesh",
        "city":'Shimla'
    },
    {
        "code": "JK",
        "name": "Jammu and Kashmir",
        "city":'Srinagar'
    },
    {
        "code": "JH",
        "name": "Jharkhand",
        "city":'Ranchi'
    },
    {
        "code": "KA",
        "name": "Karnataka",
        "city":'Bengaluru'
    },
    {
        "code": "KL",
        "name": "Kerala",
        "city":'Thiruvananthapuram'
    },
    {
        "code": "LD",
        "name": "Lakshadweep",
        "city":'Kavaratti'
    },
    {
        "code": "MP",
        "name": "Madhya Pradesh",
        "city":'Bhopal'
    },
    {
        "code": "MH",
        "name": "Maharashtra",
        "city":'Mumbai'
    },
    {
        "code": "MN",
        "name": "Manipur",
        "city":'Imphal'
    },
    {
        "code": "ML",
        "name": "Meghalaya",
        "city":'Shillong'
    },
    {
        "code": "MZ",
        "name": "Mizoram",
        "city":'Aizawl'
    },
    {
        "code": "NL",
        "name": "Nagaland",
        "city":'Kohima'
    },
    {
        "code": "OR",
        "name": "Odisha",
        "city":'Kohima'
    },
    {
        "code": "PY",
        "name": "Puducherry",
        "city":'Pondicherry'
    },
    {
        "code": "PB",
        "name": "Punjab",
        "city":'Chandigarh'
    },
    {
        "code": "RJ",
        "name": "Rajasthan",
        "city":'Jaipur'
    },
    {
        "code": "SK",
        "name": "Sikkim",
        "city":'Sikkim'
    },
    {
        "code": "TN",
        "name": "Tamil Nadu",
        "city":'Chennai'
    },
    {
        "code": "TS",
        "name": "Telangana",
        "city":'Hyderabad'
    },
    {
        "code": "TR",
        "name": "Tripura",
        "city":'Agartala'
    },
    {
        "code": "UP",
        "name": "Uttar Pradesh",
        "city":'Lucknow'
    },
    {
        "code": "UK",
        "name": "Uttarakhand",
        "city":'Dehradun'
    },
    {
        "code": "WB",
        "name": "West Bengal",
        "city":'Kolkata'
    }
]

const initialState = {
    users: [],
    statesData:statesData
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        }
    }
});

export const {
addUser
} = userSlice.actions
export default userSlice.reducer