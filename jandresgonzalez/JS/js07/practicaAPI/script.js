const fetchUno = "https://reqres.in/api/users?delay=3";
const fetchDos = 'https://reqres.in/api/users?page=2';
const array = [];


/**
 * Esta función obtiene los datos de la URL.
 * Debe almacenarlos localmente
 */
function fetchInfo(url) {
    fetch(url) 
        .then(responseJSON => {return responseJSON.json()})
        .then(usuarios => {
            for (user of usuarios.data) {

            /* users.forEach(user => { */

    
        const col = document.createElement("div");
        const node = document.createElement("div");
        const img = document.createElement("img");
        const card = document.createElement("div");
        const text = document.createElement("p");
        text.classList.add("card-text");
        card.classList.add("card-body");
        img.setAttribute("src", user.avatar);
        img.classList.add("card-img-top");
        node.classList.add("card", "m-2", "card-hover", ":hover");
        col.classList.add("col-sm-4", "d-flex", "justify-content-center");
        node.setAttribute("style", "width: 9rem;")
    //    const info = document.createTextNode(`Info: ID --${user.id}-- NAME --${user.first_name} ${user.last_name}-- CONTACT --${user.email}-- ${user.avatar}`);
        text.innerHTML= `<b>Id#:</b> ${user.id} <br> <b>Name:</b> ${user.first_name} ${user.last_name} <br> <b>Contact:</b> <a href="mailto:${user.email}?Subject=Abue%20hackerman%20page%20inquiry">${user.email}</a>`;
        card.appendChild(text);
        //img.appendChild(card);
        node.appendChild(img);
        node.appendChild(card);
        col.appendChild(node);
    
        document.getElementById("data").appendChild(col);
                

            };
        });
}

/**
 * Función que inicializa la información en un listado que admite
 * seis elementos. Esta función empieza al dar click al botón en la página
 * para obtener la información.
 * Se llama la función para crear paginación y se esperan unos segundos para cambiar de página,
 * sólo una vez que se haya cargado la info
 */
function displayInfo() {
    document.getElementById("buttonStart").style.display = "none";
    fetchInfo(fetchUno);
    setTimeout(createPagination, 2950);
    localStorage.setItem("expirationInfo", JSON.stringify ({
        expiration: Date.now() + 1000*30,
    }));
    }

    /**
     * Esta es una función asíncrona que crea los botones de paginación
     * para separar el listado en seis elementos por página.
     * 
     */    
    async function createPagination() {
        document.getElementById("pagination").innerHTML = `               \
    
        <div class="container-fluid m-3 d-flex justify-content-center pt-5" id="pages">\
        <div class="row" class="m-5 p-5 d-flex justify-content-center">\
          <span class="pagination-strip">\
            <span>Anterior ---</span>\
            <!-- Página 1 -->\
            <span 
                class="pagination-item"
                title="Página 1"
                onclick="paginaUno()">
                <button class="btn btn-outline-secondary btn-sm"> 1 </button>\
            </span>\
            <!-- Página 2 -->\
            <span
                class="pagination-item"
                title="Página 2"
                onclick="paginaDos()">
                <button class="btn btn-outline-secondary btn-sm"> 2 </button>\
            </span>\
            <!-- Página 3 -->\
            <span
                class="pagination-item"
                title="Página 3"
                onclick="paginaTres()">
                <button class="btn btn-outline-secondary btn-sm"> 3 </button>\
            </span>\
            <span>--- Siguiente</span>\
          </span>\
        </div>\
      </div>\
    `;
    }

    //Función que se realiza al dar click a la página uno
    function paginaUno() {
        document.getElementById("data").innerHTML = " ";
        getLocalStore();
        setLocalStore(fetchUno);
        fetchInfo(fetchUno);
    }
    //Función que se realiza al dar click a la página dos
    function paginaDos() {
        document.getElementById("data").innerHTML = " ";
        getLocalStore();
        setLocalStore(fetchDos);
        fetchInfo(fetchDos);
    }
    //Función que se realiza al dar click a la página tres
    function paginaTres() {
        //setLocalStore(fetchUno);
        document.getElementById("data").innerHTML = " "
        //fetchInfo(fetchUno);
        //getLocalStore();
        
    }


function getLocalStore(){
    let info = JSON.parse(localStorage.getItem("expirationInfo"));
    //let page = JSON.parse(localStorage.getItem(pageJSON));

    if (info.expiration < Date.now()) {
        document.getElementById("data").innerHTML = " ";
        document.getElementById("pages").innerHTML = " ";
        document.getElementById("buttonStart").style.display="inline";

        localStorage.clear();
    }
    else {
        console.log("O(ll)K(orrect)");
    }
}



/**
 * La función guarda en local storage los datos
 * obtenidos de la API, para mostrar en página,
 * más rápido, las cartas de las personas
 * @param {string} url //En string, se coloca la URL de la API
 * 
 */
function setLocalStore(url) {
    fetch(url)
    .then(response => {return response.json()})
    .then(users => {
        let info = users.data

            info.forEach(element => {
                localStorage.setItem("Card#" + element.id, JSON.stringify (
                    {
                        id: element.id,
                        name: `${element.first_name} ${element.last_name}`,
                        contact: element.email,
                        avatar: element.avatar,
        
                    },
                    ))

            })

/*         let day = Date.now();
        let expirationTime = Date.now() + 1000*60;
        localStorage.setItem("expirationInfo", JSON.stringify ({
            input: day,
            expiration: expirationTime,
        }))
 */
});
}