console.log("Práctica JS07");

const URL_DELAY="https://reqres.in/api/users?delay=3";
const URL_PAGE2="https://reqres.in/api/users?page=2";
const EXP_TIME_SEG=1*60; 




/**
 * Función que obtiene los datos de la memoria local o a través de un fecth. 
 * @param {String} url de la API 
 * @param {number} page  Número de la página que se solicita 
 * @returns 
 */
function requestApi(url,page){
    //Obtenemos los datos almacenados localmente (JSON)
    let localData=localStorage.getItem("localUserData");
    //Checamos si se solicitó la pagina con delay y si tenemos datos almacenados de esa página.
    if(page==1 && localData!=null){
        //Obtenemos los datos como un objeto
        let localUserData=JSON.parse(localData);
        //Obtenemos el tiempo actual de la solicitud
        let currentTime=Date.now();
        //Obtenemos cuanto tiempo cuando se almacenarón los datos+ el tiempo de tolerancia
        let limitTime=EXP_TIME_SEG*1000+localUserData.time; 
        //Si estamos dentro del tiempo de tolerancia, mostramos datos almacenados localmente, y fin.
        if(currentTime<limitTime){
            //Actualizamos la información   
            localStorage.setItem("localUserData",JSON.stringify({ userArray:localUserData.userArray, time:Date.now()}));
            clearTable();
            showUsers(localUserData.userArray);
            return;
        }
        //Se acabó el tiempo de tolerancia y por tanto, borramos datos
        localStorage.removeItem("localUserData");
        //Si se llegó a este punto, se realizará una nueva solictud fetch
    }    
    fetch(url)
    .then(responseIsJSON =>{return responseIsJSON.json()})
    .then(dataJSON =>{ 
                        if(page==1){
                            //Almacenamos los datos de manera local
                            localStorage.setItem("localUserData",JSON.stringify({ userArray:dataJSON.data, time:Date.now()}));
                        }
                        clearTable();
                        return showUsers(dataJSON.data);
                    })
    .catch(err => {alert(" No se pudo mostrar contenido deseado");console.log('Solicitud fallida', err);});        
}

/**
 * Función que  agrega  una fila por cada objeto contenido en el array de objetos
 * cada columna de la fila contendrá un atributo del objeto usuario
 * @param {Array Object} arrUsers 
 */
function showUsers(arrUsers){
        //Obtener el elemento padre donde se agregará el hijo
         const tableBody=document.getElementById("tableBody");

        for(let user of arrUsers){
        //Por cada usuario:

        //Creamos nuevo renglón, con la información
        const tableRow=document.createElement("tr");
        tableRow.innerHTML=`<td>${user.id}</td>
                            <td>${user.first_name}</td>
                            <td>${user.last_name}</td>
                            <td>${user.email}</td>
                            <td class="photoIm"><image src="${user.avatar}"/></td>`;
        //Añadirle elemento hijo
        tableBody.appendChild(tableRow);
    }
}

/**
 * Función que limpia las filas de la tabla (elimina los hijos <tr>)
 */
function clearTable(){
     //Obtener el cuerpo de la tabla que se limpiará
     const tableBody=document.getElementById("tableBody");
     //Comprobamos si ya está desplegad o renglones de la pagina anterior
     if (tableBody.hasChildNodes()){
        //Mientras tenga hijos, los removemos
         while ( tableBody.childNodes.length >0 ){
             tableBody.removeChild( tableBody.firstChild );
          }
     }
}



let page1=document.getElementById("page1B");
let page2=document.getElementById("page2B");
let clear=document.getElementById("clearB");

page1.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="Página 1";requestApi(URL_DELAY,1);});
page2.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="Página 2";requestApi(URL_PAGE2,2);});
clear.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="";clearTable();});


