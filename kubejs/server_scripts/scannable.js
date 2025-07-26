ServerEvents.recipes(event => {
    event.remove({id: 'scannable:scanner'});
    event.shaped('scannable:scanner',
        [
            'A A',
            'BCB',
            'DED'
        ],
        {
            A: 'refinedstorage:quartz_enriched_iron',
            B: 'minecraft:iron_bars',
            C: 'minecraft:redstone',
            D: 'minecraft:gold_ingot',
            E: 'minecraft:quartz',
        }
    );
})