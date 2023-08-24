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
                    backdrop : './backdrop/tmdb--0'
                },
                {
                    name : 'elementos',
                    trailer : 'XpZterwuuc4',
                    backdrop : './backdrop/tmdb--1'
                },
                {
                    name : 'oppenhimer',
                    trailer : 'F3OxA9Cz17A&t=9s',
                    backdrop : './backdrop/tmdb--2'
                },
                {
                    name : 'ashoka',
                    trailer : 'ZLW2jkd6E7g',
                    backdrop : './backdrop/tmdb--3'
                },
                {
                    name : 'barbie',
                    trailer : 'CeB-HLnkiKQ',
                    backdrop : 'https://drive.google.com/file/d/1t7lcSkRzReQU5PVtNIXjx4jFQtSqafuh/view?usp=drive_link'
                },
                {
                    name : 'agente stone',
                    trailer : 'ay5vLVKg_FM',
                    backdrop : 'https://drive.google.com/file/d/1KS0xDs_gyEtV2iwmzCaRz5l_6ZsESXfS/view?usp=drive_link'
                },
                {
                    name : 'que horas te pego?',
                    trailer : 'vhwr4vc_GY0 ',
                    backdrop : 'https://drive.google.com/file/d/1n-I1N1aogWjcEbwtLJuFhJueGHTc2omg/view?usp=drive_link'
                },
                {
                    name : 'besouro azul',
                    trailer : 'IZw2slPIoGs&t=12s',
                    backdrop : 'https://drive.google.com/file/d/1sum_desmOVVsUEeMGIw8DfX-E51a8u-w/view?usp=drive_link'
                },
                {
                    name : 'the flash',
                    trailer : 'zrtVOZ4YPFw',
                    backdrop : 'https://drive.google.com/file/d/1I5zkpzzo464k68-j1uHcZNQqF8eAXALG/view?usp=drive_link'
                },
                {
                    name : 'guardioes da galaxia',
                    trailer : '5UVaA6SGRZA',
                    backdrop : 'https://drive.google.com/file/d/1tpWAUr6xBvvFgVHWeNUy_heOBB0ptb-R/view?usp=drive_link'
                },
                {
                    name : 'rei macaco',
                    trailer : 'ZEYtw5uWRG8',
                    backdrop : 'https://drive.google.com/file/d/1yXPC-7GQuRRUDrUQY6M3KZYc5ZDV12qk/view?usp=drive_link'
                },
                {
                    name : 'megatubarao',
                    trailer : '7Hkedrl3xeE',
                    backdrop : 'https://drive.google.com/file/d/1h8HrxOtMF_EbI8VhoqxVreE--cmM38DY/view?usp=drive_link'
                },
                {
                    name : 'velozes e furiosos',
                    trailer : 'ByGA7aWSxW4',
                    backdrop : 'https://drive.google.com/file/d/1sMqoK6qqUSYx5-yfYnGjjs7tjp7EVTgZ/view?usp=drive_link'
                },
                {
                    name : 'vermelho, branco e sangue azul',
                    trailer : 'CeB-HLnkiKQ',
                    backdrop : 'https://drive.google.com/file/d/1ohtL89mrxs-IsAQGRNX45icpUYTGLtSQ/view?usp=drive_link'
                },
                {
                    name : 'sobrenatural',
                    trailer : 'e8-GtGmlu18',
                    backdrop : 'https://drive.google.com/file/d/11UVO4WA55QYakmvp_fkBxCLOygRHq-Nw/view?usp=drive_link'
                },
                {
                    name : 'gabar',
                    trailer : 'vhwr4vc_GY0&t=5s',
                    backdrop : 'https://drive.google.com/file/d/1SvYxbMTPbNn7uVnPLvLEvJ0sk1GYuz9o/view?usp=drive_link'
                },
                {
                    name : 'transformer',
                    trailer : '-5K0XaN0UV8',
                    backdrop : 'https://drive.google.com/file/d/10ctGP0h_0ipvzAuGKtJ3QSZQzaXf5j2i/view?usp=drive_link'
                },
                {
                    name : 'one piece',
                    trailer : 'YC8SLpnxsL4',
                    backdrop : 'https://drive.google.com/file/d/1HMPvoIkR3Mu5QKBVdAR_BToqFkeutgk9/view?usp=drive_link'
                },
                {
                    name : 'ruby marinha',
                    trailer : '_PDhT5sYk00',
                    backdrop : 'https://drive.google.com/file/d/1B7S9ntXuDsHTi3ukX5f5BkwhiIcYJOCZ/view?usp=drive_link'
                },
                {
                    name : 'toc toc toc echo da morte',
                    trailer : 'Mwd_c2H7YHs',
                    backdrop : 'https://drive.google.com/file/d/1fsPLlzUEXVxcDR0WAeKgmDMC09AwabUW/view?usp=drive_link'
                },
            ]
        }
    }
}