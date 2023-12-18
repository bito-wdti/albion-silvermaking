const montarIDItens = require('../funcoes/montarIdItem');
const pesquisarItem = require('../funcoes/pesquisarItem');

const consultarPrecos = async (req, res) => {

    const { item_type, city, tier, level, return_rate, usage_fee, premium_status } = req.body;

    if (!item_type) {

        return res.status(400).json({ mensagem: 'Please, inform the resource type.' });
    }

    if (!city) {

        return res.status(400).json({ mensagem: 'Please, inform the resource type.' });
    }

    if (!return_rate) {

        return res.status(400).json({ mensagem: 'Please, provide valid return rate.' });
    }

    const idItens = montarIDItens(item_type, tier, level);

    try {
        
        const resultado = {
            city,
            item: await pesquisarItem(idItens.mainItemId, city, res),
            receita: {
                item1: await pesquisarItem(idItens.refinedItemId, city, res),
                item2: await pesquisarItem(idItens.resourceItemId, city, res)
            }
        }

        return res.status(200).json(resultado);
    } catch (error) {
        
        console.log(error);
        
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}

module.exports = {
    consultarPrecos
}