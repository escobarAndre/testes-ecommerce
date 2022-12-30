/* Condições da compra em um e-commerce

Compra: Quantidade de produtos, valor de cada produto, valor total dos prdutos, peso de cada produto, peso de todos os produtos, tamanho de cada produto e tamanho de todos os produtos

Embalagem? 
    - Pacote plástico
    - Caixa pequena
    - Caixa média
    - Caixa grande

Condições de embalagem: 
    - Pacote Plástico
        - Tamanho máximo: 20cm de largura, comprimento ou altura
    - Caixa pequena
        - Tamanho mínimo: 20cm de largura, comprimento ou altura
        - Tamanho máximo: 40cm de largura, comprimento ou altura
    - Caixa média
        - Tamanho mínimo: 40cm de largura, comprimento ou altura
        - Tamanho máximo: 80cm de largura, comprimento ou altura
    - Caixa grande
        - Tamanho mínimo: 80cm de largura, comprimento ou altura
        - Tamanho máximo: 120cm de largura, comprimento ou altura

    - Para produtos maiores que 120cm será envolvido em plástico bolha apenas

Como será enviado? 
    - Correios
    - Transportadora

Condições de envio: 
    - Correios
        - Peso máximo: 750 granas
        - Tamanho máximo: 60cm
    Transportadora
        - Peso mínimo: 750 gramas
        - Peso máximo: Sem peso máximo
        - Tamanho mínimo: 60cm
        - Tamanho máximo: 200cm

*/

import { Order } from './Order.js';

const order = new Order();