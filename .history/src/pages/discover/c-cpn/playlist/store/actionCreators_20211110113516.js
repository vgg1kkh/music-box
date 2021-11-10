import { getSongCategory,getSongCategoryList } from "@/services/songList";
import { handleSongsCategory } from "@/utils/handle-data";
import { CHANGE_CATEGORY, CHANGE_CATEGORY_SONGS, CHANGE_CURRENT_CATEGORY, PER_PAGE_NUMBER } from "./constants";



export const getCategoryAction = () => {
    return dispatch => {
      getSongCategory().then(res => {
        //   console.log("cat=",res);
        const categoryData = res && handleSongsCategory(res);
        // console.log("categoryData=",categoryData);
        dispatch(changeCategoryAction(categoryData))
      }).catch(err=>console.log("failed to get the songCategory data."))
    }
  }

const changeCategoryAction=(payload)=>({
    type: CHANGE_CATEGORY,
    payload
})

export const getSongListAction = (page) => {
    return (dispatch, getState) => {
      // 1.获取currentCategory
      const name = getState().getIn(["playList", "currentCategory"]);
  
      // 2.获取数据
      getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
        //   console.log("getSongCatList=",res);
         res && dispatch(changeSongListAction(res));
      })
    }
  }

  export const changeCurrentCategoryAction = name => ({
      type: CHANGE_CURRENT_CATEGORY,
      payload: name
  })

  const changeSongListAction = songList => ({
      type: CHANGE_CATEGORY_SONGS,
      payload: songList
  })