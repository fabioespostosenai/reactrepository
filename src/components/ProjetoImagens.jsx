import estilos from "./ProjetoImagens.module.css"
export default function ProjetoImagens({imagem, nome}){
    return(
        <>
            {/*Receber as propriedades imagem e nome via desestruturação */}
            <div className={estilos.card}>
                {/* <img src="./p1.jpg" alt="imagem 1" className={estilos.imagem}/> */}
                <img src={imagem} alt={nome} />

            </div>
               
                <div className={estilos.corpo}>
                    <h3>{nome}</h3>
                    <p>Banco de Dados de Imagens no React</p>
                </div>
          
        </>
    )
}