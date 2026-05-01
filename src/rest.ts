const sendInvitation = (...friends: string[]) => {
    // console.log(friend);
    const invite =  friends.forEach((friend:string) => {
        console.log(`Send invitation to ${friend}`);
        
    });
}

sendInvitation("Fahim", "Masum", "Billah", "Rabbi")
