const soldier = {
  soldiers_name: "soldatik",
  health: 10,
  gun: {
    nameOfGun: "ump-45",
    ammo: 1,
  },
  supplies: 3,
  fire() {
    if (this.gun.ammo <= 0) {
      console.log("Обойма пуста. Перезаредитесь");
    } else {
      this.gun.ammo--;
      console.log("бах бах");
    }
  },
  recharge() {
    if (this.supplies <= 0) {
      console.log("не осталось припасов");
    } else {
      this.gun.ammo == 30;
      this.supplies--;
      console.log("перезарядка...");
    }
  },
  hit() {
    if (this.health <= 0) {
      console.log("Ты проиграл");
    } else {
      this.health--;
    }
  },
};
soldier.fire();
soldier.fire();
soldier.recharge();
soldier.hit();
soldier.hit();
soldier.hit();
soldier.hit();
soldier.hit();
soldier.hit();
soldier.hit();
soldier.hit();
soldier.hit();
soldier.hit();
soldier.hit();
