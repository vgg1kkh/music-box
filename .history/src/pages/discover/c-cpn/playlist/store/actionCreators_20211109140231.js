import getSo



export const getCategoryAction = () => {
    return dispatch => {
      getSongCategory().then(res => {
        const categoryData = handleSongsCategory(res);
        dispatch(changeCategoryAction(categoryData))
      })
    }
  }