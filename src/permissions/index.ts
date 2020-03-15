import { rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  isRoutineOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context)
    const author = await context.prisma.routine
      .findOne({
        where: {
          id,
        },
      })
      .author()
    return userId === author.id
  }),
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    // filterRoutines: rules.isAuthenticatedUser,
    routine: rules.isAuthenticatedUser,
  },
  Mutation: {
    // createDraft: rules.isAuthenticatedUser,
    // deleteRoutine: rules.isRoutineOwner,
    // publish: rules.isRoutineOwner,
  },
})
