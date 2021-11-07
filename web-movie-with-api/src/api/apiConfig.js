const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a11c1edc9aab60a95253db2b631ef706',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`, 
    
}

export default apiConfig
