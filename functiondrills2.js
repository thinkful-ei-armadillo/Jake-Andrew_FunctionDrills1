function jediName(firstName, lastName){
    let partOfFirst = firstName.slice(0, 2);
    let partOfLast = lastName.slice(0, 3);
    let combinedName = partOfLast + partOfFirst;
    return combinedName;
}

jediName('Drew', 'Bituin');