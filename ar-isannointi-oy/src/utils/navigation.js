export function navigateToRoute(navigate, route) {
  if (typeof route !== 'string' || route.trim() === '') return;

  const normalizedRoute = route.trim();
  const isExternalRoute = /^(https?:)?\/\//i.test(normalizedRoute);

  if (isExternalRoute) {
    window.open(normalizedRoute, '_blank', 'noopener,noreferrer');
    return;
  }

  if (typeof navigate === 'function') {
    navigate(normalizedRoute);
  }
}
