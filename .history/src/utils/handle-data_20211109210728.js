export function handleSongsCategory(data) {
  // 1.获取所有的类别
  const category = data.categories;
                    //  "categories": {
                    // "0": "语种",
                    // "1": "风格",
                    // "2": "场景",
                    // "3": "情感",
                    // "4": "主题"
                    // }

  // 2.创建类别数据结构
  //Object.entries return a two demensional array,every item of the arry is an array with key and value
  const categoryData = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: []
    }
  })

  // {
    name:华语,
    subs
  }

  // 3.将subs添加到对应的类别中
//   example :
//  [ {},{
//     "name": "综艺",
//     "resourceCount": 1000,
//     "imgId": 0,
//     "imgUrl": null,
//     "type": 0,
//     "category": 4,
//     "resourceType": 0,
//     "hot": true,
//     "activity": false
//     }]
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item);
  }

  return categoryData;
}

// 获取歌手字母类别
export function generateSingerAlpha() {
  var alphabets = ["-1"];
  var start = 'A'.charCodeAt(0);
  var last  = 'Z'.charCodeAt(0);
  for (var i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }

  alphabets.push("0");

  return alphabets;
}

export const singerAlphas = generateSingerAlpha();


