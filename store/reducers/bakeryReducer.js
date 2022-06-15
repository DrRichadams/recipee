import { REMOVE_RECIPE, ADD_NEW_RECIPE, SET_RECIPES } from "../actions/bakeryAction";

const initState = {
    recipes: [
        // { 
        //     id: "bakery1",
        //     name: "BREAD",
        //     ingridients: [ "Tat", "Lolo" ],
        //  },
        //  { 
        //      id: "bakery2",
        //     name: "GRANDMA'S COUNTRY WHITE BREAD",
        //     ingridients: [],
        //  },
        //  { 
        //      id: "bakery3",
        //     name: "BANANA LOAF",
        //     ingridients: [],
        //  },
        //  { 
        //      id: "bakery4",
        //     name: "DOUGHNUTS",
        //     ingridients: [],
        //  },
    ],
}

const bakeryReducer = (state = initState, action) => {
    switch(action.type) {
        case REMOVE_RECIPE:
            let tempState = state.recipes.filter(rep => rep.id !== action.payload)
            return{
                ...state,
                recipes: tempState
            }
        case ADD_NEW_RECIPE:
            // let tempData = state.recipes.concat([{...action.payload}])
            let tempData = state.recipes.concat([{
                    id: action.payload.id,
                    name: action.payload.recipe_name,
                    ingridients: [ ...action.payload.ingridients ],
            }])
            return {
                ...state,
                recipes: tempData
            }
        case SET_RECIPES:
            return{
                ...state,
                recipes: action.recipes
            }

        default: 
            return state
    }
}

export default bakeryReducer;