export type OutcomeStat = {
  label: string;
  value: string;
};

/**
 * Homepage outcome strip.
 * VERIFY before shipping — do not invent or inflate:
 * - "12+" Sites & systems shipped — confirm real count for Conner Digital (solo)
 * - "<1 wk" Typical install — confirm still accurate
 * - "100%" Owner-led service — accurate if John does the work; keep only if true
 * - "1 biz day" Typical first reply — matches RESPONSE_TIME in constants if still true
 */
export const outcomeStats: OutcomeStat[] = [
  { value: "12+", label: "Sites & systems shipped" },
  { value: "<1 wk", label: "Typical install" },
  { value: "100%", label: "Owner-led service" },
  { value: "1 biz day", label: "Typical first reply" },
];
