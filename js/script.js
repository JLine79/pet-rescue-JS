const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 4,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz`);
      this.isTired = 0;
    },
    play: function () {
      if (this.isTired === 4) {
        console.log("Too tired to play");
        this.sleep();
      } else {
        console.log(`Yay! ${name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

/*console.log(sora, clover, baxter, cleo, francine);

clover.sleep();
baxter.play();

console.log(clover, baxter);*/

sora.isTired = 0;
clover.isTired = 1;
baxter.isTired = 2;
cleo.isTired = 3;
francine.isTired = 4;

const allPets = [sora, clover, baxter, cleo, francine];

//console.log(allPets);

//Display pets in the browser
const showPets = function (petArray) {
  pets.innerHTML = "";
  for (let pet of petArray) {
    let status;
    switch (pet.isTired) {
      case 0:
        status = "is wide awake!";
        break;
      case 1:
        status = "is eating... nom nom nom";
        break;
      case 2:
        status = "wants some fuss... awwww";
        break;
      case 3:
        status = "is tired";
        break;
      case 4:
        status = "is sleeping"
    }

    for (let pet of petArray) {
      pet.status = Math.floor(Math.random() * 4);
    }
    


    const li = document.createElement("li");
    li.innerHTML = `<span class = "pet-name">${pet.name}</span> the ${pet.species} ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
  statusButton.innerText = "Reset";
});

statusButton.addEventListener("click", function () {
  if (statusButton.innerText = "Reset") {
    statusButton.innerText = "Show Pet Status"
    for (let pet of allPets) {
      if (pet.isTired === 4) {
        pet.isTired = 0
      }

      else {
        pet.isTired += 1
      }
    }
  }
})
