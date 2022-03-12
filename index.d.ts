export declare class ExcelFormula {
  /**
   * Method used to parse Excel Formula to its components.
   * @param formula - string containing the excel formula to be parsed
   * @returns the parsed token object of the formula
   */
  static getTokens: (formula: string) => Object;

  /**
   *
   * @function
   * @param {string} formula - string containing the excel formula to be parsed
   * @param {object} [options] - params for the parsing
   *<pre>
   *   TEMPLATE VALUES
   *  {{autoindent}} - apply auto indent based on current tree level
   *  {{token}} - the named token such as FUNCTION_NAME or "string"
   *  {{autolinebreak}} - apply line break automatically. tests for next element only at this point
   *
   * Options include:
   *  tmplFunctionStart           - template for the start of a function, the {{token}} will contain the name of the function.
   *  tmplFunctionStop            - template for when the end of a function has been reached.
   *  tmplOperandError            - template for errors.
   *  tmplOperandRange            - template for ranges and variable names.
   *  tmplOperandLogical          - template for logical operators such as + - = ...
   *  tmplOperandNumber           - template for numbers.
   *  tmplOperandText             - template for text/strings.
   *  tmplArgument				- template for argument separators such as ,.
   *  tmplFunctionStartArray      - template for the start of an array.
   *  tmplFunctionStartArrayRow   - template for the start of an array row.
   *  tmplFunctionStopArrayRow    - template for the end of an array row.
   *  tmplFunctionStopArray       - template for the end of an array.
   *  tmplSubexpressionStart      - template for the sub expression start
   *  tmplSubexpressionStop       - template for the sub expression stop
   *  tmplIndentTab               - template for the tab char.
   *  tmplIndentSpace             - template for space char.
   *  autoLineBreak               - when rendering line breaks automatically which types should it break on. "this.TOK_SUBTYPE_STOP | this.TOK_SUBTYPE_START | this.TOK_TYPE_ARGUMENT"
   *  newLine                     - used for the {{autolinebreak}} replacement as well as some string parsing. if this is not set correctly you may get undesired results. usually \n for text or <br /> for html
   *  trim: true                  - trim the output.
   *	customTokenRender: null     - this is a call back to a custom token function. your call back should look like
   *                                EXAMPLE:
   *
   *                                    customTokenRender: function(tokenString, token, indent, lineBreak){
   *                                        let outStr = token,
   *                                            useTemplate = true;
   *                                        // In the return object "useTemplate" tells formatFormula()
   *                                        // weather or not to apply the template to what your return from the "tokenString".
   *                                        return {tokenString: outStr, useTemplate: useTemplate};
   *                                    }
   *
   *</pre>
   * @returns {string}
   */
  static formatFormula(formula: string, options?: Object): string;

  /**
   *
   * @function
   * @param {string} formula - string containing the excel formula to be parsed
   * @param {object} [options] - params for the parsing
   *<pre>
   *   TEMPLATE VALUES
   *  {{autoindent}} - apply auto indent based on current tree level
   *  {{token}} - the named token such as FUNCTION_NAME or "string"
   *  {{autolinebreak}} - apply line break automatically. tests for next element only at this point
   *
   * Options include:
   *  tmplFunctionStart           - template for the start of a function, the {{token}} will contain the name of the function.
   *  tmplFunctionStop            - template for when the end of a function has been reached.
   *  tmplOperandError            - template for errors.
   *  tmplOperandRange            - template for ranges and variable names.
   *  tmplOperandLogical          - template for logical operators such as + - = ...
   *  tmplOperandNumber           - template for numbers.
   *  tmplOperandText             - template for text/strings.
   *  tmplArgument				- template for argument separators such as ,.
   *  tmplFunctionStartArray      - template for the start of an array.
   *  tmplFunctionStartArrayRow   - template for the start of an array row.
   *  tmplFunctionStopArrayRow    - template for the end of an array row.
   *  tmplFunctionStopArray       - template for the end of an array.
   *  tmplSubexpressionStart      - template for the sub expression start
   *  tmplSubexpressionStop       - template for the sub expression stop
   *  tmplIndentTab               - template for the tab char.
   *  tmplIndentSpace             - template for space char.
   *  autoLineBreak               - when rendering line breaks automatically which types should it break on. "this.TOK_SUBTYPE_STOP | this.TOK_SUBTYPE_START | this.TOK_TYPE_ARGUMENT"
   *  newLine                     - used for the {{autolinebreak}} replacement as well as some string parsing. if this is not set correctly you may get undesired results. usually \n for text or <br /> for html
   *  trim: true                  - trim the output.
   *	customTokenRender: null     - this is a call back to a custom token function. your call back should look like
   *                                EXAMPLE:
   *
   *                                    customTokenRender: function(tokenString, token, indent, lineBreak){
   *                                        let outStr = token,
   *                                            useTemplate = true;
   *                                        // In the return object "useTemplate" tells formatFormula()
   *                                        // weather or not to apply the template to what your return from the "tokenString".
   *                                        return {tokenString: outStr, useTemplate: useTemplate};
   *                                    }
   *
   *</pre>
   * @returns {string}
   */
  static toJS(formula: string, options?: Object): string;
}
export {};
