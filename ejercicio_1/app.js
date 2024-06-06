const filtrar = x => x.name === "Evaluacion"; /*creamos una constante que se llama filtrar que es una función de flecha (arrow function).
 *Esta función toma un parámetro x y devuelve true si el nombre del objeto es "Evaluacion".
*/
(async () => {      /* luego creamos una funcion asincrona  esto quiere decir que 
*se ejecuta inmediatamente después de ser definida.
 */
    let response = await fetch('data.json'); /*  fecth es una función incorporada en JavaScript que es utilizada  para realizar 
    *peticiones  asincrónicas. En este caso, se está solicitando el archivo data.json 
    * el await se utiliza para esperar a que la promesa devuelta por fetch se resuelva, 
*/
    let user = await response.json(); /* aca se obtiene el contenido de data.json como un objeto llamado user.
    */

    let respuestGithub = await fetch('https://github.com/ANGIEPAOLA123/Angie_suarez_asincronia.git'); /* aca se hace una llamada asincrónica al repositorio en GitHub,
    * y se espera a que la respuesta llegue. */
    let usuariogithub = await respuestGithub.json(); /* Se obtiene el contenido del repositorio de GitHub como un objeto llamado usuariogithub. */

    usuariogithub.forEach(element => { /*haca creamos un  usuariogithub.forEach que nos  permite ejecutar una función proporcionada una vez por cada 
    * elemento en el array. En este caso, se está iterando sobre cada elemento del array 
    * el element  es el argumento de la función que se pasa al método forEach. En este caso, el nombre element 
    *se utiliza para representar cada elemento del array durante la iteración. */

        if (element.name === "Evaluacion") {  /*Dentro de la función de callback del forEach, se verifica si el nombre del 
        *elemento actual es igual a "Evaluacion".
        * Si esta condición se cumple, se ejecuta el bloque de código dentro del if.*/ 

            console.log(element) /*Si el nombre del elemento es "Evaluacion", se imprime ese elemento en la consola. */
        }
        
    });
})