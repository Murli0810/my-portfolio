export async function POST(request) {
  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "🚨 **Security Alert:** Someone typed the `secret` command on your portfolio terminal!",
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send Discord alert:", error);
    return Response.json({ error: "Failed to send alert" }, { status: 500 });
  }
}