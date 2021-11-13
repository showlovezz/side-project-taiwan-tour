import Axios from 'axios';

import { getAuthorizationHeader } from '../../components/utilities';

export const fetchHomePageTours = count => {
  if (!count) return Promise.reject(new Error('miss_options'));

  return Axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${count}&$format=JSON&$filter=Picture/PictureUrl1 ne null`,
    { headers: getAuthorizationHeader() },
  )
    .then(response => {
      const { data } = response;
      if (!data) {
        return Promise.reject(new Error('Fetch Error'));
      }

      return data;
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};

export const fetchHomePageActivities = count => {
  if (!count) return Promise.reject(new Error('miss_options'));

  return Axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=${count}&$format=JSON&&$filter=Picture/PictureUrl1 ne null`,
    { headers: getAuthorizationHeader() },
  )
    .then(response => {
      const { data } = response;
      if (!data) {
        return Promise.reject(new Error('Fetch Error'));
      }

      return data;
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};

export const fetchHomePageRestaurants = count => {
  if (!count) return Promise.reject(new Error('miss_options'));

  return Axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=${count}&$format=JSON&$filter=Picture/PictureUrl1 ne null`,
    { headers: getAuthorizationHeader() },
  )
    .then(response => {
      const { data } = response;
      if (!data) {
        return Promise.reject(new Error('Fetch Error'));
      }

      return data;
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};

export const fetchHomePageHotels = count => {
  if (!count) return Promise.reject(new Error('miss_options'));

  return Axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$top=${count}&$format=JSON&$filter=Picture/PictureUrl1 ne null`,
    { headers: getAuthorizationHeader() },
  )
    .then(response => {
      const { data } = response;
      if (!data) {
        return Promise.reject(new Error('Fetch Error'));
      }

      return data;
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};
