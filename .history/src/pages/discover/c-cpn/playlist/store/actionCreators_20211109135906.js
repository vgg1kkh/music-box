export const getCategory = () => {
    return dispatch => {
      getSongCategory().then(res => {
        const categoryData = handleSongsCategory(res);
        dispatch(changeCategoryAction(categoryData))
      })
    }
  }