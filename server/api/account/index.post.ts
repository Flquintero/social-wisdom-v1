import algoliasearch from "algoliasearch";
const client = algoliasearch(
  process.env.NUXT_ENV_ALGOLIA_ACCOUNT_ID as string,
  process.env.NUXT_ENV_ALGOLIA_API_KEY as string
);
const index = client.initIndex(process.env.NUXT_ENV_ALGOLIA_INDEX as string);

export default defineEventHandler(async (event) => {
  const { accountId } = await readBody(event);
  try {
    return index.findObject((hit) => hit.objectID == accountId);
  } catch (error: any) {
    throw createError({
      statusMessage: error,
    });
  }
});
