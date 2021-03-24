let monDay = (why) => {
    why = why.toLowerCase();
    const dinner = ['Lasagne', 'Garlic Bread', 'Brussel Sprouts'];
    const dessert = 'Chocolate Self Saucing Pudding';
    let groceries = ['Passata(1)', 'Onion(1)', 'Noodles(check me)', 'Shredded cheese(check me)', 'Mince 1kg'];
    switch (why) {
        case 'groceries':
            return groceries;
            break;
        case 'dinners' || 'dinner':
            return dinner;
            break;
        case 'all food' || 'foods':
            return dinner + dessert;
            break;
        case 'dessert':
            return dessert;
            break;
    }
} 
let tuesdayDinner = () => {
    const tuePlan = ['Beef Stirfry', 'Rice', 'Carrots', 'Capsicum', 'Broccoli'];
    const tueDes = 'Fruit and Custard';
    let turGroc = ['Stirfry Beef', 'Onion(0.5)', 'Carrots', 'Capsicum', 'Broccoli'];
}
let wednesdayDinner = () => {
    const wedPlan = ['Devilled Sausages', 'Mashed Potato', 'Gravy', 'Peas', 'Butternut Squash'];
    const wedDes = 'Chocolate Pudding';
    let wedGroc = ['Onion(1)', 'Potatoes(1 per person)', 'Gravy?', 'Peas?', 'Butternut Squash'];
}
let thursdayDinner = () => {
    const thursPlan = ['Pork Roast', 'Applesauce', 'Corn', 'Zucchini', 'Caramel Potatoes'];
    const thursDes = 'Apple Crumble'
    let thursGroc = ['Pork Roast', 'Apples from garden', 'Corn', 'Zucchini',]
}
let fridayDinner = () => {
    const friPlan = ['Chicken casserole: Mixed frozen veg, noodles, leftover veg'];
    const friDes = 'Cake';
    let friGroc = ['Chicken bits'];

}



