import semver from "semver";

// The technicians' tablet app sends its version in the X-App-Version header.
// Builds older than this can't read the new job-notes format.
export const MIN_TECH_APP_VERSION = "2.4.0";

export function isSupportedTechApp(version: string | null): boolean {
  const parsed = version ? semver.coerce(version) : null;
  return parsed !== null && semver.gte(parsed, MIN_TECH_APP_VERSION);
}
