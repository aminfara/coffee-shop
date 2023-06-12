import { idSchema } from '@cs/common';

export function checkUUID(id: string) {
  return idSchema.parse(id);
}

console.log(checkUUID('a0819dbb-1aa2-4661-b8ac-f424ccea05d8'));
