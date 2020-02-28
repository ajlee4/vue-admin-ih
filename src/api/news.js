import request from "@/utils/request";

export function fetchNewsList(query) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/news/",
    method: "get",
    params: query
  });
}

export function createNews(data) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/news/store",
    method: "post",
    data
  });
}

export function deleteNews(id) {
  return request({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "delete",
    params: { id }
  });
}

export function searchNews(data) {
  return request({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "get",
    params: { data }
  });
}
export function updateNews(id) {
  return request({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "put",
    params: { id }
  });
}
