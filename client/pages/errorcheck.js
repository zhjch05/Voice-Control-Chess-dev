String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}
function errorCheck(content) {
    if (content.length === 5) {
        if (content.charAt(3) === '8') {
            content = content.replaceAt(3, 'A');
        }
        if (content.charAt(3) === '3') {
            content = content.replaceAt(3, 'E');
        }
    }

    // 1. Must transform strings of the form E22 E4 to: E2 to E4.
    content = content.replace(/(?<=[1-8])2\b/g,' to');
    // 2. Replace initial 8 with an A, such as "882 B 8" to A82 B 8

    // 3. Replace the word "be" with B, such as "d8 to be 8" to "d8 to B 8"
    // 4. Replace "see" with "C" and "one" with "1", for example "D2 to see one" becomes "D2 to C 1"
    // 5. Replace "Bee" with "B" and "Tree" with "3". "822 Bee Tree" to "822 B 3"
    // 6. Replace a "33" start with "E3", such as "332 D4" to "E32 D4".
    // 7. Remove Hyphens, for example "F-22 F-35" to "F22 F35", "d-22 H6" to "d22 H6"
    // 8. Transform length 5 numbers into commands replacing 8s with As if they are at index 0 or 3. Such as,  82283 to "A22A3", then
    // add spaces to get "A2 2 A3"
    // 9. Replace the word "anyone" with "E1", for example "anyone to see one" goes to "E1 to see one"
    // 10. Replace the word "East" with "E", for example "882 East 7" becomes "882 E 7"
    // 11. Replace every "P" with a "B" where the "P" is in a position, such as "D7 moves to P6" becomes "D7 moves to B6".
    // 12. Replace an ending "A" with an "8". "c82 PA" -> "c82 P8".
    // 13. Replace the word "beat" with "B", "beat 7288" -> "B 7288"
    // 14. Replace the word "bah" with "B8".  "bah to a 7" -> "B8 to a 7".
    // 15. Replace every "V" with a "B". "V6 takes D5" -> "B6 takes D5".
    // 16. Add "to" when there's only 2 words in the sentence, i.e. "E4 D5" -> "E4 to D5".
    // 17. Replace an extra "6" with the word "takes", i.e. "D16 D4" -> "D1 takes D4".
    // 18. Replace the word "for" with the number "4", i.e. "C5 takes D for" -> "C5 takes D 4"
    // 19. Replace the word "before" with "B4", i.e. "83 takes before" -> "83 takes B4".
    // 20. Remove "th" and "nd" that may appear after any number, for example "A82 B 8th" to "A82 B 8"
    // 21. H2 2nh3. -> H2 to H3
    return content;
}
