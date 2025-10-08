/**
 * isArrayLengthOdd(numbers):
 * - Accepts a "numbers" parameter of type "number[]"
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]); // => true (the array contains 3 elements, 3 is odd, we return true)
 * isArrayLengthOdd([1, 2, 3, 4]); // => false (the array contains 4 elements, 4 is even, we return false)
 */

function isArrayLengthOdd(numbers: number[]): boolean {
  let len: number = numbers.length;
  let result: boolean;
  if (len % 2 == 0) {
    result = false;
  } else {
    result = true;
  }

  return result; // replace false with what you see is fit
}

/**
 * isArrayLengthEven(numbers):
 * - Accepts a "numbers" parameter of type "number[]"
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]); // => false (the array contains 3 elements, 3 is odd, we return false)
 * isArrayLengthEven([1, 2, 3, 4]); // => true (the array contains 4 elements, 4 is even, we return true)
 */

function isArrayLengthEven(numbers: number[]): boolean {
  let len: number = numbers.length;
  let result: boolean;
  if (len % 2 == 0) {
    result = true;
  } else {
    result = false;
  }

  return result; // replace false with what you see is fit
}

/**
 * addLailaToArray(instructors):
 * - Accepts a "instructors" parameter of type "string[]"
 * - returns a new array that's a copy of array instructors with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]); // => ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors: string[]): string[] {
  // let newArray: string[] = instructors.slice(0, -1);
  // newArray.push("Laila");
  instructors.push("Laila");

  // return newArray; // replace empty array with what you see is fit
  return instructors;
}

/**
 * eliminateTeam(teams):
 * - Accepts a "teams" parameter of type "string[]"
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]); // => "Italy"
 */
function eliminateTeam(teams: string[]): string | undefined {
  let result: string | undefined = teams.pop();

  return result; // replace empty string with what you see is fit
}

export { isArrayLengthOdd, isArrayLengthEven, addLailaToArray, eliminateTeam };
