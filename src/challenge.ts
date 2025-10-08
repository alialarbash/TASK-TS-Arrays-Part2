/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - Accepts a "fruits" parameter of type "string[]"
 * - if the number of elements provided in "fruits" is even, then we return the second half of the array
 * - if the number of elements provided in "fruits" is odd, then we return an empty array
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]); // => ["banana", "kiwi"]
 * explanation: the number of elements provided is 4, 4 is even, half of 4 is 2,
 * so we ignore the first 2 elements in the array, while returning the second 2 elements in the array
 *
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]); // => []
 * explanation: the number of elements provided is 5. 5 is odd, so we return empty array
 */
function secondHalfOfArrayIfItIsEven(fruits: string[]): string[] {
  let len: number = fruits.length;
  let result: string[];
  if (len % 2 == 0) {
    result = fruits.slice(len / 2, len + 1);
  } else {
    result = [];
  }

  return result; // replace false with what you see is fit
}

/**
 * youGottaCalmDown(shout):
 * - Accepts a "shout" parameter of type "string"
 * - returns the string shout with at most one exclamation mark (!) at the end if provided.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!"); // => "HI!" (replace the 10 exclamation mark with 1 exclamation mark)
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!"); // => "Taylor Schwift!" (replace the 11 exclamation mark with 1 exclamation mark)
 * youGottaCalmDown("Hellooooo"); // => "Hellooooo" (no exclamation mark were added because none existed on the input)
 *
 * Hint:
 * - Use string method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout: string): string {
  let whereIsIt: number = shout.indexOf("!");
  let result: string;
  if (whereIsIt == -1) {
    result = shout;
  } else {
    result = shout.slice(0, whereIsIt + 1);
  }

  return result; // replace the empty string with what you see is fit
}

export { secondHalfOfArrayIfItIsEven, youGottaCalmDown };
