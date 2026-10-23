/**
  * @brief object access for this project .env
  *
  * @note references:
  * - `src/env.d.ts`
  */
export const ENV = Object.freeze({
  /**
   * @brief tell that if the app allow to use dummies
   */
  USE_DUMMIES: import.meta.env["NG_APP_USE_DUMMIES"],
});
