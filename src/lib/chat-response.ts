const HTML_ENTITY_MAP: Record<string, string> = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
};

function decodeHtmlEntities(value: string) {
  return value.replace(
    /&(?:nbsp|amp|lt|gt|quot|#39|apos);/gi,
    (entity) => HTML_ENTITY_MAP[entity.toLowerCase()] ?? entity
  );
}

/** Converts HTML accidentally returned by the model into readable Markdown. */
export function normalizeChatResponse(value: string) {
  return decodeHtmlEntities(value)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(?:p|div|section|article|h[1-6]|li)>/gi, '\n')
    .replace(/<(?:p|div|section|article|h[1-6])\b[^>]*>/gi, '')
    .replace(/<li\b[^>]*>/gi, '- ')
    .replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}