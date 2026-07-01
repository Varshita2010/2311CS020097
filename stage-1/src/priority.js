const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function calculatePriority(notification) {
  const ageMinutes =
    (Date.now() - notification.timestamp) / (1000 * 60);

  return weights[notification.type] * 100 - ageMinutes;
}