import React from "react";
import "./style.css";
import Produto from "./produto";

import img1 from "../produtos/img1.png";
import img2 from "../produtos/img2.png";
import img3 from "../produtos/img3.png";
import img4 from "../produtos/img4.png";

const produtos = [
    { id: 1, nome: "Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e..", preco: "R$ 8.599,90", imagem: img1 },
    { id: 2, nome: "Cadeira Gamer RGB - Preta com Iluminação (Led)", preco: "R$ 959,90", imagem: img2 },
    { id: 3, nome: "Teclado Gamer Mecânico Low Profile RGB AW510K 580", preco: "R$ 1.002,00", imagem: img3 },
    { id: 4, nome: "Headset Gamer RGB Preto", preco: "R$ 328,00", imagem: img4 },
];

export default function Carrinho() {

    return (
        <div className="container-carrinho">
            <div className="header-carrinho">
                <p>
                    Seu carrinho tem <strong>{produtos.length} itens</strong>
                </p>
                <button className="fechar-carrinho">✕</button>
            </div>

            <div className="todosProd">
                {produtos.map((produto) => (
                    <Produto key={produto.id} produto={produto} />
                ))}
            </div>

            <div className="container2">
                <div className="total-container">
                    <p className="esquerdaC2">Total:</p>
                    <p className="total">R$ 10.681,60</p>
                </div>
                <button className="cupom">Adicionar cupom</button>
                <button className="finalizarCompra">Finalizar compra</button>
            </div>
        </div>
    );
}
