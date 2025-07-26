ItemEvents.entityInteracted(event => {
  const bee = event.getTarget();
  const item = event.getItem();

  if (bee.type === 'minecraft:bee' && item && item.hasTag('minecraft:flowers')) {
    event.cancel();
    event.player.tell("La reproduction des abeilles n'est pas permise");
  }
});