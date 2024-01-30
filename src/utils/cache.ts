// Memoized cached function util
export function memoized<T>(cacheMaxDuration: number) {
  const cache: Record<string, T> = {};
  const cacheDuration: Record<string, number> = {};

  return function <T>(key: string, fn: () => T) {
    if (cache[key] && cacheDuration[key] > Date.now()) {
      console.log(key, "Cache hit");
      return cache[key];
    }
    console.log(key, "Cache miss, regenerating");

    // @ts-expect-error Cache map could contain any type
    cache[key] = fn();
    cacheDuration[key] = Date.now() + cacheMaxDuration;

    return cache[key];
  };
}
