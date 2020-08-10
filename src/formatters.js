const _ = require('lodash');

module.exports = {

  /**
   * Splits function parameters. All nested functions and strings including quotes are kept untouched.
   * @param {String} text function parameters without the opening/closing parenthesis
   */
  splitParameters: function(text) {
    console.log(text);
    let delimeter = ',';
    let splitted = [];
    
    let opener = ''; // char which has opened the "non-mathing group"
    let closer = '';
    let openers = {
      "'": `'`,
      '"': `"`,
      '(': ')'
    };
    let nestableOpeners = ['('];
    let counted = 0;
    let word = '';
  
    const chars = text.split('');
  
    chars.forEach((ch, i) => {
      let p_ch = i > 0 ? chars[i - 1] : '';
  
      if (ch === delimeter && opener === '') {
        // SPLIT-time!
        splitted.push(word);
        word = '';
      } else {
        // console.log(`${i}: ${ch}, o:${opener}, c:${closer}, counted:${counted}`);
        word += ch;
  
        if (ch in openers && opener === '' && p_ch !== '\\') {
          // open NON-SPLITtable context:
          opener = ch;
          closer = openers[ch];
          counted++;
        } else if (ch === opener && nestableOpeners.includes(opener) && p_ch !== '\\') {
          // console.log('===> 2');
          counted++;
        } else if (ch === closer && p_ch !== '\\') {
            // non-splittable context:
            counted--;
            if (counted === 0) {
              // close hte non-splittable context
              opener = '';
              closer = '';
            }
        }
      }
    });
    if (word !== '') {
      splitted.push(word);
    }
    
    return splitted;
  }
}