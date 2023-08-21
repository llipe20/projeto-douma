
const chave = 'aaee40741a8339ae752e5fefd0c915b9'; // chave de acesso a API
const base = 'https://api.themoviedb.org/3'; // parte da url das requisições

// função para fazer as requisições
const getMovie = async(endpoint) => {

    const req = await fetch (`${base}${endpoint}`)
    const json = await req.json()

    return json
}

// exportando o array com todas as informações de filmes
export default {
    getHomeList : async () => {
        return [
            {
                slug : 'recomendado',
                title : 'Recomendados',
                movie : await getMovie(`/trending/all/week?language=pt-BR&api_key=${chave}`)
            },

            {
                slug : 'alta',
                title : 'Em alta',
                movie : await getMovie(`/movie/top_rated?language=pt-BR&api_key=${chave}`)
            },

            {
                slug : 'anime',
                title : 'Animes',
                movie : await getMovie(`/discover/movie?with_genres=16&language=pt-BR&api_key=${chave}`)
            },

            {
                slug : 'documentario',
                title : 'Documentário',
                movie : await getMovie(`/discover/movie?with_genres=99&language=pt-BR&api_key=${chave}`)
            },

            {
                slug : 'romance',
                title : 'Romance',
                movie : await getMovie(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${chave}`)
            },

            {
                slug : 'drama',
                title : 'Drama',
                movie : await getMovie(`/discover/movie?with_genres=18&language=pt-BR&api_key=${chave}`)
            },

            {
                slug : 'terror',
                title : 'Terror',
                movie : await getMovie(`/discover/movie?with_genres=27&language=pt-BR&api_key=${chave}`)
            }
        ]
    }, 
    
    // pega dados do filme individualmente 
    getMovieId : async (id) => {

        const response = await fetch (`${base}/movie/${id}?api_key=${chave}&language=pt-BR`)

        const dados = await response.json()
    
        return dados
    }
}