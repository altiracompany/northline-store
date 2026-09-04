export function GET() {
  const body = `NORTHLINE\nDigital operating systems for solo operators.\nProducts: Weekly Operator OS $47, Client Pipeline $67, Launch Week Kit $97, Cash Calendar $37, 90-Day Content Engine $79, Operator Stack $197.\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
