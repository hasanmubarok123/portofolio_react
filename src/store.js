import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";
import persistStore from 'unissist'
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';



const initialState = {
    userListTools: [],
    listTools:[],
    tool:[],
    token: '',
    is_login: false,
    type: '',

  };
  
const store =
process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));


const adapter = localStorageAdapter();
persistStore(store, adapter);

const actions = store => ({
    getUserTools: async (state, token) => {
        const url = "https://portofolioalphatech.herokuapp.com/api/users/items"
        const auth = "Bearer " + token
        // console.log(auth)
        await axios
        .get(url, { headers: { "Authorization": auth } })
        .then((response) => {
            store.setState({
                userListTools: response.data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },
    getTool: async (state, id) => {
        const url = "https://portofolioalphatech.herokuapp.com/api/public/items/" + id
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                tool: response.data.data,
            })
            console.log("Response one book: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    signUpHandle: async (state, name, username, email, password, no_telp, address) => {
        const url = "https://portofolioalphatech.herokuapp.com/api/users/register"

        const body = {
            name: name,
            username: username,
            email: email,
            password: password,
            no_telp: no_telp,
            address: address
        }
        // console.log(name)
        await axios
        .post(url, body)
        .then((response) => {
            alert("Sign up success")
            store.setState({
                token: response.data.token,
                is_login: true
            })
            console.log("Response signup: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    handleLogout: (state) => {
        store.setState({
            token: '',
            is_login: false
        })
    },

    signInHandle: async (state, username, password) => {
        const url = "https://portofolioalphatech.herokuapp.com/api/users/login"

        const body = {
            username: username,
            password: password
        }
        await axios
        .post(url, body)
        .then((response) => {
            alert("Sign in succes")
            store.setState({
                token: response.data.token,
                is_login: true
            })
            console.log("Response: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

})


export { store, actions }
