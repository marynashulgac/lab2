const fn = () => {
    const person1 = {
        name: "maryna"
    };
    let person2 = {
        name: "anna"
    };

    person1.name = "maria";
    person2.name = "olga";
    // person1 = person2; // TypeError: const забороняє перезаписати посилання
    person2 = person1;

    console.log("Hello, " + person1.name);
    console.log("Hello, " + person2.name);
};
// const забороняє змінювати саме посилання, але не вміст об'єкта.
fn();