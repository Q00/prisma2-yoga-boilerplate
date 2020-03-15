import { objectType } from 'nexus'

export const UserAccount = objectType({
  name: 'UserAccount',
  definition(t) {
    t.model.id()
    t.model.snsId()
    t.model.provider()
  },
})
