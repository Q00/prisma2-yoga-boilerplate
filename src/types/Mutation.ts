import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { mutationType, stringArg, intArg, core, arg } from 'nexus'
import { APP_SECRET, getUserId } from '../utils'

const dateTimeArg = (opts: core.CommonArgConfig) =>
  arg({ ...opts, type: 'DateTime' })

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.upsertOneUser()
    t.crud.deleteOneUser()

    t.crud.createOneUserAccount()
    t.crud.updateOneUserAccount()
    t.crud.upsertOneUserAccount()
    t.crud.deleteOneUserAccount()

    t.crud.createOneRoutine()
    t.crud.updateOneRoutine()
    t.crud.upsertOneRoutine()
    t.crud.deleteOneRoutine()
    // t.field('signup', {
    //   type: 'AuthPayload',
    //   args: {
    //     nickname: stringArg({nullable: false}),
    //     birthday: dateTimeArg({ nullable: false }),
    //   },
    //   resolve: async (_parent, {   nickname: String,
    //     name: String,
    //     sex: Sex,
    //     userPushId: String }, ctx) => {
    //     const hashedPassword = await hash(password, 10)
    //     const user = await ctx.prisma.user.create({
    //       data: {
    //         nickname:
    //       },
    //     })
    //     return {
    //       token: sign({ userId: user.id }, APP_SECRET),
    //       user,
    //     }
    //   },
    // })
    // t.field('login', {
    //   type: 'AuthPayload',
    //   args: {
    //     email: stringArg({ nullable: false }),
    //     password: stringArg({ nullable: false }),
    //   },
    //   resolve: async (_parent, { email, password }, ctx) => {
    //     const user = await ctx.prisma.user.findOne({
    //       where: {
    //         email,
    //       },
    //     })
    //     if (!user) {
    //       throw new Error(`No user found for email: ${email}`)
    //     }
    //     const passwordValid = await compare(password, user.password)
    //     if (!passwordValid) {
    //       throw new Error('Invalid password')
    //     }
    //     return {
    //       token: sign({ userId: user.id }, APP_SECRET),
    //       user,
    //     }
    //   },
    // })
    // t.field('createRoutine', {
    //   type: 'Routine',
    //   args: {
    //     name: stringArg({ nullable: false }),
    //     nfc: stringArg({ nullable: false }),
    //     userId: stringArg({ nullable: false }),
    //   },
    //   resolve: (parent, { name, nfc, userId }, ctx) => {
    //     // const userId = getUserId(ctx)
    //     // if (!userId) throw new Error('Could not authenticate user.')
    //     return ctx.prisma.routine.create({
    //       data: {
    //         name,
    //         userNfcRoutine
    //         user: { connect: { id: Number(userId) } },
    //       },
    //     })
    //   },
    // })
    // t.field('deleteRoutine', {
    //   type: 'Routine',
    //   nullable: true,
    //   args: { id: intArg({ nullable: false }) },
    //   resolve: (parent, { id }, ctx) => {
    //     return ctx.prisma.routine.delete({
    //       where: {
    //         id,
    //       },
    //     })
    //   },
    // })
    // t.field('publish', {
    //   type: 'Routine',
    //   nullable: true,
    //   args: { id: intArg() },
    //   resolve: (parent, { id }, ctx) => {
    //     return ctx.prisma.routine.update({
    //       where: { id },
    //       data: { published: true },
    //     })
    //   },
    // })
  },
})
