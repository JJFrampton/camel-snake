'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'camel-snake:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  // testing
  // testing_camelSnake_conversion
  toggle() {
    // functions
    let convertCamelSnake = function(arr, camelNotSnake) {
      for (let i = 1; i < arr.length; i++) {
        arr[i] = normalize(arr[i]);
        arr[i] = (camelNotSnake? toCamel(arr[i]): toSnake(arr[i]));
      }
      return arr;
    }
    let normalize = function(arrIt){
      // remove underscores and normalize to lower
      arrIt.charAt(0) == "_"? arrIt = arrIt.substring(1):'';
      arrIt = arrIt.toLowerCase();
      return arrIt;
    }
    let toCamel = function(arrIt) {
      // make first char upper
      arrIt = arrIt.charAt(0).toUpperCase() + arrIt.substring(1)
      console.log(arrIt);
      return arrIt
    }
    let toSnake = function(arrIt) {
      // insert underscore
      arrIt = '_' + arrIt;
      console.log(arrIt);
      return arrIt
    }
    // logic
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText();
      let string = selection
      let stringArray = string.split(/(?=[A-Z_])/);
      // checking if array length is > 1
      if (stringArray[1]) {
        var convertedText = ""
        // if array[1] first char is =='_' then do cammel
        if (stringArray[1].charAt(0) == '_') {
          convertedText = convertCamelSnake(stringArray, true).join("");
        // else do snake case
        } else {
          // loop starting at 2nd item
          convertedText = convertCamelSnake(stringArray, false).join("");
        }
        editor.insertText(convertedText, {select: true});
      }
    }
  }

};
