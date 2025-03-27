import React from "react";

export default function Produto({ produto }) {
    return (
        <div className="produto">
            <div className="img">
                <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className="text">
                <p className="legenda-Produto">{produto.nome}</p>
                <div className="quantidade-preco">
                    <p className="preco">{produto.preco}</p>
                    <div className="quantidade">
                        <button className="botao-remover"> - </button>
                        <span>1</span>
                        <button className="botao-adicionar"> + </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
