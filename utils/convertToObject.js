export function convertToSerializableObject(leanDocument) {
  if (!leanDocument) return null;
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key] != null && leanDocument[key].toJSON && leanDocument[key].toString) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }
  return leanDocument;
}
