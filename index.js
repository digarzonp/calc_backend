//1. crear un objeto express que nos representa la biblioteca express

const express=require('express')

//2. crear un objeto que represente nuestra aplicacion

const app= express()

app.use(express.json());


//definir puntos de entrada (donde vamos a publicar la funcionalidad)
//http://localhost:3000

app.get(
    '/api/sumar',
    //se requieren dos objetos , un representando la peticion (req)
    //un objeto representando la respuesta (res)
    (req, res)=>{
        //To DO aqui va el procesamiento de la peticion 
        console.log("alguien esta conectandose a esta ruta !!");
        res.json(req.body);

    }
);


app.post(
    "/api/restar",
    (req, res)=>{

        const {numero1,numero2}=req.body
        const resultado= numero1-numero2
        res.json(resultado);
    }
);


//division

app.post(
    '/api/dividir',
    (req, res)=>{
        let resultado;
        try{
            const {numero1,numero2}=req.body
            resultado=numero1/numero2
        }catch(error){
            //gestionar el error 
            resultado=error;
        }
       
        res.json(resultado);
    }
)

//Taller: ¿como crear una ruta que yo le pueda pasar un numero indeterminado de datos


//3. crear un servicio para escuchar peticiones 
app.listen(
    3001,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3001")
    }
);