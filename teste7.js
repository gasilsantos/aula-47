let idade = 23

try {

    if(idade < 18){
        throw{
            "name":"IdadeInvalida",
            "message":"para entrar na balada tem que ter mais de 18 anos!"

        }
    }else{
        console.log("Entrada liberada na balada")
    }
    
} catch (erro) {
    
    console.log(erro.name)
    console.log(erro.message)
}