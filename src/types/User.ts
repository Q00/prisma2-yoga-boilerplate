import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.nickname()
    t.model.birthdate()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.deletedAt()
    t.model.sex()
  },
})
