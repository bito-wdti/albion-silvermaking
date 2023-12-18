const montarIDItens = (item_type, tier, level) => {

    if (!tier) {

        tier = 3;
    }
    
    let mainItemId = `T${tier}_${item_type}`;
    let resourceItemId = `T${tier}_`;
    let refinedItemId = `T${tier-1}_${item_type}`;

    switch (item_type) {

        case 'PLANKS':
            resourceItemId += 'WOOD';
            break;
        case 'METALBAR':
            resourceItemId += 'ORE';
            break;
        case 'CLOTH':
            resourceItemId += 'FIBER';
            break;
        case 'STONEBLOCK':
            resourceItemId += 'ROCK';
            break;
        case 'LEATHER':
            resourceItemId += 'HIDE';
            break;
    }

    if (tier <= 3) {

        level = 0;
    }

    if (level > 0) {
        
        mainItemId += `_LEVEL${level}@${level}`;
        resourceItemId += `_LEVEL${level}@${level}`;

        if (tier > 4) {

            refinedItemId += `_LEVEL${level}@${level}`;
        }
    }

    return {
        mainItemId,
        resourceItemId,
        refinedItemId
    }
}

module.exports = montarIDItens;