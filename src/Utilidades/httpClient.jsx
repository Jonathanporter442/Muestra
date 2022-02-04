const API = "https://api.themoviedb.org/3";

export function get(path){
   return fetch(API+path, { headers:{

      Authorization: 
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmU5MjA4YWNhZGUwNzA5NzNkMDA2YWJhMTc0YzBkNiIsInN1YiI6IjYxZjliMmQxN2E5N2FiMDExZjk3YWYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FOgjyYRsegtp3ywLU3u3kE-1FyezdC2ZNsvdOf7Utmo",
      "Content-Type": "application/json;charset=utf-8" ,   
    },
  }).then((result) => result.json())
}