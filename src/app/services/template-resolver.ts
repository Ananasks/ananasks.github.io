const PLACEHOLDER_PATTERN = /^\{\{\s*([a-zA-Z0-9_.[\]]+)\s*\}\}$/;
const INLINE_PLACEHOLDER_PATTERN = /\{\{\s*([a-zA-Z0-9_.[\]]+)\s*\}\}/g;

export function applyTemplate<T>(template: unknown, data: Record<string, unknown>): T {
  return resolveNode(template, data) as T;
}

function resolveNode(node: unknown, data: Record<string, unknown>): unknown {
  if (typeof node === 'string') {
    return resolveString(node, data);
  }

  if (Array.isArray(node)) {
    return node.map((item) => resolveNode(item, data));
  }

  if (node && typeof node === 'object') {
    return Object.fromEntries(
      Object.entries(node).map(([key, value]) => [key, resolveNode(value, data)]),
    );
  }

  return node;
}

function resolveString(template: string, data: Record<string, unknown>): unknown {
  const fullMatch = template.match(PLACEHOLDER_PATTERN);
  if (fullMatch) {
    return resolvePath(data, fullMatch[1]);
  }

  return template.replace(INLINE_PLACEHOLDER_PATTERN, (_, path: string) => {
    const resolved = resolvePath(data, path);
    return resolved == null ? '' : String(resolved);
  });
}

function resolvePath(source: Record<string, unknown>, path: string): unknown {
  const normalizedPath = path.replace(/\[(\d+)\]/g, '.$1');

  return normalizedPath.split('.').reduce<unknown>((current, segment) => {
    if (current == null || typeof current !== 'object') {
      return undefined;
    }

    return (current as Record<string, unknown>)[segment];
  }, source);
}
