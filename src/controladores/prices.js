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

    
}