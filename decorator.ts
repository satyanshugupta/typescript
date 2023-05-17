function MenuItem(itemId: string) {
  return function (value) {
    return class extends value {
      id = itemId;
    };
  };
}

@MenuItem('pizza')
class pizza {
    id: string;
}

@MenuItem('hamBurger')
class Hamburger {
  id: string;
}
