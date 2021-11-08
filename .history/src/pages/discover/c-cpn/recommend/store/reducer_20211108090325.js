import { Map } from "immutable";
import {
  CHANGE_BANNER,
  CHANGE_HOTRECOMMEND,
  CHANGE_NEWALBUM,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_UP_RANKING,
  CHNAGE_SETTLE_SINGER
} from "./constants";

const initialState = Map({
  banners: [],
  hotRecommends: [],
  newAlbums: [],

  upRankings: {},
  newRankings: {},
  originRankings: {},

  settleSings:[],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BANNER:
      return (
        //        {...state,banners:action.payload}
        state.set("banners", action.payload)
      );

    case CHANGE_HOTRECOMMEND:
      return state.set("hotRecommends", action.payload);

    case CHANGE_NEWALBUM:
      return state.set("newAlbums", action.payload);

    case CHANGE_UP_RANKING:
      return state.set("upRankings", action.payload);

    case CHANGE_ORIGIN_RANKING:
      return state.set("originRankings", action.payload);

    case CHANGE_NEW_RANKING:
      return state.set("newRankings", action.payload);
    
    case CHNAGE_SETTLE_SINGER:
      return state.set("settleSings", action.payload);
    default:
      return state;
  }
};

export default reducer;
