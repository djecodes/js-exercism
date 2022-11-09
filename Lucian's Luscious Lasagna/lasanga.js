/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

// The expected number of minutes it takes to prepare a lasagna in the oven
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  let remainingMinutes = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  return remainingMinutes;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  let preparationTime = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
  return preparationTime;
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  let totalTime = preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
  return totalTime;
}
