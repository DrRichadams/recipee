import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTHENTICATE = "AUTHENTICATE"

let timer;

const storeData = async (token, userId, expDate) => {
    try {
      await AsyncStorage.setItem('@auth_data', JSON.stringify({
        token, userId, expDate
      }))
    } catch (e) {}
}

// const value = await AsyncStorage.getItem('@auth_data')


  export const logout = () => {
    clearLogoutTimer()
    return async dispatch => {
        await AsyncStorage.removeItem('@auth_data').then(() => {
            dispatch({type: LOGOUT})
        })
    }
  }

  const clearLogoutTimer = () => {
    if(timer) {
        clearTimeout(timer)
    }
  }

  const setLogoutTime = expirationTime => {
    return dispatch => {
        timer = setTimeout(() => {
            dispatch(logout())
        }, expirationTime / 1000)
    }
  }


export const authenticate = (token, userId, expTime) => {
    return dispatch => {
        setLogoutTime(expTime)
        dispatch({ type: AUTHENTICATE, token, userId })
    }
}

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRhEC9BtXYKjLY3ijtuDrmnC8B2A-ynDs",
            {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        if(!response.ok) {
            throw new Error("Something went wrong!")
        }

        const resData = await response.json()
        console.log(resData)
        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000)
        storeData( resData.idToken, resData.localId, expirationDate.toISOString() )

        setLogoutTime(parseInt(resData.expiresIn) * 1000)
        dispatch({type: SIGNUP, token: resData.idToken, userId: resData.localId})
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRhEC9BtXYKjLY3ijtuDrmnC8B2A-ynDs",
            {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        if(!response.ok) {
            // throw new Error("Something went wrong!")
            const resError = await response.json()
            console.log(resError)
        }

        const resData = await response.json()
        console.log(resData)
        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000)
        storeData( resData.idToken, resData.localId, expirationDate.toISOString() )
        setLogoutTime(parseInt(resData.expiresIn) * 1000)
        dispatch({type: LOGIN, token: resData.idToken, userId: resData.localId})
    }
}