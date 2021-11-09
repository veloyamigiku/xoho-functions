import { ResponseHeader } from '../data/response_header';
import { area, prefecture, theater, type } from '../data/theater';
import { getCommon } from '../utils/get_common';

const allTheaterTypeID = "6,1,2,3,4";

const formatTheater = (theater) => {
  const res = {
    name: theater.name,
    sub: theater.sub,
    url: theater.url,
    type: fromTypeToName(theater.type),
    introImgUrl: theater.introImgUrl
  }
  return res;
}

const fromTypeToName = (typeList) => {
  var res = [];
  typeList.forEach(function (t) {
    res.push(type[t]);
  });
  return res;
}

const splitTheaterType = (theaterType) => {
  if (theaterType) {
    var theaterTypeList = [];
    theaterType.split(',').forEach(function (tt) {
      const ttNum = parseInt(tt);
      if (ttNum) {
        theaterTypeList.push(ttNum);
      }
    });
    return theaterTypeList;
  } else {
    return [];
  }
}

const getTheater = (event, theater) => {
  const common = getCommon(event);
  const theaterType = event.queryStringParameters['type'];
  if (theaterType) {
    if (theaterType === "all") {
      return getTheaterByArea(theater, common);
    } else if (theaterType === "all_type") {
      const theaterTypeList = splitTheaterType(allTheaterTypeID);
      console.log(theaterTypeList);
      return getTheaterByType(theater, theaterTypeList, common);
    } else {
      const theaterTypeList = splitTheaterType(theaterType);
      console.log(theaterTypeList);
      return getTheaterByType(theater, theaterTypeList, common);
    }
  }
}

const getTheaterByArea = (theater, common) => {
  var theaterByAreaObj = {};
  theater.forEach(function (t) {
    const tmpArea = t.area;
    const tmpPrefecture = t.prefecture;
    if (!(tmpArea in theaterByAreaObj)) {
      theaterByAreaObj[tmpArea] = {};
    }
    if (!(tmpPrefecture in theaterByAreaObj[tmpArea])) {
      theaterByAreaObj[tmpArea][tmpPrefecture] = [t];
    } else {
      theaterByAreaObj[tmpArea][tmpPrefecture].push(t);
    }
  });
  
  var theaterByAreaList = [];
  for (const tmpArea of Object.keys(theaterByAreaObj).sort()) {
    var theaterByArea = {
      header: {
        title: area[tmpArea].name,
        sub: area[tmpArea].sub,
        option: ''
      },
      'prefecture': []
    };
    for (const tmpPrefecture of Object.keys(theaterByAreaObj[tmpArea]).sort()) {
      var theaterList = [];
      theaterByAreaObj[tmpArea][tmpPrefecture].forEach(function (t) {
        const formattedTheater = formatTheater(t);
        formattedTheater['url'] = common.url + ':' + common.port + formattedTheater['url'];
        theaterList.push(formattedTheater);
      });
      const pref = prefecture[tmpPrefecture];
      theaterByArea['prefecture'].push({
        'name': pref['name'],
        'sub': pref['sub'],
        'theater': theaterList
      });
    }
    theaterByAreaList.push(theaterByArea);
  }
  return theaterByAreaList;
}

const getTheaterByType = (theater, typeList, common) => {
  var theaterByTypeList = [];
  typeList.forEach(function (typ) {
    var theaterByType = {
      header: {
        title: type[typ].title,
        sub: type[typ].sub,
        option: type[typ].option
      }
    };
    var prefectureMap = {};
    theater.forEach(function (t) {
      if (t.type.includes(typ)) {
        const formattedTheater = formatTheater(t);
        formattedTheater['url'] = common.url + ':' + common.port + formattedTheater['url'];
        if (t.prefecture in prefectureMap) {
          prefectureMap[t.prefecture]["theater"].push(formattedTheater);
        } else {
          prefectureMap[t.prefecture] = {};
          prefectureMap[t.prefecture]["theater"] = [formattedTheater];
        }
      }
    });
    var prefectureList = [];
    for (const pref of Object.keys(prefectureMap)) {
      prefectureList.push({
        name: prefecture[pref].name,
        sub: prefecture[pref].sub,
        theater: prefectureMap[pref]["theater"]
      });
    }
    theaterByType["prefecture"] = prefectureList;
    theaterByTypeList.push(theaterByType);
  });
  return theaterByTypeList;
}

export const handler = async (event, context) => {
  const data = getTheater(event, theater);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  };

}
