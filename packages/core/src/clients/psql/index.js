
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "packages/core/src/clients/psql",
    "core/src/clients/psql",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"User\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"handle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"links\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"[]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threadsAuthored\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"relationName\":\"ThreadsAuthored\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threadsParticipating\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadParticipant\",\"relationName\":\"ThreadParticipantToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicationsContributed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicationContributor\",\"relationName\":\"PublicationContributorToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Thread\",\"dbName\":null,\"fields\":[{\"name\":\"threadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentThreadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rootThreadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threadOrigin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastUpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numViews\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numReplies\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numLikes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numDislikes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numReactions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numInteractions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRoot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDeleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isLocked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ThreadsAuthored\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentThread\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"relationName\":\"RepliesInThread\",\"relationFromFields\":[\"parentThreadId\"],\"relationToFields\":[\"threadId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"relationName\":\"RepliesInThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rootThread\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"relationName\":\"RepliesInTopic\",\"relationFromFields\":[\"rootThreadId\"],\"relationToFields\":[\"threadId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paricipants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadParticipant\",\"relationName\":\"ThreadToThreadParticipant\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"relationName\":\"RepliesInTopic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ThreadParticipant\",\"dbName\":null,\"fields\":[{\"name\":\"threadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"relationName\":\"ThreadToThreadParticipant\",\"relationFromFields\":[\"threadId\"],\"relationToFields\":[\"threadId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ThreadParticipantToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"threadId\",\"userId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"File\",\"dbName\":null,\"fields\":[{\"name\":\"fileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Enum: image, video, audio, binary, text, archive, other\"},{\"name\":\"destination\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"A path, URL, or data URI to the file\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"The name of the file, may be necessary if the file is a data uri or blob\"},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"An optional description of the media, e.g. alt text for images\"},{\"name\":\"mime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"[]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"params\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Params used to store the media. E.g. width, height, encoding, compression\\\\nEither as JSON, query string format (?width=100&height=100), or cli arg format (--width=100 --height=100)\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Represents an archived file (image, video, audio, binary, text file, archive, etc.)\"},{\"name\":\"Publication\",\"dbName\":null,\"fields\":[{\"name\":\"publicationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"ONGOING\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"The status of the publication. E.g. ONGOING, COMPLETED, CANCELLED, etc.\"},{\"name\":\"contributors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicationContributor\",\"relationName\":\"PublicationToPublicationContributor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chapters\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicationChapter\",\"relationName\":\"PublicationToPublicationChapter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicationChapterPage\",\"relationName\":\"PublicationToPublicationChapterPage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"A publication represents a blog, book, comic, etc.\\\\nIt will either be a collection of chapters or a collection of pages\"},{\"name\":\"PublicationChapter\",\"dbName\":null,\"fields\":[{\"name\":\"chapterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publishedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publication\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publication\",\"relationName\":\"PublicationToPublicationChapter\",\"relationFromFields\":[\"publicationId\"],\"relationToFields\":[\"publicationId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicationChapterPage\",\"relationName\":\"PublicationChapterToPublicationChapterPage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"source\",\"publicationId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"source\",\"publicationId\"]}],\"isGenerated\":false},{\"name\":\"PublicationChapterPage\",\"dbName\":null,\"fields\":[{\"name\":\"pageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chapterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chapter\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicationChapter\",\"relationName\":\"PublicationChapterToPublicationChapterPage\",\"relationFromFields\":[\"chapterId\"],\"relationToFields\":[\"chapterId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publication\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publication\",\"relationName\":\"PublicationToPublicationChapterPage\",\"relationFromFields\":[\"publicationId\"],\"relationToFields\":[\"publicationId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"source\",\"chapterId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"source\",\"chapterId\"]}],\"isGenerated\":false},{\"name\":\"PublicationContributor\",\"dbName\":null,\"fields\":[{\"name\":\"publicationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Example: author, artist, editor, etc:\"},{\"name\":\"publication\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publication\",\"relationName\":\"PublicationToPublicationContributor\",\"relationFromFields\":[\"publicationId\"],\"relationToFields\":[\"publicationId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PublicationContributorToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"publicationId\",\"userId\",\"role\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"User\",\"plural\":\"users\",\"findUnique\":\"findUniqueUser\",\"findUniqueOrThrow\":\"findUniqueUserOrThrow\",\"findFirst\":\"findFirstUser\",\"findFirstOrThrow\":\"findFirstUserOrThrow\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\",\"groupBy\":\"groupByUser\"},{\"model\":\"Thread\",\"plural\":\"threads\",\"findUnique\":\"findUniqueThread\",\"findUniqueOrThrow\":\"findUniqueThreadOrThrow\",\"findFirst\":\"findFirstThread\",\"findFirstOrThrow\":\"findFirstThreadOrThrow\",\"findMany\":\"findManyThread\",\"create\":\"createOneThread\",\"delete\":\"deleteOneThread\",\"update\":\"updateOneThread\",\"deleteMany\":\"deleteManyThread\",\"updateMany\":\"updateManyThread\",\"upsert\":\"upsertOneThread\",\"aggregate\":\"aggregateThread\",\"groupBy\":\"groupByThread\"},{\"model\":\"ThreadParticipant\",\"plural\":\"threadParticipants\",\"findUnique\":\"findUniqueThreadParticipant\",\"findUniqueOrThrow\":\"findUniqueThreadParticipantOrThrow\",\"findFirst\":\"findFirstThreadParticipant\",\"findFirstOrThrow\":\"findFirstThreadParticipantOrThrow\",\"findMany\":\"findManyThreadParticipant\",\"create\":\"createOneThreadParticipant\",\"delete\":\"deleteOneThreadParticipant\",\"update\":\"updateOneThreadParticipant\",\"deleteMany\":\"deleteManyThreadParticipant\",\"updateMany\":\"updateManyThreadParticipant\",\"upsert\":\"upsertOneThreadParticipant\",\"aggregate\":\"aggregateThreadParticipant\",\"groupBy\":\"groupByThreadParticipant\"},{\"model\":\"File\",\"plural\":\"files\",\"findUnique\":\"findUniqueFile\",\"findUniqueOrThrow\":\"findUniqueFileOrThrow\",\"findFirst\":\"findFirstFile\",\"findFirstOrThrow\":\"findFirstFileOrThrow\",\"findMany\":\"findManyFile\",\"create\":\"createOneFile\",\"delete\":\"deleteOneFile\",\"update\":\"updateOneFile\",\"deleteMany\":\"deleteManyFile\",\"updateMany\":\"updateManyFile\",\"upsert\":\"upsertOneFile\",\"aggregate\":\"aggregateFile\",\"groupBy\":\"groupByFile\"},{\"model\":\"Publication\",\"plural\":\"publications\",\"findUnique\":\"findUniquePublication\",\"findUniqueOrThrow\":\"findUniquePublicationOrThrow\",\"findFirst\":\"findFirstPublication\",\"findFirstOrThrow\":\"findFirstPublicationOrThrow\",\"findMany\":\"findManyPublication\",\"create\":\"createOnePublication\",\"delete\":\"deleteOnePublication\",\"update\":\"updateOnePublication\",\"deleteMany\":\"deleteManyPublication\",\"updateMany\":\"updateManyPublication\",\"upsert\":\"upsertOnePublication\",\"aggregate\":\"aggregatePublication\",\"groupBy\":\"groupByPublication\"},{\"model\":\"PublicationChapter\",\"plural\":\"publicationChapters\",\"findUnique\":\"findUniquePublicationChapter\",\"findUniqueOrThrow\":\"findUniquePublicationChapterOrThrow\",\"findFirst\":\"findFirstPublicationChapter\",\"findFirstOrThrow\":\"findFirstPublicationChapterOrThrow\",\"findMany\":\"findManyPublicationChapter\",\"create\":\"createOnePublicationChapter\",\"delete\":\"deleteOnePublicationChapter\",\"update\":\"updateOnePublicationChapter\",\"deleteMany\":\"deleteManyPublicationChapter\",\"updateMany\":\"updateManyPublicationChapter\",\"upsert\":\"upsertOnePublicationChapter\",\"aggregate\":\"aggregatePublicationChapter\",\"groupBy\":\"groupByPublicationChapter\"},{\"model\":\"PublicationChapterPage\",\"plural\":\"publicationChapterPages\",\"findUnique\":\"findUniquePublicationChapterPage\",\"findUniqueOrThrow\":\"findUniquePublicationChapterPageOrThrow\",\"findFirst\":\"findFirstPublicationChapterPage\",\"findFirstOrThrow\":\"findFirstPublicationChapterPageOrThrow\",\"findMany\":\"findManyPublicationChapterPage\",\"create\":\"createOnePublicationChapterPage\",\"delete\":\"deleteOnePublicationChapterPage\",\"update\":\"updateOnePublicationChapterPage\",\"deleteMany\":\"deleteManyPublicationChapterPage\",\"updateMany\":\"updateManyPublicationChapterPage\",\"upsert\":\"upsertOnePublicationChapterPage\",\"aggregate\":\"aggregatePublicationChapterPage\",\"groupBy\":\"groupByPublicationChapterPage\"},{\"model\":\"PublicationContributor\",\"plural\":\"publicationContributors\",\"findUnique\":\"findUniquePublicationContributor\",\"findUniqueOrThrow\":\"findUniquePublicationContributorOrThrow\",\"findFirst\":\"findFirstPublicationContributor\",\"findFirstOrThrow\":\"findFirstPublicationContributorOrThrow\",\"findMany\":\"findManyPublicationContributor\",\"create\":\"createOnePublicationContributor\",\"delete\":\"deleteOnePublicationContributor\",\"update\":\"updateOnePublicationContributor\",\"deleteMany\":\"deleteManyPublicationContributor\",\"updateMany\":\"updateManyPublicationContributor\",\"upsert\":\"upsertOnePublicationContributor\",\"aggregate\":\"aggregatePublicationContributor\",\"groupBy\":\"groupByPublicationContributor\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/workspaces/Archie/packages/core/src/clients/psql",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../prisma",
  "clientVersion": "4.9.0",
  "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "packages/core/src/clients/psql/libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "packages/core/src/clients/psql/schema.prisma")
