class ServicePlayer {
    
    url = 'http://localhost:4000/api/player/';
    url2 ='http://localhost:4000/api/winnerPlayer/';

    async getPlayers() {
        const response = await fetch(this.url);
         const data = await response.json();
         return data
    }

    // getPlayer(id) {
    //     const response = await fetch(this.url+id);
    //     const data = await response.json();
    //     return data
    // }

    savePlayer(player) {
        fetch(this.url, {
            method: 'POST', 
            body: {
                player: player
            }
        })
            .then((respuesta) => respuesta.json())
            .then((resp) => {
                return resp;
            })
    }

    daletePlayer(id) {
        fetch(this.url+id, {
            method: 'DELETE'
        })
        .then((respuesta) => respuesta.json())
        .then((resp) => {
            return resp;
        })
    }
    editPlayer(id, player) {

        fetch(this.url+id, {
            method: 'PUT', 
            body: {
                player: player
            }
        })
            .then((respuesta) => respuesta.json())
            .then((resp) => {
                return resp;
            })
    }




    
async getWinnerPlayers() {
    const response = await fetch(this.url2);
     const data = await response.json();
     return data
     
}


getWinnerPlayer(id) {

    // const response = await fetch(this.url2+id);
    // const data = await response.json();
    // return data
}

async saveWinnerPlayer(winnerPlayer) {
       
    fetch(this.url2, {
        method: 'POST', 
        body:JSON.stringify(winnerPlayer),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    })
        .then((respuesta) => respuesta.json())
        .then((resp) => {
            return resp;
        })
}

daleteWinnerPlayer(id) {
    fetch(this.url2+id, {
        method: 'DELETE'
    })
    .then((respuesta) => respuesta.json())
    .then((resp) => {
        return resp;
    })
}

}



export {ServicePlayer};
//  url = 'http://localhost:4000/api/productos/';

// fetch('http://localhost:4000/api/productos/')

// constructor(private http: HttpClient) { }

//   getProductos(): Observable<any> {
//     return this.http.get(this.url);
//   }

//   eliminarProducto(id: string): Observable<any> {
//     return this.http.delete(this.url + id);
//   }

//   guardarProducto(producto: Producto): Observable<any> {
//     return this.http.post(this.url, producto);
//   }

//   obtenerProducto(id: string): Observable<any> {
//     return this.http.get(this.url + id);
//   }
//   editarProducto(id: string, producto:Producto): Observable<any> {
//     return this.http.put(this.url + id, producto);
//   }


