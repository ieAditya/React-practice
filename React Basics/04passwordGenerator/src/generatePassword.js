export default function generatePassword(length, useNumber, useSpecialChar){
    const charRange = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numsRange = "0123456789";
    const specialChar = "~!@#$%^&*?";
    
    let pswdRange = charRange;
    
    if(useNumber)
        pswdRange += numsRange;
    
    if(useSpecialChar)
        pswdRange += specialChar;
    
    let generatedPass = "";
    while(length--){
        let index = Math.floor(pswdRange.length * Math.random());
        generatedPass += pswdRange[index];
    }

    return generatedPass;
}