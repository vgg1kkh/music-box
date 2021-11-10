import { getSongCategory } from "../../../../../services/songList";
import 


export const getCategoryAction = () => {
    return dispatch => {
      getSongCategory().then(res => {
          console.log("cat=",res);
        const categoryData = handleSongsCategory(res);
        // dispatch(changeCategoryAction(categoryData))
      })
    }
  }