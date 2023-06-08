
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  userId: number
  handle: string
  displayName: string | null
  links: string
}

/**
 * Model Thread
 * 
 */
export type Thread = {
  threadId: number
  source: string
  parentThreadId: number | null
  rootThreadId: number | null
  threadOrigin: string | null
  content: string | null
  metadata: string
  createdAt: Date
  lastUpdatedAt: Date
  numViews: number
  numReplies: number
  numLikes: number
  numDislikes: number
  numReactions: number
  numInteractions: number
  authorId: number
  isRoot: boolean
  isDeleted: boolean
  isLocked: boolean
}

/**
 * Model ThreadParticipant
 * 
 */
export type ThreadParticipant = {
  threadId: number
  userId: number
}

/**
 * Model File
 * Represents an archived file (image, video, audio, binary, text file, archive, etc.)
 */
export type File = {
  fileId: number
  source: string
  /**
   * Enum: image, video, audio, binary, text, archive, other
   */
  type: string
  /**
   * A path, URL, or data URI to the file
   */
  destination: string
  /**
   * The name of the file, may be necessary if the file is a data uri or blob
   */
  name: string
  /**
   * An optional description of the media, e.g. alt text for images
   */
  description: string | null
  mime: string
  tags: string
  metadata: string
  /**
   * Params used to store the media. E.g. width, height, encoding, compression
   * Either as JSON, query string format (?width=100&height=100), or cli arg format (--width=100 --height=100)
   */
  params: string
  createdAt: Date
}

/**
 * Model Publication
 * A publication represents a blog, book, comic, etc.
 * It will either be a collection of chapters or a collection of pages
 */
export type Publication = {
  publicationId: number
  source: string
  name: string
  summary: string | null
  createdAt: Date
  updatedAt: Date
  /**
   * The status of the publication. E.g. ONGOING, COMPLETED, CANCELLED, etc.
   */
  status: string
}

/**
 * Model PublicationChapter
 * 
 */
export type PublicationChapter = {
  chapterId: number
  publicationId: number
  source: string
  title: string
  summary: string | null
  publishedAt: Date | null
}

/**
 * Model PublicationChapterPage
 * 
 */
export type PublicationChapterPage = {
  pageId: number
  chapterId: number | null
  publicationId: number
  source: string
  content: string | null
}

/**
 * Model PublicationContributor
 * 
 */
export type PublicationContributor = {
  publicationId: number
  userId: number
  /**
   * Example: author, artist, editor, etc:
   */
  role: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<GlobalReject>;

  /**
   * `prisma.threadParticipant`: Exposes CRUD operations for the **ThreadParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThreadParticipants
    * const threadParticipants = await prisma.threadParticipant.findMany()
    * ```
    */
  get threadParticipant(): Prisma.ThreadParticipantDelegate<GlobalReject>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<GlobalReject>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<GlobalReject>;

  /**
   * `prisma.publicationChapter`: Exposes CRUD operations for the **PublicationChapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicationChapters
    * const publicationChapters = await prisma.publicationChapter.findMany()
    * ```
    */
  get publicationChapter(): Prisma.PublicationChapterDelegate<GlobalReject>;

  /**
   * `prisma.publicationChapterPage`: Exposes CRUD operations for the **PublicationChapterPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicationChapterPages
    * const publicationChapterPages = await prisma.publicationChapterPage.findMany()
    * ```
    */
  get publicationChapterPage(): Prisma.PublicationChapterPageDelegate<GlobalReject>;

  /**
   * `prisma.publicationContributor`: Exposes CRUD operations for the **PublicationContributor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicationContributors
    * const publicationContributors = await prisma.publicationContributor.findMany()
    * ```
    */
  get publicationContributor(): Prisma.PublicationContributorDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Thread: 'Thread',
    ThreadParticipant: 'ThreadParticipant',
    File: 'File',
    Publication: 'Publication',
    PublicationChapter: 'PublicationChapter',
    PublicationChapterPage: 'PublicationChapterPage',
    PublicationContributor: 'PublicationContributor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    threadsAuthored: number
    threadsParticipating: number
    publicationsContributed: number
  }

  export type UserCountOutputTypeSelect = {
    threadsAuthored?: boolean
    threadsParticipating?: boolean
    publicationsContributed?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ThreadCountOutputType
   */


  export type ThreadCountOutputType = {
    replies: number
    paricipants: number
    conversation: number
  }

  export type ThreadCountOutputTypeSelect = {
    replies?: boolean
    paricipants?: boolean
    conversation?: boolean
  }

  export type ThreadCountOutputTypeGetPayload<S extends boolean | null | undefined | ThreadCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ThreadCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ThreadCountOutputTypeArgs)
    ? ThreadCountOutputType 
    : S extends { select: any } & (ThreadCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ThreadCountOutputType ? ThreadCountOutputType[P] : never
  } 
      : ThreadCountOutputType




  // Custom InputTypes

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     */
    select?: ThreadCountOutputTypeSelect | null
  }



  /**
   * Count Type PublicationCountOutputType
   */


  export type PublicationCountOutputType = {
    contributors: number
    chapters: number
    pages: number
  }

  export type PublicationCountOutputTypeSelect = {
    contributors?: boolean
    chapters?: boolean
    pages?: boolean
  }

  export type PublicationCountOutputTypeGetPayload<S extends boolean | null | undefined | PublicationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PublicationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PublicationCountOutputTypeArgs)
    ? PublicationCountOutputType 
    : S extends { select: any } & (PublicationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PublicationCountOutputType ? PublicationCountOutputType[P] : never
  } 
      : PublicationCountOutputType




  // Custom InputTypes

  /**
   * PublicationCountOutputType without action
   */
  export type PublicationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PublicationCountOutputType
     */
    select?: PublicationCountOutputTypeSelect | null
  }



  /**
   * Count Type PublicationChapterCountOutputType
   */


  export type PublicationChapterCountOutputType = {
    pages: number
  }

  export type PublicationChapterCountOutputTypeSelect = {
    pages?: boolean
  }

  export type PublicationChapterCountOutputTypeGetPayload<S extends boolean | null | undefined | PublicationChapterCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PublicationChapterCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PublicationChapterCountOutputTypeArgs)
    ? PublicationChapterCountOutputType 
    : S extends { select: any } & (PublicationChapterCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PublicationChapterCountOutputType ? PublicationChapterCountOutputType[P] : never
  } 
      : PublicationChapterCountOutputType




  // Custom InputTypes

  /**
   * PublicationChapterCountOutputType without action
   */
  export type PublicationChapterCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterCountOutputType
     */
    select?: PublicationChapterCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    handle: string | null
    displayName: string | null
    links: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    handle: string | null
    displayName: string | null
    links: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    handle: number
    displayName: number
    links: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    handle?: true
    displayName?: true
    links?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    handle?: true
    displayName?: true
    links?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    handle?: true
    displayName?: true
    links?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    userId: number
    handle: string
    displayName: string | null
    links: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    userId?: boolean
    handle?: boolean
    displayName?: boolean
    links?: boolean
    threadsAuthored?: boolean | User$threadsAuthoredArgs
    threadsParticipating?: boolean | User$threadsParticipatingArgs
    publicationsContributed?: boolean | User$publicationsContributedArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    threadsAuthored?: boolean | User$threadsAuthoredArgs
    threadsParticipating?: boolean | User$threadsParticipatingArgs
    publicationsContributed?: boolean | User$publicationsContributedArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'threadsAuthored' ? Array < ThreadGetPayload<S['include'][P]>>  :
        P extends 'threadsParticipating' ? Array < ThreadParticipantGetPayload<S['include'][P]>>  :
        P extends 'publicationsContributed' ? Array < PublicationContributorGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'threadsAuthored' ? Array < ThreadGetPayload<S['select'][P]>>  :
        P extends 'threadsParticipating' ? Array < ThreadParticipantGetPayload<S['select'][P]>>  :
        P extends 'publicationsContributed' ? Array < PublicationContributorGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    threadsAuthored<T extends User$threadsAuthoredArgs= {}>(args?: Subset<T, User$threadsAuthoredArgs>): PrismaPromise<Array<ThreadGetPayload<T>>| Null>;

    threadsParticipating<T extends User$threadsParticipatingArgs= {}>(args?: Subset<T, User$threadsParticipatingArgs>): PrismaPromise<Array<ThreadParticipantGetPayload<T>>| Null>;

    publicationsContributed<T extends User$publicationsContributedArgs= {}>(args?: Subset<T, User$publicationsContributedArgs>): PrismaPromise<Array<PublicationContributorGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.threadsAuthored
   */
  export type User$threadsAuthoredArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * User.threadsParticipating
   */
  export type User$threadsParticipatingArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    where?: ThreadParticipantWhereInput
    orderBy?: Enumerable<ThreadParticipantOrderByWithRelationInput>
    cursor?: ThreadParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadParticipantScalarFieldEnum>
  }


  /**
   * User.publicationsContributed
   */
  export type User$publicationsContributedArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    where?: PublicationContributorWhereInput
    orderBy?: Enumerable<PublicationContributorOrderByWithRelationInput>
    cursor?: PublicationContributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PublicationContributorScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Thread
   */


  export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null
    _avg: ThreadAvgAggregateOutputType | null
    _sum: ThreadSumAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  export type ThreadAvgAggregateOutputType = {
    threadId: number | null
    parentThreadId: number | null
    rootThreadId: number | null
    numViews: number | null
    numReplies: number | null
    numLikes: number | null
    numDislikes: number | null
    numReactions: number | null
    numInteractions: number | null
    authorId: number | null
  }

  export type ThreadSumAggregateOutputType = {
    threadId: number | null
    parentThreadId: number | null
    rootThreadId: number | null
    numViews: number | null
    numReplies: number | null
    numLikes: number | null
    numDislikes: number | null
    numReactions: number | null
    numInteractions: number | null
    authorId: number | null
  }

  export type ThreadMinAggregateOutputType = {
    threadId: number | null
    source: string | null
    parentThreadId: number | null
    rootThreadId: number | null
    threadOrigin: string | null
    content: string | null
    metadata: string | null
    createdAt: Date | null
    lastUpdatedAt: Date | null
    numViews: number | null
    numReplies: number | null
    numLikes: number | null
    numDislikes: number | null
    numReactions: number | null
    numInteractions: number | null
    authorId: number | null
    isRoot: boolean | null
    isDeleted: boolean | null
    isLocked: boolean | null
  }

  export type ThreadMaxAggregateOutputType = {
    threadId: number | null
    source: string | null
    parentThreadId: number | null
    rootThreadId: number | null
    threadOrigin: string | null
    content: string | null
    metadata: string | null
    createdAt: Date | null
    lastUpdatedAt: Date | null
    numViews: number | null
    numReplies: number | null
    numLikes: number | null
    numDislikes: number | null
    numReactions: number | null
    numInteractions: number | null
    authorId: number | null
    isRoot: boolean | null
    isDeleted: boolean | null
    isLocked: boolean | null
  }

  export type ThreadCountAggregateOutputType = {
    threadId: number
    source: number
    parentThreadId: number
    rootThreadId: number
    threadOrigin: number
    content: number
    metadata: number
    createdAt: number
    lastUpdatedAt: number
    numViews: number
    numReplies: number
    numLikes: number
    numDislikes: number
    numReactions: number
    numInteractions: number
    authorId: number
    isRoot: number
    isDeleted: number
    isLocked: number
    _all: number
  }


  export type ThreadAvgAggregateInputType = {
    threadId?: true
    parentThreadId?: true
    rootThreadId?: true
    numViews?: true
    numReplies?: true
    numLikes?: true
    numDislikes?: true
    numReactions?: true
    numInteractions?: true
    authorId?: true
  }

  export type ThreadSumAggregateInputType = {
    threadId?: true
    parentThreadId?: true
    rootThreadId?: true
    numViews?: true
    numReplies?: true
    numLikes?: true
    numDislikes?: true
    numReactions?: true
    numInteractions?: true
    authorId?: true
  }

  export type ThreadMinAggregateInputType = {
    threadId?: true
    source?: true
    parentThreadId?: true
    rootThreadId?: true
    threadOrigin?: true
    content?: true
    metadata?: true
    createdAt?: true
    lastUpdatedAt?: true
    numViews?: true
    numReplies?: true
    numLikes?: true
    numDislikes?: true
    numReactions?: true
    numInteractions?: true
    authorId?: true
    isRoot?: true
    isDeleted?: true
    isLocked?: true
  }

  export type ThreadMaxAggregateInputType = {
    threadId?: true
    source?: true
    parentThreadId?: true
    rootThreadId?: true
    threadOrigin?: true
    content?: true
    metadata?: true
    createdAt?: true
    lastUpdatedAt?: true
    numViews?: true
    numReplies?: true
    numLikes?: true
    numDislikes?: true
    numReactions?: true
    numInteractions?: true
    authorId?: true
    isRoot?: true
    isDeleted?: true
    isLocked?: true
  }

  export type ThreadCountAggregateInputType = {
    threadId?: true
    source?: true
    parentThreadId?: true
    rootThreadId?: true
    threadOrigin?: true
    content?: true
    metadata?: true
    createdAt?: true
    lastUpdatedAt?: true
    numViews?: true
    numReplies?: true
    numLikes?: true
    numDislikes?: true
    numReactions?: true
    numInteractions?: true
    authorId?: true
    isRoot?: true
    isDeleted?: true
    isLocked?: true
    _all?: true
  }

  export type ThreadAggregateArgs = {
    /**
     * Filter which Thread to aggregate.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Threads
    **/
    _count?: true | ThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThreadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThreadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadMaxAggregateInputType
  }

  export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThread[P]>
      : GetScalarType<T[P], AggregateThread[P]>
  }




  export type ThreadGroupByArgs = {
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithAggregationInput>
    by: ThreadScalarFieldEnum[]
    having?: ThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadCountAggregateInputType | true
    _avg?: ThreadAvgAggregateInputType
    _sum?: ThreadSumAggregateInputType
    _min?: ThreadMinAggregateInputType
    _max?: ThreadMaxAggregateInputType
  }


  export type ThreadGroupByOutputType = {
    threadId: number
    source: string
    parentThreadId: number | null
    rootThreadId: number | null
    threadOrigin: string | null
    content: string | null
    metadata: string
    createdAt: Date
    lastUpdatedAt: Date
    numViews: number
    numReplies: number
    numLikes: number
    numDislikes: number
    numReactions: number
    numInteractions: number
    authorId: number
    isRoot: boolean
    isDeleted: boolean
    isLocked: boolean
    _count: ThreadCountAggregateOutputType | null
    _avg: ThreadAvgAggregateOutputType | null
    _sum: ThreadSumAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect = {
    threadId?: boolean
    source?: boolean
    parentThreadId?: boolean
    rootThreadId?: boolean
    threadOrigin?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    lastUpdatedAt?: boolean
    numViews?: boolean
    numReplies?: boolean
    numLikes?: boolean
    numDislikes?: boolean
    numReactions?: boolean
    numInteractions?: boolean
    authorId?: boolean
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    author?: boolean | UserArgs
    parentThread?: boolean | ThreadArgs
    replies?: boolean | Thread$repliesArgs
    rootThread?: boolean | ThreadArgs
    paricipants?: boolean | Thread$paricipantsArgs
    conversation?: boolean | Thread$conversationArgs
    _count?: boolean | ThreadCountOutputTypeArgs
  }


  export type ThreadInclude = {
    author?: boolean | UserArgs
    parentThread?: boolean | ThreadArgs
    replies?: boolean | Thread$repliesArgs
    rootThread?: boolean | ThreadArgs
    paricipants?: boolean | Thread$paricipantsArgs
    conversation?: boolean | Thread$conversationArgs
    _count?: boolean | ThreadCountOutputTypeArgs
  }

  export type ThreadGetPayload<S extends boolean | null | undefined | ThreadArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Thread :
    S extends undefined ? never :
    S extends { include: any } & (ThreadArgs | ThreadFindManyArgs)
    ? Thread  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'parentThread' ? ThreadGetPayload<S['include'][P]> | null :
        P extends 'replies' ? Array < ThreadGetPayload<S['include'][P]>>  :
        P extends 'rootThread' ? ThreadGetPayload<S['include'][P]> | null :
        P extends 'paricipants' ? Array < ThreadParticipantGetPayload<S['include'][P]>>  :
        P extends 'conversation' ? Array < ThreadGetPayload<S['include'][P]>>  :
        P extends '_count' ? ThreadCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ThreadArgs | ThreadFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'parentThread' ? ThreadGetPayload<S['select'][P]> | null :
        P extends 'replies' ? Array < ThreadGetPayload<S['select'][P]>>  :
        P extends 'rootThread' ? ThreadGetPayload<S['select'][P]> | null :
        P extends 'paricipants' ? Array < ThreadParticipantGetPayload<S['select'][P]>>  :
        P extends 'conversation' ? Array < ThreadGetPayload<S['select'][P]>>  :
        P extends '_count' ? ThreadCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Thread ? Thread[P] : never
  } 
      : Thread


  type ThreadCountArgs = 
    Omit<ThreadFindManyArgs, 'select' | 'include'> & {
      select?: ThreadCountAggregateInputType | true
    }

  export interface ThreadDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Thread that matches the filter.
     * @param {ThreadFindUniqueArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThreadFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ThreadFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Thread'> extends True ? Prisma__ThreadClient<ThreadGetPayload<T>> : Prisma__ThreadClient<ThreadGetPayload<T> | null, null>

    /**
     * Find one Thread that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThreadFindUniqueOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ThreadFindUniqueOrThrowArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Find the first Thread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThreadFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ThreadFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Thread'> extends True ? Prisma__ThreadClient<ThreadGetPayload<T>> : Prisma__ThreadClient<ThreadGetPayload<T> | null, null>

    /**
     * Find the first Thread that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ThreadFindFirstOrThrowArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Find zero or more Threads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threads
     * const threads = await prisma.thread.findMany()
     * 
     * // Get first 10 Threads
     * const threads = await prisma.thread.findMany({ take: 10 })
     * 
     * // Only select the `threadId`
     * const threadWithThreadIdOnly = await prisma.thread.findMany({ select: { threadId: true } })
     * 
    **/
    findMany<T extends ThreadFindManyArgs>(
      args?: SelectSubset<T, ThreadFindManyArgs>
    ): PrismaPromise<Array<ThreadGetPayload<T>>>

    /**
     * Create a Thread.
     * @param {ThreadCreateArgs} args - Arguments to create a Thread.
     * @example
     * // Create one Thread
     * const Thread = await prisma.thread.create({
     *   data: {
     *     // ... data to create a Thread
     *   }
     * })
     * 
    **/
    create<T extends ThreadCreateArgs>(
      args: SelectSubset<T, ThreadCreateArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Delete a Thread.
     * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
     * @example
     * // Delete one Thread
     * const Thread = await prisma.thread.delete({
     *   where: {
     *     // ... filter to delete one Thread
     *   }
     * })
     * 
    **/
    delete<T extends ThreadDeleteArgs>(
      args: SelectSubset<T, ThreadDeleteArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Update one Thread.
     * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
     * @example
     * // Update one Thread
     * const thread = await prisma.thread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThreadUpdateArgs>(
      args: SelectSubset<T, ThreadUpdateArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Delete zero or more Threads.
     * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
     * @example
     * // Delete a few Threads
     * const { count } = await prisma.thread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThreadDeleteManyArgs>(
      args?: SelectSubset<T, ThreadDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThreadUpdateManyArgs>(
      args: SelectSubset<T, ThreadUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Thread.
     * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
     * @example
     * // Update or create a Thread
     * const thread = await prisma.thread.upsert({
     *   create: {
     *     // ... data to create a Thread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thread we want to update
     *   }
     * })
    **/
    upsert<T extends ThreadUpsertArgs>(
      args: SelectSubset<T, ThreadUpsertArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Count the number of Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadCountArgs} args - Arguments to filter Threads to count.
     * @example
     * // Count the number of Threads
     * const count = await prisma.thread.count({
     *   where: {
     *     // ... the filter for the Threads we want to count
     *   }
     * })
    **/
    count<T extends ThreadCountArgs>(
      args?: Subset<T, ThreadCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadAggregateArgs>(args: Subset<T, ThreadAggregateArgs>): PrismaPromise<GetThreadAggregateType<T>>

    /**
     * Group by Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadGroupByArgs['orderBy'] }
        : { orderBy?: ThreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ThreadClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    parentThread<T extends ThreadArgs= {}>(args?: Subset<T, ThreadArgs>): Prisma__ThreadClient<ThreadGetPayload<T> | Null>;

    replies<T extends Thread$repliesArgs= {}>(args?: Subset<T, Thread$repliesArgs>): PrismaPromise<Array<ThreadGetPayload<T>>| Null>;

    rootThread<T extends ThreadArgs= {}>(args?: Subset<T, ThreadArgs>): Prisma__ThreadClient<ThreadGetPayload<T> | Null>;

    paricipants<T extends Thread$paricipantsArgs= {}>(args?: Subset<T, Thread$paricipantsArgs>): PrismaPromise<Array<ThreadParticipantGetPayload<T>>| Null>;

    conversation<T extends Thread$conversationArgs= {}>(args?: Subset<T, Thread$conversationArgs>): PrismaPromise<Array<ThreadGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Thread base type for findUnique actions
   */
  export type ThreadFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findUnique
   */
  export interface ThreadFindUniqueArgs extends ThreadFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread base type for findFirst actions
   */
  export type ThreadFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }

  /**
   * Thread findFirst
   */
  export interface ThreadFindFirstArgs extends ThreadFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * Filter, which Threads to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread create
   */
  export type ThreadCreateArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * The data needed to create a Thread.
     */
    data: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
  }


  /**
   * Thread update
   */
  export type ThreadUpdateArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * The data needed to update a Thread.
     */
    data: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
    /**
     * Choose, which Thread to update.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread updateMany
   */
  export type ThreadUpdateManyArgs = {
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
  }


  /**
   * Thread upsert
   */
  export type ThreadUpsertArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * The filter to search for the Thread to update in case it exists.
     */
    where: ThreadWhereUniqueInput
    /**
     * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
     */
    create: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
    /**
     * In case the Thread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
  }


  /**
   * Thread delete
   */
  export type ThreadDeleteArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    /**
     * Filter which Thread to delete.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread deleteMany
   */
  export type ThreadDeleteManyArgs = {
    /**
     * Filter which Threads to delete
     */
    where?: ThreadWhereInput
  }


  /**
   * Thread.replies
   */
  export type Thread$repliesArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread.paricipants
   */
  export type Thread$paricipantsArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    where?: ThreadParticipantWhereInput
    orderBy?: Enumerable<ThreadParticipantOrderByWithRelationInput>
    cursor?: ThreadParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadParticipantScalarFieldEnum>
  }


  /**
   * Thread.conversation
   */
  export type Thread$conversationArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread without action
   */
  export type ThreadArgs = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude | null
  }



  /**
   * Model ThreadParticipant
   */


  export type AggregateThreadParticipant = {
    _count: ThreadParticipantCountAggregateOutputType | null
    _avg: ThreadParticipantAvgAggregateOutputType | null
    _sum: ThreadParticipantSumAggregateOutputType | null
    _min: ThreadParticipantMinAggregateOutputType | null
    _max: ThreadParticipantMaxAggregateOutputType | null
  }

  export type ThreadParticipantAvgAggregateOutputType = {
    threadId: number | null
    userId: number | null
  }

  export type ThreadParticipantSumAggregateOutputType = {
    threadId: number | null
    userId: number | null
  }

  export type ThreadParticipantMinAggregateOutputType = {
    threadId: number | null
    userId: number | null
  }

  export type ThreadParticipantMaxAggregateOutputType = {
    threadId: number | null
    userId: number | null
  }

  export type ThreadParticipantCountAggregateOutputType = {
    threadId: number
    userId: number
    _all: number
  }


  export type ThreadParticipantAvgAggregateInputType = {
    threadId?: true
    userId?: true
  }

  export type ThreadParticipantSumAggregateInputType = {
    threadId?: true
    userId?: true
  }

  export type ThreadParticipantMinAggregateInputType = {
    threadId?: true
    userId?: true
  }

  export type ThreadParticipantMaxAggregateInputType = {
    threadId?: true
    userId?: true
  }

  export type ThreadParticipantCountAggregateInputType = {
    threadId?: true
    userId?: true
    _all?: true
  }

  export type ThreadParticipantAggregateArgs = {
    /**
     * Filter which ThreadParticipant to aggregate.
     */
    where?: ThreadParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadParticipants to fetch.
     */
    orderBy?: Enumerable<ThreadParticipantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ThreadParticipants
    **/
    _count?: true | ThreadParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThreadParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThreadParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadParticipantMaxAggregateInputType
  }

  export type GetThreadParticipantAggregateType<T extends ThreadParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateThreadParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThreadParticipant[P]>
      : GetScalarType<T[P], AggregateThreadParticipant[P]>
  }




  export type ThreadParticipantGroupByArgs = {
    where?: ThreadParticipantWhereInput
    orderBy?: Enumerable<ThreadParticipantOrderByWithAggregationInput>
    by: ThreadParticipantScalarFieldEnum[]
    having?: ThreadParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadParticipantCountAggregateInputType | true
    _avg?: ThreadParticipantAvgAggregateInputType
    _sum?: ThreadParticipantSumAggregateInputType
    _min?: ThreadParticipantMinAggregateInputType
    _max?: ThreadParticipantMaxAggregateInputType
  }


  export type ThreadParticipantGroupByOutputType = {
    threadId: number
    userId: number
    _count: ThreadParticipantCountAggregateOutputType | null
    _avg: ThreadParticipantAvgAggregateOutputType | null
    _sum: ThreadParticipantSumAggregateOutputType | null
    _min: ThreadParticipantMinAggregateOutputType | null
    _max: ThreadParticipantMaxAggregateOutputType | null
  }

  type GetThreadParticipantGroupByPayload<T extends ThreadParticipantGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ThreadParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ThreadParticipantSelect = {
    threadId?: boolean
    userId?: boolean
    thread?: boolean | ThreadArgs
    user?: boolean | UserArgs
  }


  export type ThreadParticipantInclude = {
    thread?: boolean | ThreadArgs
    user?: boolean | UserArgs
  }

  export type ThreadParticipantGetPayload<S extends boolean | null | undefined | ThreadParticipantArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ThreadParticipant :
    S extends undefined ? never :
    S extends { include: any } & (ThreadParticipantArgs | ThreadParticipantFindManyArgs)
    ? ThreadParticipant  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'thread' ? ThreadGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ThreadParticipantArgs | ThreadParticipantFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'thread' ? ThreadGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof ThreadParticipant ? ThreadParticipant[P] : never
  } 
      : ThreadParticipant


  type ThreadParticipantCountArgs = 
    Omit<ThreadParticipantFindManyArgs, 'select' | 'include'> & {
      select?: ThreadParticipantCountAggregateInputType | true
    }

  export interface ThreadParticipantDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ThreadParticipant that matches the filter.
     * @param {ThreadParticipantFindUniqueArgs} args - Arguments to find a ThreadParticipant
     * @example
     * // Get one ThreadParticipant
     * const threadParticipant = await prisma.threadParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThreadParticipantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ThreadParticipantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ThreadParticipant'> extends True ? Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T>> : Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T> | null, null>

    /**
     * Find one ThreadParticipant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThreadParticipantFindUniqueOrThrowArgs} args - Arguments to find a ThreadParticipant
     * @example
     * // Get one ThreadParticipant
     * const threadParticipant = await prisma.threadParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThreadParticipantFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ThreadParticipantFindUniqueOrThrowArgs>
    ): Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T>>

    /**
     * Find the first ThreadParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadParticipantFindFirstArgs} args - Arguments to find a ThreadParticipant
     * @example
     * // Get one ThreadParticipant
     * const threadParticipant = await prisma.threadParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThreadParticipantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ThreadParticipantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ThreadParticipant'> extends True ? Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T>> : Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T> | null, null>

    /**
     * Find the first ThreadParticipant that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadParticipantFindFirstOrThrowArgs} args - Arguments to find a ThreadParticipant
     * @example
     * // Get one ThreadParticipant
     * const threadParticipant = await prisma.threadParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThreadParticipantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ThreadParticipantFindFirstOrThrowArgs>
    ): Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T>>

    /**
     * Find zero or more ThreadParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadParticipantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThreadParticipants
     * const threadParticipants = await prisma.threadParticipant.findMany()
     * 
     * // Get first 10 ThreadParticipants
     * const threadParticipants = await prisma.threadParticipant.findMany({ take: 10 })
     * 
     * // Only select the `threadId`
     * const threadParticipantWithThreadIdOnly = await prisma.threadParticipant.findMany({ select: { threadId: true } })
     * 
    **/
    findMany<T extends ThreadParticipantFindManyArgs>(
      args?: SelectSubset<T, ThreadParticipantFindManyArgs>
    ): PrismaPromise<Array<ThreadParticipantGetPayload<T>>>

    /**
     * Create a ThreadParticipant.
     * @param {ThreadParticipantCreateArgs} args - Arguments to create a ThreadParticipant.
     * @example
     * // Create one ThreadParticipant
     * const ThreadParticipant = await prisma.threadParticipant.create({
     *   data: {
     *     // ... data to create a ThreadParticipant
     *   }
     * })
     * 
    **/
    create<T extends ThreadParticipantCreateArgs>(
      args: SelectSubset<T, ThreadParticipantCreateArgs>
    ): Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T>>

    /**
     * Delete a ThreadParticipant.
     * @param {ThreadParticipantDeleteArgs} args - Arguments to delete one ThreadParticipant.
     * @example
     * // Delete one ThreadParticipant
     * const ThreadParticipant = await prisma.threadParticipant.delete({
     *   where: {
     *     // ... filter to delete one ThreadParticipant
     *   }
     * })
     * 
    **/
    delete<T extends ThreadParticipantDeleteArgs>(
      args: SelectSubset<T, ThreadParticipantDeleteArgs>
    ): Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T>>

    /**
     * Update one ThreadParticipant.
     * @param {ThreadParticipantUpdateArgs} args - Arguments to update one ThreadParticipant.
     * @example
     * // Update one ThreadParticipant
     * const threadParticipant = await prisma.threadParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThreadParticipantUpdateArgs>(
      args: SelectSubset<T, ThreadParticipantUpdateArgs>
    ): Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T>>

    /**
     * Delete zero or more ThreadParticipants.
     * @param {ThreadParticipantDeleteManyArgs} args - Arguments to filter ThreadParticipants to delete.
     * @example
     * // Delete a few ThreadParticipants
     * const { count } = await prisma.threadParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThreadParticipantDeleteManyArgs>(
      args?: SelectSubset<T, ThreadParticipantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThreadParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThreadParticipants
     * const threadParticipant = await prisma.threadParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThreadParticipantUpdateManyArgs>(
      args: SelectSubset<T, ThreadParticipantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ThreadParticipant.
     * @param {ThreadParticipantUpsertArgs} args - Arguments to update or create a ThreadParticipant.
     * @example
     * // Update or create a ThreadParticipant
     * const threadParticipant = await prisma.threadParticipant.upsert({
     *   create: {
     *     // ... data to create a ThreadParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThreadParticipant we want to update
     *   }
     * })
    **/
    upsert<T extends ThreadParticipantUpsertArgs>(
      args: SelectSubset<T, ThreadParticipantUpsertArgs>
    ): Prisma__ThreadParticipantClient<ThreadParticipantGetPayload<T>>

    /**
     * Count the number of ThreadParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadParticipantCountArgs} args - Arguments to filter ThreadParticipants to count.
     * @example
     * // Count the number of ThreadParticipants
     * const count = await prisma.threadParticipant.count({
     *   where: {
     *     // ... the filter for the ThreadParticipants we want to count
     *   }
     * })
    **/
    count<T extends ThreadParticipantCountArgs>(
      args?: Subset<T, ThreadParticipantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThreadParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadParticipantAggregateArgs>(args: Subset<T, ThreadParticipantAggregateArgs>): PrismaPromise<GetThreadParticipantAggregateType<T>>

    /**
     * Group by ThreadParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ThreadParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadParticipantGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ThreadParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ThreadParticipantClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    thread<T extends ThreadArgs= {}>(args?: Subset<T, ThreadArgs>): Prisma__ThreadClient<ThreadGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ThreadParticipant base type for findUnique actions
   */
  export type ThreadParticipantFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * Filter, which ThreadParticipant to fetch.
     */
    where: ThreadParticipantWhereUniqueInput
  }

  /**
   * ThreadParticipant findUnique
   */
  export interface ThreadParticipantFindUniqueArgs extends ThreadParticipantFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ThreadParticipant findUniqueOrThrow
   */
  export type ThreadParticipantFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * Filter, which ThreadParticipant to fetch.
     */
    where: ThreadParticipantWhereUniqueInput
  }


  /**
   * ThreadParticipant base type for findFirst actions
   */
  export type ThreadParticipantFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * Filter, which ThreadParticipant to fetch.
     */
    where?: ThreadParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadParticipants to fetch.
     */
    orderBy?: Enumerable<ThreadParticipantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThreadParticipants.
     */
    cursor?: ThreadParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThreadParticipants.
     */
    distinct?: Enumerable<ThreadParticipantScalarFieldEnum>
  }

  /**
   * ThreadParticipant findFirst
   */
  export interface ThreadParticipantFindFirstArgs extends ThreadParticipantFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ThreadParticipant findFirstOrThrow
   */
  export type ThreadParticipantFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * Filter, which ThreadParticipant to fetch.
     */
    where?: ThreadParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadParticipants to fetch.
     */
    orderBy?: Enumerable<ThreadParticipantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThreadParticipants.
     */
    cursor?: ThreadParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThreadParticipants.
     */
    distinct?: Enumerable<ThreadParticipantScalarFieldEnum>
  }


  /**
   * ThreadParticipant findMany
   */
  export type ThreadParticipantFindManyArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * Filter, which ThreadParticipants to fetch.
     */
    where?: ThreadParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadParticipants to fetch.
     */
    orderBy?: Enumerable<ThreadParticipantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ThreadParticipants.
     */
    cursor?: ThreadParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadParticipants.
     */
    skip?: number
    distinct?: Enumerable<ThreadParticipantScalarFieldEnum>
  }


  /**
   * ThreadParticipant create
   */
  export type ThreadParticipantCreateArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * The data needed to create a ThreadParticipant.
     */
    data: XOR<ThreadParticipantCreateInput, ThreadParticipantUncheckedCreateInput>
  }


  /**
   * ThreadParticipant update
   */
  export type ThreadParticipantUpdateArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * The data needed to update a ThreadParticipant.
     */
    data: XOR<ThreadParticipantUpdateInput, ThreadParticipantUncheckedUpdateInput>
    /**
     * Choose, which ThreadParticipant to update.
     */
    where: ThreadParticipantWhereUniqueInput
  }


  /**
   * ThreadParticipant updateMany
   */
  export type ThreadParticipantUpdateManyArgs = {
    /**
     * The data used to update ThreadParticipants.
     */
    data: XOR<ThreadParticipantUpdateManyMutationInput, ThreadParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ThreadParticipants to update
     */
    where?: ThreadParticipantWhereInput
  }


  /**
   * ThreadParticipant upsert
   */
  export type ThreadParticipantUpsertArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * The filter to search for the ThreadParticipant to update in case it exists.
     */
    where: ThreadParticipantWhereUniqueInput
    /**
     * In case the ThreadParticipant found by the `where` argument doesn't exist, create a new ThreadParticipant with this data.
     */
    create: XOR<ThreadParticipantCreateInput, ThreadParticipantUncheckedCreateInput>
    /**
     * In case the ThreadParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadParticipantUpdateInput, ThreadParticipantUncheckedUpdateInput>
  }


  /**
   * ThreadParticipant delete
   */
  export type ThreadParticipantDeleteArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
    /**
     * Filter which ThreadParticipant to delete.
     */
    where: ThreadParticipantWhereUniqueInput
  }


  /**
   * ThreadParticipant deleteMany
   */
  export type ThreadParticipantDeleteManyArgs = {
    /**
     * Filter which ThreadParticipants to delete
     */
    where?: ThreadParticipantWhereInput
  }


  /**
   * ThreadParticipant without action
   */
  export type ThreadParticipantArgs = {
    /**
     * Select specific fields to fetch from the ThreadParticipant
     */
    select?: ThreadParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadParticipantInclude | null
  }



  /**
   * Model File
   */


  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    fileId: number | null
  }

  export type FileSumAggregateOutputType = {
    fileId: number | null
  }

  export type FileMinAggregateOutputType = {
    fileId: number | null
    source: string | null
    type: string | null
    destination: string | null
    name: string | null
    description: string | null
    mime: string | null
    tags: string | null
    metadata: string | null
    params: string | null
    createdAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    fileId: number | null
    source: string | null
    type: string | null
    destination: string | null
    name: string | null
    description: string | null
    mime: string | null
    tags: string | null
    metadata: string | null
    params: string | null
    createdAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    fileId: number
    source: number
    type: number
    destination: number
    name: number
    description: number
    mime: number
    tags: number
    metadata: number
    params: number
    createdAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    fileId?: true
  }

  export type FileSumAggregateInputType = {
    fileId?: true
  }

  export type FileMinAggregateInputType = {
    fileId?: true
    source?: true
    type?: true
    destination?: true
    name?: true
    description?: true
    mime?: true
    tags?: true
    metadata?: true
    params?: true
    createdAt?: true
  }

  export type FileMaxAggregateInputType = {
    fileId?: true
    source?: true
    type?: true
    destination?: true
    name?: true
    description?: true
    mime?: true
    tags?: true
    metadata?: true
    params?: true
    createdAt?: true
  }

  export type FileCountAggregateInputType = {
    fileId?: true
    source?: true
    type?: true
    destination?: true
    name?: true
    description?: true
    mime?: true
    tags?: true
    metadata?: true
    params?: true
    createdAt?: true
    _all?: true
  }

  export type FileAggregateArgs = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs = {
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithAggregationInput>
    by: FileScalarFieldEnum[]
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }


  export type FileGroupByOutputType = {
    fileId: number
    source: string
    type: string
    destination: string
    name: string
    description: string | null
    mime: string
    tags: string
    metadata: string
    params: string
    createdAt: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect = {
    fileId?: boolean
    source?: boolean
    type?: boolean
    destination?: boolean
    name?: boolean
    description?: boolean
    mime?: boolean
    tags?: boolean
    metadata?: boolean
    params?: boolean
    createdAt?: boolean
  }


  export type FileGetPayload<S extends boolean | null | undefined | FileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? File :
    S extends undefined ? never :
    S extends { include: any } & (FileArgs | FileFindManyArgs)
    ? File 
    : S extends { select: any } & (FileArgs | FileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof File ? File[P] : never
  } 
      : File


  type FileCountArgs = 
    Omit<FileFindManyArgs, 'select' | 'include'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'File'> extends True ? Prisma__FileClient<FileGetPayload<T>> : Prisma__FileClient<FileGetPayload<T> | null, null>

    /**
     * Find one File that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FileFindUniqueOrThrowArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'File'> extends True ? Prisma__FileClient<FileGetPayload<T>> : Prisma__FileClient<FileGetPayload<T> | null, null>

    /**
     * Find the first File that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FileFindFirstOrThrowArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const fileWithFileIdOnly = await prisma.file.findMany({ select: { fileId: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs>(
      args?: SelectSubset<T, FileFindManyArgs>
    ): PrismaPromise<Array<FileGetPayload<T>>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs>(
      args: SelectSubset<T, FileCreateArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs>(
      args: SelectSubset<T, FileDeleteArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs>(
      args: SelectSubset<T, FileUpdateArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs>(
      args?: SelectSubset<T, FileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs>(
      args: SelectSubset<T, FileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs>(
      args: SelectSubset<T, FileUpsertArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FileClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * File base type for findUnique actions
   */
  export type FileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUnique
   */
  export interface FileFindUniqueArgs extends FileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File base type for findFirst actions
   */
  export type FileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: Enumerable<FileScalarFieldEnum>
  }

  /**
   * File findFirst
   */
  export interface FileFindFirstArgs extends FileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File create
   */
  export type FileCreateArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File update
   */
  export type FileUpdateArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }


  /**
   * File without action
   */
  export type FileArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
  }



  /**
   * Model Publication
   */


  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationAvgAggregateOutputType = {
    publicationId: number | null
  }

  export type PublicationSumAggregateOutputType = {
    publicationId: number | null
  }

  export type PublicationMinAggregateOutputType = {
    publicationId: number | null
    source: string | null
    name: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type PublicationMaxAggregateOutputType = {
    publicationId: number | null
    source: string | null
    name: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type PublicationCountAggregateOutputType = {
    publicationId: number
    source: number
    name: number
    summary: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type PublicationAvgAggregateInputType = {
    publicationId?: true
  }

  export type PublicationSumAggregateInputType = {
    publicationId?: true
  }

  export type PublicationMinAggregateInputType = {
    publicationId?: true
    source?: true
    name?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type PublicationMaxAggregateInputType = {
    publicationId?: true
    source?: true
    name?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type PublicationCountAggregateInputType = {
    publicationId?: true
    source?: true
    name?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type PublicationAggregateArgs = {
    /**
     * Filter which Publication to aggregate.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: Enumerable<PublicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs = {
    where?: PublicationWhereInput
    orderBy?: Enumerable<PublicationOrderByWithAggregationInput>
    by: PublicationScalarFieldEnum[]
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _avg?: PublicationAvgAggregateInputType
    _sum?: PublicationSumAggregateInputType
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }


  export type PublicationGroupByOutputType = {
    publicationId: number
    source: string
    name: string
    summary: string | null
    createdAt: Date
    updatedAt: Date
    status: string
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect = {
    publicationId?: boolean
    source?: boolean
    name?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    contributors?: boolean | Publication$contributorsArgs
    chapters?: boolean | Publication$chaptersArgs
    pages?: boolean | Publication$pagesArgs
    _count?: boolean | PublicationCountOutputTypeArgs
  }


  export type PublicationInclude = {
    contributors?: boolean | Publication$contributorsArgs
    chapters?: boolean | Publication$chaptersArgs
    pages?: boolean | Publication$pagesArgs
    _count?: boolean | PublicationCountOutputTypeArgs
  }

  export type PublicationGetPayload<S extends boolean | null | undefined | PublicationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Publication :
    S extends undefined ? never :
    S extends { include: any } & (PublicationArgs | PublicationFindManyArgs)
    ? Publication  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'contributors' ? Array < PublicationContributorGetPayload<S['include'][P]>>  :
        P extends 'chapters' ? Array < PublicationChapterGetPayload<S['include'][P]>>  :
        P extends 'pages' ? Array < PublicationChapterPageGetPayload<S['include'][P]>>  :
        P extends '_count' ? PublicationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PublicationArgs | PublicationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'contributors' ? Array < PublicationContributorGetPayload<S['select'][P]>>  :
        P extends 'chapters' ? Array < PublicationChapterGetPayload<S['select'][P]>>  :
        P extends 'pages' ? Array < PublicationChapterPageGetPayload<S['select'][P]>>  :
        P extends '_count' ? PublicationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Publication ? Publication[P] : never
  } 
      : Publication


  type PublicationCountArgs = 
    Omit<PublicationFindManyArgs, 'select' | 'include'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface PublicationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublicationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Publication'> extends True ? Prisma__PublicationClient<PublicationGetPayload<T>> : Prisma__PublicationClient<PublicationGetPayload<T> | null, null>

    /**
     * Find one Publication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PublicationFindUniqueOrThrowArgs>
    ): Prisma__PublicationClient<PublicationGetPayload<T>>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublicationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Publication'> extends True ? Prisma__PublicationClient<PublicationGetPayload<T>> : Prisma__PublicationClient<PublicationGetPayload<T> | null, null>

    /**
     * Find the first Publication that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PublicationFindFirstOrThrowArgs>
    ): Prisma__PublicationClient<PublicationGetPayload<T>>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `publicationId`
     * const publicationWithPublicationIdOnly = await prisma.publication.findMany({ select: { publicationId: true } })
     * 
    **/
    findMany<T extends PublicationFindManyArgs>(
      args?: SelectSubset<T, PublicationFindManyArgs>
    ): PrismaPromise<Array<PublicationGetPayload<T>>>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
    **/
    create<T extends PublicationCreateArgs>(
      args: SelectSubset<T, PublicationCreateArgs>
    ): Prisma__PublicationClient<PublicationGetPayload<T>>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
    **/
    delete<T extends PublicationDeleteArgs>(
      args: SelectSubset<T, PublicationDeleteArgs>
    ): Prisma__PublicationClient<PublicationGetPayload<T>>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicationUpdateArgs>(
      args: SelectSubset<T, PublicationUpdateArgs>
    ): Prisma__PublicationClient<PublicationGetPayload<T>>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicationDeleteManyArgs>(
      args?: SelectSubset<T, PublicationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicationUpdateManyArgs>(
      args: SelectSubset<T, PublicationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
    **/
    upsert<T extends PublicationUpsertArgs>(
      args: SelectSubset<T, PublicationUpsertArgs>
    ): Prisma__PublicationClient<PublicationGetPayload<T>>

    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublicationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    contributors<T extends Publication$contributorsArgs= {}>(args?: Subset<T, Publication$contributorsArgs>): PrismaPromise<Array<PublicationContributorGetPayload<T>>| Null>;

    chapters<T extends Publication$chaptersArgs= {}>(args?: Subset<T, Publication$chaptersArgs>): PrismaPromise<Array<PublicationChapterGetPayload<T>>| Null>;

    pages<T extends Publication$pagesArgs= {}>(args?: Subset<T, Publication$pagesArgs>): PrismaPromise<Array<PublicationChapterPageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Publication base type for findUnique actions
   */
  export type PublicationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findUnique
   */
  export interface PublicationFindUniqueArgs extends PublicationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Publication findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }


  /**
   * Publication base type for findFirst actions
   */
  export type PublicationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: Enumerable<PublicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: Enumerable<PublicationScalarFieldEnum>
  }

  /**
   * Publication findFirst
   */
  export interface PublicationFindFirstArgs extends PublicationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Publication findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: Enumerable<PublicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: Enumerable<PublicationScalarFieldEnum>
  }


  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * Filter, which Publications to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: Enumerable<PublicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    distinct?: Enumerable<PublicationScalarFieldEnum>
  }


  /**
   * Publication create
   */
  export type PublicationCreateArgs = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * The data needed to create a Publication.
     */
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }


  /**
   * Publication update
   */
  export type PublicationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * The data needed to update a Publication.
     */
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     */
    where: PublicationWhereUniqueInput
  }


  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs = {
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
  }


  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * The filter to search for the Publication to update in case it exists.
     */
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     */
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }


  /**
   * Publication delete
   */
  export type PublicationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
    /**
     * Filter which Publication to delete.
     */
    where: PublicationWhereUniqueInput
  }


  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs = {
    /**
     * Filter which Publications to delete
     */
    where?: PublicationWhereInput
  }


  /**
   * Publication.contributors
   */
  export type Publication$contributorsArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    where?: PublicationContributorWhereInput
    orderBy?: Enumerable<PublicationContributorOrderByWithRelationInput>
    cursor?: PublicationContributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PublicationContributorScalarFieldEnum>
  }


  /**
   * Publication.chapters
   */
  export type Publication$chaptersArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    where?: PublicationChapterWhereInput
    orderBy?: Enumerable<PublicationChapterOrderByWithRelationInput>
    cursor?: PublicationChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PublicationChapterScalarFieldEnum>
  }


  /**
   * Publication.pages
   */
  export type Publication$pagesArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    where?: PublicationChapterPageWhereInput
    orderBy?: Enumerable<PublicationChapterPageOrderByWithRelationInput>
    cursor?: PublicationChapterPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PublicationChapterPageScalarFieldEnum>
  }


  /**
   * Publication without action
   */
  export type PublicationArgs = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationInclude | null
  }



  /**
   * Model PublicationChapter
   */


  export type AggregatePublicationChapter = {
    _count: PublicationChapterCountAggregateOutputType | null
    _avg: PublicationChapterAvgAggregateOutputType | null
    _sum: PublicationChapterSumAggregateOutputType | null
    _min: PublicationChapterMinAggregateOutputType | null
    _max: PublicationChapterMaxAggregateOutputType | null
  }

  export type PublicationChapterAvgAggregateOutputType = {
    chapterId: number | null
    publicationId: number | null
  }

  export type PublicationChapterSumAggregateOutputType = {
    chapterId: number | null
    publicationId: number | null
  }

  export type PublicationChapterMinAggregateOutputType = {
    chapterId: number | null
    publicationId: number | null
    source: string | null
    title: string | null
    summary: string | null
    publishedAt: Date | null
  }

  export type PublicationChapterMaxAggregateOutputType = {
    chapterId: number | null
    publicationId: number | null
    source: string | null
    title: string | null
    summary: string | null
    publishedAt: Date | null
  }

  export type PublicationChapterCountAggregateOutputType = {
    chapterId: number
    publicationId: number
    source: number
    title: number
    summary: number
    publishedAt: number
    _all: number
  }


  export type PublicationChapterAvgAggregateInputType = {
    chapterId?: true
    publicationId?: true
  }

  export type PublicationChapterSumAggregateInputType = {
    chapterId?: true
    publicationId?: true
  }

  export type PublicationChapterMinAggregateInputType = {
    chapterId?: true
    publicationId?: true
    source?: true
    title?: true
    summary?: true
    publishedAt?: true
  }

  export type PublicationChapterMaxAggregateInputType = {
    chapterId?: true
    publicationId?: true
    source?: true
    title?: true
    summary?: true
    publishedAt?: true
  }

  export type PublicationChapterCountAggregateInputType = {
    chapterId?: true
    publicationId?: true
    source?: true
    title?: true
    summary?: true
    publishedAt?: true
    _all?: true
  }

  export type PublicationChapterAggregateArgs = {
    /**
     * Filter which PublicationChapter to aggregate.
     */
    where?: PublicationChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationChapters to fetch.
     */
    orderBy?: Enumerable<PublicationChapterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicationChapters
    **/
    _count?: true | PublicationChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationChapterMaxAggregateInputType
  }

  export type GetPublicationChapterAggregateType<T extends PublicationChapterAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicationChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicationChapter[P]>
      : GetScalarType<T[P], AggregatePublicationChapter[P]>
  }




  export type PublicationChapterGroupByArgs = {
    where?: PublicationChapterWhereInput
    orderBy?: Enumerable<PublicationChapterOrderByWithAggregationInput>
    by: PublicationChapterScalarFieldEnum[]
    having?: PublicationChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationChapterCountAggregateInputType | true
    _avg?: PublicationChapterAvgAggregateInputType
    _sum?: PublicationChapterSumAggregateInputType
    _min?: PublicationChapterMinAggregateInputType
    _max?: PublicationChapterMaxAggregateInputType
  }


  export type PublicationChapterGroupByOutputType = {
    chapterId: number
    publicationId: number
    source: string
    title: string
    summary: string | null
    publishedAt: Date | null
    _count: PublicationChapterCountAggregateOutputType | null
    _avg: PublicationChapterAvgAggregateOutputType | null
    _sum: PublicationChapterSumAggregateOutputType | null
    _min: PublicationChapterMinAggregateOutputType | null
    _max: PublicationChapterMaxAggregateOutputType | null
  }

  type GetPublicationChapterGroupByPayload<T extends PublicationChapterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PublicationChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationChapterGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationChapterGroupByOutputType[P]>
        }
      >
    >


  export type PublicationChapterSelect = {
    chapterId?: boolean
    publicationId?: boolean
    source?: boolean
    title?: boolean
    summary?: boolean
    publishedAt?: boolean
    publication?: boolean | PublicationArgs
    pages?: boolean | PublicationChapter$pagesArgs
    _count?: boolean | PublicationChapterCountOutputTypeArgs
  }


  export type PublicationChapterInclude = {
    publication?: boolean | PublicationArgs
    pages?: boolean | PublicationChapter$pagesArgs
    _count?: boolean | PublicationChapterCountOutputTypeArgs
  }

  export type PublicationChapterGetPayload<S extends boolean | null | undefined | PublicationChapterArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PublicationChapter :
    S extends undefined ? never :
    S extends { include: any } & (PublicationChapterArgs | PublicationChapterFindManyArgs)
    ? PublicationChapter  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'publication' ? PublicationGetPayload<S['include'][P]> :
        P extends 'pages' ? Array < PublicationChapterPageGetPayload<S['include'][P]>>  :
        P extends '_count' ? PublicationChapterCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PublicationChapterArgs | PublicationChapterFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'publication' ? PublicationGetPayload<S['select'][P]> :
        P extends 'pages' ? Array < PublicationChapterPageGetPayload<S['select'][P]>>  :
        P extends '_count' ? PublicationChapterCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PublicationChapter ? PublicationChapter[P] : never
  } 
      : PublicationChapter


  type PublicationChapterCountArgs = 
    Omit<PublicationChapterFindManyArgs, 'select' | 'include'> & {
      select?: PublicationChapterCountAggregateInputType | true
    }

  export interface PublicationChapterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PublicationChapter that matches the filter.
     * @param {PublicationChapterFindUniqueArgs} args - Arguments to find a PublicationChapter
     * @example
     * // Get one PublicationChapter
     * const publicationChapter = await prisma.publicationChapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicationChapterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublicationChapterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PublicationChapter'> extends True ? Prisma__PublicationChapterClient<PublicationChapterGetPayload<T>> : Prisma__PublicationChapterClient<PublicationChapterGetPayload<T> | null, null>

    /**
     * Find one PublicationChapter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublicationChapterFindUniqueOrThrowArgs} args - Arguments to find a PublicationChapter
     * @example
     * // Get one PublicationChapter
     * const publicationChapter = await prisma.publicationChapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicationChapterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PublicationChapterFindUniqueOrThrowArgs>
    ): Prisma__PublicationChapterClient<PublicationChapterGetPayload<T>>

    /**
     * Find the first PublicationChapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterFindFirstArgs} args - Arguments to find a PublicationChapter
     * @example
     * // Get one PublicationChapter
     * const publicationChapter = await prisma.publicationChapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicationChapterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublicationChapterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PublicationChapter'> extends True ? Prisma__PublicationChapterClient<PublicationChapterGetPayload<T>> : Prisma__PublicationChapterClient<PublicationChapterGetPayload<T> | null, null>

    /**
     * Find the first PublicationChapter that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterFindFirstOrThrowArgs} args - Arguments to find a PublicationChapter
     * @example
     * // Get one PublicationChapter
     * const publicationChapter = await prisma.publicationChapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicationChapterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PublicationChapterFindFirstOrThrowArgs>
    ): Prisma__PublicationChapterClient<PublicationChapterGetPayload<T>>

    /**
     * Find zero or more PublicationChapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicationChapters
     * const publicationChapters = await prisma.publicationChapter.findMany()
     * 
     * // Get first 10 PublicationChapters
     * const publicationChapters = await prisma.publicationChapter.findMany({ take: 10 })
     * 
     * // Only select the `chapterId`
     * const publicationChapterWithChapterIdOnly = await prisma.publicationChapter.findMany({ select: { chapterId: true } })
     * 
    **/
    findMany<T extends PublicationChapterFindManyArgs>(
      args?: SelectSubset<T, PublicationChapterFindManyArgs>
    ): PrismaPromise<Array<PublicationChapterGetPayload<T>>>

    /**
     * Create a PublicationChapter.
     * @param {PublicationChapterCreateArgs} args - Arguments to create a PublicationChapter.
     * @example
     * // Create one PublicationChapter
     * const PublicationChapter = await prisma.publicationChapter.create({
     *   data: {
     *     // ... data to create a PublicationChapter
     *   }
     * })
     * 
    **/
    create<T extends PublicationChapterCreateArgs>(
      args: SelectSubset<T, PublicationChapterCreateArgs>
    ): Prisma__PublicationChapterClient<PublicationChapterGetPayload<T>>

    /**
     * Delete a PublicationChapter.
     * @param {PublicationChapterDeleteArgs} args - Arguments to delete one PublicationChapter.
     * @example
     * // Delete one PublicationChapter
     * const PublicationChapter = await prisma.publicationChapter.delete({
     *   where: {
     *     // ... filter to delete one PublicationChapter
     *   }
     * })
     * 
    **/
    delete<T extends PublicationChapterDeleteArgs>(
      args: SelectSubset<T, PublicationChapterDeleteArgs>
    ): Prisma__PublicationChapterClient<PublicationChapterGetPayload<T>>

    /**
     * Update one PublicationChapter.
     * @param {PublicationChapterUpdateArgs} args - Arguments to update one PublicationChapter.
     * @example
     * // Update one PublicationChapter
     * const publicationChapter = await prisma.publicationChapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicationChapterUpdateArgs>(
      args: SelectSubset<T, PublicationChapterUpdateArgs>
    ): Prisma__PublicationChapterClient<PublicationChapterGetPayload<T>>

    /**
     * Delete zero or more PublicationChapters.
     * @param {PublicationChapterDeleteManyArgs} args - Arguments to filter PublicationChapters to delete.
     * @example
     * // Delete a few PublicationChapters
     * const { count } = await prisma.publicationChapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicationChapterDeleteManyArgs>(
      args?: SelectSubset<T, PublicationChapterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicationChapters
     * const publicationChapter = await prisma.publicationChapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicationChapterUpdateManyArgs>(
      args: SelectSubset<T, PublicationChapterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicationChapter.
     * @param {PublicationChapterUpsertArgs} args - Arguments to update or create a PublicationChapter.
     * @example
     * // Update or create a PublicationChapter
     * const publicationChapter = await prisma.publicationChapter.upsert({
     *   create: {
     *     // ... data to create a PublicationChapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicationChapter we want to update
     *   }
     * })
    **/
    upsert<T extends PublicationChapterUpsertArgs>(
      args: SelectSubset<T, PublicationChapterUpsertArgs>
    ): Prisma__PublicationChapterClient<PublicationChapterGetPayload<T>>

    /**
     * Count the number of PublicationChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterCountArgs} args - Arguments to filter PublicationChapters to count.
     * @example
     * // Count the number of PublicationChapters
     * const count = await prisma.publicationChapter.count({
     *   where: {
     *     // ... the filter for the PublicationChapters we want to count
     *   }
     * })
    **/
    count<T extends PublicationChapterCountArgs>(
      args?: Subset<T, PublicationChapterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicationChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationChapterAggregateArgs>(args: Subset<T, PublicationChapterAggregateArgs>): PrismaPromise<GetPublicationChapterAggregateType<T>>

    /**
     * Group by PublicationChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationChapterGroupByArgs['orderBy'] }
        : { orderBy?: PublicationChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationChapterGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicationChapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublicationChapterClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    publication<T extends PublicationArgs= {}>(args?: Subset<T, PublicationArgs>): Prisma__PublicationClient<PublicationGetPayload<T> | Null>;

    pages<T extends PublicationChapter$pagesArgs= {}>(args?: Subset<T, PublicationChapter$pagesArgs>): PrismaPromise<Array<PublicationChapterPageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PublicationChapter base type for findUnique actions
   */
  export type PublicationChapterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * Filter, which PublicationChapter to fetch.
     */
    where: PublicationChapterWhereUniqueInput
  }

  /**
   * PublicationChapter findUnique
   */
  export interface PublicationChapterFindUniqueArgs extends PublicationChapterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicationChapter findUniqueOrThrow
   */
  export type PublicationChapterFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * Filter, which PublicationChapter to fetch.
     */
    where: PublicationChapterWhereUniqueInput
  }


  /**
   * PublicationChapter base type for findFirst actions
   */
  export type PublicationChapterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * Filter, which PublicationChapter to fetch.
     */
    where?: PublicationChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationChapters to fetch.
     */
    orderBy?: Enumerable<PublicationChapterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationChapters.
     */
    cursor?: PublicationChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationChapters.
     */
    distinct?: Enumerable<PublicationChapterScalarFieldEnum>
  }

  /**
   * PublicationChapter findFirst
   */
  export interface PublicationChapterFindFirstArgs extends PublicationChapterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicationChapter findFirstOrThrow
   */
  export type PublicationChapterFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * Filter, which PublicationChapter to fetch.
     */
    where?: PublicationChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationChapters to fetch.
     */
    orderBy?: Enumerable<PublicationChapterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationChapters.
     */
    cursor?: PublicationChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationChapters.
     */
    distinct?: Enumerable<PublicationChapterScalarFieldEnum>
  }


  /**
   * PublicationChapter findMany
   */
  export type PublicationChapterFindManyArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * Filter, which PublicationChapters to fetch.
     */
    where?: PublicationChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationChapters to fetch.
     */
    orderBy?: Enumerable<PublicationChapterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicationChapters.
     */
    cursor?: PublicationChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationChapters.
     */
    skip?: number
    distinct?: Enumerable<PublicationChapterScalarFieldEnum>
  }


  /**
   * PublicationChapter create
   */
  export type PublicationChapterCreateArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * The data needed to create a PublicationChapter.
     */
    data: XOR<PublicationChapterCreateInput, PublicationChapterUncheckedCreateInput>
  }


  /**
   * PublicationChapter update
   */
  export type PublicationChapterUpdateArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * The data needed to update a PublicationChapter.
     */
    data: XOR<PublicationChapterUpdateInput, PublicationChapterUncheckedUpdateInput>
    /**
     * Choose, which PublicationChapter to update.
     */
    where: PublicationChapterWhereUniqueInput
  }


  /**
   * PublicationChapter updateMany
   */
  export type PublicationChapterUpdateManyArgs = {
    /**
     * The data used to update PublicationChapters.
     */
    data: XOR<PublicationChapterUpdateManyMutationInput, PublicationChapterUncheckedUpdateManyInput>
    /**
     * Filter which PublicationChapters to update
     */
    where?: PublicationChapterWhereInput
  }


  /**
   * PublicationChapter upsert
   */
  export type PublicationChapterUpsertArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * The filter to search for the PublicationChapter to update in case it exists.
     */
    where: PublicationChapterWhereUniqueInput
    /**
     * In case the PublicationChapter found by the `where` argument doesn't exist, create a new PublicationChapter with this data.
     */
    create: XOR<PublicationChapterCreateInput, PublicationChapterUncheckedCreateInput>
    /**
     * In case the PublicationChapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationChapterUpdateInput, PublicationChapterUncheckedUpdateInput>
  }


  /**
   * PublicationChapter delete
   */
  export type PublicationChapterDeleteArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
    /**
     * Filter which PublicationChapter to delete.
     */
    where: PublicationChapterWhereUniqueInput
  }


  /**
   * PublicationChapter deleteMany
   */
  export type PublicationChapterDeleteManyArgs = {
    /**
     * Filter which PublicationChapters to delete
     */
    where?: PublicationChapterWhereInput
  }


  /**
   * PublicationChapter.pages
   */
  export type PublicationChapter$pagesArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    where?: PublicationChapterPageWhereInput
    orderBy?: Enumerable<PublicationChapterPageOrderByWithRelationInput>
    cursor?: PublicationChapterPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PublicationChapterPageScalarFieldEnum>
  }


  /**
   * PublicationChapter without action
   */
  export type PublicationChapterArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapter
     */
    select?: PublicationChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterInclude | null
  }



  /**
   * Model PublicationChapterPage
   */


  export type AggregatePublicationChapterPage = {
    _count: PublicationChapterPageCountAggregateOutputType | null
    _avg: PublicationChapterPageAvgAggregateOutputType | null
    _sum: PublicationChapterPageSumAggregateOutputType | null
    _min: PublicationChapterPageMinAggregateOutputType | null
    _max: PublicationChapterPageMaxAggregateOutputType | null
  }

  export type PublicationChapterPageAvgAggregateOutputType = {
    pageId: number | null
    chapterId: number | null
    publicationId: number | null
  }

  export type PublicationChapterPageSumAggregateOutputType = {
    pageId: number | null
    chapterId: number | null
    publicationId: number | null
  }

  export type PublicationChapterPageMinAggregateOutputType = {
    pageId: number | null
    chapterId: number | null
    publicationId: number | null
    source: string | null
    content: string | null
  }

  export type PublicationChapterPageMaxAggregateOutputType = {
    pageId: number | null
    chapterId: number | null
    publicationId: number | null
    source: string | null
    content: string | null
  }

  export type PublicationChapterPageCountAggregateOutputType = {
    pageId: number
    chapterId: number
    publicationId: number
    source: number
    content: number
    _all: number
  }


  export type PublicationChapterPageAvgAggregateInputType = {
    pageId?: true
    chapterId?: true
    publicationId?: true
  }

  export type PublicationChapterPageSumAggregateInputType = {
    pageId?: true
    chapterId?: true
    publicationId?: true
  }

  export type PublicationChapterPageMinAggregateInputType = {
    pageId?: true
    chapterId?: true
    publicationId?: true
    source?: true
    content?: true
  }

  export type PublicationChapterPageMaxAggregateInputType = {
    pageId?: true
    chapterId?: true
    publicationId?: true
    source?: true
    content?: true
  }

  export type PublicationChapterPageCountAggregateInputType = {
    pageId?: true
    chapterId?: true
    publicationId?: true
    source?: true
    content?: true
    _all?: true
  }

  export type PublicationChapterPageAggregateArgs = {
    /**
     * Filter which PublicationChapterPage to aggregate.
     */
    where?: PublicationChapterPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationChapterPages to fetch.
     */
    orderBy?: Enumerable<PublicationChapterPageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationChapterPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationChapterPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationChapterPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicationChapterPages
    **/
    _count?: true | PublicationChapterPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationChapterPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationChapterPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationChapterPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationChapterPageMaxAggregateInputType
  }

  export type GetPublicationChapterPageAggregateType<T extends PublicationChapterPageAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicationChapterPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicationChapterPage[P]>
      : GetScalarType<T[P], AggregatePublicationChapterPage[P]>
  }




  export type PublicationChapterPageGroupByArgs = {
    where?: PublicationChapterPageWhereInput
    orderBy?: Enumerable<PublicationChapterPageOrderByWithAggregationInput>
    by: PublicationChapterPageScalarFieldEnum[]
    having?: PublicationChapterPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationChapterPageCountAggregateInputType | true
    _avg?: PublicationChapterPageAvgAggregateInputType
    _sum?: PublicationChapterPageSumAggregateInputType
    _min?: PublicationChapterPageMinAggregateInputType
    _max?: PublicationChapterPageMaxAggregateInputType
  }


  export type PublicationChapterPageGroupByOutputType = {
    pageId: number
    chapterId: number | null
    publicationId: number
    source: string
    content: string | null
    _count: PublicationChapterPageCountAggregateOutputType | null
    _avg: PublicationChapterPageAvgAggregateOutputType | null
    _sum: PublicationChapterPageSumAggregateOutputType | null
    _min: PublicationChapterPageMinAggregateOutputType | null
    _max: PublicationChapterPageMaxAggregateOutputType | null
  }

  type GetPublicationChapterPageGroupByPayload<T extends PublicationChapterPageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PublicationChapterPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationChapterPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationChapterPageGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationChapterPageGroupByOutputType[P]>
        }
      >
    >


  export type PublicationChapterPageSelect = {
    pageId?: boolean
    chapterId?: boolean
    publicationId?: boolean
    source?: boolean
    content?: boolean
    chapter?: boolean | PublicationChapterArgs
    publication?: boolean | PublicationArgs
  }


  export type PublicationChapterPageInclude = {
    chapter?: boolean | PublicationChapterArgs
    publication?: boolean | PublicationArgs
  }

  export type PublicationChapterPageGetPayload<S extends boolean | null | undefined | PublicationChapterPageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PublicationChapterPage :
    S extends undefined ? never :
    S extends { include: any } & (PublicationChapterPageArgs | PublicationChapterPageFindManyArgs)
    ? PublicationChapterPage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'chapter' ? PublicationChapterGetPayload<S['include'][P]> | null :
        P extends 'publication' ? PublicationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PublicationChapterPageArgs | PublicationChapterPageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'chapter' ? PublicationChapterGetPayload<S['select'][P]> | null :
        P extends 'publication' ? PublicationGetPayload<S['select'][P]> :  P extends keyof PublicationChapterPage ? PublicationChapterPage[P] : never
  } 
      : PublicationChapterPage


  type PublicationChapterPageCountArgs = 
    Omit<PublicationChapterPageFindManyArgs, 'select' | 'include'> & {
      select?: PublicationChapterPageCountAggregateInputType | true
    }

  export interface PublicationChapterPageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PublicationChapterPage that matches the filter.
     * @param {PublicationChapterPageFindUniqueArgs} args - Arguments to find a PublicationChapterPage
     * @example
     * // Get one PublicationChapterPage
     * const publicationChapterPage = await prisma.publicationChapterPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicationChapterPageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublicationChapterPageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PublicationChapterPage'> extends True ? Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T>> : Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T> | null, null>

    /**
     * Find one PublicationChapterPage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublicationChapterPageFindUniqueOrThrowArgs} args - Arguments to find a PublicationChapterPage
     * @example
     * // Get one PublicationChapterPage
     * const publicationChapterPage = await prisma.publicationChapterPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicationChapterPageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PublicationChapterPageFindUniqueOrThrowArgs>
    ): Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T>>

    /**
     * Find the first PublicationChapterPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterPageFindFirstArgs} args - Arguments to find a PublicationChapterPage
     * @example
     * // Get one PublicationChapterPage
     * const publicationChapterPage = await prisma.publicationChapterPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicationChapterPageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublicationChapterPageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PublicationChapterPage'> extends True ? Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T>> : Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T> | null, null>

    /**
     * Find the first PublicationChapterPage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterPageFindFirstOrThrowArgs} args - Arguments to find a PublicationChapterPage
     * @example
     * // Get one PublicationChapterPage
     * const publicationChapterPage = await prisma.publicationChapterPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicationChapterPageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PublicationChapterPageFindFirstOrThrowArgs>
    ): Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T>>

    /**
     * Find zero or more PublicationChapterPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterPageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicationChapterPages
     * const publicationChapterPages = await prisma.publicationChapterPage.findMany()
     * 
     * // Get first 10 PublicationChapterPages
     * const publicationChapterPages = await prisma.publicationChapterPage.findMany({ take: 10 })
     * 
     * // Only select the `pageId`
     * const publicationChapterPageWithPageIdOnly = await prisma.publicationChapterPage.findMany({ select: { pageId: true } })
     * 
    **/
    findMany<T extends PublicationChapterPageFindManyArgs>(
      args?: SelectSubset<T, PublicationChapterPageFindManyArgs>
    ): PrismaPromise<Array<PublicationChapterPageGetPayload<T>>>

    /**
     * Create a PublicationChapterPage.
     * @param {PublicationChapterPageCreateArgs} args - Arguments to create a PublicationChapterPage.
     * @example
     * // Create one PublicationChapterPage
     * const PublicationChapterPage = await prisma.publicationChapterPage.create({
     *   data: {
     *     // ... data to create a PublicationChapterPage
     *   }
     * })
     * 
    **/
    create<T extends PublicationChapterPageCreateArgs>(
      args: SelectSubset<T, PublicationChapterPageCreateArgs>
    ): Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T>>

    /**
     * Delete a PublicationChapterPage.
     * @param {PublicationChapterPageDeleteArgs} args - Arguments to delete one PublicationChapterPage.
     * @example
     * // Delete one PublicationChapterPage
     * const PublicationChapterPage = await prisma.publicationChapterPage.delete({
     *   where: {
     *     // ... filter to delete one PublicationChapterPage
     *   }
     * })
     * 
    **/
    delete<T extends PublicationChapterPageDeleteArgs>(
      args: SelectSubset<T, PublicationChapterPageDeleteArgs>
    ): Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T>>

    /**
     * Update one PublicationChapterPage.
     * @param {PublicationChapterPageUpdateArgs} args - Arguments to update one PublicationChapterPage.
     * @example
     * // Update one PublicationChapterPage
     * const publicationChapterPage = await prisma.publicationChapterPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicationChapterPageUpdateArgs>(
      args: SelectSubset<T, PublicationChapterPageUpdateArgs>
    ): Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T>>

    /**
     * Delete zero or more PublicationChapterPages.
     * @param {PublicationChapterPageDeleteManyArgs} args - Arguments to filter PublicationChapterPages to delete.
     * @example
     * // Delete a few PublicationChapterPages
     * const { count } = await prisma.publicationChapterPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicationChapterPageDeleteManyArgs>(
      args?: SelectSubset<T, PublicationChapterPageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationChapterPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicationChapterPages
     * const publicationChapterPage = await prisma.publicationChapterPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicationChapterPageUpdateManyArgs>(
      args: SelectSubset<T, PublicationChapterPageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicationChapterPage.
     * @param {PublicationChapterPageUpsertArgs} args - Arguments to update or create a PublicationChapterPage.
     * @example
     * // Update or create a PublicationChapterPage
     * const publicationChapterPage = await prisma.publicationChapterPage.upsert({
     *   create: {
     *     // ... data to create a PublicationChapterPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicationChapterPage we want to update
     *   }
     * })
    **/
    upsert<T extends PublicationChapterPageUpsertArgs>(
      args: SelectSubset<T, PublicationChapterPageUpsertArgs>
    ): Prisma__PublicationChapterPageClient<PublicationChapterPageGetPayload<T>>

    /**
     * Count the number of PublicationChapterPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterPageCountArgs} args - Arguments to filter PublicationChapterPages to count.
     * @example
     * // Count the number of PublicationChapterPages
     * const count = await prisma.publicationChapterPage.count({
     *   where: {
     *     // ... the filter for the PublicationChapterPages we want to count
     *   }
     * })
    **/
    count<T extends PublicationChapterPageCountArgs>(
      args?: Subset<T, PublicationChapterPageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationChapterPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicationChapterPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationChapterPageAggregateArgs>(args: Subset<T, PublicationChapterPageAggregateArgs>): PrismaPromise<GetPublicationChapterPageAggregateType<T>>

    /**
     * Group by PublicationChapterPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationChapterPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationChapterPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationChapterPageGroupByArgs['orderBy'] }
        : { orderBy?: PublicationChapterPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationChapterPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationChapterPageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicationChapterPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublicationChapterPageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    chapter<T extends PublicationChapterArgs= {}>(args?: Subset<T, PublicationChapterArgs>): Prisma__PublicationChapterClient<PublicationChapterGetPayload<T> | Null>;

    publication<T extends PublicationArgs= {}>(args?: Subset<T, PublicationArgs>): Prisma__PublicationClient<PublicationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PublicationChapterPage base type for findUnique actions
   */
  export type PublicationChapterPageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * Filter, which PublicationChapterPage to fetch.
     */
    where: PublicationChapterPageWhereUniqueInput
  }

  /**
   * PublicationChapterPage findUnique
   */
  export interface PublicationChapterPageFindUniqueArgs extends PublicationChapterPageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicationChapterPage findUniqueOrThrow
   */
  export type PublicationChapterPageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * Filter, which PublicationChapterPage to fetch.
     */
    where: PublicationChapterPageWhereUniqueInput
  }


  /**
   * PublicationChapterPage base type for findFirst actions
   */
  export type PublicationChapterPageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * Filter, which PublicationChapterPage to fetch.
     */
    where?: PublicationChapterPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationChapterPages to fetch.
     */
    orderBy?: Enumerable<PublicationChapterPageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationChapterPages.
     */
    cursor?: PublicationChapterPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationChapterPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationChapterPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationChapterPages.
     */
    distinct?: Enumerable<PublicationChapterPageScalarFieldEnum>
  }

  /**
   * PublicationChapterPage findFirst
   */
  export interface PublicationChapterPageFindFirstArgs extends PublicationChapterPageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicationChapterPage findFirstOrThrow
   */
  export type PublicationChapterPageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * Filter, which PublicationChapterPage to fetch.
     */
    where?: PublicationChapterPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationChapterPages to fetch.
     */
    orderBy?: Enumerable<PublicationChapterPageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationChapterPages.
     */
    cursor?: PublicationChapterPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationChapterPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationChapterPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationChapterPages.
     */
    distinct?: Enumerable<PublicationChapterPageScalarFieldEnum>
  }


  /**
   * PublicationChapterPage findMany
   */
  export type PublicationChapterPageFindManyArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * Filter, which PublicationChapterPages to fetch.
     */
    where?: PublicationChapterPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationChapterPages to fetch.
     */
    orderBy?: Enumerable<PublicationChapterPageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicationChapterPages.
     */
    cursor?: PublicationChapterPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationChapterPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationChapterPages.
     */
    skip?: number
    distinct?: Enumerable<PublicationChapterPageScalarFieldEnum>
  }


  /**
   * PublicationChapterPage create
   */
  export type PublicationChapterPageCreateArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * The data needed to create a PublicationChapterPage.
     */
    data: XOR<PublicationChapterPageCreateInput, PublicationChapterPageUncheckedCreateInput>
  }


  /**
   * PublicationChapterPage update
   */
  export type PublicationChapterPageUpdateArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * The data needed to update a PublicationChapterPage.
     */
    data: XOR<PublicationChapterPageUpdateInput, PublicationChapterPageUncheckedUpdateInput>
    /**
     * Choose, which PublicationChapterPage to update.
     */
    where: PublicationChapterPageWhereUniqueInput
  }


  /**
   * PublicationChapterPage updateMany
   */
  export type PublicationChapterPageUpdateManyArgs = {
    /**
     * The data used to update PublicationChapterPages.
     */
    data: XOR<PublicationChapterPageUpdateManyMutationInput, PublicationChapterPageUncheckedUpdateManyInput>
    /**
     * Filter which PublicationChapterPages to update
     */
    where?: PublicationChapterPageWhereInput
  }


  /**
   * PublicationChapterPage upsert
   */
  export type PublicationChapterPageUpsertArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * The filter to search for the PublicationChapterPage to update in case it exists.
     */
    where: PublicationChapterPageWhereUniqueInput
    /**
     * In case the PublicationChapterPage found by the `where` argument doesn't exist, create a new PublicationChapterPage with this data.
     */
    create: XOR<PublicationChapterPageCreateInput, PublicationChapterPageUncheckedCreateInput>
    /**
     * In case the PublicationChapterPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationChapterPageUpdateInput, PublicationChapterPageUncheckedUpdateInput>
  }


  /**
   * PublicationChapterPage delete
   */
  export type PublicationChapterPageDeleteArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
    /**
     * Filter which PublicationChapterPage to delete.
     */
    where: PublicationChapterPageWhereUniqueInput
  }


  /**
   * PublicationChapterPage deleteMany
   */
  export type PublicationChapterPageDeleteManyArgs = {
    /**
     * Filter which PublicationChapterPages to delete
     */
    where?: PublicationChapterPageWhereInput
  }


  /**
   * PublicationChapterPage without action
   */
  export type PublicationChapterPageArgs = {
    /**
     * Select specific fields to fetch from the PublicationChapterPage
     */
    select?: PublicationChapterPageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationChapterPageInclude | null
  }



  /**
   * Model PublicationContributor
   */


  export type AggregatePublicationContributor = {
    _count: PublicationContributorCountAggregateOutputType | null
    _avg: PublicationContributorAvgAggregateOutputType | null
    _sum: PublicationContributorSumAggregateOutputType | null
    _min: PublicationContributorMinAggregateOutputType | null
    _max: PublicationContributorMaxAggregateOutputType | null
  }

  export type PublicationContributorAvgAggregateOutputType = {
    publicationId: number | null
    userId: number | null
  }

  export type PublicationContributorSumAggregateOutputType = {
    publicationId: number | null
    userId: number | null
  }

  export type PublicationContributorMinAggregateOutputType = {
    publicationId: number | null
    userId: number | null
    role: string | null
  }

  export type PublicationContributorMaxAggregateOutputType = {
    publicationId: number | null
    userId: number | null
    role: string | null
  }

  export type PublicationContributorCountAggregateOutputType = {
    publicationId: number
    userId: number
    role: number
    _all: number
  }


  export type PublicationContributorAvgAggregateInputType = {
    publicationId?: true
    userId?: true
  }

  export type PublicationContributorSumAggregateInputType = {
    publicationId?: true
    userId?: true
  }

  export type PublicationContributorMinAggregateInputType = {
    publicationId?: true
    userId?: true
    role?: true
  }

  export type PublicationContributorMaxAggregateInputType = {
    publicationId?: true
    userId?: true
    role?: true
  }

  export type PublicationContributorCountAggregateInputType = {
    publicationId?: true
    userId?: true
    role?: true
    _all?: true
  }

  export type PublicationContributorAggregateArgs = {
    /**
     * Filter which PublicationContributor to aggregate.
     */
    where?: PublicationContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationContributors to fetch.
     */
    orderBy?: Enumerable<PublicationContributorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationContributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationContributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicationContributors
    **/
    _count?: true | PublicationContributorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationContributorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationContributorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationContributorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationContributorMaxAggregateInputType
  }

  export type GetPublicationContributorAggregateType<T extends PublicationContributorAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicationContributor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicationContributor[P]>
      : GetScalarType<T[P], AggregatePublicationContributor[P]>
  }




  export type PublicationContributorGroupByArgs = {
    where?: PublicationContributorWhereInput
    orderBy?: Enumerable<PublicationContributorOrderByWithAggregationInput>
    by: PublicationContributorScalarFieldEnum[]
    having?: PublicationContributorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationContributorCountAggregateInputType | true
    _avg?: PublicationContributorAvgAggregateInputType
    _sum?: PublicationContributorSumAggregateInputType
    _min?: PublicationContributorMinAggregateInputType
    _max?: PublicationContributorMaxAggregateInputType
  }


  export type PublicationContributorGroupByOutputType = {
    publicationId: number
    userId: number
    role: string
    _count: PublicationContributorCountAggregateOutputType | null
    _avg: PublicationContributorAvgAggregateOutputType | null
    _sum: PublicationContributorSumAggregateOutputType | null
    _min: PublicationContributorMinAggregateOutputType | null
    _max: PublicationContributorMaxAggregateOutputType | null
  }

  type GetPublicationContributorGroupByPayload<T extends PublicationContributorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PublicationContributorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationContributorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationContributorGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationContributorGroupByOutputType[P]>
        }
      >
    >


  export type PublicationContributorSelect = {
    publicationId?: boolean
    userId?: boolean
    role?: boolean
    publication?: boolean | PublicationArgs
    user?: boolean | UserArgs
  }


  export type PublicationContributorInclude = {
    publication?: boolean | PublicationArgs
    user?: boolean | UserArgs
  }

  export type PublicationContributorGetPayload<S extends boolean | null | undefined | PublicationContributorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PublicationContributor :
    S extends undefined ? never :
    S extends { include: any } & (PublicationContributorArgs | PublicationContributorFindManyArgs)
    ? PublicationContributor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'publication' ? PublicationGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PublicationContributorArgs | PublicationContributorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'publication' ? PublicationGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof PublicationContributor ? PublicationContributor[P] : never
  } 
      : PublicationContributor


  type PublicationContributorCountArgs = 
    Omit<PublicationContributorFindManyArgs, 'select' | 'include'> & {
      select?: PublicationContributorCountAggregateInputType | true
    }

  export interface PublicationContributorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PublicationContributor that matches the filter.
     * @param {PublicationContributorFindUniqueArgs} args - Arguments to find a PublicationContributor
     * @example
     * // Get one PublicationContributor
     * const publicationContributor = await prisma.publicationContributor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicationContributorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublicationContributorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PublicationContributor'> extends True ? Prisma__PublicationContributorClient<PublicationContributorGetPayload<T>> : Prisma__PublicationContributorClient<PublicationContributorGetPayload<T> | null, null>

    /**
     * Find one PublicationContributor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublicationContributorFindUniqueOrThrowArgs} args - Arguments to find a PublicationContributor
     * @example
     * // Get one PublicationContributor
     * const publicationContributor = await prisma.publicationContributor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicationContributorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PublicationContributorFindUniqueOrThrowArgs>
    ): Prisma__PublicationContributorClient<PublicationContributorGetPayload<T>>

    /**
     * Find the first PublicationContributor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationContributorFindFirstArgs} args - Arguments to find a PublicationContributor
     * @example
     * // Get one PublicationContributor
     * const publicationContributor = await prisma.publicationContributor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicationContributorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublicationContributorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PublicationContributor'> extends True ? Prisma__PublicationContributorClient<PublicationContributorGetPayload<T>> : Prisma__PublicationContributorClient<PublicationContributorGetPayload<T> | null, null>

    /**
     * Find the first PublicationContributor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationContributorFindFirstOrThrowArgs} args - Arguments to find a PublicationContributor
     * @example
     * // Get one PublicationContributor
     * const publicationContributor = await prisma.publicationContributor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicationContributorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PublicationContributorFindFirstOrThrowArgs>
    ): Prisma__PublicationContributorClient<PublicationContributorGetPayload<T>>

    /**
     * Find zero or more PublicationContributors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationContributorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicationContributors
     * const publicationContributors = await prisma.publicationContributor.findMany()
     * 
     * // Get first 10 PublicationContributors
     * const publicationContributors = await prisma.publicationContributor.findMany({ take: 10 })
     * 
     * // Only select the `publicationId`
     * const publicationContributorWithPublicationIdOnly = await prisma.publicationContributor.findMany({ select: { publicationId: true } })
     * 
    **/
    findMany<T extends PublicationContributorFindManyArgs>(
      args?: SelectSubset<T, PublicationContributorFindManyArgs>
    ): PrismaPromise<Array<PublicationContributorGetPayload<T>>>

    /**
     * Create a PublicationContributor.
     * @param {PublicationContributorCreateArgs} args - Arguments to create a PublicationContributor.
     * @example
     * // Create one PublicationContributor
     * const PublicationContributor = await prisma.publicationContributor.create({
     *   data: {
     *     // ... data to create a PublicationContributor
     *   }
     * })
     * 
    **/
    create<T extends PublicationContributorCreateArgs>(
      args: SelectSubset<T, PublicationContributorCreateArgs>
    ): Prisma__PublicationContributorClient<PublicationContributorGetPayload<T>>

    /**
     * Delete a PublicationContributor.
     * @param {PublicationContributorDeleteArgs} args - Arguments to delete one PublicationContributor.
     * @example
     * // Delete one PublicationContributor
     * const PublicationContributor = await prisma.publicationContributor.delete({
     *   where: {
     *     // ... filter to delete one PublicationContributor
     *   }
     * })
     * 
    **/
    delete<T extends PublicationContributorDeleteArgs>(
      args: SelectSubset<T, PublicationContributorDeleteArgs>
    ): Prisma__PublicationContributorClient<PublicationContributorGetPayload<T>>

    /**
     * Update one PublicationContributor.
     * @param {PublicationContributorUpdateArgs} args - Arguments to update one PublicationContributor.
     * @example
     * // Update one PublicationContributor
     * const publicationContributor = await prisma.publicationContributor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicationContributorUpdateArgs>(
      args: SelectSubset<T, PublicationContributorUpdateArgs>
    ): Prisma__PublicationContributorClient<PublicationContributorGetPayload<T>>

    /**
     * Delete zero or more PublicationContributors.
     * @param {PublicationContributorDeleteManyArgs} args - Arguments to filter PublicationContributors to delete.
     * @example
     * // Delete a few PublicationContributors
     * const { count } = await prisma.publicationContributor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicationContributorDeleteManyArgs>(
      args?: SelectSubset<T, PublicationContributorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationContributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationContributorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicationContributors
     * const publicationContributor = await prisma.publicationContributor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicationContributorUpdateManyArgs>(
      args: SelectSubset<T, PublicationContributorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicationContributor.
     * @param {PublicationContributorUpsertArgs} args - Arguments to update or create a PublicationContributor.
     * @example
     * // Update or create a PublicationContributor
     * const publicationContributor = await prisma.publicationContributor.upsert({
     *   create: {
     *     // ... data to create a PublicationContributor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicationContributor we want to update
     *   }
     * })
    **/
    upsert<T extends PublicationContributorUpsertArgs>(
      args: SelectSubset<T, PublicationContributorUpsertArgs>
    ): Prisma__PublicationContributorClient<PublicationContributorGetPayload<T>>

    /**
     * Count the number of PublicationContributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationContributorCountArgs} args - Arguments to filter PublicationContributors to count.
     * @example
     * // Count the number of PublicationContributors
     * const count = await prisma.publicationContributor.count({
     *   where: {
     *     // ... the filter for the PublicationContributors we want to count
     *   }
     * })
    **/
    count<T extends PublicationContributorCountArgs>(
      args?: Subset<T, PublicationContributorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationContributorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicationContributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationContributorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationContributorAggregateArgs>(args: Subset<T, PublicationContributorAggregateArgs>): PrismaPromise<GetPublicationContributorAggregateType<T>>

    /**
     * Group by PublicationContributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationContributorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationContributorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationContributorGroupByArgs['orderBy'] }
        : { orderBy?: PublicationContributorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationContributorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationContributorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicationContributor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublicationContributorClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    publication<T extends PublicationArgs= {}>(args?: Subset<T, PublicationArgs>): Prisma__PublicationClient<PublicationGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PublicationContributor base type for findUnique actions
   */
  export type PublicationContributorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * Filter, which PublicationContributor to fetch.
     */
    where: PublicationContributorWhereUniqueInput
  }

  /**
   * PublicationContributor findUnique
   */
  export interface PublicationContributorFindUniqueArgs extends PublicationContributorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicationContributor findUniqueOrThrow
   */
  export type PublicationContributorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * Filter, which PublicationContributor to fetch.
     */
    where: PublicationContributorWhereUniqueInput
  }


  /**
   * PublicationContributor base type for findFirst actions
   */
  export type PublicationContributorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * Filter, which PublicationContributor to fetch.
     */
    where?: PublicationContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationContributors to fetch.
     */
    orderBy?: Enumerable<PublicationContributorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationContributors.
     */
    cursor?: PublicationContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationContributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationContributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationContributors.
     */
    distinct?: Enumerable<PublicationContributorScalarFieldEnum>
  }

  /**
   * PublicationContributor findFirst
   */
  export interface PublicationContributorFindFirstArgs extends PublicationContributorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicationContributor findFirstOrThrow
   */
  export type PublicationContributorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * Filter, which PublicationContributor to fetch.
     */
    where?: PublicationContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationContributors to fetch.
     */
    orderBy?: Enumerable<PublicationContributorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationContributors.
     */
    cursor?: PublicationContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationContributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationContributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationContributors.
     */
    distinct?: Enumerable<PublicationContributorScalarFieldEnum>
  }


  /**
   * PublicationContributor findMany
   */
  export type PublicationContributorFindManyArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * Filter, which PublicationContributors to fetch.
     */
    where?: PublicationContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationContributors to fetch.
     */
    orderBy?: Enumerable<PublicationContributorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicationContributors.
     */
    cursor?: PublicationContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationContributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationContributors.
     */
    skip?: number
    distinct?: Enumerable<PublicationContributorScalarFieldEnum>
  }


  /**
   * PublicationContributor create
   */
  export type PublicationContributorCreateArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * The data needed to create a PublicationContributor.
     */
    data: XOR<PublicationContributorCreateInput, PublicationContributorUncheckedCreateInput>
  }


  /**
   * PublicationContributor update
   */
  export type PublicationContributorUpdateArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * The data needed to update a PublicationContributor.
     */
    data: XOR<PublicationContributorUpdateInput, PublicationContributorUncheckedUpdateInput>
    /**
     * Choose, which PublicationContributor to update.
     */
    where: PublicationContributorWhereUniqueInput
  }


  /**
   * PublicationContributor updateMany
   */
  export type PublicationContributorUpdateManyArgs = {
    /**
     * The data used to update PublicationContributors.
     */
    data: XOR<PublicationContributorUpdateManyMutationInput, PublicationContributorUncheckedUpdateManyInput>
    /**
     * Filter which PublicationContributors to update
     */
    where?: PublicationContributorWhereInput
  }


  /**
   * PublicationContributor upsert
   */
  export type PublicationContributorUpsertArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * The filter to search for the PublicationContributor to update in case it exists.
     */
    where: PublicationContributorWhereUniqueInput
    /**
     * In case the PublicationContributor found by the `where` argument doesn't exist, create a new PublicationContributor with this data.
     */
    create: XOR<PublicationContributorCreateInput, PublicationContributorUncheckedCreateInput>
    /**
     * In case the PublicationContributor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationContributorUpdateInput, PublicationContributorUncheckedUpdateInput>
  }


  /**
   * PublicationContributor delete
   */
  export type PublicationContributorDeleteArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
    /**
     * Filter which PublicationContributor to delete.
     */
    where: PublicationContributorWhereUniqueInput
  }


  /**
   * PublicationContributor deleteMany
   */
  export type PublicationContributorDeleteManyArgs = {
    /**
     * Filter which PublicationContributors to delete
     */
    where?: PublicationContributorWhereInput
  }


  /**
   * PublicationContributor without action
   */
  export type PublicationContributorArgs = {
    /**
     * Select specific fields to fetch from the PublicationContributor
     */
    select?: PublicationContributorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicationContributorInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const FileScalarFieldEnum: {
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
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const PublicationChapterPageScalarFieldEnum: {
    pageId: 'pageId',
    chapterId: 'chapterId',
    publicationId: 'publicationId',
    source: 'source',
    content: 'content'
  };

  export type PublicationChapterPageScalarFieldEnum = (typeof PublicationChapterPageScalarFieldEnum)[keyof typeof PublicationChapterPageScalarFieldEnum]


  export const PublicationChapterScalarFieldEnum: {
    chapterId: 'chapterId',
    publicationId: 'publicationId',
    source: 'source',
    title: 'title',
    summary: 'summary',
    publishedAt: 'publishedAt'
  };

  export type PublicationChapterScalarFieldEnum = (typeof PublicationChapterScalarFieldEnum)[keyof typeof PublicationChapterScalarFieldEnum]


  export const PublicationContributorScalarFieldEnum: {
    publicationId: 'publicationId',
    userId: 'userId',
    role: 'role'
  };

  export type PublicationContributorScalarFieldEnum = (typeof PublicationContributorScalarFieldEnum)[keyof typeof PublicationContributorScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    publicationId: 'publicationId',
    source: 'source',
    name: 'name',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ThreadParticipantScalarFieldEnum: {
    threadId: 'threadId',
    userId: 'userId'
  };

  export type ThreadParticipantScalarFieldEnum = (typeof ThreadParticipantScalarFieldEnum)[keyof typeof ThreadParticipantScalarFieldEnum]


  export const ThreadScalarFieldEnum: {
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
  };

  export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    handle: 'handle',
    displayName: 'displayName',
    links: 'links'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    userId?: IntFilter | number
    handle?: StringFilter | string
    displayName?: StringNullableFilter | string | null
    links?: StringFilter | string
    threadsAuthored?: ThreadListRelationFilter
    threadsParticipating?: ThreadParticipantListRelationFilter
    publicationsContributed?: PublicationContributorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    links?: SortOrder
    threadsAuthored?: ThreadOrderByRelationAggregateInput
    threadsParticipating?: ThreadParticipantOrderByRelationAggregateInput
    publicationsContributed?: PublicationContributorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    userId?: number
    handle?: string
  }

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    links?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    handle?: StringWithAggregatesFilter | string
    displayName?: StringNullableWithAggregatesFilter | string | null
    links?: StringWithAggregatesFilter | string
  }

  export type ThreadWhereInput = {
    AND?: Enumerable<ThreadWhereInput>
    OR?: Enumerable<ThreadWhereInput>
    NOT?: Enumerable<ThreadWhereInput>
    threadId?: IntFilter | number
    source?: StringFilter | string
    parentThreadId?: IntNullableFilter | number | null
    rootThreadId?: IntNullableFilter | number | null
    threadOrigin?: StringNullableFilter | string | null
    content?: StringNullableFilter | string | null
    metadata?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    lastUpdatedAt?: DateTimeFilter | Date | string
    numViews?: IntFilter | number
    numReplies?: IntFilter | number
    numLikes?: IntFilter | number
    numDislikes?: IntFilter | number
    numReactions?: IntFilter | number
    numInteractions?: IntFilter | number
    authorId?: IntFilter | number
    isRoot?: BoolFilter | boolean
    isDeleted?: BoolFilter | boolean
    isLocked?: BoolFilter | boolean
    author?: XOR<UserRelationFilter, UserWhereInput>
    parentThread?: XOR<ThreadRelationFilter, ThreadWhereInput> | null
    replies?: ThreadListRelationFilter
    rootThread?: XOR<ThreadRelationFilter, ThreadWhereInput> | null
    paricipants?: ThreadParticipantListRelationFilter
    conversation?: ThreadListRelationFilter
  }

  export type ThreadOrderByWithRelationInput = {
    threadId?: SortOrder
    source?: SortOrder
    parentThreadId?: SortOrder
    rootThreadId?: SortOrder
    threadOrigin?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    lastUpdatedAt?: SortOrder
    numViews?: SortOrder
    numReplies?: SortOrder
    numLikes?: SortOrder
    numDislikes?: SortOrder
    numReactions?: SortOrder
    numInteractions?: SortOrder
    authorId?: SortOrder
    isRoot?: SortOrder
    isDeleted?: SortOrder
    isLocked?: SortOrder
    author?: UserOrderByWithRelationInput
    parentThread?: ThreadOrderByWithRelationInput
    replies?: ThreadOrderByRelationAggregateInput
    rootThread?: ThreadOrderByWithRelationInput
    paricipants?: ThreadParticipantOrderByRelationAggregateInput
    conversation?: ThreadOrderByRelationAggregateInput
  }

  export type ThreadWhereUniqueInput = {
    threadId?: number
    source?: string
  }

  export type ThreadOrderByWithAggregationInput = {
    threadId?: SortOrder
    source?: SortOrder
    parentThreadId?: SortOrder
    rootThreadId?: SortOrder
    threadOrigin?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    lastUpdatedAt?: SortOrder
    numViews?: SortOrder
    numReplies?: SortOrder
    numLikes?: SortOrder
    numDislikes?: SortOrder
    numReactions?: SortOrder
    numInteractions?: SortOrder
    authorId?: SortOrder
    isRoot?: SortOrder
    isDeleted?: SortOrder
    isLocked?: SortOrder
    _count?: ThreadCountOrderByAggregateInput
    _avg?: ThreadAvgOrderByAggregateInput
    _max?: ThreadMaxOrderByAggregateInput
    _min?: ThreadMinOrderByAggregateInput
    _sum?: ThreadSumOrderByAggregateInput
  }

  export type ThreadScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    OR?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    threadId?: IntWithAggregatesFilter | number
    source?: StringWithAggregatesFilter | string
    parentThreadId?: IntNullableWithAggregatesFilter | number | null
    rootThreadId?: IntNullableWithAggregatesFilter | number | null
    threadOrigin?: StringNullableWithAggregatesFilter | string | null
    content?: StringNullableWithAggregatesFilter | string | null
    metadata?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    lastUpdatedAt?: DateTimeWithAggregatesFilter | Date | string
    numViews?: IntWithAggregatesFilter | number
    numReplies?: IntWithAggregatesFilter | number
    numLikes?: IntWithAggregatesFilter | number
    numDislikes?: IntWithAggregatesFilter | number
    numReactions?: IntWithAggregatesFilter | number
    numInteractions?: IntWithAggregatesFilter | number
    authorId?: IntWithAggregatesFilter | number
    isRoot?: BoolWithAggregatesFilter | boolean
    isDeleted?: BoolWithAggregatesFilter | boolean
    isLocked?: BoolWithAggregatesFilter | boolean
  }

  export type ThreadParticipantWhereInput = {
    AND?: Enumerable<ThreadParticipantWhereInput>
    OR?: Enumerable<ThreadParticipantWhereInput>
    NOT?: Enumerable<ThreadParticipantWhereInput>
    threadId?: IntFilter | number
    userId?: IntFilter | number
    thread?: XOR<ThreadRelationFilter, ThreadWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ThreadParticipantOrderByWithRelationInput = {
    threadId?: SortOrder
    userId?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ThreadParticipantWhereUniqueInput = {
    threadId_userId?: ThreadParticipantThreadIdUserIdCompoundUniqueInput
  }

  export type ThreadParticipantOrderByWithAggregationInput = {
    threadId?: SortOrder
    userId?: SortOrder
    _count?: ThreadParticipantCountOrderByAggregateInput
    _avg?: ThreadParticipantAvgOrderByAggregateInput
    _max?: ThreadParticipantMaxOrderByAggregateInput
    _min?: ThreadParticipantMinOrderByAggregateInput
    _sum?: ThreadParticipantSumOrderByAggregateInput
  }

  export type ThreadParticipantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ThreadParticipantScalarWhereWithAggregatesInput>
    OR?: Enumerable<ThreadParticipantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ThreadParticipantScalarWhereWithAggregatesInput>
    threadId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
  }

  export type FileWhereInput = {
    AND?: Enumerable<FileWhereInput>
    OR?: Enumerable<FileWhereInput>
    NOT?: Enumerable<FileWhereInput>
    fileId?: IntFilter | number
    source?: StringFilter | string
    type?: StringFilter | string
    destination?: StringFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    mime?: StringFilter | string
    tags?: StringFilter | string
    metadata?: StringFilter | string
    params?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type FileOrderByWithRelationInput = {
    fileId?: SortOrder
    source?: SortOrder
    type?: SortOrder
    destination?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mime?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    params?: SortOrder
    createdAt?: SortOrder
  }

  export type FileWhereUniqueInput = {
    fileId?: number
    source?: string
  }

  export type FileOrderByWithAggregationInput = {
    fileId?: SortOrder
    source?: SortOrder
    type?: SortOrder
    destination?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mime?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    params?: SortOrder
    createdAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FileScalarWhereWithAggregatesInput>
    OR?: Enumerable<FileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FileScalarWhereWithAggregatesInput>
    fileId?: IntWithAggregatesFilter | number
    source?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    destination?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    mime?: StringWithAggregatesFilter | string
    tags?: StringWithAggregatesFilter | string
    metadata?: StringWithAggregatesFilter | string
    params?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PublicationWhereInput = {
    AND?: Enumerable<PublicationWhereInput>
    OR?: Enumerable<PublicationWhereInput>
    NOT?: Enumerable<PublicationWhereInput>
    publicationId?: IntFilter | number
    source?: StringFilter | string
    name?: StringFilter | string
    summary?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    status?: StringFilter | string
    contributors?: PublicationContributorListRelationFilter
    chapters?: PublicationChapterListRelationFilter
    pages?: PublicationChapterPageListRelationFilter
  }

  export type PublicationOrderByWithRelationInput = {
    publicationId?: SortOrder
    source?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    contributors?: PublicationContributorOrderByRelationAggregateInput
    chapters?: PublicationChapterOrderByRelationAggregateInput
    pages?: PublicationChapterPageOrderByRelationAggregateInput
  }

  export type PublicationWhereUniqueInput = {
    publicationId?: number
    source?: string
  }

  export type PublicationOrderByWithAggregationInput = {
    publicationId?: SortOrder
    source?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _avg?: PublicationAvgOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
    _sum?: PublicationSumOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublicationScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublicationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublicationScalarWhereWithAggregatesInput>
    publicationId?: IntWithAggregatesFilter | number
    source?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    summary?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    status?: StringWithAggregatesFilter | string
  }

  export type PublicationChapterWhereInput = {
    AND?: Enumerable<PublicationChapterWhereInput>
    OR?: Enumerable<PublicationChapterWhereInput>
    NOT?: Enumerable<PublicationChapterWhereInput>
    chapterId?: IntFilter | number
    publicationId?: IntFilter | number
    source?: StringFilter | string
    title?: StringFilter | string
    summary?: StringNullableFilter | string | null
    publishedAt?: DateTimeNullableFilter | Date | string | null
    publication?: XOR<PublicationRelationFilter, PublicationWhereInput>
    pages?: PublicationChapterPageListRelationFilter
  }

  export type PublicationChapterOrderByWithRelationInput = {
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    publishedAt?: SortOrder
    publication?: PublicationOrderByWithRelationInput
    pages?: PublicationChapterPageOrderByRelationAggregateInput
  }

  export type PublicationChapterWhereUniqueInput = {
    chapterId?: number
    source?: string
    source_publicationId?: PublicationChapterSourcePublicationIdCompoundUniqueInput
  }

  export type PublicationChapterOrderByWithAggregationInput = {
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    publishedAt?: SortOrder
    _count?: PublicationChapterCountOrderByAggregateInput
    _avg?: PublicationChapterAvgOrderByAggregateInput
    _max?: PublicationChapterMaxOrderByAggregateInput
    _min?: PublicationChapterMinOrderByAggregateInput
    _sum?: PublicationChapterSumOrderByAggregateInput
  }

  export type PublicationChapterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublicationChapterScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublicationChapterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublicationChapterScalarWhereWithAggregatesInput>
    chapterId?: IntWithAggregatesFilter | number
    publicationId?: IntWithAggregatesFilter | number
    source?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    summary?: StringNullableWithAggregatesFilter | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type PublicationChapterPageWhereInput = {
    AND?: Enumerable<PublicationChapterPageWhereInput>
    OR?: Enumerable<PublicationChapterPageWhereInput>
    NOT?: Enumerable<PublicationChapterPageWhereInput>
    pageId?: IntFilter | number
    chapterId?: IntNullableFilter | number | null
    publicationId?: IntFilter | number
    source?: StringFilter | string
    content?: StringNullableFilter | string | null
    chapter?: XOR<PublicationChapterRelationFilter, PublicationChapterWhereInput> | null
    publication?: XOR<PublicationRelationFilter, PublicationWhereInput>
  }

  export type PublicationChapterPageOrderByWithRelationInput = {
    pageId?: SortOrder
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    content?: SortOrder
    chapter?: PublicationChapterOrderByWithRelationInput
    publication?: PublicationOrderByWithRelationInput
  }

  export type PublicationChapterPageWhereUniqueInput = {
    pageId?: number
    source?: string
    source_chapterId?: PublicationChapterPageSourceChapterIdCompoundUniqueInput
  }

  export type PublicationChapterPageOrderByWithAggregationInput = {
    pageId?: SortOrder
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    content?: SortOrder
    _count?: PublicationChapterPageCountOrderByAggregateInput
    _avg?: PublicationChapterPageAvgOrderByAggregateInput
    _max?: PublicationChapterPageMaxOrderByAggregateInput
    _min?: PublicationChapterPageMinOrderByAggregateInput
    _sum?: PublicationChapterPageSumOrderByAggregateInput
  }

  export type PublicationChapterPageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublicationChapterPageScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublicationChapterPageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublicationChapterPageScalarWhereWithAggregatesInput>
    pageId?: IntWithAggregatesFilter | number
    chapterId?: IntNullableWithAggregatesFilter | number | null
    publicationId?: IntWithAggregatesFilter | number
    source?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
  }

  export type PublicationContributorWhereInput = {
    AND?: Enumerable<PublicationContributorWhereInput>
    OR?: Enumerable<PublicationContributorWhereInput>
    NOT?: Enumerable<PublicationContributorWhereInput>
    publicationId?: IntFilter | number
    userId?: IntFilter | number
    role?: StringFilter | string
    publication?: XOR<PublicationRelationFilter, PublicationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PublicationContributorOrderByWithRelationInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    publication?: PublicationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PublicationContributorWhereUniqueInput = {
    publicationId_userId_role?: PublicationContributorPublicationIdUserIdRoleCompoundUniqueInput
  }

  export type PublicationContributorOrderByWithAggregationInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    _count?: PublicationContributorCountOrderByAggregateInput
    _avg?: PublicationContributorAvgOrderByAggregateInput
    _max?: PublicationContributorMaxOrderByAggregateInput
    _min?: PublicationContributorMinOrderByAggregateInput
    _sum?: PublicationContributorSumOrderByAggregateInput
  }

  export type PublicationContributorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublicationContributorScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublicationContributorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublicationContributorScalarWhereWithAggregatesInput>
    publicationId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    role?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    handle: string
    displayName?: string | null
    links?: string
    threadsAuthored?: ThreadCreateNestedManyWithoutAuthorInput
    threadsParticipating?: ThreadParticipantCreateNestedManyWithoutUserInput
    publicationsContributed?: PublicationContributorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    handle: string
    displayName?: string | null
    links?: string
    threadsAuthored?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    threadsParticipating?: ThreadParticipantUncheckedCreateNestedManyWithoutUserInput
    publicationsContributed?: PublicationContributorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
    threadsAuthored?: ThreadUpdateManyWithoutAuthorNestedInput
    threadsParticipating?: ThreadParticipantUpdateManyWithoutUserNestedInput
    publicationsContributed?: PublicationContributorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
    threadsAuthored?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    threadsParticipating?: ThreadParticipantUncheckedUpdateManyWithoutUserNestedInput
    publicationsContributed?: PublicationContributorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
  }

  export type ThreadCreateInput = {
    source: string
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    parentThread?: ThreadCreateNestedOneWithoutRepliesInput
    replies?: ThreadCreateNestedManyWithoutParentThreadInput
    rootThread?: ThreadCreateNestedOneWithoutConversationInput
    paricipants?: ThreadParticipantCreateNestedManyWithoutThreadInput
    conversation?: ThreadCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadUncheckedCreateInput = {
    threadId?: number
    source: string
    parentThreadId?: number | null
    rootThreadId?: number | null
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    authorId: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    replies?: ThreadUncheckedCreateNestedManyWithoutParentThreadInput
    paricipants?: ThreadParticipantUncheckedCreateNestedManyWithoutThreadInput
    conversation?: ThreadUncheckedCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    parentThread?: ThreadUpdateOneWithoutRepliesNestedInput
    replies?: ThreadUpdateManyWithoutParentThreadNestedInput
    rootThread?: ThreadUpdateOneWithoutConversationNestedInput
    paricipants?: ThreadParticipantUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    replies?: ThreadUncheckedUpdateManyWithoutParentThreadNestedInput
    paricipants?: ThreadParticipantUncheckedUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUncheckedUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThreadUncheckedUpdateManyInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThreadParticipantCreateInput = {
    thread: ThreadCreateNestedOneWithoutParicipantsInput
    user: UserCreateNestedOneWithoutThreadsParticipatingInput
  }

  export type ThreadParticipantUncheckedCreateInput = {
    threadId: number
    userId: number
  }

  export type ThreadParticipantUpdateInput = {
    thread?: ThreadUpdateOneRequiredWithoutParicipantsNestedInput
    user?: UserUpdateOneRequiredWithoutThreadsParticipatingNestedInput
  }

  export type ThreadParticipantUncheckedUpdateInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ThreadParticipantUpdateManyMutationInput = {

  }

  export type ThreadParticipantUncheckedUpdateManyInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FileCreateInput = {
    source: string
    type: string
    destination: string
    name: string
    description?: string | null
    mime: string
    tags?: string
    metadata?: string
    params: string
    createdAt?: Date | string
  }

  export type FileUncheckedCreateInput = {
    fileId?: number
    source: string
    type: string
    destination: string
    name: string
    description?: string | null
    mime: string
    tags?: string
    metadata?: string
    params: string
    createdAt?: Date | string
  }

  export type FileUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    params?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    params?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    params?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    params?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateInput = {
    source: string
    name: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    contributors?: PublicationContributorCreateNestedManyWithoutPublicationInput
    chapters?: PublicationChapterCreateNestedManyWithoutPublicationInput
    pages?: PublicationChapterPageCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUncheckedCreateInput = {
    publicationId?: number
    source: string
    name: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    contributors?: PublicationContributorUncheckedCreateNestedManyWithoutPublicationInput
    chapters?: PublicationChapterUncheckedCreateNestedManyWithoutPublicationInput
    pages?: PublicationChapterPageUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    contributors?: PublicationContributorUpdateManyWithoutPublicationNestedInput
    chapters?: PublicationChapterUpdateManyWithoutPublicationNestedInput
    pages?: PublicationChapterPageUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    contributors?: PublicationContributorUncheckedUpdateManyWithoutPublicationNestedInput
    chapters?: PublicationChapterUncheckedUpdateManyWithoutPublicationNestedInput
    pages?: PublicationChapterPageUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationUncheckedUpdateManyInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationChapterCreateInput = {
    source: string
    title: string
    summary?: string | null
    publishedAt?: Date | string | null
    publication: PublicationCreateNestedOneWithoutChaptersInput
    pages?: PublicationChapterPageCreateNestedManyWithoutChapterInput
  }

  export type PublicationChapterUncheckedCreateInput = {
    chapterId?: number
    publicationId: number
    source: string
    title: string
    summary?: string | null
    publishedAt?: Date | string | null
    pages?: PublicationChapterPageUncheckedCreateNestedManyWithoutChapterInput
  }

  export type PublicationChapterUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publication?: PublicationUpdateOneRequiredWithoutChaptersNestedInput
    pages?: PublicationChapterPageUpdateManyWithoutChapterNestedInput
  }

  export type PublicationChapterUncheckedUpdateInput = {
    chapterId?: IntFieldUpdateOperationsInput | number
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PublicationChapterPageUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type PublicationChapterUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicationChapterUncheckedUpdateManyInput = {
    chapterId?: IntFieldUpdateOperationsInput | number
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicationChapterPageCreateInput = {
    source: string
    content?: string | null
    chapter?: PublicationChapterCreateNestedOneWithoutPagesInput
    publication: PublicationCreateNestedOneWithoutPagesInput
  }

  export type PublicationChapterPageUncheckedCreateInput = {
    pageId?: number
    chapterId?: number | null
    publicationId: number
    source: string
    content?: string | null
  }

  export type PublicationChapterPageUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: PublicationChapterUpdateOneWithoutPagesNestedInput
    publication?: PublicationUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PublicationChapterPageUncheckedUpdateInput = {
    pageId?: IntFieldUpdateOperationsInput | number
    chapterId?: NullableIntFieldUpdateOperationsInput | number | null
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationChapterPageUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationChapterPageUncheckedUpdateManyInput = {
    pageId?: IntFieldUpdateOperationsInput | number
    chapterId?: NullableIntFieldUpdateOperationsInput | number | null
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationContributorCreateInput = {
    role: string
    publication: PublicationCreateNestedOneWithoutContributorsInput
    user: UserCreateNestedOneWithoutPublicationsContributedInput
  }

  export type PublicationContributorUncheckedCreateInput = {
    publicationId: number
    userId: number
    role: string
  }

  export type PublicationContributorUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    publication?: PublicationUpdateOneRequiredWithoutContributorsNestedInput
    user?: UserUpdateOneRequiredWithoutPublicationsContributedNestedInput
  }

  export type PublicationContributorUncheckedUpdateInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationContributorUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationContributorUncheckedUpdateManyInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type ThreadListRelationFilter = {
    every?: ThreadWhereInput
    some?: ThreadWhereInput
    none?: ThreadWhereInput
  }

  export type ThreadParticipantListRelationFilter = {
    every?: ThreadParticipantWhereInput
    some?: ThreadParticipantWhereInput
    none?: ThreadParticipantWhereInput
  }

  export type PublicationContributorListRelationFilter = {
    every?: PublicationContributorWhereInput
    some?: PublicationContributorWhereInput
    none?: PublicationContributorWhereInput
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThreadParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationContributorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    links?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    links?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    links?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ThreadRelationFilter = {
    is?: ThreadWhereInput
    isNot?: ThreadWhereInput
  }

  export type ThreadCountOrderByAggregateInput = {
    threadId?: SortOrder
    source?: SortOrder
    parentThreadId?: SortOrder
    rootThreadId?: SortOrder
    threadOrigin?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    lastUpdatedAt?: SortOrder
    numViews?: SortOrder
    numReplies?: SortOrder
    numLikes?: SortOrder
    numDislikes?: SortOrder
    numReactions?: SortOrder
    numInteractions?: SortOrder
    authorId?: SortOrder
    isRoot?: SortOrder
    isDeleted?: SortOrder
    isLocked?: SortOrder
  }

  export type ThreadAvgOrderByAggregateInput = {
    threadId?: SortOrder
    parentThreadId?: SortOrder
    rootThreadId?: SortOrder
    numViews?: SortOrder
    numReplies?: SortOrder
    numLikes?: SortOrder
    numDislikes?: SortOrder
    numReactions?: SortOrder
    numInteractions?: SortOrder
    authorId?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    threadId?: SortOrder
    source?: SortOrder
    parentThreadId?: SortOrder
    rootThreadId?: SortOrder
    threadOrigin?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    lastUpdatedAt?: SortOrder
    numViews?: SortOrder
    numReplies?: SortOrder
    numLikes?: SortOrder
    numDislikes?: SortOrder
    numReactions?: SortOrder
    numInteractions?: SortOrder
    authorId?: SortOrder
    isRoot?: SortOrder
    isDeleted?: SortOrder
    isLocked?: SortOrder
  }

  export type ThreadMinOrderByAggregateInput = {
    threadId?: SortOrder
    source?: SortOrder
    parentThreadId?: SortOrder
    rootThreadId?: SortOrder
    threadOrigin?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    lastUpdatedAt?: SortOrder
    numViews?: SortOrder
    numReplies?: SortOrder
    numLikes?: SortOrder
    numDislikes?: SortOrder
    numReactions?: SortOrder
    numInteractions?: SortOrder
    authorId?: SortOrder
    isRoot?: SortOrder
    isDeleted?: SortOrder
    isLocked?: SortOrder
  }

  export type ThreadSumOrderByAggregateInput = {
    threadId?: SortOrder
    parentThreadId?: SortOrder
    rootThreadId?: SortOrder
    numViews?: SortOrder
    numReplies?: SortOrder
    numLikes?: SortOrder
    numDislikes?: SortOrder
    numReactions?: SortOrder
    numInteractions?: SortOrder
    authorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ThreadParticipantThreadIdUserIdCompoundUniqueInput = {
    threadId: number
    userId: number
  }

  export type ThreadParticipantCountOrderByAggregateInput = {
    threadId?: SortOrder
    userId?: SortOrder
  }

  export type ThreadParticipantAvgOrderByAggregateInput = {
    threadId?: SortOrder
    userId?: SortOrder
  }

  export type ThreadParticipantMaxOrderByAggregateInput = {
    threadId?: SortOrder
    userId?: SortOrder
  }

  export type ThreadParticipantMinOrderByAggregateInput = {
    threadId?: SortOrder
    userId?: SortOrder
  }

  export type ThreadParticipantSumOrderByAggregateInput = {
    threadId?: SortOrder
    userId?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    fileId?: SortOrder
    source?: SortOrder
    type?: SortOrder
    destination?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mime?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    params?: SortOrder
    createdAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    fileId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    fileId?: SortOrder
    source?: SortOrder
    type?: SortOrder
    destination?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mime?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    params?: SortOrder
    createdAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    fileId?: SortOrder
    source?: SortOrder
    type?: SortOrder
    destination?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mime?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    params?: SortOrder
    createdAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    fileId?: SortOrder
  }

  export type PublicationChapterListRelationFilter = {
    every?: PublicationChapterWhereInput
    some?: PublicationChapterWhereInput
    none?: PublicationChapterWhereInput
  }

  export type PublicationChapterPageListRelationFilter = {
    every?: PublicationChapterPageWhereInput
    some?: PublicationChapterPageWhereInput
    none?: PublicationChapterPageWhereInput
  }

  export type PublicationChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationChapterPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationCountOrderByAggregateInput = {
    publicationId?: SortOrder
    source?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type PublicationAvgOrderByAggregateInput = {
    publicationId?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    publicationId?: SortOrder
    source?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    publicationId?: SortOrder
    source?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type PublicationSumOrderByAggregateInput = {
    publicationId?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type PublicationRelationFilter = {
    is?: PublicationWhereInput
    isNot?: PublicationWhereInput
  }

  export type PublicationChapterSourcePublicationIdCompoundUniqueInput = {
    source: string
    publicationId: number
  }

  export type PublicationChapterCountOrderByAggregateInput = {
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    publishedAt?: SortOrder
  }

  export type PublicationChapterAvgOrderByAggregateInput = {
    chapterId?: SortOrder
    publicationId?: SortOrder
  }

  export type PublicationChapterMaxOrderByAggregateInput = {
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    publishedAt?: SortOrder
  }

  export type PublicationChapterMinOrderByAggregateInput = {
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    publishedAt?: SortOrder
  }

  export type PublicationChapterSumOrderByAggregateInput = {
    chapterId?: SortOrder
    publicationId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type PublicationChapterRelationFilter = {
    is?: PublicationChapterWhereInput | null
    isNot?: PublicationChapterWhereInput | null
  }

  export type PublicationChapterPageSourceChapterIdCompoundUniqueInput = {
    source: string
    chapterId: number
  }

  export type PublicationChapterPageCountOrderByAggregateInput = {
    pageId?: SortOrder
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    content?: SortOrder
  }

  export type PublicationChapterPageAvgOrderByAggregateInput = {
    pageId?: SortOrder
    chapterId?: SortOrder
    publicationId?: SortOrder
  }

  export type PublicationChapterPageMaxOrderByAggregateInput = {
    pageId?: SortOrder
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    content?: SortOrder
  }

  export type PublicationChapterPageMinOrderByAggregateInput = {
    pageId?: SortOrder
    chapterId?: SortOrder
    publicationId?: SortOrder
    source?: SortOrder
    content?: SortOrder
  }

  export type PublicationChapterPageSumOrderByAggregateInput = {
    pageId?: SortOrder
    chapterId?: SortOrder
    publicationId?: SortOrder
  }

  export type PublicationContributorPublicationIdUserIdRoleCompoundUniqueInput = {
    publicationId: number
    userId: number
    role: string
  }

  export type PublicationContributorCountOrderByAggregateInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type PublicationContributorAvgOrderByAggregateInput = {
    publicationId?: SortOrder
    userId?: SortOrder
  }

  export type PublicationContributorMaxOrderByAggregateInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type PublicationContributorMinOrderByAggregateInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type PublicationContributorSumOrderByAggregateInput = {
    publicationId?: SortOrder
    userId?: SortOrder
  }

  export type ThreadCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type ThreadParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ThreadParticipantCreateWithoutUserInput>, Enumerable<ThreadParticipantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ThreadParticipantCreateOrConnectWithoutUserInput>
    connect?: Enumerable<ThreadParticipantWhereUniqueInput>
  }

  export type PublicationContributorCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PublicationContributorCreateWithoutUserInput>, Enumerable<PublicationContributorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicationContributorCreateOrConnectWithoutUserInput>
    connect?: Enumerable<PublicationContributorWhereUniqueInput>
  }

  export type ThreadUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type ThreadParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ThreadParticipantCreateWithoutUserInput>, Enumerable<ThreadParticipantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ThreadParticipantCreateOrConnectWithoutUserInput>
    connect?: Enumerable<ThreadParticipantWhereUniqueInput>
  }

  export type PublicationContributorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PublicationContributorCreateWithoutUserInput>, Enumerable<PublicationContributorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicationContributorCreateOrConnectWithoutUserInput>
    connect?: Enumerable<PublicationContributorWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ThreadUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutAuthorInput>
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type ThreadParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ThreadParticipantCreateWithoutUserInput>, Enumerable<ThreadParticipantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ThreadParticipantCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ThreadParticipantUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<ThreadParticipantWhereUniqueInput>
    disconnect?: Enumerable<ThreadParticipantWhereUniqueInput>
    delete?: Enumerable<ThreadParticipantWhereUniqueInput>
    connect?: Enumerable<ThreadParticipantWhereUniqueInput>
    update?: Enumerable<ThreadParticipantUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ThreadParticipantUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ThreadParticipantScalarWhereInput>
  }

  export type PublicationContributorUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PublicationContributorCreateWithoutUserInput>, Enumerable<PublicationContributorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicationContributorCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PublicationContributorUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<PublicationContributorWhereUniqueInput>
    disconnect?: Enumerable<PublicationContributorWhereUniqueInput>
    delete?: Enumerable<PublicationContributorWhereUniqueInput>
    connect?: Enumerable<PublicationContributorWhereUniqueInput>
    update?: Enumerable<PublicationContributorUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PublicationContributorUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PublicationContributorScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutAuthorInput>
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type ThreadParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ThreadParticipantCreateWithoutUserInput>, Enumerable<ThreadParticipantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ThreadParticipantCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ThreadParticipantUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<ThreadParticipantWhereUniqueInput>
    disconnect?: Enumerable<ThreadParticipantWhereUniqueInput>
    delete?: Enumerable<ThreadParticipantWhereUniqueInput>
    connect?: Enumerable<ThreadParticipantWhereUniqueInput>
    update?: Enumerable<ThreadParticipantUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ThreadParticipantUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ThreadParticipantScalarWhereInput>
  }

  export type PublicationContributorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PublicationContributorCreateWithoutUserInput>, Enumerable<PublicationContributorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicationContributorCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PublicationContributorUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<PublicationContributorWhereUniqueInput>
    disconnect?: Enumerable<PublicationContributorWhereUniqueInput>
    delete?: Enumerable<PublicationContributorWhereUniqueInput>
    connect?: Enumerable<PublicationContributorWhereUniqueInput>
    update?: Enumerable<PublicationContributorUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PublicationContributorUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PublicationContributorScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutThreadsAuthoredInput = {
    create?: XOR<UserCreateWithoutThreadsAuthoredInput, UserUncheckedCreateWithoutThreadsAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsAuthoredInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ThreadCreateWithoutRepliesInput, ThreadUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutRepliesInput
    connect?: ThreadWhereUniqueInput
  }

  export type ThreadCreateNestedManyWithoutParentThreadInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutParentThreadInput>, Enumerable<ThreadUncheckedCreateWithoutParentThreadInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutParentThreadInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type ThreadCreateNestedOneWithoutConversationInput = {
    create?: XOR<ThreadCreateWithoutConversationInput, ThreadUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutConversationInput
    connect?: ThreadWhereUniqueInput
  }

  export type ThreadParticipantCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<ThreadParticipantCreateWithoutThreadInput>, Enumerable<ThreadParticipantUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<ThreadParticipantCreateOrConnectWithoutThreadInput>
    connect?: Enumerable<ThreadParticipantWhereUniqueInput>
  }

  export type ThreadCreateNestedManyWithoutRootThreadInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutRootThreadInput>, Enumerable<ThreadUncheckedCreateWithoutRootThreadInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutRootThreadInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type ThreadUncheckedCreateNestedManyWithoutParentThreadInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutParentThreadInput>, Enumerable<ThreadUncheckedCreateWithoutParentThreadInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutParentThreadInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type ThreadParticipantUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<ThreadParticipantCreateWithoutThreadInput>, Enumerable<ThreadParticipantUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<ThreadParticipantCreateOrConnectWithoutThreadInput>
    connect?: Enumerable<ThreadParticipantWhereUniqueInput>
  }

  export type ThreadUncheckedCreateNestedManyWithoutRootThreadInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutRootThreadInput>, Enumerable<ThreadUncheckedCreateWithoutRootThreadInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutRootThreadInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput = {
    create?: XOR<UserCreateWithoutThreadsAuthoredInput, UserUncheckedCreateWithoutThreadsAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsAuthoredInput
    upsert?: UserUpsertWithoutThreadsAuthoredInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutThreadsAuthoredInput, UserUncheckedUpdateWithoutThreadsAuthoredInput>
  }

  export type ThreadUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ThreadCreateWithoutRepliesInput, ThreadUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutRepliesInput
    upsert?: ThreadUpsertWithoutRepliesInput
    disconnect?: boolean
    delete?: boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<ThreadUpdateWithoutRepliesInput, ThreadUncheckedUpdateWithoutRepliesInput>
  }

  export type ThreadUpdateManyWithoutParentThreadNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutParentThreadInput>, Enumerable<ThreadUncheckedCreateWithoutParentThreadInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutParentThreadInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutParentThreadInput>
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutParentThreadInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutParentThreadInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type ThreadUpdateOneWithoutConversationNestedInput = {
    create?: XOR<ThreadCreateWithoutConversationInput, ThreadUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutConversationInput
    upsert?: ThreadUpsertWithoutConversationInput
    disconnect?: boolean
    delete?: boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<ThreadUpdateWithoutConversationInput, ThreadUncheckedUpdateWithoutConversationInput>
  }

  export type ThreadParticipantUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<ThreadParticipantCreateWithoutThreadInput>, Enumerable<ThreadParticipantUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<ThreadParticipantCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<ThreadParticipantUpsertWithWhereUniqueWithoutThreadInput>
    set?: Enumerable<ThreadParticipantWhereUniqueInput>
    disconnect?: Enumerable<ThreadParticipantWhereUniqueInput>
    delete?: Enumerable<ThreadParticipantWhereUniqueInput>
    connect?: Enumerable<ThreadParticipantWhereUniqueInput>
    update?: Enumerable<ThreadParticipantUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<ThreadParticipantUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<ThreadParticipantScalarWhereInput>
  }

  export type ThreadUpdateManyWithoutRootThreadNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutRootThreadInput>, Enumerable<ThreadUncheckedCreateWithoutRootThreadInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutRootThreadInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutRootThreadInput>
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutRootThreadInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutRootThreadInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ThreadUncheckedUpdateManyWithoutParentThreadNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutParentThreadInput>, Enumerable<ThreadUncheckedCreateWithoutParentThreadInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutParentThreadInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutParentThreadInput>
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutParentThreadInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutParentThreadInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type ThreadParticipantUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<ThreadParticipantCreateWithoutThreadInput>, Enumerable<ThreadParticipantUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<ThreadParticipantCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<ThreadParticipantUpsertWithWhereUniqueWithoutThreadInput>
    set?: Enumerable<ThreadParticipantWhereUniqueInput>
    disconnect?: Enumerable<ThreadParticipantWhereUniqueInput>
    delete?: Enumerable<ThreadParticipantWhereUniqueInput>
    connect?: Enumerable<ThreadParticipantWhereUniqueInput>
    update?: Enumerable<ThreadParticipantUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<ThreadParticipantUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<ThreadParticipantScalarWhereInput>
  }

  export type ThreadUncheckedUpdateManyWithoutRootThreadNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutRootThreadInput>, Enumerable<ThreadUncheckedCreateWithoutRootThreadInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutRootThreadInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutRootThreadInput>
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutRootThreadInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutRootThreadInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type ThreadCreateNestedOneWithoutParicipantsInput = {
    create?: XOR<ThreadCreateWithoutParicipantsInput, ThreadUncheckedCreateWithoutParicipantsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutParicipantsInput
    connect?: ThreadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutThreadsParticipatingInput = {
    create?: XOR<UserCreateWithoutThreadsParticipatingInput, UserUncheckedCreateWithoutThreadsParticipatingInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsParticipatingInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadUpdateOneRequiredWithoutParicipantsNestedInput = {
    create?: XOR<ThreadCreateWithoutParicipantsInput, ThreadUncheckedCreateWithoutParicipantsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutParicipantsInput
    upsert?: ThreadUpsertWithoutParicipantsInput
    connect?: ThreadWhereUniqueInput
    update?: XOR<ThreadUpdateWithoutParicipantsInput, ThreadUncheckedUpdateWithoutParicipantsInput>
  }

  export type UserUpdateOneRequiredWithoutThreadsParticipatingNestedInput = {
    create?: XOR<UserCreateWithoutThreadsParticipatingInput, UserUncheckedCreateWithoutThreadsParticipatingInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsParticipatingInput
    upsert?: UserUpsertWithoutThreadsParticipatingInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutThreadsParticipatingInput, UserUncheckedUpdateWithoutThreadsParticipatingInput>
  }

  export type PublicationContributorCreateNestedManyWithoutPublicationInput = {
    create?: XOR<Enumerable<PublicationContributorCreateWithoutPublicationInput>, Enumerable<PublicationContributorUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationContributorCreateOrConnectWithoutPublicationInput>
    connect?: Enumerable<PublicationContributorWhereUniqueInput>
  }

  export type PublicationChapterCreateNestedManyWithoutPublicationInput = {
    create?: XOR<Enumerable<PublicationChapterCreateWithoutPublicationInput>, Enumerable<PublicationChapterUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationChapterCreateOrConnectWithoutPublicationInput>
    connect?: Enumerable<PublicationChapterWhereUniqueInput>
  }

  export type PublicationChapterPageCreateNestedManyWithoutPublicationInput = {
    create?: XOR<Enumerable<PublicationChapterPageCreateWithoutPublicationInput>, Enumerable<PublicationChapterPageUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationChapterPageCreateOrConnectWithoutPublicationInput>
    connect?: Enumerable<PublicationChapterPageWhereUniqueInput>
  }

  export type PublicationContributorUncheckedCreateNestedManyWithoutPublicationInput = {
    create?: XOR<Enumerable<PublicationContributorCreateWithoutPublicationInput>, Enumerable<PublicationContributorUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationContributorCreateOrConnectWithoutPublicationInput>
    connect?: Enumerable<PublicationContributorWhereUniqueInput>
  }

  export type PublicationChapterUncheckedCreateNestedManyWithoutPublicationInput = {
    create?: XOR<Enumerable<PublicationChapterCreateWithoutPublicationInput>, Enumerable<PublicationChapterUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationChapterCreateOrConnectWithoutPublicationInput>
    connect?: Enumerable<PublicationChapterWhereUniqueInput>
  }

  export type PublicationChapterPageUncheckedCreateNestedManyWithoutPublicationInput = {
    create?: XOR<Enumerable<PublicationChapterPageCreateWithoutPublicationInput>, Enumerable<PublicationChapterPageUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationChapterPageCreateOrConnectWithoutPublicationInput>
    connect?: Enumerable<PublicationChapterPageWhereUniqueInput>
  }

  export type PublicationContributorUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<Enumerable<PublicationContributorCreateWithoutPublicationInput>, Enumerable<PublicationContributorUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationContributorCreateOrConnectWithoutPublicationInput>
    upsert?: Enumerable<PublicationContributorUpsertWithWhereUniqueWithoutPublicationInput>
    set?: Enumerable<PublicationContributorWhereUniqueInput>
    disconnect?: Enumerable<PublicationContributorWhereUniqueInput>
    delete?: Enumerable<PublicationContributorWhereUniqueInput>
    connect?: Enumerable<PublicationContributorWhereUniqueInput>
    update?: Enumerable<PublicationContributorUpdateWithWhereUniqueWithoutPublicationInput>
    updateMany?: Enumerable<PublicationContributorUpdateManyWithWhereWithoutPublicationInput>
    deleteMany?: Enumerable<PublicationContributorScalarWhereInput>
  }

  export type PublicationChapterUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<Enumerable<PublicationChapterCreateWithoutPublicationInput>, Enumerable<PublicationChapterUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationChapterCreateOrConnectWithoutPublicationInput>
    upsert?: Enumerable<PublicationChapterUpsertWithWhereUniqueWithoutPublicationInput>
    set?: Enumerable<PublicationChapterWhereUniqueInput>
    disconnect?: Enumerable<PublicationChapterWhereUniqueInput>
    delete?: Enumerable<PublicationChapterWhereUniqueInput>
    connect?: Enumerable<PublicationChapterWhereUniqueInput>
    update?: Enumerable<PublicationChapterUpdateWithWhereUniqueWithoutPublicationInput>
    updateMany?: Enumerable<PublicationChapterUpdateManyWithWhereWithoutPublicationInput>
    deleteMany?: Enumerable<PublicationChapterScalarWhereInput>
  }

  export type PublicationChapterPageUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<Enumerable<PublicationChapterPageCreateWithoutPublicationInput>, Enumerable<PublicationChapterPageUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationChapterPageCreateOrConnectWithoutPublicationInput>
    upsert?: Enumerable<PublicationChapterPageUpsertWithWhereUniqueWithoutPublicationInput>
    set?: Enumerable<PublicationChapterPageWhereUniqueInput>
    disconnect?: Enumerable<PublicationChapterPageWhereUniqueInput>
    delete?: Enumerable<PublicationChapterPageWhereUniqueInput>
    connect?: Enumerable<PublicationChapterPageWhereUniqueInput>
    update?: Enumerable<PublicationChapterPageUpdateWithWhereUniqueWithoutPublicationInput>
    updateMany?: Enumerable<PublicationChapterPageUpdateManyWithWhereWithoutPublicationInput>
    deleteMany?: Enumerable<PublicationChapterPageScalarWhereInput>
  }

  export type PublicationContributorUncheckedUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<Enumerable<PublicationContributorCreateWithoutPublicationInput>, Enumerable<PublicationContributorUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationContributorCreateOrConnectWithoutPublicationInput>
    upsert?: Enumerable<PublicationContributorUpsertWithWhereUniqueWithoutPublicationInput>
    set?: Enumerable<PublicationContributorWhereUniqueInput>
    disconnect?: Enumerable<PublicationContributorWhereUniqueInput>
    delete?: Enumerable<PublicationContributorWhereUniqueInput>
    connect?: Enumerable<PublicationContributorWhereUniqueInput>
    update?: Enumerable<PublicationContributorUpdateWithWhereUniqueWithoutPublicationInput>
    updateMany?: Enumerable<PublicationContributorUpdateManyWithWhereWithoutPublicationInput>
    deleteMany?: Enumerable<PublicationContributorScalarWhereInput>
  }

  export type PublicationChapterUncheckedUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<Enumerable<PublicationChapterCreateWithoutPublicationInput>, Enumerable<PublicationChapterUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationChapterCreateOrConnectWithoutPublicationInput>
    upsert?: Enumerable<PublicationChapterUpsertWithWhereUniqueWithoutPublicationInput>
    set?: Enumerable<PublicationChapterWhereUniqueInput>
    disconnect?: Enumerable<PublicationChapterWhereUniqueInput>
    delete?: Enumerable<PublicationChapterWhereUniqueInput>
    connect?: Enumerable<PublicationChapterWhereUniqueInput>
    update?: Enumerable<PublicationChapterUpdateWithWhereUniqueWithoutPublicationInput>
    updateMany?: Enumerable<PublicationChapterUpdateManyWithWhereWithoutPublicationInput>
    deleteMany?: Enumerable<PublicationChapterScalarWhereInput>
  }

  export type PublicationChapterPageUncheckedUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<Enumerable<PublicationChapterPageCreateWithoutPublicationInput>, Enumerable<PublicationChapterPageUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationChapterPageCreateOrConnectWithoutPublicationInput>
    upsert?: Enumerable<PublicationChapterPageUpsertWithWhereUniqueWithoutPublicationInput>
    set?: Enumerable<PublicationChapterPageWhereUniqueInput>
    disconnect?: Enumerable<PublicationChapterPageWhereUniqueInput>
    delete?: Enumerable<PublicationChapterPageWhereUniqueInput>
    connect?: Enumerable<PublicationChapterPageWhereUniqueInput>
    update?: Enumerable<PublicationChapterPageUpdateWithWhereUniqueWithoutPublicationInput>
    updateMany?: Enumerable<PublicationChapterPageUpdateManyWithWhereWithoutPublicationInput>
    deleteMany?: Enumerable<PublicationChapterPageScalarWhereInput>
  }

  export type PublicationCreateNestedOneWithoutChaptersInput = {
    create?: XOR<PublicationCreateWithoutChaptersInput, PublicationUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutChaptersInput
    connect?: PublicationWhereUniqueInput
  }

  export type PublicationChapterPageCreateNestedManyWithoutChapterInput = {
    create?: XOR<Enumerable<PublicationChapterPageCreateWithoutChapterInput>, Enumerable<PublicationChapterPageUncheckedCreateWithoutChapterInput>>
    connectOrCreate?: Enumerable<PublicationChapterPageCreateOrConnectWithoutChapterInput>
    connect?: Enumerable<PublicationChapterPageWhereUniqueInput>
  }

  export type PublicationChapterPageUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<Enumerable<PublicationChapterPageCreateWithoutChapterInput>, Enumerable<PublicationChapterPageUncheckedCreateWithoutChapterInput>>
    connectOrCreate?: Enumerable<PublicationChapterPageCreateOrConnectWithoutChapterInput>
    connect?: Enumerable<PublicationChapterPageWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PublicationUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<PublicationCreateWithoutChaptersInput, PublicationUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutChaptersInput
    upsert?: PublicationUpsertWithoutChaptersInput
    connect?: PublicationWhereUniqueInput
    update?: XOR<PublicationUpdateWithoutChaptersInput, PublicationUncheckedUpdateWithoutChaptersInput>
  }

  export type PublicationChapterPageUpdateManyWithoutChapterNestedInput = {
    create?: XOR<Enumerable<PublicationChapterPageCreateWithoutChapterInput>, Enumerable<PublicationChapterPageUncheckedCreateWithoutChapterInput>>
    connectOrCreate?: Enumerable<PublicationChapterPageCreateOrConnectWithoutChapterInput>
    upsert?: Enumerable<PublicationChapterPageUpsertWithWhereUniqueWithoutChapterInput>
    set?: Enumerable<PublicationChapterPageWhereUniqueInput>
    disconnect?: Enumerable<PublicationChapterPageWhereUniqueInput>
    delete?: Enumerable<PublicationChapterPageWhereUniqueInput>
    connect?: Enumerable<PublicationChapterPageWhereUniqueInput>
    update?: Enumerable<PublicationChapterPageUpdateWithWhereUniqueWithoutChapterInput>
    updateMany?: Enumerable<PublicationChapterPageUpdateManyWithWhereWithoutChapterInput>
    deleteMany?: Enumerable<PublicationChapterPageScalarWhereInput>
  }

  export type PublicationChapterPageUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<Enumerable<PublicationChapterPageCreateWithoutChapterInput>, Enumerable<PublicationChapterPageUncheckedCreateWithoutChapterInput>>
    connectOrCreate?: Enumerable<PublicationChapterPageCreateOrConnectWithoutChapterInput>
    upsert?: Enumerable<PublicationChapterPageUpsertWithWhereUniqueWithoutChapterInput>
    set?: Enumerable<PublicationChapterPageWhereUniqueInput>
    disconnect?: Enumerable<PublicationChapterPageWhereUniqueInput>
    delete?: Enumerable<PublicationChapterPageWhereUniqueInput>
    connect?: Enumerable<PublicationChapterPageWhereUniqueInput>
    update?: Enumerable<PublicationChapterPageUpdateWithWhereUniqueWithoutChapterInput>
    updateMany?: Enumerable<PublicationChapterPageUpdateManyWithWhereWithoutChapterInput>
    deleteMany?: Enumerable<PublicationChapterPageScalarWhereInput>
  }

  export type PublicationChapterCreateNestedOneWithoutPagesInput = {
    create?: XOR<PublicationChapterCreateWithoutPagesInput, PublicationChapterUncheckedCreateWithoutPagesInput>
    connectOrCreate?: PublicationChapterCreateOrConnectWithoutPagesInput
    connect?: PublicationChapterWhereUniqueInput
  }

  export type PublicationCreateNestedOneWithoutPagesInput = {
    create?: XOR<PublicationCreateWithoutPagesInput, PublicationUncheckedCreateWithoutPagesInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutPagesInput
    connect?: PublicationWhereUniqueInput
  }

  export type PublicationChapterUpdateOneWithoutPagesNestedInput = {
    create?: XOR<PublicationChapterCreateWithoutPagesInput, PublicationChapterUncheckedCreateWithoutPagesInput>
    connectOrCreate?: PublicationChapterCreateOrConnectWithoutPagesInput
    upsert?: PublicationChapterUpsertWithoutPagesInput
    disconnect?: boolean
    delete?: boolean
    connect?: PublicationChapterWhereUniqueInput
    update?: XOR<PublicationChapterUpdateWithoutPagesInput, PublicationChapterUncheckedUpdateWithoutPagesInput>
  }

  export type PublicationUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<PublicationCreateWithoutPagesInput, PublicationUncheckedCreateWithoutPagesInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutPagesInput
    upsert?: PublicationUpsertWithoutPagesInput
    connect?: PublicationWhereUniqueInput
    update?: XOR<PublicationUpdateWithoutPagesInput, PublicationUncheckedUpdateWithoutPagesInput>
  }

  export type PublicationCreateNestedOneWithoutContributorsInput = {
    create?: XOR<PublicationCreateWithoutContributorsInput, PublicationUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutContributorsInput
    connect?: PublicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPublicationsContributedInput = {
    create?: XOR<UserCreateWithoutPublicationsContributedInput, UserUncheckedCreateWithoutPublicationsContributedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicationsContributedInput
    connect?: UserWhereUniqueInput
  }

  export type PublicationUpdateOneRequiredWithoutContributorsNestedInput = {
    create?: XOR<PublicationCreateWithoutContributorsInput, PublicationUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutContributorsInput
    upsert?: PublicationUpsertWithoutContributorsInput
    connect?: PublicationWhereUniqueInput
    update?: XOR<PublicationUpdateWithoutContributorsInput, PublicationUncheckedUpdateWithoutContributorsInput>
  }

  export type UserUpdateOneRequiredWithoutPublicationsContributedNestedInput = {
    create?: XOR<UserCreateWithoutPublicationsContributedInput, UserUncheckedCreateWithoutPublicationsContributedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicationsContributedInput
    upsert?: UserUpsertWithoutPublicationsContributedInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPublicationsContributedInput, UserUncheckedUpdateWithoutPublicationsContributedInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type ThreadCreateWithoutAuthorInput = {
    source: string
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    parentThread?: ThreadCreateNestedOneWithoutRepliesInput
    replies?: ThreadCreateNestedManyWithoutParentThreadInput
    rootThread?: ThreadCreateNestedOneWithoutConversationInput
    paricipants?: ThreadParticipantCreateNestedManyWithoutThreadInput
    conversation?: ThreadCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadUncheckedCreateWithoutAuthorInput = {
    threadId?: number
    source: string
    parentThreadId?: number | null
    rootThreadId?: number | null
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    replies?: ThreadUncheckedCreateNestedManyWithoutParentThreadInput
    paricipants?: ThreadParticipantUncheckedCreateNestedManyWithoutThreadInput
    conversation?: ThreadUncheckedCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadCreateOrConnectWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadParticipantCreateWithoutUserInput = {
    thread: ThreadCreateNestedOneWithoutParicipantsInput
  }

  export type ThreadParticipantUncheckedCreateWithoutUserInput = {
    threadId: number
  }

  export type ThreadParticipantCreateOrConnectWithoutUserInput = {
    where: ThreadParticipantWhereUniqueInput
    create: XOR<ThreadParticipantCreateWithoutUserInput, ThreadParticipantUncheckedCreateWithoutUserInput>
  }

  export type PublicationContributorCreateWithoutUserInput = {
    role: string
    publication: PublicationCreateNestedOneWithoutContributorsInput
  }

  export type PublicationContributorUncheckedCreateWithoutUserInput = {
    publicationId: number
    role: string
  }

  export type PublicationContributorCreateOrConnectWithoutUserInput = {
    where: PublicationContributorWhereUniqueInput
    create: XOR<PublicationContributorCreateWithoutUserInput, PublicationContributorUncheckedCreateWithoutUserInput>
  }

  export type ThreadUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
  }

  export type ThreadUpdateManyWithWhereWithoutAuthorInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutThreadsAuthoredInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: Enumerable<ThreadScalarWhereInput>
    OR?: Enumerable<ThreadScalarWhereInput>
    NOT?: Enumerable<ThreadScalarWhereInput>
    threadId?: IntFilter | number
    source?: StringFilter | string
    parentThreadId?: IntNullableFilter | number | null
    rootThreadId?: IntNullableFilter | number | null
    threadOrigin?: StringNullableFilter | string | null
    content?: StringNullableFilter | string | null
    metadata?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    lastUpdatedAt?: DateTimeFilter | Date | string
    numViews?: IntFilter | number
    numReplies?: IntFilter | number
    numLikes?: IntFilter | number
    numDislikes?: IntFilter | number
    numReactions?: IntFilter | number
    numInteractions?: IntFilter | number
    authorId?: IntFilter | number
    isRoot?: BoolFilter | boolean
    isDeleted?: BoolFilter | boolean
    isLocked?: BoolFilter | boolean
  }

  export type ThreadParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ThreadParticipantWhereUniqueInput
    update: XOR<ThreadParticipantUpdateWithoutUserInput, ThreadParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ThreadParticipantCreateWithoutUserInput, ThreadParticipantUncheckedCreateWithoutUserInput>
  }

  export type ThreadParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ThreadParticipantWhereUniqueInput
    data: XOR<ThreadParticipantUpdateWithoutUserInput, ThreadParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ThreadParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ThreadParticipantScalarWhereInput
    data: XOR<ThreadParticipantUpdateManyMutationInput, ThreadParticipantUncheckedUpdateManyWithoutThreadsParticipatingInput>
  }

  export type ThreadParticipantScalarWhereInput = {
    AND?: Enumerable<ThreadParticipantScalarWhereInput>
    OR?: Enumerable<ThreadParticipantScalarWhereInput>
    NOT?: Enumerable<ThreadParticipantScalarWhereInput>
    threadId?: IntFilter | number
    userId?: IntFilter | number
  }

  export type PublicationContributorUpsertWithWhereUniqueWithoutUserInput = {
    where: PublicationContributorWhereUniqueInput
    update: XOR<PublicationContributorUpdateWithoutUserInput, PublicationContributorUncheckedUpdateWithoutUserInput>
    create: XOR<PublicationContributorCreateWithoutUserInput, PublicationContributorUncheckedCreateWithoutUserInput>
  }

  export type PublicationContributorUpdateWithWhereUniqueWithoutUserInput = {
    where: PublicationContributorWhereUniqueInput
    data: XOR<PublicationContributorUpdateWithoutUserInput, PublicationContributorUncheckedUpdateWithoutUserInput>
  }

  export type PublicationContributorUpdateManyWithWhereWithoutUserInput = {
    where: PublicationContributorScalarWhereInput
    data: XOR<PublicationContributorUpdateManyMutationInput, PublicationContributorUncheckedUpdateManyWithoutPublicationsContributedInput>
  }

  export type PublicationContributorScalarWhereInput = {
    AND?: Enumerable<PublicationContributorScalarWhereInput>
    OR?: Enumerable<PublicationContributorScalarWhereInput>
    NOT?: Enumerable<PublicationContributorScalarWhereInput>
    publicationId?: IntFilter | number
    userId?: IntFilter | number
    role?: StringFilter | string
  }

  export type UserCreateWithoutThreadsAuthoredInput = {
    handle: string
    displayName?: string | null
    links?: string
    threadsParticipating?: ThreadParticipantCreateNestedManyWithoutUserInput
    publicationsContributed?: PublicationContributorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadsAuthoredInput = {
    userId?: number
    handle: string
    displayName?: string | null
    links?: string
    threadsParticipating?: ThreadParticipantUncheckedCreateNestedManyWithoutUserInput
    publicationsContributed?: PublicationContributorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadsAuthoredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadsAuthoredInput, UserUncheckedCreateWithoutThreadsAuthoredInput>
  }

  export type ThreadCreateWithoutRepliesInput = {
    source: string
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    parentThread?: ThreadCreateNestedOneWithoutRepliesInput
    rootThread?: ThreadCreateNestedOneWithoutConversationInput
    paricipants?: ThreadParticipantCreateNestedManyWithoutThreadInput
    conversation?: ThreadCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadUncheckedCreateWithoutRepliesInput = {
    threadId?: number
    source: string
    parentThreadId?: number | null
    rootThreadId?: number | null
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    authorId: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    paricipants?: ThreadParticipantUncheckedCreateNestedManyWithoutThreadInput
    conversation?: ThreadUncheckedCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadCreateOrConnectWithoutRepliesInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutRepliesInput, ThreadUncheckedCreateWithoutRepliesInput>
  }

  export type ThreadCreateWithoutParentThreadInput = {
    source: string
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    replies?: ThreadCreateNestedManyWithoutParentThreadInput
    rootThread?: ThreadCreateNestedOneWithoutConversationInput
    paricipants?: ThreadParticipantCreateNestedManyWithoutThreadInput
    conversation?: ThreadCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadUncheckedCreateWithoutParentThreadInput = {
    threadId?: number
    source: string
    rootThreadId?: number | null
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    authorId: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    replies?: ThreadUncheckedCreateNestedManyWithoutParentThreadInput
    paricipants?: ThreadParticipantUncheckedCreateNestedManyWithoutThreadInput
    conversation?: ThreadUncheckedCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadCreateOrConnectWithoutParentThreadInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutParentThreadInput, ThreadUncheckedCreateWithoutParentThreadInput>
  }

  export type ThreadCreateWithoutConversationInput = {
    source: string
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    parentThread?: ThreadCreateNestedOneWithoutRepliesInput
    replies?: ThreadCreateNestedManyWithoutParentThreadInput
    rootThread?: ThreadCreateNestedOneWithoutConversationInput
    paricipants?: ThreadParticipantCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutConversationInput = {
    threadId?: number
    source: string
    parentThreadId?: number | null
    rootThreadId?: number | null
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    authorId: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    replies?: ThreadUncheckedCreateNestedManyWithoutParentThreadInput
    paricipants?: ThreadParticipantUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutConversationInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutConversationInput, ThreadUncheckedCreateWithoutConversationInput>
  }

  export type ThreadParticipantCreateWithoutThreadInput = {
    user: UserCreateNestedOneWithoutThreadsParticipatingInput
  }

  export type ThreadParticipantUncheckedCreateWithoutThreadInput = {
    userId: number
  }

  export type ThreadParticipantCreateOrConnectWithoutThreadInput = {
    where: ThreadParticipantWhereUniqueInput
    create: XOR<ThreadParticipantCreateWithoutThreadInput, ThreadParticipantUncheckedCreateWithoutThreadInput>
  }

  export type ThreadCreateWithoutRootThreadInput = {
    source: string
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    parentThread?: ThreadCreateNestedOneWithoutRepliesInput
    replies?: ThreadCreateNestedManyWithoutParentThreadInput
    paricipants?: ThreadParticipantCreateNestedManyWithoutThreadInput
    conversation?: ThreadCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadUncheckedCreateWithoutRootThreadInput = {
    threadId?: number
    source: string
    parentThreadId?: number | null
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    authorId: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    replies?: ThreadUncheckedCreateNestedManyWithoutParentThreadInput
    paricipants?: ThreadParticipantUncheckedCreateNestedManyWithoutThreadInput
    conversation?: ThreadUncheckedCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadCreateOrConnectWithoutRootThreadInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutRootThreadInput, ThreadUncheckedCreateWithoutRootThreadInput>
  }

  export type UserUpsertWithoutThreadsAuthoredInput = {
    update: XOR<UserUpdateWithoutThreadsAuthoredInput, UserUncheckedUpdateWithoutThreadsAuthoredInput>
    create: XOR<UserCreateWithoutThreadsAuthoredInput, UserUncheckedCreateWithoutThreadsAuthoredInput>
  }

  export type UserUpdateWithoutThreadsAuthoredInput = {
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
    threadsParticipating?: ThreadParticipantUpdateManyWithoutUserNestedInput
    publicationsContributed?: PublicationContributorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadsAuthoredInput = {
    userId?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
    threadsParticipating?: ThreadParticipantUncheckedUpdateManyWithoutUserNestedInput
    publicationsContributed?: PublicationContributorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadUpsertWithoutRepliesInput = {
    update: XOR<ThreadUpdateWithoutRepliesInput, ThreadUncheckedUpdateWithoutRepliesInput>
    create: XOR<ThreadCreateWithoutRepliesInput, ThreadUncheckedCreateWithoutRepliesInput>
  }

  export type ThreadUpdateWithoutRepliesInput = {
    source?: StringFieldUpdateOperationsInput | string
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    parentThread?: ThreadUpdateOneWithoutRepliesNestedInput
    rootThread?: ThreadUpdateOneWithoutConversationNestedInput
    paricipants?: ThreadParticipantUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutRepliesInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    paricipants?: ThreadParticipantUncheckedUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUncheckedUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUpsertWithWhereUniqueWithoutParentThreadInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutParentThreadInput, ThreadUncheckedUpdateWithoutParentThreadInput>
    create: XOR<ThreadCreateWithoutParentThreadInput, ThreadUncheckedCreateWithoutParentThreadInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutParentThreadInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutParentThreadInput, ThreadUncheckedUpdateWithoutParentThreadInput>
  }

  export type ThreadUpdateManyWithWhereWithoutParentThreadInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutRepliesInput>
  }

  export type ThreadUpsertWithoutConversationInput = {
    update: XOR<ThreadUpdateWithoutConversationInput, ThreadUncheckedUpdateWithoutConversationInput>
    create: XOR<ThreadCreateWithoutConversationInput, ThreadUncheckedCreateWithoutConversationInput>
  }

  export type ThreadUpdateWithoutConversationInput = {
    source?: StringFieldUpdateOperationsInput | string
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    parentThread?: ThreadUpdateOneWithoutRepliesNestedInput
    replies?: ThreadUpdateManyWithoutParentThreadNestedInput
    rootThread?: ThreadUpdateOneWithoutConversationNestedInput
    paricipants?: ThreadParticipantUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutConversationInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    replies?: ThreadUncheckedUpdateManyWithoutParentThreadNestedInput
    paricipants?: ThreadParticipantUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadParticipantUpsertWithWhereUniqueWithoutThreadInput = {
    where: ThreadParticipantWhereUniqueInput
    update: XOR<ThreadParticipantUpdateWithoutThreadInput, ThreadParticipantUncheckedUpdateWithoutThreadInput>
    create: XOR<ThreadParticipantCreateWithoutThreadInput, ThreadParticipantUncheckedCreateWithoutThreadInput>
  }

  export type ThreadParticipantUpdateWithWhereUniqueWithoutThreadInput = {
    where: ThreadParticipantWhereUniqueInput
    data: XOR<ThreadParticipantUpdateWithoutThreadInput, ThreadParticipantUncheckedUpdateWithoutThreadInput>
  }

  export type ThreadParticipantUpdateManyWithWhereWithoutThreadInput = {
    where: ThreadParticipantScalarWhereInput
    data: XOR<ThreadParticipantUpdateManyMutationInput, ThreadParticipantUncheckedUpdateManyWithoutParicipantsInput>
  }

  export type ThreadUpsertWithWhereUniqueWithoutRootThreadInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutRootThreadInput, ThreadUncheckedUpdateWithoutRootThreadInput>
    create: XOR<ThreadCreateWithoutRootThreadInput, ThreadUncheckedCreateWithoutRootThreadInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutRootThreadInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutRootThreadInput, ThreadUncheckedUpdateWithoutRootThreadInput>
  }

  export type ThreadUpdateManyWithWhereWithoutRootThreadInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutConversationInput>
  }

  export type ThreadCreateWithoutParicipantsInput = {
    source: string
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    parentThread?: ThreadCreateNestedOneWithoutRepliesInput
    replies?: ThreadCreateNestedManyWithoutParentThreadInput
    rootThread?: ThreadCreateNestedOneWithoutConversationInput
    conversation?: ThreadCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadUncheckedCreateWithoutParicipantsInput = {
    threadId?: number
    source: string
    parentThreadId?: number | null
    rootThreadId?: number | null
    threadOrigin?: string | null
    content?: string | null
    metadata?: string
    createdAt?: Date | string
    lastUpdatedAt?: Date | string
    numViews?: number
    numReplies?: number
    numLikes?: number
    numDislikes?: number
    numReactions?: number
    numInteractions?: number
    authorId: number
    isRoot?: boolean
    isDeleted?: boolean
    isLocked?: boolean
    replies?: ThreadUncheckedCreateNestedManyWithoutParentThreadInput
    conversation?: ThreadUncheckedCreateNestedManyWithoutRootThreadInput
  }

  export type ThreadCreateOrConnectWithoutParicipantsInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutParicipantsInput, ThreadUncheckedCreateWithoutParicipantsInput>
  }

  export type UserCreateWithoutThreadsParticipatingInput = {
    handle: string
    displayName?: string | null
    links?: string
    threadsAuthored?: ThreadCreateNestedManyWithoutAuthorInput
    publicationsContributed?: PublicationContributorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadsParticipatingInput = {
    userId?: number
    handle: string
    displayName?: string | null
    links?: string
    threadsAuthored?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    publicationsContributed?: PublicationContributorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadsParticipatingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadsParticipatingInput, UserUncheckedCreateWithoutThreadsParticipatingInput>
  }

  export type ThreadUpsertWithoutParicipantsInput = {
    update: XOR<ThreadUpdateWithoutParicipantsInput, ThreadUncheckedUpdateWithoutParicipantsInput>
    create: XOR<ThreadCreateWithoutParicipantsInput, ThreadUncheckedCreateWithoutParicipantsInput>
  }

  export type ThreadUpdateWithoutParicipantsInput = {
    source?: StringFieldUpdateOperationsInput | string
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    parentThread?: ThreadUpdateOneWithoutRepliesNestedInput
    replies?: ThreadUpdateManyWithoutParentThreadNestedInput
    rootThread?: ThreadUpdateOneWithoutConversationNestedInput
    conversation?: ThreadUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutParicipantsInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    replies?: ThreadUncheckedUpdateManyWithoutParentThreadNestedInput
    conversation?: ThreadUncheckedUpdateManyWithoutRootThreadNestedInput
  }

  export type UserUpsertWithoutThreadsParticipatingInput = {
    update: XOR<UserUpdateWithoutThreadsParticipatingInput, UserUncheckedUpdateWithoutThreadsParticipatingInput>
    create: XOR<UserCreateWithoutThreadsParticipatingInput, UserUncheckedCreateWithoutThreadsParticipatingInput>
  }

  export type UserUpdateWithoutThreadsParticipatingInput = {
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
    threadsAuthored?: ThreadUpdateManyWithoutAuthorNestedInput
    publicationsContributed?: PublicationContributorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadsParticipatingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
    threadsAuthored?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    publicationsContributed?: PublicationContributorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PublicationContributorCreateWithoutPublicationInput = {
    role: string
    user: UserCreateNestedOneWithoutPublicationsContributedInput
  }

  export type PublicationContributorUncheckedCreateWithoutPublicationInput = {
    userId: number
    role: string
  }

  export type PublicationContributorCreateOrConnectWithoutPublicationInput = {
    where: PublicationContributorWhereUniqueInput
    create: XOR<PublicationContributorCreateWithoutPublicationInput, PublicationContributorUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationChapterCreateWithoutPublicationInput = {
    source: string
    title: string
    summary?: string | null
    publishedAt?: Date | string | null
    pages?: PublicationChapterPageCreateNestedManyWithoutChapterInput
  }

  export type PublicationChapterUncheckedCreateWithoutPublicationInput = {
    chapterId?: number
    source: string
    title: string
    summary?: string | null
    publishedAt?: Date | string | null
    pages?: PublicationChapterPageUncheckedCreateNestedManyWithoutChapterInput
  }

  export type PublicationChapterCreateOrConnectWithoutPublicationInput = {
    where: PublicationChapterWhereUniqueInput
    create: XOR<PublicationChapterCreateWithoutPublicationInput, PublicationChapterUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationChapterPageCreateWithoutPublicationInput = {
    source: string
    content?: string | null
    chapter?: PublicationChapterCreateNestedOneWithoutPagesInput
  }

  export type PublicationChapterPageUncheckedCreateWithoutPublicationInput = {
    pageId?: number
    chapterId?: number | null
    source: string
    content?: string | null
  }

  export type PublicationChapterPageCreateOrConnectWithoutPublicationInput = {
    where: PublicationChapterPageWhereUniqueInput
    create: XOR<PublicationChapterPageCreateWithoutPublicationInput, PublicationChapterPageUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationContributorUpsertWithWhereUniqueWithoutPublicationInput = {
    where: PublicationContributorWhereUniqueInput
    update: XOR<PublicationContributorUpdateWithoutPublicationInput, PublicationContributorUncheckedUpdateWithoutPublicationInput>
    create: XOR<PublicationContributorCreateWithoutPublicationInput, PublicationContributorUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationContributorUpdateWithWhereUniqueWithoutPublicationInput = {
    where: PublicationContributorWhereUniqueInput
    data: XOR<PublicationContributorUpdateWithoutPublicationInput, PublicationContributorUncheckedUpdateWithoutPublicationInput>
  }

  export type PublicationContributorUpdateManyWithWhereWithoutPublicationInput = {
    where: PublicationContributorScalarWhereInput
    data: XOR<PublicationContributorUpdateManyMutationInput, PublicationContributorUncheckedUpdateManyWithoutContributorsInput>
  }

  export type PublicationChapterUpsertWithWhereUniqueWithoutPublicationInput = {
    where: PublicationChapterWhereUniqueInput
    update: XOR<PublicationChapterUpdateWithoutPublicationInput, PublicationChapterUncheckedUpdateWithoutPublicationInput>
    create: XOR<PublicationChapterCreateWithoutPublicationInput, PublicationChapterUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationChapterUpdateWithWhereUniqueWithoutPublicationInput = {
    where: PublicationChapterWhereUniqueInput
    data: XOR<PublicationChapterUpdateWithoutPublicationInput, PublicationChapterUncheckedUpdateWithoutPublicationInput>
  }

  export type PublicationChapterUpdateManyWithWhereWithoutPublicationInput = {
    where: PublicationChapterScalarWhereInput
    data: XOR<PublicationChapterUpdateManyMutationInput, PublicationChapterUncheckedUpdateManyWithoutChaptersInput>
  }

  export type PublicationChapterScalarWhereInput = {
    AND?: Enumerable<PublicationChapterScalarWhereInput>
    OR?: Enumerable<PublicationChapterScalarWhereInput>
    NOT?: Enumerable<PublicationChapterScalarWhereInput>
    chapterId?: IntFilter | number
    publicationId?: IntFilter | number
    source?: StringFilter | string
    title?: StringFilter | string
    summary?: StringNullableFilter | string | null
    publishedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type PublicationChapterPageUpsertWithWhereUniqueWithoutPublicationInput = {
    where: PublicationChapterPageWhereUniqueInput
    update: XOR<PublicationChapterPageUpdateWithoutPublicationInput, PublicationChapterPageUncheckedUpdateWithoutPublicationInput>
    create: XOR<PublicationChapterPageCreateWithoutPublicationInput, PublicationChapterPageUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationChapterPageUpdateWithWhereUniqueWithoutPublicationInput = {
    where: PublicationChapterPageWhereUniqueInput
    data: XOR<PublicationChapterPageUpdateWithoutPublicationInput, PublicationChapterPageUncheckedUpdateWithoutPublicationInput>
  }

  export type PublicationChapterPageUpdateManyWithWhereWithoutPublicationInput = {
    where: PublicationChapterPageScalarWhereInput
    data: XOR<PublicationChapterPageUpdateManyMutationInput, PublicationChapterPageUncheckedUpdateManyWithoutPagesInput>
  }

  export type PublicationChapterPageScalarWhereInput = {
    AND?: Enumerable<PublicationChapterPageScalarWhereInput>
    OR?: Enumerable<PublicationChapterPageScalarWhereInput>
    NOT?: Enumerable<PublicationChapterPageScalarWhereInput>
    pageId?: IntFilter | number
    chapterId?: IntNullableFilter | number | null
    publicationId?: IntFilter | number
    source?: StringFilter | string
    content?: StringNullableFilter | string | null
  }

  export type PublicationCreateWithoutChaptersInput = {
    source: string
    name: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    contributors?: PublicationContributorCreateNestedManyWithoutPublicationInput
    pages?: PublicationChapterPageCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUncheckedCreateWithoutChaptersInput = {
    publicationId?: number
    source: string
    name: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    contributors?: PublicationContributorUncheckedCreateNestedManyWithoutPublicationInput
    pages?: PublicationChapterPageUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type PublicationCreateOrConnectWithoutChaptersInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutChaptersInput, PublicationUncheckedCreateWithoutChaptersInput>
  }

  export type PublicationChapterPageCreateWithoutChapterInput = {
    source: string
    content?: string | null
    publication: PublicationCreateNestedOneWithoutPagesInput
  }

  export type PublicationChapterPageUncheckedCreateWithoutChapterInput = {
    pageId?: number
    publicationId: number
    source: string
    content?: string | null
  }

  export type PublicationChapterPageCreateOrConnectWithoutChapterInput = {
    where: PublicationChapterPageWhereUniqueInput
    create: XOR<PublicationChapterPageCreateWithoutChapterInput, PublicationChapterPageUncheckedCreateWithoutChapterInput>
  }

  export type PublicationUpsertWithoutChaptersInput = {
    update: XOR<PublicationUpdateWithoutChaptersInput, PublicationUncheckedUpdateWithoutChaptersInput>
    create: XOR<PublicationCreateWithoutChaptersInput, PublicationUncheckedCreateWithoutChaptersInput>
  }

  export type PublicationUpdateWithoutChaptersInput = {
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    contributors?: PublicationContributorUpdateManyWithoutPublicationNestedInput
    pages?: PublicationChapterPageUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateWithoutChaptersInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    contributors?: PublicationContributorUncheckedUpdateManyWithoutPublicationNestedInput
    pages?: PublicationChapterPageUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationChapterPageUpsertWithWhereUniqueWithoutChapterInput = {
    where: PublicationChapterPageWhereUniqueInput
    update: XOR<PublicationChapterPageUpdateWithoutChapterInput, PublicationChapterPageUncheckedUpdateWithoutChapterInput>
    create: XOR<PublicationChapterPageCreateWithoutChapterInput, PublicationChapterPageUncheckedCreateWithoutChapterInput>
  }

  export type PublicationChapterPageUpdateWithWhereUniqueWithoutChapterInput = {
    where: PublicationChapterPageWhereUniqueInput
    data: XOR<PublicationChapterPageUpdateWithoutChapterInput, PublicationChapterPageUncheckedUpdateWithoutChapterInput>
  }

  export type PublicationChapterPageUpdateManyWithWhereWithoutChapterInput = {
    where: PublicationChapterPageScalarWhereInput
    data: XOR<PublicationChapterPageUpdateManyMutationInput, PublicationChapterPageUncheckedUpdateManyWithoutPagesInput>
  }

  export type PublicationChapterCreateWithoutPagesInput = {
    source: string
    title: string
    summary?: string | null
    publishedAt?: Date | string | null
    publication: PublicationCreateNestedOneWithoutChaptersInput
  }

  export type PublicationChapterUncheckedCreateWithoutPagesInput = {
    chapterId?: number
    publicationId: number
    source: string
    title: string
    summary?: string | null
    publishedAt?: Date | string | null
  }

  export type PublicationChapterCreateOrConnectWithoutPagesInput = {
    where: PublicationChapterWhereUniqueInput
    create: XOR<PublicationChapterCreateWithoutPagesInput, PublicationChapterUncheckedCreateWithoutPagesInput>
  }

  export type PublicationCreateWithoutPagesInput = {
    source: string
    name: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    contributors?: PublicationContributorCreateNestedManyWithoutPublicationInput
    chapters?: PublicationChapterCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUncheckedCreateWithoutPagesInput = {
    publicationId?: number
    source: string
    name: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    contributors?: PublicationContributorUncheckedCreateNestedManyWithoutPublicationInput
    chapters?: PublicationChapterUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type PublicationCreateOrConnectWithoutPagesInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutPagesInput, PublicationUncheckedCreateWithoutPagesInput>
  }

  export type PublicationChapterUpsertWithoutPagesInput = {
    update: XOR<PublicationChapterUpdateWithoutPagesInput, PublicationChapterUncheckedUpdateWithoutPagesInput>
    create: XOR<PublicationChapterCreateWithoutPagesInput, PublicationChapterUncheckedCreateWithoutPagesInput>
  }

  export type PublicationChapterUpdateWithoutPagesInput = {
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publication?: PublicationUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type PublicationChapterUncheckedUpdateWithoutPagesInput = {
    chapterId?: IntFieldUpdateOperationsInput | number
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicationUpsertWithoutPagesInput = {
    update: XOR<PublicationUpdateWithoutPagesInput, PublicationUncheckedUpdateWithoutPagesInput>
    create: XOR<PublicationCreateWithoutPagesInput, PublicationUncheckedCreateWithoutPagesInput>
  }

  export type PublicationUpdateWithoutPagesInput = {
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    contributors?: PublicationContributorUpdateManyWithoutPublicationNestedInput
    chapters?: PublicationChapterUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateWithoutPagesInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    contributors?: PublicationContributorUncheckedUpdateManyWithoutPublicationNestedInput
    chapters?: PublicationChapterUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationCreateWithoutContributorsInput = {
    source: string
    name: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    chapters?: PublicationChapterCreateNestedManyWithoutPublicationInput
    pages?: PublicationChapterPageCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUncheckedCreateWithoutContributorsInput = {
    publicationId?: number
    source: string
    name: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    chapters?: PublicationChapterUncheckedCreateNestedManyWithoutPublicationInput
    pages?: PublicationChapterPageUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type PublicationCreateOrConnectWithoutContributorsInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutContributorsInput, PublicationUncheckedCreateWithoutContributorsInput>
  }

  export type UserCreateWithoutPublicationsContributedInput = {
    handle: string
    displayName?: string | null
    links?: string
    threadsAuthored?: ThreadCreateNestedManyWithoutAuthorInput
    threadsParticipating?: ThreadParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPublicationsContributedInput = {
    userId?: number
    handle: string
    displayName?: string | null
    links?: string
    threadsAuthored?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    threadsParticipating?: ThreadParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPublicationsContributedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublicationsContributedInput, UserUncheckedCreateWithoutPublicationsContributedInput>
  }

  export type PublicationUpsertWithoutContributorsInput = {
    update: XOR<PublicationUpdateWithoutContributorsInput, PublicationUncheckedUpdateWithoutContributorsInput>
    create: XOR<PublicationCreateWithoutContributorsInput, PublicationUncheckedCreateWithoutContributorsInput>
  }

  export type PublicationUpdateWithoutContributorsInput = {
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    chapters?: PublicationChapterUpdateManyWithoutPublicationNestedInput
    pages?: PublicationChapterPageUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateWithoutContributorsInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    chapters?: PublicationChapterUncheckedUpdateManyWithoutPublicationNestedInput
    pages?: PublicationChapterPageUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type UserUpsertWithoutPublicationsContributedInput = {
    update: XOR<UserUpdateWithoutPublicationsContributedInput, UserUncheckedUpdateWithoutPublicationsContributedInput>
    create: XOR<UserCreateWithoutPublicationsContributedInput, UserUncheckedCreateWithoutPublicationsContributedInput>
  }

  export type UserUpdateWithoutPublicationsContributedInput = {
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
    threadsAuthored?: ThreadUpdateManyWithoutAuthorNestedInput
    threadsParticipating?: ThreadParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPublicationsContributedInput = {
    userId?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: StringFieldUpdateOperationsInput | string
    threadsAuthored?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    threadsParticipating?: ThreadParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadUpdateWithoutAuthorInput = {
    source?: StringFieldUpdateOperationsInput | string
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    parentThread?: ThreadUpdateOneWithoutRepliesNestedInput
    replies?: ThreadUpdateManyWithoutParentThreadNestedInput
    rootThread?: ThreadUpdateOneWithoutConversationNestedInput
    paricipants?: ThreadParticipantUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutAuthorInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    replies?: ThreadUncheckedUpdateManyWithoutParentThreadNestedInput
    paricipants?: ThreadParticipantUncheckedUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUncheckedUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutThreadsAuthoredInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThreadParticipantUpdateWithoutUserInput = {
    thread?: ThreadUpdateOneRequiredWithoutParicipantsNestedInput
  }

  export type ThreadParticipantUncheckedUpdateWithoutUserInput = {
    threadId?: IntFieldUpdateOperationsInput | number
  }

  export type ThreadParticipantUncheckedUpdateManyWithoutThreadsParticipatingInput = {
    threadId?: IntFieldUpdateOperationsInput | number
  }

  export type PublicationContributorUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    publication?: PublicationUpdateOneRequiredWithoutContributorsNestedInput
  }

  export type PublicationContributorUncheckedUpdateWithoutUserInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationContributorUncheckedUpdateManyWithoutPublicationsContributedInput = {
    publicationId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ThreadUpdateWithoutParentThreadInput = {
    source?: StringFieldUpdateOperationsInput | string
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    replies?: ThreadUpdateManyWithoutParentThreadNestedInput
    rootThread?: ThreadUpdateOneWithoutConversationNestedInput
    paricipants?: ThreadParticipantUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutParentThreadInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    replies?: ThreadUncheckedUpdateManyWithoutParentThreadNestedInput
    paricipants?: ThreadParticipantUncheckedUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUncheckedUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutRepliesInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    rootThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThreadParticipantUpdateWithoutThreadInput = {
    user?: UserUpdateOneRequiredWithoutThreadsParticipatingNestedInput
  }

  export type ThreadParticipantUncheckedUpdateWithoutThreadInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ThreadParticipantUncheckedUpdateManyWithoutParicipantsInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ThreadUpdateWithoutRootThreadInput = {
    source?: StringFieldUpdateOperationsInput | string
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    parentThread?: ThreadUpdateOneWithoutRepliesNestedInput
    replies?: ThreadUpdateManyWithoutParentThreadNestedInput
    paricipants?: ThreadParticipantUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutRootThreadInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    replies?: ThreadUncheckedUpdateManyWithoutParentThreadNestedInput
    paricipants?: ThreadParticipantUncheckedUpdateManyWithoutThreadNestedInput
    conversation?: ThreadUncheckedUpdateManyWithoutRootThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutConversationInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    parentThreadId?: NullableIntFieldUpdateOperationsInput | number | null
    threadOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numViews?: IntFieldUpdateOperationsInput | number
    numReplies?: IntFieldUpdateOperationsInput | number
    numLikes?: IntFieldUpdateOperationsInput | number
    numDislikes?: IntFieldUpdateOperationsInput | number
    numReactions?: IntFieldUpdateOperationsInput | number
    numInteractions?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isRoot?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicationContributorUpdateWithoutPublicationInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPublicationsContributedNestedInput
  }

  export type PublicationContributorUncheckedUpdateWithoutPublicationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationContributorUncheckedUpdateManyWithoutContributorsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationChapterUpdateWithoutPublicationInput = {
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PublicationChapterPageUpdateManyWithoutChapterNestedInput
  }

  export type PublicationChapterUncheckedUpdateWithoutPublicationInput = {
    chapterId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PublicationChapterPageUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type PublicationChapterUncheckedUpdateManyWithoutChaptersInput = {
    chapterId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicationChapterPageUpdateWithoutPublicationInput = {
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: PublicationChapterUpdateOneWithoutPagesNestedInput
  }

  export type PublicationChapterPageUncheckedUpdateWithoutPublicationInput = {
    pageId?: IntFieldUpdateOperationsInput | number
    chapterId?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationChapterPageUncheckedUpdateManyWithoutPagesInput = {
    pageId?: IntFieldUpdateOperationsInput | number
    chapterId?: NullableIntFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationChapterPageUpdateWithoutChapterInput = {
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    publication?: PublicationUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PublicationChapterPageUncheckedUpdateWithoutChapterInput = {
    pageId?: IntFieldUpdateOperationsInput | number
    publicationId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}