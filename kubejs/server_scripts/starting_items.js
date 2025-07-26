PlayerEvents.loggedIn(event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
	event.player.give('ftbquests:book')
    event.player.give('10x minecraft:apple')
	event.player.give('4x minecraft:potato')
	event.player.give('minecraft:leather_leggings')
	event.player.give('minecraft:leather_boots')
	event.player.give('constructionwand:stone_wand')
	event.player.give('supplementaries:sack')
	event.player.give('2x minecraft:torch')
	event.player.give('2x natprog:stone_pebble')
    event.player.give('2x coinsje:gold_coin_pile')
  }
})