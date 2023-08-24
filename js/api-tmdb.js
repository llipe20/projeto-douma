import { trailer } from "./eventos-home.js";

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
    },

    getInfoAdd : () => {

        return {
                
        add : [
                {
                    name : 'homem aranha',
                    trailer : '_4is7I_ZxTg',
                    backdrop : ''
                },
                {
                    name : 'elementos',
                    trailer : 'XpZterwuuc4',
                    backdrop : ''
                },
                {
                    name : 'oppenhimer',
                    trailer : 'F3OxA9Cz17A&t=9s',
                    backdrop : ''
                },
                {
                    name : 'ashoka',
                    trailer : 'ZLW2jkd6E7g',
                    backdrop : ''
                },
                {
                    name : 'barbie',
                    trailer : 'CeB-HLnkiKQ',
                    backdrop : ''
                },
                {
                    name : 'agente stone',
                    trailer : 'ay5vLVKg_FM',
                    backdrop : ''
                },
                {
                    name : 'que horas te pego?',
                    trailer : 'vhwr4vc_GY0 ',
                    backdrop : ''
                },
                {
                    name : 'besouro azul',
                    trailer : 'IZw2slPIoGs&t=12s',
                    backdrop : ''
                },
                {
                    name : 'the flash',
                    trailer : 'zrtVOZ4YPFw',
                    backdrop : ''
                },
                {
                    name : 'guardioes da galaxia',
                    trailer : '5UVaA6SGRZA',
                    backdrop : ''
                },
                {
                    name : 'rei macaco',
                    trailer : 'ZEYtw5uWRG8',
                    backdrop : ''
                },
                {
                    name : 'megatubarao',
                    trailer : '7Hkedrl3xeE',
                    backdrop : ''
                },
                {
                    name : 'velozes e furiosos',
                    trailer : 'ByGA7aWSxW4',
                    backdrop : ''
                },
                {
                    name : 'vermelho, branco e sangue azul',
                    trailer : 'CeB-HLnkiKQ',
                    backdrop : ''
                },
                {
                    name : 'sobrenatural',
                    trailer : 'e8-GtGmlu18',
                    backdrop : ''
                },
                {
                    name : 'gabar',
                    trailer : 'vhwr4vc_GY0&t=5s',
                    backdrop : ''
                },
                {
                    name : 'transformer',
                    trailer : '-5K0XaN0UV8',
                    backdrop : ''
                },
                {
                    name : 'one piece',
                    trailer : 'YC8SLpnxsL4',
                    backdrop : ''
                },
                {
                    name : 'ruby marinha',
                    trailer : '_PDhT5sYk00',
                    backdrop : ''
                },
                {
                    name : 'toc toc toc echo da morte',
                    trailer : 'Mwd_c2H7YHs',
                    backdrop : ''
                },
            ]
        }
    }
}