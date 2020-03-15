import { idArg, queryType, stringArg } from 'nexus'
import { getUserId } from '../utils'

export const Query = queryType({
  definition(t) {
    t.crud.user()
    t.crud.users()
    t.crud.routine()
    t.crud.routines()
    // t.field('user', {
    //   type: 'User',
    //   nullable: true,
    //   resolve: (parent, args, ctx) => {
    //     const userId = getUserId(ctx)
    //     return ctx.prisma.user.findOne({
    //       where: {
    //         id: Number(userId),
    //       },
    //     })
    //   },
    // })

    // t.field('users', {
    //   type: 'User',
    //   nullable: true,
    //   resolve: (parent, args, ctx) => {
    //     const userId = getUserId(ctx)
    //     return ctx.prisma.user.findOne({
    //       where: {
    //         id: Number(userId),
    //       },
    //     })
    //   },
    // })

    // t.list.field('routine', {
    //   type: 'Routine',
    //   resolve: (parent, args, ctx) => {
    //     return ctx.prisma.routine.findMany({
    //       where: {},
    //     })
    //   },
    // })

    // t.list.field('filterRoutine', {
    //   type: 'Routine',
    //   args: {
    //     searchString: stringArg({ nullable: true }),
    //   },
    //   resolve: (parent, { searchString }, ctx) => {
    //     return ctx.prisma.routine.findMany({
    //       where: {
    //         OR: [
    //           {
    //             name: {
    //               contains: searchString,
    //             },
    //           },
    //         ],
    //       },
    //     })
    //   },
    // })

    t.field('routine', {
      type: 'Routine',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.routine.findOne({
          where: {
            id: Number(id),
          },
        })
      },
    })
  },
})
