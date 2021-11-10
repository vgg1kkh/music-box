import { getSongCategory } from "../../../../../services/songList";



export const getCategoryAction = () => {
    return dispatch => {
      getSongCategory().then(res => {
          l
        // const categoryData = handleSongsCategory(res);
        // dispatch(changeCategoryAction(categoryData))
      })
    }
  }