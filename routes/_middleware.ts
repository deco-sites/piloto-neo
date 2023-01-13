import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 458,
  site: "piloto-neo",
  domains: ["deco-sites-piloto-neo.deno.dev"],
});