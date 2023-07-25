 function giftGuesser(wishlist, presents){
    const gifts = []
    for (let present of presents){
        for (let item of wishlist){
            if (item.size === present.size && item.clatters === present.clatters && item.weight === present.weight){
                gifts.push(item.name)
            }
        }
    }
    return gifts


 }









 var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(giftGuesser(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]