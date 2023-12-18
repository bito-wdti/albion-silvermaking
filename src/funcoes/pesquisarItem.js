const instanciaAxios = require('../services/axios');
const knex = require('../services/knex');

const pesquisarItem = async (idItem, city, res) => {

    if (!idItem || !city) {

        return res.status(400).json({ mensagem: 'Item ID and city values are mandatory.' })
    }

    try {

        // Validação de existência do item:

        const itemExiste = await knex('caerleon').where({ item_id: idItem });

        if (itemExiste.length <= 0) {

            return res.status(404).json({ mensagem: 'Item was not found.' });
        }

        // Pesquisa preço do item:
        
        const dadosItem = await instanciaAxios.get(`${idItem}?locations=${city}`);

        // Desestrutura o preço e a datetime do preço:

        let { sell_price_min, sell_price_min_date } = dadosItem.data[0];

        // Validação de dado nulo na hora de getar o item da API do AODP:

        if (sell_price_min_date === '0001-01-01T00:00:00' && sell_price_min <= 0) {

            const precoDoItemDb = await knex(`${city}`).where({ item_id: idItem }).first();

            if (!precoDoItemDb.item_price_date && !precoDoItemDb.item_price_date) {

                return {
                    idItem,
                    price: null,
                    priceDate: null
                }  
            } else {

                return {
                    idItem,
                    price: precoDoItemDb.item_price,
                    priceDate: precoDoItemDb.item_price_date
                }
            }
        } else {

            return {
                idItem,
                price: sell_price_min,
                priceDate: sell_price_min_date  
            }
        }
    } catch (error) {
        
        console.log({ idItem, error });

        return error;
    }
}

module.exports = pesquisarItem;