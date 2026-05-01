const friend = ["Rahim", "Karim"]
const schoolFriend = ["Musa", "Rakib", "Noyon"]
const collageFriend = ["Mr. Rasid", "Mr. Hossen"]

const allFriend = [...friend,...schoolFriend,...collageFriend]

friend.push(...collageFriend)
friend.push(...schoolFriend)

// console.log("all", allFriend);
// console.log("friend", friend);

const user = {name: "Abusaleh", age: 24}

const otherInfo = {address: "Amtali, borguna", favoriteColor: "black"}

const userInfo = {...user,...otherInfo}
console.log(userInfo);


