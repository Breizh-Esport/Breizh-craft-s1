ServerEvents.recipes(event => {
    event.remove({id: 'pipez:item_pipe'});
    event.shaped(
        Item.of('pipez:item_pipe', 16),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'pneumaticcraft:plastic',
            B: 'minecraft:dropper',
            C: 'minecraft:redstone'
        }
    );

    event.remove({id: 'pipez:fluid_pipe'});
    event.shaped(
        Item.of('pipez:fluid_pipe', 16),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'pneumaticcraft:plastic',
            B: 'minecraft:bucket',
            C: 'minecraft:redstone'
        }
    );

    event.remove({id: 'pipez:energy_pipe'});
    event.shaped(
        Item.of('pipez:energy_pipe', 16),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'pneumaticcraft:plastic',
            B: 'minecraft:redstone_block',
            C: 'minecraft:redstone'
        }
    );

    event.remove({id: 'pipez:universal_pipe'});
    event.shaped(
        Item.of('pipez:universal_pipe', 16),
        [
            'ABC',
            'DED',
            'ABC'
        ],
        {
            A: 'pipez:item_pipe',
            B: 'pipez:energy_pipe',
            C: 'pipez:fluid_pipe',
            D: 'pneumaticcraft:plastic',
            E: 'minecraft:redstone_block',
        }
    );

    event.remove({id: 'pipez:basic_upgrade'});
    event.shaped( 'pipez:basic_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'refinedstorage:quartz_enriched_iron',
            B: 'minecraft:quartz',
            C: 'minecraft:redstone',
        }
    );

    event.remove({id: 'pipez:improved_upgrade'});
    event.shaped( 'pipez:improved_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'ad_astra:desh_ingot',
            B: 'minecraft:redstone',
            C: 'pipez:basic_upgrade',
        }
    );

    event.remove({id: 'pipez:advanced_upgrade'});
    event.shaped( 'pipez:advanced_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'ad_astra:ostrum_ingot',
            B: 'minecraft:redstone_block',
            C: 'pipez:improved_upgrade',
        }
    );

    event.remove({id: 'pipez:ultimate_upgrade'});
    event.shaped( 'pipez:ultimate_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'ad_astra:calorite_ingot',
            B: 'minecraft:redstone_block',
            C: 'pipez:advanced_upgrade',
        }
    );
})