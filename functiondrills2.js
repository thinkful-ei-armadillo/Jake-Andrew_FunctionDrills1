function jediName(firstName, lastName){
    let partOfFirst = firstName.slice(0, 2);
    let partOfLast = lastName.slice(0, 3);
    let combinedName = partOfLast + partOfFirst;
    return combinedName;
}

jediName('Drew', 'Bituin');

function beyond (num){
    if (num === Number.NEGATIVE_INFINITY || num === Number.POSITIVE_INFINITY){
        console.log ('And beyond');
    }
    if (Number.isFinite(num) && num > 0){
        console.log('To infinity');
    }
    if (Number.isFinite(num) && num < 0){
        console.log('To negative infinity');
    }
    if (num === 0){
        console.log('Staying home');
    }

}

function decode (word){
    switch (word[0]){
        case 'a':
            return word[1];
        case 'b':
            return word[2];
        case 'c':
            return word[3];
        case 'd':
            return word[4];
        default: 
            return ' ';
    }
}

function decodedWords (str){
    const strArray = str.split(' ');
    const mappedArray = strArray.map(word => decode(word));
    const joinedArray = mappedArray.join('');
    return joinedArray;
}

function howManyDays (month){
    let result = '';
    switch(month){
        case 'January':
            result = 'January has 31 days.';
            break;
        case 'February':
            result = 'February has 28 days.';
            break;
        case 'March':
            result = 'March has 31 days.';
            break;
        case 'April':
            result = 'April has 30 days.';
            break;
        case 'May':
            result = 'May has 31 days.';
            break;
        case 'June':
            result = 'June has 30 days.';
            break;
        case 'July':
            result = 'July has 31 days.';
            break;
        case 'August':
            result = 'August has 31 days.';
            break;
        case 'September':
            result = 'September has 30 days.';
            break;
        case 'October':
            result = 'October has 31 days.';
            break;
        case 'November':
            result = 'November has 30 days.';
            break;
        case 'December':
            result = 'December has 31 days.';
            break;
        default :
            result = 'Must provide a valid month.';
    }
    return result;
}
