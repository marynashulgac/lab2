const hash = {
    "maryna": "123-456-7890",
    "anna": "987-654-3210",
    "marcus": "555-555-5555"
};
const findPhoneByName = (name) => {
    return hash[name];
};

console.log(findPhoneByName("marcus"));