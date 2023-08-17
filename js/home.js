import Tmdb from "./api-tmdb.js";

const listAll = async () => {
    let lista = await Tmdb.getHomeList()
    console.log(lista)
}

listAll()

