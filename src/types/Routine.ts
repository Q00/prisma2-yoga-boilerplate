import { objectType } from 'nexus'

export const Routine = objectType({
  name: 'Routine',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.user()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.deletedAt()
  },
})
