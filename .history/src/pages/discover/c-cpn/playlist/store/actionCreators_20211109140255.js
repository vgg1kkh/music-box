import { getSongCategory } from "../../../../../services/songList";



export const getCategoryAction = () => {
    return dispatch => {
      getSongCategory().then(res => {
          console.log(res);
        // const categoryData = handleSongsCategory(res);
        // dispatch(changeCategoryAction(categoryData))
      })
    }
  }