const arr = [
    { name: "maryna", phone: "123-456-7890" },
    { name: "anna", phone: "987-654-3210" },
    { name: "marcus", phone: "555-555-5555" }
];
const findPhoneByName = (name) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i].phone;
        }
    }
};

console.log(findPhoneByName("marcus"));