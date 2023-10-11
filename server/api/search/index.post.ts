import algoliasearch from "algoliasearch";
const client = algoliasearch(
  process.env.NUXT_ENV_ALGOLIA_ACCOUNT_ID as string,
  process.env.NUXT_ENV_ALGOLIA_API_KEY as string
);
const index = client.initIndex(process.env.NUXT_ENV_ALGOLIA_INDEX as string);

export default defineEventHandler(async (event) => {
  const { searchKeywords } = await readBody(event);
  try {
    return index.search(searchKeywords, {
      removeWordsIfNoResults: "allOptional",
    });
  } catch (error: any) {
    throw createError({
      statusMessage: error,
    });
  }
});
