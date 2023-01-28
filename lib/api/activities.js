import instance from './client';

export const findAction = (params) => {
  if(!params?.query?.length) {
    return instance.get(`/api/activities?populate=*&sort=createdAt:desc`);
  }else{
    return instance.get(`/api/activities?populate=*&sort=createdAt:desc&filters[$or][0][title][$containsi]=${params?.query}&filters[$or][1][subtitle][$containsi]=${params?.query}`);
  }
};

export const findOneAction = (id) => {
  return instance.get(`/api/activities/${id}?populate=*`);
};

export const createAction = (body) => {
  return instance.post('/api/activities', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/activities/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/activities/${id}`);
};