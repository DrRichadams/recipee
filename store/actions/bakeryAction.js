export const REMOVE_RECIPE = "REMOVE_RECIPE"
export const ADD_NEW_RECIPE = "ADD_NEW_RECIPE"
export const SET_RECIPES = "SET_RECIPES"


export const setRecipes = () => {
    return async dispatch => {
        const response = await fetch("https://recipee-d8b19-default-rtdb.firebaseio.com/recipes.json")
        const resData = await response.json()
        const loadedData = []
        for(const key in resData) {
            loadedData.push({
                id: key,
                name: resData[key].recipe_name,
                ingridients: [ ...resData[key].ingridients ],
            })
        }
        console.log(loadedData)
        dispatch({ type: SET_RECIPES, recipes: [...loadedData] })
    }
}

export const removeRecipe = (id) => {
    return (dispatch) => {
        dispatch({ type: REMOVE_RECIPE, payload: id })
    }
}

export const addNewRecipe = (data) => {
    return async dispatch => {
        const response = await fetch("https://recipee-d8b19-default-rtdb.firebaseio.com/recipes.json", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            recipe_name: data.name,
            ingridients: data.ingridients
        })
    })
        const resData = await response.json()
        console.log(resData)
        dispatch({ type:  ADD_NEW_RECIPE, payload: {
                id: resData.name,
                recipe_name: data.name,
                ingridients: [ ...data.ingridients ],
        }})
    }
}