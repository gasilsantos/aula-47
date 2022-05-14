new Promise (
     (resolve)=>{

        let a = 10
        let b = 12

        resolve(a + b)
     }   
).then(
    (res)=>{
        console.log("Resultado da promessa:" + res)
    }
).catch(
    (erro)=>{
    console.log("Erro na promessa")
    }
).finally(
    ()=>console.log("Fim da execução")
)