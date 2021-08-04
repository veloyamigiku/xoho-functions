import { ResponseHeader } from '../data/response_header';
import { movieInfo } from '../data/movie_info';
import { area, prefecture, theater } from '../data/theater';

export const handler = async (event, context) => {

  var theaters = [];
  if (movieInfo.theaterId && movieInfo.theaterId.length > 0) {
    movieInfo.theaterId.forEach(function (theaterId) {
      if (theater[theaterId - 1]) {
        var theaterCopy = { ...theater[theaterId - 1] }
        theaterCopy.id = theaterId;
        theaters.push(theaterCopy)
      }
    });
  }

  theaters.sort((a, b) => {
    if ((a.area > b.area) ||
    (a.area === b.area && a.prefecture > b.prefecture) ||
    (a.area === b.area && a.prefecture === b.prefecture && a.id > b.id)) {
      return 1;
    } else {
      return -1;
    }
  });

  var theatersByAreaPrefecture = [];
  var preAreaId = null;
  var prePrefectureId = null;
  var tmpTheatersByAreaPrefecture = null;
  var prefectureTheaters = null;
  theaters.forEach(function (theater) {
    const areaId = theater.area;
    const prefectureId = theater.prefecture;
    if (!preAreaId || preAreaId !== areaId) {
      if (tmpTheatersByAreaPrefecture) {
        theatersByAreaPrefecture.push(tmpTheatersByAreaPrefecture);
      }
      tmpTheatersByAreaPrefecture = {
        area: area[areaId],
        prefectures: []
      }
      prefectureTheaters = [];
    } else if (prePrefectureId !== prefectureId) {
      tmpTheatersByAreaPrefecture.prefectures.push({
        prefecture: prefecture[prePrefectureId],
        theater: prefectureTheaters
      });
      prefectureTheaters = [];
    }
    prefectureTheaters.push(theater);
    preAreaId = areaId;
    prePrefectureId = prefectureId;
  });
  if (tmpTheatersByAreaPrefecture) {
    if (prefectureTheaters) {
      tmpTheatersByAreaPrefecture.prefectures.push({
        prefecture: prefecture[prePrefectureId],
        theater: prefectureTheaters
      });
    }
    theatersByAreaPrefecture.push(tmpTheatersByAreaPrefecture);
  }

  var sortedAreaIds = Object.keys(area);
  sortedAreaIds.sort();
  sortedAreaIds.forEach(function (areaId, areaIdIdx) {
    if (theatersByAreaPrefecture[areaIdIdx].area.name != area[areaId].name) {
      theatersByAreaPrefecture.splice(
        areaIdIdx,
        0,
        {
          area: area[areaId],
          prefectures: []
        });
    }
  });

  const movieInfoCopy = { ...movieInfo };
  movieInfoCopy.theater = theatersByAreaPrefecture;
  delete movieInfoCopy.theaterId;

  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(movieInfoCopy)
  };

}
