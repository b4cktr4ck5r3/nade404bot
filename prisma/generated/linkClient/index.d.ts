
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model du_users
 * 
 */
export type du_users = {
  ID: bigint
  userid: string
  steamid: string
  member: number
  last_accountuse: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Du_users
 * const du_users = await prisma.du_users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Du_users
   * const du_users = await prisma.du_users.findMany()
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
  $disconnect(): Promise<any>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.du_users`: Exposes CRUD operations for the **du_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Du_users
    * const du_users = await prisma.du_users.findMany()
    * ```
    */
  get du_users(): Prisma.du_usersDelegate<GlobalReject>;
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

  /**
   * Prisma Client JS version: 3.5.0
   * Query Engine version: 78a5df6def6943431f4c022e1428dbc3e833cf8e
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
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
    du_users: 'du_users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

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
      ? GlobalRejectSettings[Action] extends boolean
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
     *  * @example
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
     * Overwrites the datasource url from your prisma.schema file
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

  /**
   * These options are being passed in to the middleware as "params"
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
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model du_users
   */


  export type AggregateDu_users = {
    _count: Du_usersCountAggregateOutputType | null
    _avg: Du_usersAvgAggregateOutputType | null
    _sum: Du_usersSumAggregateOutputType | null
    _min: Du_usersMinAggregateOutputType | null
    _max: Du_usersMaxAggregateOutputType | null
  }

  export type Du_usersAvgAggregateOutputType = {
    ID: number | null
    member: number | null
    last_accountuse: number | null
  }

  export type Du_usersSumAggregateOutputType = {
    ID: bigint | null
    member: number | null
    last_accountuse: number | null
  }

  export type Du_usersMinAggregateOutputType = {
    ID: bigint | null
    userid: string | null
    steamid: string | null
    member: number | null
    last_accountuse: number | null
  }

  export type Du_usersMaxAggregateOutputType = {
    ID: bigint | null
    userid: string | null
    steamid: string | null
    member: number | null
    last_accountuse: number | null
  }

  export type Du_usersCountAggregateOutputType = {
    ID: number
    userid: number
    steamid: number
    member: number
    last_accountuse: number
    _all: number
  }


  export type Du_usersAvgAggregateInputType = {
    ID?: true
    member?: true
    last_accountuse?: true
  }

  export type Du_usersSumAggregateInputType = {
    ID?: true
    member?: true
    last_accountuse?: true
  }

  export type Du_usersMinAggregateInputType = {
    ID?: true
    userid?: true
    steamid?: true
    member?: true
    last_accountuse?: true
  }

  export type Du_usersMaxAggregateInputType = {
    ID?: true
    userid?: true
    steamid?: true
    member?: true
    last_accountuse?: true
  }

  export type Du_usersCountAggregateInputType = {
    ID?: true
    userid?: true
    steamid?: true
    member?: true
    last_accountuse?: true
    _all?: true
  }

  export type Du_usersAggregateArgs = {
    /**
     * Filter which du_users to aggregate.
     * 
    **/
    where?: du_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of du_users to fetch.
     * 
    **/
    orderBy?: Enumerable<du_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: du_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` du_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` du_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned du_users
    **/
    _count?: true | Du_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Du_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Du_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Du_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Du_usersMaxAggregateInputType
  }

  export type GetDu_usersAggregateType<T extends Du_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateDu_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDu_users[P]>
      : GetScalarType<T[P], AggregateDu_users[P]>
  }




  export type Du_usersGroupByArgs = {
    where?: du_usersWhereInput
    orderBy?: Enumerable<du_usersOrderByWithAggregationInput>
    by: Array<Du_usersScalarFieldEnum>
    having?: du_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Du_usersCountAggregateInputType | true
    _avg?: Du_usersAvgAggregateInputType
    _sum?: Du_usersSumAggregateInputType
    _min?: Du_usersMinAggregateInputType
    _max?: Du_usersMaxAggregateInputType
  }


  export type Du_usersGroupByOutputType = {
    ID: bigint
    userid: string
    steamid: string
    member: number
    last_accountuse: number
    _count: Du_usersCountAggregateOutputType | null
    _avg: Du_usersAvgAggregateOutputType | null
    _sum: Du_usersSumAggregateOutputType | null
    _min: Du_usersMinAggregateOutputType | null
    _max: Du_usersMaxAggregateOutputType | null
  }

  type GetDu_usersGroupByPayload<T extends Du_usersGroupByArgs> = Promise<
    Array<
      PickArray<Du_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Du_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Du_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Du_usersGroupByOutputType[P]>
        }
      >
    >


  export type du_usersSelect = {
    ID?: boolean
    userid?: boolean
    steamid?: boolean
    member?: boolean
    last_accountuse?: boolean
  }

  export type du_usersGetPayload<
    S extends boolean | null | undefined | du_usersArgs,
    U = keyof S
      > = S extends true
        ? du_users
    : S extends undefined
    ? never
    : S extends du_usersArgs | du_usersFindManyArgs
    ?'include' extends U
    ? du_users 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof du_users ?du_users [P]
  : 
     never
  } 
    : du_users
  : du_users


  type du_usersCountArgs = Merge<
    Omit<du_usersFindManyArgs, 'select' | 'include'> & {
      select?: Du_usersCountAggregateInputType | true
    }
  >

  export interface du_usersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Du_users that matches the filter.
     * @param {du_usersFindUniqueArgs} args - Arguments to find a Du_users
     * @example
     * // Get one Du_users
     * const du_users = await prisma.du_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends du_usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, du_usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'du_users'> extends True ? CheckSelect<T, Prisma__du_usersClient<du_users>, Prisma__du_usersClient<du_usersGetPayload<T>>> : CheckSelect<T, Prisma__du_usersClient<du_users | null >, Prisma__du_usersClient<du_usersGetPayload<T> | null >>

    /**
     * Find the first Du_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {du_usersFindFirstArgs} args - Arguments to find a Du_users
     * @example
     * // Get one Du_users
     * const du_users = await prisma.du_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends du_usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, du_usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'du_users'> extends True ? CheckSelect<T, Prisma__du_usersClient<du_users>, Prisma__du_usersClient<du_usersGetPayload<T>>> : CheckSelect<T, Prisma__du_usersClient<du_users | null >, Prisma__du_usersClient<du_usersGetPayload<T> | null >>

    /**
     * Find zero or more Du_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {du_usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Du_users
     * const du_users = await prisma.du_users.findMany()
     * 
     * // Get first 10 Du_users
     * const du_users = await prisma.du_users.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const du_usersWithIDOnly = await prisma.du_users.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends du_usersFindManyArgs>(
      args?: SelectSubset<T, du_usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<du_users>>, PrismaPromise<Array<du_usersGetPayload<T>>>>

    /**
     * Create a Du_users.
     * @param {du_usersCreateArgs} args - Arguments to create a Du_users.
     * @example
     * // Create one Du_users
     * const Du_users = await prisma.du_users.create({
     *   data: {
     *     // ... data to create a Du_users
     *   }
     * })
     * 
    **/
    create<T extends du_usersCreateArgs>(
      args: SelectSubset<T, du_usersCreateArgs>
    ): CheckSelect<T, Prisma__du_usersClient<du_users>, Prisma__du_usersClient<du_usersGetPayload<T>>>

    /**
     * Create many Du_users.
     *     @param {du_usersCreateManyArgs} args - Arguments to create many Du_users.
     *     @example
     *     // Create many Du_users
     *     const du_users = await prisma.du_users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends du_usersCreateManyArgs>(
      args?: SelectSubset<T, du_usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Du_users.
     * @param {du_usersDeleteArgs} args - Arguments to delete one Du_users.
     * @example
     * // Delete one Du_users
     * const Du_users = await prisma.du_users.delete({
     *   where: {
     *     // ... filter to delete one Du_users
     *   }
     * })
     * 
    **/
    delete<T extends du_usersDeleteArgs>(
      args: SelectSubset<T, du_usersDeleteArgs>
    ): CheckSelect<T, Prisma__du_usersClient<du_users>, Prisma__du_usersClient<du_usersGetPayload<T>>>

    /**
     * Update one Du_users.
     * @param {du_usersUpdateArgs} args - Arguments to update one Du_users.
     * @example
     * // Update one Du_users
     * const du_users = await prisma.du_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends du_usersUpdateArgs>(
      args: SelectSubset<T, du_usersUpdateArgs>
    ): CheckSelect<T, Prisma__du_usersClient<du_users>, Prisma__du_usersClient<du_usersGetPayload<T>>>

    /**
     * Delete zero or more Du_users.
     * @param {du_usersDeleteManyArgs} args - Arguments to filter Du_users to delete.
     * @example
     * // Delete a few Du_users
     * const { count } = await prisma.du_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends du_usersDeleteManyArgs>(
      args?: SelectSubset<T, du_usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Du_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {du_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Du_users
     * const du_users = await prisma.du_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends du_usersUpdateManyArgs>(
      args: SelectSubset<T, du_usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Du_users.
     * @param {du_usersUpsertArgs} args - Arguments to update or create a Du_users.
     * @example
     * // Update or create a Du_users
     * const du_users = await prisma.du_users.upsert({
     *   create: {
     *     // ... data to create a Du_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Du_users we want to update
     *   }
     * })
    **/
    upsert<T extends du_usersUpsertArgs>(
      args: SelectSubset<T, du_usersUpsertArgs>
    ): CheckSelect<T, Prisma__du_usersClient<du_users>, Prisma__du_usersClient<du_usersGetPayload<T>>>

    /**
     * Count the number of Du_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {du_usersCountArgs} args - Arguments to filter Du_users to count.
     * @example
     * // Count the number of Du_users
     * const count = await prisma.du_users.count({
     *   where: {
     *     // ... the filter for the Du_users we want to count
     *   }
     * })
    **/
    count<T extends du_usersCountArgs>(
      args?: Subset<T, du_usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Du_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Du_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Du_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Du_usersAggregateArgs>(args: Subset<T, Du_usersAggregateArgs>): PrismaPromise<GetDu_usersAggregateType<T>>

    /**
     * Group by Du_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Du_usersGroupByArgs} args - Group by arguments.
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
      T extends Du_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Du_usersGroupByArgs['orderBy'] }
        : { orderBy?: Du_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Du_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDu_usersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for du_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__du_usersClient<T> implements PrismaPromise<T> {
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
   * du_users findUnique
   */
  export type du_usersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the du_users
     * 
    **/
    select?: du_usersSelect | null
    /**
     * Throw an Error if a du_users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which du_users to fetch.
     * 
    **/
    where: du_usersWhereUniqueInput
  }


  /**
   * du_users findFirst
   */
  export type du_usersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the du_users
     * 
    **/
    select?: du_usersSelect | null
    /**
     * Throw an Error if a du_users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which du_users to fetch.
     * 
    **/
    where?: du_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of du_users to fetch.
     * 
    **/
    orderBy?: Enumerable<du_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for du_users.
     * 
    **/
    cursor?: du_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` du_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` du_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of du_users.
     * 
    **/
    distinct?: Enumerable<Du_usersScalarFieldEnum>
  }


  /**
   * du_users findMany
   */
  export type du_usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the du_users
     * 
    **/
    select?: du_usersSelect | null
    /**
     * Filter, which du_users to fetch.
     * 
    **/
    where?: du_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of du_users to fetch.
     * 
    **/
    orderBy?: Enumerable<du_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing du_users.
     * 
    **/
    cursor?: du_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` du_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` du_users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Du_usersScalarFieldEnum>
  }


  /**
   * du_users create
   */
  export type du_usersCreateArgs = {
    /**
     * Select specific fields to fetch from the du_users
     * 
    **/
    select?: du_usersSelect | null
    /**
     * The data needed to create a du_users.
     * 
    **/
    data: XOR<du_usersCreateInput, du_usersUncheckedCreateInput>
  }


  /**
   * du_users createMany
   */
  export type du_usersCreateManyArgs = {
    data: Enumerable<du_usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * du_users update
   */
  export type du_usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the du_users
     * 
    **/
    select?: du_usersSelect | null
    /**
     * The data needed to update a du_users.
     * 
    **/
    data: XOR<du_usersUpdateInput, du_usersUncheckedUpdateInput>
    /**
     * Choose, which du_users to update.
     * 
    **/
    where: du_usersWhereUniqueInput
  }


  /**
   * du_users updateMany
   */
  export type du_usersUpdateManyArgs = {
    data: XOR<du_usersUpdateManyMutationInput, du_usersUncheckedUpdateManyInput>
    where?: du_usersWhereInput
  }


  /**
   * du_users upsert
   */
  export type du_usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the du_users
     * 
    **/
    select?: du_usersSelect | null
    /**
     * The filter to search for the du_users to update in case it exists.
     * 
    **/
    where: du_usersWhereUniqueInput
    /**
     * In case the du_users found by the `where` argument doesn't exist, create a new du_users with this data.
     * 
    **/
    create: XOR<du_usersCreateInput, du_usersUncheckedCreateInput>
    /**
     * In case the du_users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<du_usersUpdateInput, du_usersUncheckedUpdateInput>
  }


  /**
   * du_users delete
   */
  export type du_usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the du_users
     * 
    **/
    select?: du_usersSelect | null
    /**
     * Filter which du_users to delete.
     * 
    **/
    where: du_usersWhereUniqueInput
  }


  /**
   * du_users deleteMany
   */
  export type du_usersDeleteManyArgs = {
    where?: du_usersWhereInput
  }


  /**
   * du_users without action
   */
  export type du_usersArgs = {
    /**
     * Select specific fields to fetch from the du_users
     * 
    **/
    select?: du_usersSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Du_usersScalarFieldEnum: {
    ID: 'ID',
    userid: 'userid',
    steamid: 'steamid',
    member: 'member',
    last_accountuse: 'last_accountuse'
  };

  export type Du_usersScalarFieldEnum = (typeof Du_usersScalarFieldEnum)[keyof typeof Du_usersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type du_usersWhereInput = {
    AND?: Enumerable<du_usersWhereInput>
    OR?: Enumerable<du_usersWhereInput>
    NOT?: Enumerable<du_usersWhereInput>
    ID?: BigIntFilter | bigint | number
    userid?: StringFilter | string
    steamid?: StringFilter | string
    member?: IntFilter | number
    last_accountuse?: IntFilter | number
  }

  export type du_usersOrderByWithRelationInput = {
    ID?: SortOrder
    userid?: SortOrder
    steamid?: SortOrder
    member?: SortOrder
    last_accountuse?: SortOrder
  }

  export type du_usersWhereUniqueInput = {
    ID?: bigint | number
    steamid?: string
  }

  export type du_usersOrderByWithAggregationInput = {
    ID?: SortOrder
    userid?: SortOrder
    steamid?: SortOrder
    member?: SortOrder
    last_accountuse?: SortOrder
    _count?: du_usersCountOrderByAggregateInput
    _avg?: du_usersAvgOrderByAggregateInput
    _max?: du_usersMaxOrderByAggregateInput
    _min?: du_usersMinOrderByAggregateInput
    _sum?: du_usersSumOrderByAggregateInput
  }

  export type du_usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<du_usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<du_usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<du_usersScalarWhereWithAggregatesInput>
    ID?: BigIntWithAggregatesFilter | bigint | number
    userid?: StringWithAggregatesFilter | string
    steamid?: StringWithAggregatesFilter | string
    member?: IntWithAggregatesFilter | number
    last_accountuse?: IntWithAggregatesFilter | number
  }

  export type du_usersCreateInput = {
    ID?: bigint | number
    userid: string
    steamid: string
    member: number
    last_accountuse: number
  }

  export type du_usersUncheckedCreateInput = {
    ID?: bigint | number
    userid: string
    steamid: string
    member: number
    last_accountuse: number
  }

  export type du_usersUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: StringFieldUpdateOperationsInput | string
    steamid?: StringFieldUpdateOperationsInput | string
    member?: IntFieldUpdateOperationsInput | number
    last_accountuse?: IntFieldUpdateOperationsInput | number
  }

  export type du_usersUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: StringFieldUpdateOperationsInput | string
    steamid?: StringFieldUpdateOperationsInput | string
    member?: IntFieldUpdateOperationsInput | number
    last_accountuse?: IntFieldUpdateOperationsInput | number
  }

  export type du_usersCreateManyInput = {
    ID?: bigint | number
    userid: string
    steamid: string
    member: number
    last_accountuse: number
  }

  export type du_usersUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: StringFieldUpdateOperationsInput | string
    steamid?: StringFieldUpdateOperationsInput | string
    member?: IntFieldUpdateOperationsInput | number
    last_accountuse?: IntFieldUpdateOperationsInput | number
  }

  export type du_usersUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: StringFieldUpdateOperationsInput | string
    steamid?: StringFieldUpdateOperationsInput | string
    member?: IntFieldUpdateOperationsInput | number
    last_accountuse?: IntFieldUpdateOperationsInput | number
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
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

  export type du_usersCountOrderByAggregateInput = {
    ID?: SortOrder
    userid?: SortOrder
    steamid?: SortOrder
    member?: SortOrder
    last_accountuse?: SortOrder
  }

  export type du_usersAvgOrderByAggregateInput = {
    ID?: SortOrder
    member?: SortOrder
    last_accountuse?: SortOrder
  }

  export type du_usersMaxOrderByAggregateInput = {
    ID?: SortOrder
    userid?: SortOrder
    steamid?: SortOrder
    member?: SortOrder
    last_accountuse?: SortOrder
  }

  export type du_usersMinOrderByAggregateInput = {
    ID?: SortOrder
    userid?: SortOrder
    steamid?: SortOrder
    member?: SortOrder
    last_accountuse?: SortOrder
  }

  export type du_usersSumOrderByAggregateInput = {
    ID?: SortOrder
    member?: SortOrder
    last_accountuse?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
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

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
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

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
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



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}