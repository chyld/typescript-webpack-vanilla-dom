import Dog from "./dog";

let dogs = ["max", "sally"].map((name, i) => {
    let d = new Dog(name, Math.random() * 10, `dog${i + 1}.jpg`);
    return d;
});

let dogContainer = document.getElementById("dogs") as HTMLDivElement;

function showDogs(dogs: Dog[]): void {
    dogs.forEach((dog) => {
        let div = document.createElement("div");
        div.setAttribute("class", "dog");
        div.innerHTML = `Name: <span class="names">${
            dog.name
        }</span>, Age: ${dog.age.toFixed(2)} years <img src="images/${
            dog.image
        }" />`;
        dogContainer.appendChild(div);
    });
}

function clearDogs(): void {
    dogContainer.innerHTML = "";
}

function addDog(name: string) {
    return new Dog(name, Math.random() * 10, "dog1.jpg");
}

function getSelectedDogName(this: HTMLDivElement, event: MouseEvent) {
    let name = this.getElementsByTagName("span")[0].innerText;
    (document.getElementById("shout") as HTMLDivElement).innerText = name;
}

function setupDogClickHandler(): void {
    for (let i = 0; i < document.getElementsByClassName("dog").length; i++) {
        let ele = document.getElementsByClassName("dog")[i] as HTMLDivElement;
        ele.addEventListener("click", getSelectedDogName);
    }
}

function setupAddClickHandler(): void {
    (document.getElementById("add") as HTMLButtonElement).addEventListener(
        "click",
        (event) => {
            clearDogs();
            let name = (document.getElementById("name") as HTMLInputElement)
                .value;
            let d = addDog(name);
            dogs.push(d);
            showDogs(dogs);
            setupDogClickHandler();
        }
    );
}

showDogs(dogs);
setupDogClickHandler();
setupAddClickHandler();
