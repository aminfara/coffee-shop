import { idSchema, type Id } from '@cs/common';

export function checkUUID(id: string): Id {
  const parsedId = idSchema.parse(id);
  console.log(parsedId);
  return parsedId;
}

if (require.main === module) {
  checkUUID('72395802-0c3a-4099-8729-aeef50c07d05');
}
