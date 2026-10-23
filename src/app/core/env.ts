export const ENV = Object.freeze({
  /**
   * @brief tell that if the app allow to use dummies
   */
  USE_DUMMIES: import.meta.env["NG_APP_USE_DUMMIES"] === "true",
});
