
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.FileScalarFieldEnum = makeEnum({
  fileId: 'fileId',
  source: 'source',
  type: 'type',
  destination: 'destination',
  name: 'name',
  description: 'description',
  mime: 'mime',
  tags: 'tags',
  metadata: 'metadata',
  params: 'params',
  createdAt: 'createdAt'
});

exports.Prisma.PublicationChapterPageScalarFieldEnum = makeEnum({
  pageId: 'pageId',
  chapterId: 'chapterId',
  publicationId: 'publicationId',
  source: 'source',
  content: 'content'
});

exports.Prisma.PublicationChapterScalarFieldEnum = makeEnum({
  chapterId: 'chapterId',
  publicationId: 'publicationId',
  source: 'source',
  title: 'title',
  summary: 'summary',
  publishedAt: 'publishedAt'
});

exports.Prisma.PublicationContributorScalarFieldEnum = makeEnum({
  publicationId: 'publicationId',
  userId: 'userId',
  role: 'role'
});

exports.Prisma.PublicationScalarFieldEnum = makeEnum({
  publicationId: 'publicationId',
  source: 'source',
  name: 'name',
  summary: 'summary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.ThreadParticipantScalarFieldEnum = makeEnum({
  threadId: 'threadId',
  userId: 'userId'
});

exports.Prisma.ThreadScalarFieldEnum = makeEnum({
  threadId: 'threadId',
  source: 'source',
  parentThreadId: 'parentThreadId',
  rootThreadId: 'rootThreadId',
  threadOrigin: 'threadOrigin',
  content: 'content',
  metadata: 'metadata',
  createdAt: 'createdAt',
  lastUpdatedAt: 'lastUpdatedAt',
  numViews: 'numViews',
  numReplies: 'numReplies',
  numLikes: 'numLikes',
  numDislikes: 'numDislikes',
  numReactions: 'numReactions',
  numInteractions: 'numInteractions',
  authorId: 'authorId',
  isRoot: 'isRoot',
  isDeleted: 'isDeleted',
  isLocked: 'isLocked'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  userId: 'userId',
  handle: 'handle',
  displayName: 'displayName',
  links: 'links'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Thread: 'Thread',
  ThreadParticipant: 'ThreadParticipant',
  File: 'File',
  Publication: 'Publication',
  PublicationChapter: 'PublicationChapter',
  PublicationChapterPage: 'PublicationChapterPage',
  PublicationContributor: 'PublicationContributor'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
