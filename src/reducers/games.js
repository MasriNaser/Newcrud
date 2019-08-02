import {
  FETCH_GAMES,
  FETCH_GAME,
  SAVE_GAME,
  DELETE_GAME,
  UPDATE_GAME
} from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_GAME:
      return {
        ...state,
        item: { ...action.payload },
        items: [...state.items, action.payload]
      };
    case SAVE_GAME:
      return {
        ...state,
        item: { ...action.payload },
        items: [...state.items, action.payload]
      };
    case DELETE_GAME:
      return {
        ...state,
        items: [...state.items.filter(it => it.id !== action.payload)]
      };
    case UPDATE_GAME:
      const {id}= action.payload
      const index = state.items.filter(i=> i.id === id)

      state.items.map((item, i)=> {
        if(i.id === index[0].id){
          state.items[i] = { ...action.payload}
        }
      })
      return {
        ...state
      }
    default:
      return state;
  }
}

