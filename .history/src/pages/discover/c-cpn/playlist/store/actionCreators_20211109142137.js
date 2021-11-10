import { getSongCategory } from "@/services/songList";
import { handleSongsCategory } from "@/utils/handle-data";


export const getCategoryAction = () => {
    return dispatch => {
      getSongCategory().then(res => {
          console.log("cat=",res);
        const categoryData = res && handleSongsCategory(res);
        console.log(categoryData);
        dispatch(changeCategoryAction(categoryData))
      })
    }
  }

const changeCategoryAction=(payload)=>{(
    type:CHANGE_CATEGORY,
    payload
)}