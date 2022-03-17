/**
 * Validators for various types of strings
 */
interface Validators {
  /**
   * RegExp for URL validation
   */
  urlRegex: RegExp
  /**
   * RegExp for Discord emoji name validation
   */
  emojiRegex: RegExp
  invalidName: string
  /**
   * Validate a URL
   * @param {String} url URL to validate
   * @returns {Boolean} wether the given string is a valid url
   */
  isUrl: (url: string) => boolean
  /**
   * Validate an emoji name
   * @param {String} name name to validate
   * @returns {Boolean} wether the given string is a valid name for discord emojis
   */
  isValidEmojiName: (name: string) => boolean
  /**
   * Get a name that's valid for discord emojis
   * @param {String} name name to try
   * @returns {String | "invalid_name"} The filtered name or a substitute
   */
  getValidEmojiName: (name: string) => string
}

/**
 * Functions that handle arrays
 */
interface ArrayHelper {
  /**
   * Check wether a *given* array includes all of the elements on *required*.
   * The *given* array may have more/otherwise different elements.
   * Intended for permission array overlap testing.
   * @param {Array} given An array to be tested against required
   * @param {Array} required An array that contains all elements that must be present on given
   * @return {Boolean} wether given includes all elements of required
   */
  checkOverlap: (given: any[], required: any[]) => boolean
  /**
   * Pick one random element out of an array and return it.
   *
   * Will return undefined when the array has no elements
   * @param {Array<T>} array Arbitrary Array
   * @returns {T} the selected element
   */
  pickRandom: <T>(array: T[]) => T | undefined
}

/**
 * Functions that handle strings
 */
interface StringHelper {
  /**
   * Escape special characters from a string
   * @param {String} input String to escape special characters from
   * @returns {String} the escaped string
   */
  escapeString: (input: string) => string
  /**
   * Eliminate all but word characters
   * @param {String} input input string
   * @returns {String} string with only word characters
   */
  eliminateSpecial: (input: string) => string
  /**
   * Randomly resolve an acronym
   * @param {String} acronym an acronym (i.e. ABC which usually stands for American Broadcasting Company)
   * @returns {String} randomly resolver acronym
   * @example resolveAcronym('ABC')
   * // => 'Apartment Backing Consult'
   */
  resolveAcronym: (acronym: string) => string
  /**
   * Capitalize the first letter of a string
   * @param {String} string an input string
   * @returns {String} string with first letter capitalized
   * @example capitalizeFirstLetter('abc def GHI')
   * // => Abc def GHI
   */
  capitalizeFirstLetter: (string: string) => string
  /**
   * Capitalize the first letter of every word in a string
   * @param {String} string an input string
   * @param {?String} wordSeparator string to split words by (default: ' ' (space))
   * @returns {String} string with all words capitalized
   * @example capitalize('abc def GHI')
   * // => Abc Def GHI
   *
   * @example capitalize('abc_def', '_')
   * // => Abc_Def
   */
  capitalize: (string: string, wordSeparator?: string) => string
}

interface Jitsuyo {
  validators: Validators
  arrayHelper: ArrayHelper
  stringHelper: StringHelper
}

/**
 * All utility packaged
 */
declare const util: Jitsuyo

export = util
