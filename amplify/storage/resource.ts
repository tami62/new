import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'partyhodrive',
  access: (allow) => ({
    'ru1-albun-pictures/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
  })
});