function gcdOfStrings(str1, str2) {
    const min = str1.length < str2.length ? str1 : str2;
    const max = str1.length < str2.length ? str2 : str1;
    const sub_idx = max.indexOf(min);
    if (sub_idx !== 0 || max.indexOf)
        return '';
    if (min.length === 1)
        return min;
    for (let divides = min.length; ; )
        ;
}
;
export {};
