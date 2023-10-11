import client from "@sendgrid/mail";
client.setApiKey(process.env.NUXT_ENV_SENDGRID_API_KEY as string);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await client.send(body);
    return "Mail Sent";
  } catch (error: any) {
    throw createError({
      statusMessage: error,
    });
  }
});
