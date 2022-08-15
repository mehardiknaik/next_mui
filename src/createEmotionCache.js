import createCache from "@emotion/cache";

export default function createEmotionCache() {
 return createCache({ key: "hardiks",  prepend: true });
}