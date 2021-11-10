import { getSongCategory } from "@/services/songList";
import { handleSongsCategory } from "@/utils/handle-data";
import { CHANGE_CATEGORY } from "./constants";


export const getCategoryAction = () => {
    return dispatch => {
      getSongCategory().then(res => {
          console.log("cat=",res);
        const categoryData = res && handleSongsCategory(res);
        console.log(categoryData);
        dispatch(changeCategoryAction(categoryData))
      }).catch(err=>console.log("failed to get the songCategory "))
    }
  }

const changeCategoryAction=(payload)=>({
    type: CHANGE_CATEGORY,
    payload
})