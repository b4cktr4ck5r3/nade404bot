
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
 * Model lobby
 * 
 */
export type lobby = {
  ID: string
  SERVER_IP: string
  ENDED: boolean
  ENDED_AT: Date
}

/**
 * Model lobby_players
 * 
 */
export type lobby_players = {
  ID: number
  STEAM_ID: string
  LOBBY_ID: string
}

/**
 * Model server_status
 * 
 */
export type server_status = {
  IP: string
  USED: boolean
  GAME_MODE: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lobbies
 * const lobbies = await prisma.lobby.findMany()
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
   * // Fetch zero or more Lobbies
   * const lobbies = await prisma.lobby.findMany()
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
   * `prisma.lobby`: Exposes CRUD operations for the **lobby** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lobbies
    * const lobbies = await prisma.lobby.findMany()
    * ```
    */
  get lobby(): Prisma.lobbyDelegate<GlobalReject>;

  /**
   * `prisma.lobby_players`: Exposes CRUD operations for the **lobby_players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lobby_players
    * const lobby_players = await prisma.lobby_players.findMany()
    * ```
    */
  get lobby_players(): Prisma.lobby_playersDelegate<GlobalReject>;

  /**
   * `prisma.server_status`: Exposes CRUD operations for the **server_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Server_statuses
    * const server_statuses = await prisma.server_status.findMany()
    * ```
    */
  get server_status(): Prisma.server_statusDelegate<GlobalReject>;
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
    lobby: 'lobby',
    lobby_players: 'lobby_players',
    server_status: 'server_status'
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
   * Count Type LobbyCountOutputType
   */


  export type LobbyCountOutputType = {
    lobby_players: number
  }

  export type LobbyCountOutputTypeSelect = {
    lobby_players?: boolean
  }

  export type LobbyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LobbyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LobbyCountOutputType
    : S extends undefined
    ? never
    : S extends LobbyCountOutputTypeArgs
    ?'include' extends U
    ? LobbyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof LobbyCountOutputType ?LobbyCountOutputType [P]
  : 
     never
  } 
    : LobbyCountOutputType
  : LobbyCountOutputType




  // Custom InputTypes

  /**
   * LobbyCountOutputType without action
   */
  export type LobbyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LobbyCountOutputType
     * 
    **/
    select?: LobbyCountOutputTypeSelect | null
  }



  /**
   * Count Type Server_statusCountOutputType
   */


  export type Server_statusCountOutputType = {
    lobby: number
  }

  export type Server_statusCountOutputTypeSelect = {
    lobby?: boolean
  }

  export type Server_statusCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Server_statusCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Server_statusCountOutputType
    : S extends undefined
    ? never
    : S extends Server_statusCountOutputTypeArgs
    ?'include' extends U
    ? Server_statusCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Server_statusCountOutputType ?Server_statusCountOutputType [P]
  : 
     never
  } 
    : Server_statusCountOutputType
  : Server_statusCountOutputType




  // Custom InputTypes

  /**
   * Server_statusCountOutputType without action
   */
  export type Server_statusCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Server_statusCountOutputType
     * 
    **/
    select?: Server_statusCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model lobby
   */


  export type AggregateLobby = {
    _count: LobbyCountAggregateOutputType | null
    _min: LobbyMinAggregateOutputType | null
    _max: LobbyMaxAggregateOutputType | null
  }

  export type LobbyMinAggregateOutputType = {
    ID: string | null
    SERVER_IP: string | null
    ENDED: boolean | null
    ENDED_AT: Date | null
  }

  export type LobbyMaxAggregateOutputType = {
    ID: string | null
    SERVER_IP: string | null
    ENDED: boolean | null
    ENDED_AT: Date | null
  }

  export type LobbyCountAggregateOutputType = {
    ID: number
    SERVER_IP: number
    ENDED: number
    ENDED_AT: number
    _all: number
  }


  export type LobbyMinAggregateInputType = {
    ID?: true
    SERVER_IP?: true
    ENDED?: true
    ENDED_AT?: true
  }

  export type LobbyMaxAggregateInputType = {
    ID?: true
    SERVER_IP?: true
    ENDED?: true
    ENDED_AT?: true
  }

  export type LobbyCountAggregateInputType = {
    ID?: true
    SERVER_IP?: true
    ENDED?: true
    ENDED_AT?: true
    _all?: true
  }

  export type LobbyAggregateArgs = {
    /**
     * Filter which lobby to aggregate.
     * 
    **/
    where?: lobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lobbies to fetch.
     * 
    **/
    orderBy?: Enumerable<lobbyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: lobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lobbies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lobbies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lobbies
    **/
    _count?: true | LobbyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LobbyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LobbyMaxAggregateInputType
  }

  export type GetLobbyAggregateType<T extends LobbyAggregateArgs> = {
        [P in keyof T & keyof AggregateLobby]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLobby[P]>
      : GetScalarType<T[P], AggregateLobby[P]>
  }




  export type LobbyGroupByArgs = {
    where?: lobbyWhereInput
    orderBy?: Enumerable<lobbyOrderByWithAggregationInput>
    by: Array<LobbyScalarFieldEnum>
    having?: lobbyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LobbyCountAggregateInputType | true
    _min?: LobbyMinAggregateInputType
    _max?: LobbyMaxAggregateInputType
  }


  export type LobbyGroupByOutputType = {
    ID: string
    SERVER_IP: string
    ENDED: boolean
    ENDED_AT: Date
    _count: LobbyCountAggregateOutputType | null
    _min: LobbyMinAggregateOutputType | null
    _max: LobbyMaxAggregateOutputType | null
  }

  type GetLobbyGroupByPayload<T extends LobbyGroupByArgs> = Promise<
    Array<
      PickArray<LobbyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LobbyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LobbyGroupByOutputType[P]>
            : GetScalarType<T[P], LobbyGroupByOutputType[P]>
        }
      >
    >


  export type lobbySelect = {
    ID?: boolean
    SERVER_IP?: boolean
    ENDED?: boolean
    ENDED_AT?: boolean
    server_status?: boolean | server_statusArgs
    lobby_players?: boolean | lobby_playersFindManyArgs
    _count?: boolean | LobbyCountOutputTypeArgs
  }

  export type lobbyInclude = {
    server_status?: boolean | server_statusArgs
    lobby_players?: boolean | lobby_playersFindManyArgs
    _count?: boolean | LobbyCountOutputTypeArgs
  }

  export type lobbyGetPayload<
    S extends boolean | null | undefined | lobbyArgs,
    U = keyof S
      > = S extends true
        ? lobby
    : S extends undefined
    ? never
    : S extends lobbyArgs | lobbyFindManyArgs
    ?'include' extends U
    ? lobby  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'server_status'
        ? server_statusGetPayload<S['include'][P]> :
        P extends 'lobby_players'
        ? Array < lobby_playersGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? LobbyCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof lobby ?lobby [P]
  : 
          P extends 'server_status'
        ? server_statusGetPayload<S['select'][P]> :
        P extends 'lobby_players'
        ? Array < lobby_playersGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? LobbyCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : lobby
  : lobby


  type lobbyCountArgs = Merge<
    Omit<lobbyFindManyArgs, 'select' | 'include'> & {
      select?: LobbyCountAggregateInputType | true
    }
  >

  export interface lobbyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Lobby that matches the filter.
     * @param {lobbyFindUniqueArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends lobbyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, lobbyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'lobby'> extends True ? CheckSelect<T, Prisma__lobbyClient<lobby>, Prisma__lobbyClient<lobbyGetPayload<T>>> : CheckSelect<T, Prisma__lobbyClient<lobby | null >, Prisma__lobbyClient<lobbyGetPayload<T> | null >>

    /**
     * Find the first Lobby that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lobbyFindFirstArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends lobbyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, lobbyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'lobby'> extends True ? CheckSelect<T, Prisma__lobbyClient<lobby>, Prisma__lobbyClient<lobbyGetPayload<T>>> : CheckSelect<T, Prisma__lobbyClient<lobby | null >, Prisma__lobbyClient<lobbyGetPayload<T> | null >>

    /**
     * Find zero or more Lobbies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lobbyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lobbies
     * const lobbies = await prisma.lobby.findMany()
     * 
     * // Get first 10 Lobbies
     * const lobbies = await prisma.lobby.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const lobbyWithIDOnly = await prisma.lobby.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends lobbyFindManyArgs>(
      args?: SelectSubset<T, lobbyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<lobby>>, PrismaPromise<Array<lobbyGetPayload<T>>>>

    /**
     * Create a Lobby.
     * @param {lobbyCreateArgs} args - Arguments to create a Lobby.
     * @example
     * // Create one Lobby
     * const Lobby = await prisma.lobby.create({
     *   data: {
     *     // ... data to create a Lobby
     *   }
     * })
     * 
    **/
    create<T extends lobbyCreateArgs>(
      args: SelectSubset<T, lobbyCreateArgs>
    ): CheckSelect<T, Prisma__lobbyClient<lobby>, Prisma__lobbyClient<lobbyGetPayload<T>>>

    /**
     * Create many Lobbies.
     *     @param {lobbyCreateManyArgs} args - Arguments to create many Lobbies.
     *     @example
     *     // Create many Lobbies
     *     const lobby = await prisma.lobby.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends lobbyCreateManyArgs>(
      args?: SelectSubset<T, lobbyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Lobby.
     * @param {lobbyDeleteArgs} args - Arguments to delete one Lobby.
     * @example
     * // Delete one Lobby
     * const Lobby = await prisma.lobby.delete({
     *   where: {
     *     // ... filter to delete one Lobby
     *   }
     * })
     * 
    **/
    delete<T extends lobbyDeleteArgs>(
      args: SelectSubset<T, lobbyDeleteArgs>
    ): CheckSelect<T, Prisma__lobbyClient<lobby>, Prisma__lobbyClient<lobbyGetPayload<T>>>

    /**
     * Update one Lobby.
     * @param {lobbyUpdateArgs} args - Arguments to update one Lobby.
     * @example
     * // Update one Lobby
     * const lobby = await prisma.lobby.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends lobbyUpdateArgs>(
      args: SelectSubset<T, lobbyUpdateArgs>
    ): CheckSelect<T, Prisma__lobbyClient<lobby>, Prisma__lobbyClient<lobbyGetPayload<T>>>

    /**
     * Delete zero or more Lobbies.
     * @param {lobbyDeleteManyArgs} args - Arguments to filter Lobbies to delete.
     * @example
     * // Delete a few Lobbies
     * const { count } = await prisma.lobby.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends lobbyDeleteManyArgs>(
      args?: SelectSubset<T, lobbyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lobbyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lobbies
     * const lobby = await prisma.lobby.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends lobbyUpdateManyArgs>(
      args: SelectSubset<T, lobbyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Lobby.
     * @param {lobbyUpsertArgs} args - Arguments to update or create a Lobby.
     * @example
     * // Update or create a Lobby
     * const lobby = await prisma.lobby.upsert({
     *   create: {
     *     // ... data to create a Lobby
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lobby we want to update
     *   }
     * })
    **/
    upsert<T extends lobbyUpsertArgs>(
      args: SelectSubset<T, lobbyUpsertArgs>
    ): CheckSelect<T, Prisma__lobbyClient<lobby>, Prisma__lobbyClient<lobbyGetPayload<T>>>

    /**
     * Count the number of Lobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lobbyCountArgs} args - Arguments to filter Lobbies to count.
     * @example
     * // Count the number of Lobbies
     * const count = await prisma.lobby.count({
     *   where: {
     *     // ... the filter for the Lobbies we want to count
     *   }
     * })
    **/
    count<T extends lobbyCountArgs>(
      args?: Subset<T, lobbyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LobbyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lobby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LobbyAggregateArgs>(args: Subset<T, LobbyAggregateArgs>): PrismaPromise<GetLobbyAggregateType<T>>

    /**
     * Group by Lobby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyGroupByArgs} args - Group by arguments.
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
      T extends LobbyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LobbyGroupByArgs['orderBy'] }
        : { orderBy?: LobbyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LobbyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLobbyGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for lobby.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__lobbyClient<T> implements PrismaPromise<T> {
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

    server_status<T extends server_statusArgs = {}>(args?: Subset<T, server_statusArgs>): CheckSelect<T, Prisma__server_statusClient<server_status | null >, Prisma__server_statusClient<server_statusGetPayload<T> | null >>;

    lobby_players<T extends lobby_playersFindManyArgs = {}>(args?: Subset<T, lobby_playersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<lobby_players>>, PrismaPromise<Array<lobby_playersGetPayload<T>>>>;

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
   * lobby findUnique
   */
  export type lobbyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the lobby
     * 
    **/
    select?: lobbySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobbyInclude | null
    /**
     * Throw an Error if a lobby can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which lobby to fetch.
     * 
    **/
    where: lobbyWhereUniqueInput
  }


  /**
   * lobby findFirst
   */
  export type lobbyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the lobby
     * 
    **/
    select?: lobbySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobbyInclude | null
    /**
     * Throw an Error if a lobby can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which lobby to fetch.
     * 
    **/
    where?: lobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lobbies to fetch.
     * 
    **/
    orderBy?: Enumerable<lobbyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lobbies.
     * 
    **/
    cursor?: lobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lobbies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lobbies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lobbies.
     * 
    **/
    distinct?: Enumerable<LobbyScalarFieldEnum>
  }


  /**
   * lobby findMany
   */
  export type lobbyFindManyArgs = {
    /**
     * Select specific fields to fetch from the lobby
     * 
    **/
    select?: lobbySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobbyInclude | null
    /**
     * Filter, which lobbies to fetch.
     * 
    **/
    where?: lobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lobbies to fetch.
     * 
    **/
    orderBy?: Enumerable<lobbyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lobbies.
     * 
    **/
    cursor?: lobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lobbies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lobbies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LobbyScalarFieldEnum>
  }


  /**
   * lobby create
   */
  export type lobbyCreateArgs = {
    /**
     * Select specific fields to fetch from the lobby
     * 
    **/
    select?: lobbySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobbyInclude | null
    /**
     * The data needed to create a lobby.
     * 
    **/
    data: XOR<lobbyCreateInput, lobbyUncheckedCreateInput>
  }


  /**
   * lobby createMany
   */
  export type lobbyCreateManyArgs = {
    data: Enumerable<lobbyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * lobby update
   */
  export type lobbyUpdateArgs = {
    /**
     * Select specific fields to fetch from the lobby
     * 
    **/
    select?: lobbySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobbyInclude | null
    /**
     * The data needed to update a lobby.
     * 
    **/
    data: XOR<lobbyUpdateInput, lobbyUncheckedUpdateInput>
    /**
     * Choose, which lobby to update.
     * 
    **/
    where: lobbyWhereUniqueInput
  }


  /**
   * lobby updateMany
   */
  export type lobbyUpdateManyArgs = {
    data: XOR<lobbyUpdateManyMutationInput, lobbyUncheckedUpdateManyInput>
    where?: lobbyWhereInput
  }


  /**
   * lobby upsert
   */
  export type lobbyUpsertArgs = {
    /**
     * Select specific fields to fetch from the lobby
     * 
    **/
    select?: lobbySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobbyInclude | null
    /**
     * The filter to search for the lobby to update in case it exists.
     * 
    **/
    where: lobbyWhereUniqueInput
    /**
     * In case the lobby found by the `where` argument doesn't exist, create a new lobby with this data.
     * 
    **/
    create: XOR<lobbyCreateInput, lobbyUncheckedCreateInput>
    /**
     * In case the lobby was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<lobbyUpdateInput, lobbyUncheckedUpdateInput>
  }


  /**
   * lobby delete
   */
  export type lobbyDeleteArgs = {
    /**
     * Select specific fields to fetch from the lobby
     * 
    **/
    select?: lobbySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobbyInclude | null
    /**
     * Filter which lobby to delete.
     * 
    **/
    where: lobbyWhereUniqueInput
  }


  /**
   * lobby deleteMany
   */
  export type lobbyDeleteManyArgs = {
    where?: lobbyWhereInput
  }


  /**
   * lobby without action
   */
  export type lobbyArgs = {
    /**
     * Select specific fields to fetch from the lobby
     * 
    **/
    select?: lobbySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobbyInclude | null
  }



  /**
   * Model lobby_players
   */


  export type AggregateLobby_players = {
    _count: Lobby_playersCountAggregateOutputType | null
    _avg: Lobby_playersAvgAggregateOutputType | null
    _sum: Lobby_playersSumAggregateOutputType | null
    _min: Lobby_playersMinAggregateOutputType | null
    _max: Lobby_playersMaxAggregateOutputType | null
  }

  export type Lobby_playersAvgAggregateOutputType = {
    ID: number | null
  }

  export type Lobby_playersSumAggregateOutputType = {
    ID: number | null
  }

  export type Lobby_playersMinAggregateOutputType = {
    ID: number | null
    STEAM_ID: string | null
    LOBBY_ID: string | null
  }

  export type Lobby_playersMaxAggregateOutputType = {
    ID: number | null
    STEAM_ID: string | null
    LOBBY_ID: string | null
  }

  export type Lobby_playersCountAggregateOutputType = {
    ID: number
    STEAM_ID: number
    LOBBY_ID: number
    _all: number
  }


  export type Lobby_playersAvgAggregateInputType = {
    ID?: true
  }

  export type Lobby_playersSumAggregateInputType = {
    ID?: true
  }

  export type Lobby_playersMinAggregateInputType = {
    ID?: true
    STEAM_ID?: true
    LOBBY_ID?: true
  }

  export type Lobby_playersMaxAggregateInputType = {
    ID?: true
    STEAM_ID?: true
    LOBBY_ID?: true
  }

  export type Lobby_playersCountAggregateInputType = {
    ID?: true
    STEAM_ID?: true
    LOBBY_ID?: true
    _all?: true
  }

  export type Lobby_playersAggregateArgs = {
    /**
     * Filter which lobby_players to aggregate.
     * 
    **/
    where?: lobby_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lobby_players to fetch.
     * 
    **/
    orderBy?: Enumerable<lobby_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: lobby_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lobby_players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lobby_players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lobby_players
    **/
    _count?: true | Lobby_playersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lobby_playersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lobby_playersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lobby_playersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lobby_playersMaxAggregateInputType
  }

  export type GetLobby_playersAggregateType<T extends Lobby_playersAggregateArgs> = {
        [P in keyof T & keyof AggregateLobby_players]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLobby_players[P]>
      : GetScalarType<T[P], AggregateLobby_players[P]>
  }




  export type Lobby_playersGroupByArgs = {
    where?: lobby_playersWhereInput
    orderBy?: Enumerable<lobby_playersOrderByWithAggregationInput>
    by: Array<Lobby_playersScalarFieldEnum>
    having?: lobby_playersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lobby_playersCountAggregateInputType | true
    _avg?: Lobby_playersAvgAggregateInputType
    _sum?: Lobby_playersSumAggregateInputType
    _min?: Lobby_playersMinAggregateInputType
    _max?: Lobby_playersMaxAggregateInputType
  }


  export type Lobby_playersGroupByOutputType = {
    ID: number
    STEAM_ID: string
    LOBBY_ID: string
    _count: Lobby_playersCountAggregateOutputType | null
    _avg: Lobby_playersAvgAggregateOutputType | null
    _sum: Lobby_playersSumAggregateOutputType | null
    _min: Lobby_playersMinAggregateOutputType | null
    _max: Lobby_playersMaxAggregateOutputType | null
  }

  type GetLobby_playersGroupByPayload<T extends Lobby_playersGroupByArgs> = Promise<
    Array<
      PickArray<Lobby_playersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lobby_playersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lobby_playersGroupByOutputType[P]>
            : GetScalarType<T[P], Lobby_playersGroupByOutputType[P]>
        }
      >
    >


  export type lobby_playersSelect = {
    ID?: boolean
    STEAM_ID?: boolean
    LOBBY_ID?: boolean
    lobby?: boolean | lobbyArgs
  }

  export type lobby_playersInclude = {
    lobby?: boolean | lobbyArgs
  }

  export type lobby_playersGetPayload<
    S extends boolean | null | undefined | lobby_playersArgs,
    U = keyof S
      > = S extends true
        ? lobby_players
    : S extends undefined
    ? never
    : S extends lobby_playersArgs | lobby_playersFindManyArgs
    ?'include' extends U
    ? lobby_players  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'lobby'
        ? lobbyGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof lobby_players ?lobby_players [P]
  : 
          P extends 'lobby'
        ? lobbyGetPayload<S['select'][P]> : never
  } 
    : lobby_players
  : lobby_players


  type lobby_playersCountArgs = Merge<
    Omit<lobby_playersFindManyArgs, 'select' | 'include'> & {
      select?: Lobby_playersCountAggregateInputType | true
    }
  >

  export interface lobby_playersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Lobby_players that matches the filter.
     * @param {lobby_playersFindUniqueArgs} args - Arguments to find a Lobby_players
     * @example
     * // Get one Lobby_players
     * const lobby_players = await prisma.lobby_players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends lobby_playersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, lobby_playersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'lobby_players'> extends True ? CheckSelect<T, Prisma__lobby_playersClient<lobby_players>, Prisma__lobby_playersClient<lobby_playersGetPayload<T>>> : CheckSelect<T, Prisma__lobby_playersClient<lobby_players | null >, Prisma__lobby_playersClient<lobby_playersGetPayload<T> | null >>

    /**
     * Find the first Lobby_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lobby_playersFindFirstArgs} args - Arguments to find a Lobby_players
     * @example
     * // Get one Lobby_players
     * const lobby_players = await prisma.lobby_players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends lobby_playersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, lobby_playersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'lobby_players'> extends True ? CheckSelect<T, Prisma__lobby_playersClient<lobby_players>, Prisma__lobby_playersClient<lobby_playersGetPayload<T>>> : CheckSelect<T, Prisma__lobby_playersClient<lobby_players | null >, Prisma__lobby_playersClient<lobby_playersGetPayload<T> | null >>

    /**
     * Find zero or more Lobby_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lobby_playersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lobby_players
     * const lobby_players = await prisma.lobby_players.findMany()
     * 
     * // Get first 10 Lobby_players
     * const lobby_players = await prisma.lobby_players.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const lobby_playersWithIDOnly = await prisma.lobby_players.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends lobby_playersFindManyArgs>(
      args?: SelectSubset<T, lobby_playersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<lobby_players>>, PrismaPromise<Array<lobby_playersGetPayload<T>>>>

    /**
     * Create a Lobby_players.
     * @param {lobby_playersCreateArgs} args - Arguments to create a Lobby_players.
     * @example
     * // Create one Lobby_players
     * const Lobby_players = await prisma.lobby_players.create({
     *   data: {
     *     // ... data to create a Lobby_players
     *   }
     * })
     * 
    **/
    create<T extends lobby_playersCreateArgs>(
      args: SelectSubset<T, lobby_playersCreateArgs>
    ): CheckSelect<T, Prisma__lobby_playersClient<lobby_players>, Prisma__lobby_playersClient<lobby_playersGetPayload<T>>>

    /**
     * Create many Lobby_players.
     *     @param {lobby_playersCreateManyArgs} args - Arguments to create many Lobby_players.
     *     @example
     *     // Create many Lobby_players
     *     const lobby_players = await prisma.lobby_players.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends lobby_playersCreateManyArgs>(
      args?: SelectSubset<T, lobby_playersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Lobby_players.
     * @param {lobby_playersDeleteArgs} args - Arguments to delete one Lobby_players.
     * @example
     * // Delete one Lobby_players
     * const Lobby_players = await prisma.lobby_players.delete({
     *   where: {
     *     // ... filter to delete one Lobby_players
     *   }
     * })
     * 
    **/
    delete<T extends lobby_playersDeleteArgs>(
      args: SelectSubset<T, lobby_playersDeleteArgs>
    ): CheckSelect<T, Prisma__lobby_playersClient<lobby_players>, Prisma__lobby_playersClient<lobby_playersGetPayload<T>>>

    /**
     * Update one Lobby_players.
     * @param {lobby_playersUpdateArgs} args - Arguments to update one Lobby_players.
     * @example
     * // Update one Lobby_players
     * const lobby_players = await prisma.lobby_players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends lobby_playersUpdateArgs>(
      args: SelectSubset<T, lobby_playersUpdateArgs>
    ): CheckSelect<T, Prisma__lobby_playersClient<lobby_players>, Prisma__lobby_playersClient<lobby_playersGetPayload<T>>>

    /**
     * Delete zero or more Lobby_players.
     * @param {lobby_playersDeleteManyArgs} args - Arguments to filter Lobby_players to delete.
     * @example
     * // Delete a few Lobby_players
     * const { count } = await prisma.lobby_players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends lobby_playersDeleteManyArgs>(
      args?: SelectSubset<T, lobby_playersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lobby_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lobby_playersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lobby_players
     * const lobby_players = await prisma.lobby_players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends lobby_playersUpdateManyArgs>(
      args: SelectSubset<T, lobby_playersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Lobby_players.
     * @param {lobby_playersUpsertArgs} args - Arguments to update or create a Lobby_players.
     * @example
     * // Update or create a Lobby_players
     * const lobby_players = await prisma.lobby_players.upsert({
     *   create: {
     *     // ... data to create a Lobby_players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lobby_players we want to update
     *   }
     * })
    **/
    upsert<T extends lobby_playersUpsertArgs>(
      args: SelectSubset<T, lobby_playersUpsertArgs>
    ): CheckSelect<T, Prisma__lobby_playersClient<lobby_players>, Prisma__lobby_playersClient<lobby_playersGetPayload<T>>>

    /**
     * Count the number of Lobby_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lobby_playersCountArgs} args - Arguments to filter Lobby_players to count.
     * @example
     * // Count the number of Lobby_players
     * const count = await prisma.lobby_players.count({
     *   where: {
     *     // ... the filter for the Lobby_players we want to count
     *   }
     * })
    **/
    count<T extends lobby_playersCountArgs>(
      args?: Subset<T, lobby_playersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lobby_playersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lobby_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lobby_playersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lobby_playersAggregateArgs>(args: Subset<T, Lobby_playersAggregateArgs>): PrismaPromise<GetLobby_playersAggregateType<T>>

    /**
     * Group by Lobby_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lobby_playersGroupByArgs} args - Group by arguments.
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
      T extends Lobby_playersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Lobby_playersGroupByArgs['orderBy'] }
        : { orderBy?: Lobby_playersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Lobby_playersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLobby_playersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for lobby_players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__lobby_playersClient<T> implements PrismaPromise<T> {
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

    lobby<T extends lobbyArgs = {}>(args?: Subset<T, lobbyArgs>): CheckSelect<T, Prisma__lobbyClient<lobby | null >, Prisma__lobbyClient<lobbyGetPayload<T> | null >>;

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
   * lobby_players findUnique
   */
  export type lobby_playersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the lobby_players
     * 
    **/
    select?: lobby_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobby_playersInclude | null
    /**
     * Throw an Error if a lobby_players can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which lobby_players to fetch.
     * 
    **/
    where: lobby_playersWhereUniqueInput
  }


  /**
   * lobby_players findFirst
   */
  export type lobby_playersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the lobby_players
     * 
    **/
    select?: lobby_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobby_playersInclude | null
    /**
     * Throw an Error if a lobby_players can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which lobby_players to fetch.
     * 
    **/
    where?: lobby_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lobby_players to fetch.
     * 
    **/
    orderBy?: Enumerable<lobby_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lobby_players.
     * 
    **/
    cursor?: lobby_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lobby_players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lobby_players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lobby_players.
     * 
    **/
    distinct?: Enumerable<Lobby_playersScalarFieldEnum>
  }


  /**
   * lobby_players findMany
   */
  export type lobby_playersFindManyArgs = {
    /**
     * Select specific fields to fetch from the lobby_players
     * 
    **/
    select?: lobby_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobby_playersInclude | null
    /**
     * Filter, which lobby_players to fetch.
     * 
    **/
    where?: lobby_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lobby_players to fetch.
     * 
    **/
    orderBy?: Enumerable<lobby_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lobby_players.
     * 
    **/
    cursor?: lobby_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lobby_players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lobby_players.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Lobby_playersScalarFieldEnum>
  }


  /**
   * lobby_players create
   */
  export type lobby_playersCreateArgs = {
    /**
     * Select specific fields to fetch from the lobby_players
     * 
    **/
    select?: lobby_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobby_playersInclude | null
    /**
     * The data needed to create a lobby_players.
     * 
    **/
    data: XOR<lobby_playersCreateInput, lobby_playersUncheckedCreateInput>
  }


  /**
   * lobby_players createMany
   */
  export type lobby_playersCreateManyArgs = {
    data: Enumerable<lobby_playersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * lobby_players update
   */
  export type lobby_playersUpdateArgs = {
    /**
     * Select specific fields to fetch from the lobby_players
     * 
    **/
    select?: lobby_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobby_playersInclude | null
    /**
     * The data needed to update a lobby_players.
     * 
    **/
    data: XOR<lobby_playersUpdateInput, lobby_playersUncheckedUpdateInput>
    /**
     * Choose, which lobby_players to update.
     * 
    **/
    where: lobby_playersWhereUniqueInput
  }


  /**
   * lobby_players updateMany
   */
  export type lobby_playersUpdateManyArgs = {
    data: XOR<lobby_playersUpdateManyMutationInput, lobby_playersUncheckedUpdateManyInput>
    where?: lobby_playersWhereInput
  }


  /**
   * lobby_players upsert
   */
  export type lobby_playersUpsertArgs = {
    /**
     * Select specific fields to fetch from the lobby_players
     * 
    **/
    select?: lobby_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobby_playersInclude | null
    /**
     * The filter to search for the lobby_players to update in case it exists.
     * 
    **/
    where: lobby_playersWhereUniqueInput
    /**
     * In case the lobby_players found by the `where` argument doesn't exist, create a new lobby_players with this data.
     * 
    **/
    create: XOR<lobby_playersCreateInput, lobby_playersUncheckedCreateInput>
    /**
     * In case the lobby_players was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<lobby_playersUpdateInput, lobby_playersUncheckedUpdateInput>
  }


  /**
   * lobby_players delete
   */
  export type lobby_playersDeleteArgs = {
    /**
     * Select specific fields to fetch from the lobby_players
     * 
    **/
    select?: lobby_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobby_playersInclude | null
    /**
     * Filter which lobby_players to delete.
     * 
    **/
    where: lobby_playersWhereUniqueInput
  }


  /**
   * lobby_players deleteMany
   */
  export type lobby_playersDeleteManyArgs = {
    where?: lobby_playersWhereInput
  }


  /**
   * lobby_players without action
   */
  export type lobby_playersArgs = {
    /**
     * Select specific fields to fetch from the lobby_players
     * 
    **/
    select?: lobby_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lobby_playersInclude | null
  }



  /**
   * Model server_status
   */


  export type AggregateServer_status = {
    _count: Server_statusCountAggregateOutputType | null
    _min: Server_statusMinAggregateOutputType | null
    _max: Server_statusMaxAggregateOutputType | null
  }

  export type Server_statusMinAggregateOutputType = {
    IP: string | null
    USED: boolean | null
    GAME_MODE: string | null
  }

  export type Server_statusMaxAggregateOutputType = {
    IP: string | null
    USED: boolean | null
    GAME_MODE: string | null
  }

  export type Server_statusCountAggregateOutputType = {
    IP: number
    USED: number
    GAME_MODE: number
    _all: number
  }


  export type Server_statusMinAggregateInputType = {
    IP?: true
    USED?: true
    GAME_MODE?: true
  }

  export type Server_statusMaxAggregateInputType = {
    IP?: true
    USED?: true
    GAME_MODE?: true
  }

  export type Server_statusCountAggregateInputType = {
    IP?: true
    USED?: true
    GAME_MODE?: true
    _all?: true
  }

  export type Server_statusAggregateArgs = {
    /**
     * Filter which server_status to aggregate.
     * 
    **/
    where?: server_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of server_statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<server_statusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: server_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` server_statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` server_statuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned server_statuses
    **/
    _count?: true | Server_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Server_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Server_statusMaxAggregateInputType
  }

  export type GetServer_statusAggregateType<T extends Server_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateServer_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer_status[P]>
      : GetScalarType<T[P], AggregateServer_status[P]>
  }




  export type Server_statusGroupByArgs = {
    where?: server_statusWhereInput
    orderBy?: Enumerable<server_statusOrderByWithAggregationInput>
    by: Array<Server_statusScalarFieldEnum>
    having?: server_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Server_statusCountAggregateInputType | true
    _min?: Server_statusMinAggregateInputType
    _max?: Server_statusMaxAggregateInputType
  }


  export type Server_statusGroupByOutputType = {
    IP: string
    USED: boolean
    GAME_MODE: string | null
    _count: Server_statusCountAggregateOutputType | null
    _min: Server_statusMinAggregateOutputType | null
    _max: Server_statusMaxAggregateOutputType | null
  }

  type GetServer_statusGroupByPayload<T extends Server_statusGroupByArgs> = Promise<
    Array<
      PickArray<Server_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Server_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Server_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Server_statusGroupByOutputType[P]>
        }
      >
    >


  export type server_statusSelect = {
    IP?: boolean
    USED?: boolean
    GAME_MODE?: boolean
    lobby?: boolean | lobbyFindManyArgs
    _count?: boolean | Server_statusCountOutputTypeArgs
  }

  export type server_statusInclude = {
    lobby?: boolean | lobbyFindManyArgs
    _count?: boolean | Server_statusCountOutputTypeArgs
  }

  export type server_statusGetPayload<
    S extends boolean | null | undefined | server_statusArgs,
    U = keyof S
      > = S extends true
        ? server_status
    : S extends undefined
    ? never
    : S extends server_statusArgs | server_statusFindManyArgs
    ?'include' extends U
    ? server_status  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'lobby'
        ? Array < lobbyGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? Server_statusCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof server_status ?server_status [P]
  : 
          P extends 'lobby'
        ? Array < lobbyGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? Server_statusCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : server_status
  : server_status


  type server_statusCountArgs = Merge<
    Omit<server_statusFindManyArgs, 'select' | 'include'> & {
      select?: Server_statusCountAggregateInputType | true
    }
  >

  export interface server_statusDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Server_status that matches the filter.
     * @param {server_statusFindUniqueArgs} args - Arguments to find a Server_status
     * @example
     * // Get one Server_status
     * const server_status = await prisma.server_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends server_statusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, server_statusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'server_status'> extends True ? CheckSelect<T, Prisma__server_statusClient<server_status>, Prisma__server_statusClient<server_statusGetPayload<T>>> : CheckSelect<T, Prisma__server_statusClient<server_status | null >, Prisma__server_statusClient<server_statusGetPayload<T> | null >>

    /**
     * Find the first Server_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_statusFindFirstArgs} args - Arguments to find a Server_status
     * @example
     * // Get one Server_status
     * const server_status = await prisma.server_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends server_statusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, server_statusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'server_status'> extends True ? CheckSelect<T, Prisma__server_statusClient<server_status>, Prisma__server_statusClient<server_statusGetPayload<T>>> : CheckSelect<T, Prisma__server_statusClient<server_status | null >, Prisma__server_statusClient<server_statusGetPayload<T> | null >>

    /**
     * Find zero or more Server_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Server_statuses
     * const server_statuses = await prisma.server_status.findMany()
     * 
     * // Get first 10 Server_statuses
     * const server_statuses = await prisma.server_status.findMany({ take: 10 })
     * 
     * // Only select the `IP`
     * const server_statusWithIPOnly = await prisma.server_status.findMany({ select: { IP: true } })
     * 
    **/
    findMany<T extends server_statusFindManyArgs>(
      args?: SelectSubset<T, server_statusFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<server_status>>, PrismaPromise<Array<server_statusGetPayload<T>>>>

    /**
     * Create a Server_status.
     * @param {server_statusCreateArgs} args - Arguments to create a Server_status.
     * @example
     * // Create one Server_status
     * const Server_status = await prisma.server_status.create({
     *   data: {
     *     // ... data to create a Server_status
     *   }
     * })
     * 
    **/
    create<T extends server_statusCreateArgs>(
      args: SelectSubset<T, server_statusCreateArgs>
    ): CheckSelect<T, Prisma__server_statusClient<server_status>, Prisma__server_statusClient<server_statusGetPayload<T>>>

    /**
     * Create many Server_statuses.
     *     @param {server_statusCreateManyArgs} args - Arguments to create many Server_statuses.
     *     @example
     *     // Create many Server_statuses
     *     const server_status = await prisma.server_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends server_statusCreateManyArgs>(
      args?: SelectSubset<T, server_statusCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Server_status.
     * @param {server_statusDeleteArgs} args - Arguments to delete one Server_status.
     * @example
     * // Delete one Server_status
     * const Server_status = await prisma.server_status.delete({
     *   where: {
     *     // ... filter to delete one Server_status
     *   }
     * })
     * 
    **/
    delete<T extends server_statusDeleteArgs>(
      args: SelectSubset<T, server_statusDeleteArgs>
    ): CheckSelect<T, Prisma__server_statusClient<server_status>, Prisma__server_statusClient<server_statusGetPayload<T>>>

    /**
     * Update one Server_status.
     * @param {server_statusUpdateArgs} args - Arguments to update one Server_status.
     * @example
     * // Update one Server_status
     * const server_status = await prisma.server_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends server_statusUpdateArgs>(
      args: SelectSubset<T, server_statusUpdateArgs>
    ): CheckSelect<T, Prisma__server_statusClient<server_status>, Prisma__server_statusClient<server_statusGetPayload<T>>>

    /**
     * Delete zero or more Server_statuses.
     * @param {server_statusDeleteManyArgs} args - Arguments to filter Server_statuses to delete.
     * @example
     * // Delete a few Server_statuses
     * const { count } = await prisma.server_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends server_statusDeleteManyArgs>(
      args?: SelectSubset<T, server_statusDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Server_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Server_statuses
     * const server_status = await prisma.server_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends server_statusUpdateManyArgs>(
      args: SelectSubset<T, server_statusUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Server_status.
     * @param {server_statusUpsertArgs} args - Arguments to update or create a Server_status.
     * @example
     * // Update or create a Server_status
     * const server_status = await prisma.server_status.upsert({
     *   create: {
     *     // ... data to create a Server_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server_status we want to update
     *   }
     * })
    **/
    upsert<T extends server_statusUpsertArgs>(
      args: SelectSubset<T, server_statusUpsertArgs>
    ): CheckSelect<T, Prisma__server_statusClient<server_status>, Prisma__server_statusClient<server_statusGetPayload<T>>>

    /**
     * Count the number of Server_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_statusCountArgs} args - Arguments to filter Server_statuses to count.
     * @example
     * // Count the number of Server_statuses
     * const count = await prisma.server_status.count({
     *   where: {
     *     // ... the filter for the Server_statuses we want to count
     *   }
     * })
    **/
    count<T extends server_statusCountArgs>(
      args?: Subset<T, server_statusCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Server_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Server_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Server_statusAggregateArgs>(args: Subset<T, Server_statusAggregateArgs>): PrismaPromise<GetServer_statusAggregateType<T>>

    /**
     * Group by Server_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Server_statusGroupByArgs} args - Group by arguments.
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
      T extends Server_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Server_statusGroupByArgs['orderBy'] }
        : { orderBy?: Server_statusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Server_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServer_statusGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for server_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__server_statusClient<T> implements PrismaPromise<T> {
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

    lobby<T extends lobbyFindManyArgs = {}>(args?: Subset<T, lobbyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<lobby>>, PrismaPromise<Array<lobbyGetPayload<T>>>>;

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
   * server_status findUnique
   */
  export type server_statusFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the server_status
     * 
    **/
    select?: server_statusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: server_statusInclude | null
    /**
     * Throw an Error if a server_status can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which server_status to fetch.
     * 
    **/
    where: server_statusWhereUniqueInput
  }


  /**
   * server_status findFirst
   */
  export type server_statusFindFirstArgs = {
    /**
     * Select specific fields to fetch from the server_status
     * 
    **/
    select?: server_statusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: server_statusInclude | null
    /**
     * Throw an Error if a server_status can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which server_status to fetch.
     * 
    **/
    where?: server_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of server_statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<server_statusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for server_statuses.
     * 
    **/
    cursor?: server_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` server_statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` server_statuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of server_statuses.
     * 
    **/
    distinct?: Enumerable<Server_statusScalarFieldEnum>
  }


  /**
   * server_status findMany
   */
  export type server_statusFindManyArgs = {
    /**
     * Select specific fields to fetch from the server_status
     * 
    **/
    select?: server_statusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: server_statusInclude | null
    /**
     * Filter, which server_statuses to fetch.
     * 
    **/
    where?: server_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of server_statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<server_statusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing server_statuses.
     * 
    **/
    cursor?: server_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` server_statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` server_statuses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Server_statusScalarFieldEnum>
  }


  /**
   * server_status create
   */
  export type server_statusCreateArgs = {
    /**
     * Select specific fields to fetch from the server_status
     * 
    **/
    select?: server_statusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: server_statusInclude | null
    /**
     * The data needed to create a server_status.
     * 
    **/
    data: XOR<server_statusCreateInput, server_statusUncheckedCreateInput>
  }


  /**
   * server_status createMany
   */
  export type server_statusCreateManyArgs = {
    data: Enumerable<server_statusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * server_status update
   */
  export type server_statusUpdateArgs = {
    /**
     * Select specific fields to fetch from the server_status
     * 
    **/
    select?: server_statusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: server_statusInclude | null
    /**
     * The data needed to update a server_status.
     * 
    **/
    data: XOR<server_statusUpdateInput, server_statusUncheckedUpdateInput>
    /**
     * Choose, which server_status to update.
     * 
    **/
    where: server_statusWhereUniqueInput
  }


  /**
   * server_status updateMany
   */
  export type server_statusUpdateManyArgs = {
    data: XOR<server_statusUpdateManyMutationInput, server_statusUncheckedUpdateManyInput>
    where?: server_statusWhereInput
  }


  /**
   * server_status upsert
   */
  export type server_statusUpsertArgs = {
    /**
     * Select specific fields to fetch from the server_status
     * 
    **/
    select?: server_statusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: server_statusInclude | null
    /**
     * The filter to search for the server_status to update in case it exists.
     * 
    **/
    where: server_statusWhereUniqueInput
    /**
     * In case the server_status found by the `where` argument doesn't exist, create a new server_status with this data.
     * 
    **/
    create: XOR<server_statusCreateInput, server_statusUncheckedCreateInput>
    /**
     * In case the server_status was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<server_statusUpdateInput, server_statusUncheckedUpdateInput>
  }


  /**
   * server_status delete
   */
  export type server_statusDeleteArgs = {
    /**
     * Select specific fields to fetch from the server_status
     * 
    **/
    select?: server_statusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: server_statusInclude | null
    /**
     * Filter which server_status to delete.
     * 
    **/
    where: server_statusWhereUniqueInput
  }


  /**
   * server_status deleteMany
   */
  export type server_statusDeleteManyArgs = {
    where?: server_statusWhereInput
  }


  /**
   * server_status without action
   */
  export type server_statusArgs = {
    /**
     * Select specific fields to fetch from the server_status
     * 
    **/
    select?: server_statusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: server_statusInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const LobbyScalarFieldEnum: {
    ID: 'ID',
    SERVER_IP: 'SERVER_IP',
    ENDED: 'ENDED',
    ENDED_AT: 'ENDED_AT'
  };

  export type LobbyScalarFieldEnum = (typeof LobbyScalarFieldEnum)[keyof typeof LobbyScalarFieldEnum]


  export const Lobby_playersScalarFieldEnum: {
    ID: 'ID',
    STEAM_ID: 'STEAM_ID',
    LOBBY_ID: 'LOBBY_ID'
  };

  export type Lobby_playersScalarFieldEnum = (typeof Lobby_playersScalarFieldEnum)[keyof typeof Lobby_playersScalarFieldEnum]


  export const Server_statusScalarFieldEnum: {
    IP: 'IP',
    USED: 'USED',
    GAME_MODE: 'GAME_MODE'
  };

  export type Server_statusScalarFieldEnum = (typeof Server_statusScalarFieldEnum)[keyof typeof Server_statusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type lobbyWhereInput = {
    AND?: Enumerable<lobbyWhereInput>
    OR?: Enumerable<lobbyWhereInput>
    NOT?: Enumerable<lobbyWhereInput>
    ID?: StringFilter | string
    SERVER_IP?: StringFilter | string
    ENDED?: BoolFilter | boolean
    ENDED_AT?: DateTimeFilter | Date | string
    server_status?: XOR<Server_statusRelationFilter, server_statusWhereInput>
    lobby_players?: Lobby_playersListRelationFilter
  }

  export type lobbyOrderByWithRelationInput = {
    ID?: SortOrder
    SERVER_IP?: SortOrder
    ENDED?: SortOrder
    ENDED_AT?: SortOrder
    server_status?: server_statusOrderByWithRelationInput
    lobby_players?: lobby_playersOrderByRelationAggregateInput
  }

  export type lobbyWhereUniqueInput = {
    ID?: string
  }

  export type lobbyOrderByWithAggregationInput = {
    ID?: SortOrder
    SERVER_IP?: SortOrder
    ENDED?: SortOrder
    ENDED_AT?: SortOrder
    _count?: lobbyCountOrderByAggregateInput
    _max?: lobbyMaxOrderByAggregateInput
    _min?: lobbyMinOrderByAggregateInput
  }

  export type lobbyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<lobbyScalarWhereWithAggregatesInput>
    OR?: Enumerable<lobbyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<lobbyScalarWhereWithAggregatesInput>
    ID?: StringWithAggregatesFilter | string
    SERVER_IP?: StringWithAggregatesFilter | string
    ENDED?: BoolWithAggregatesFilter | boolean
    ENDED_AT?: DateTimeWithAggregatesFilter | Date | string
  }

  export type lobby_playersWhereInput = {
    AND?: Enumerable<lobby_playersWhereInput>
    OR?: Enumerable<lobby_playersWhereInput>
    NOT?: Enumerable<lobby_playersWhereInput>
    ID?: IntFilter | number
    STEAM_ID?: StringFilter | string
    LOBBY_ID?: StringFilter | string
    lobby?: XOR<LobbyRelationFilter, lobbyWhereInput>
  }

  export type lobby_playersOrderByWithRelationInput = {
    ID?: SortOrder
    STEAM_ID?: SortOrder
    LOBBY_ID?: SortOrder
    lobby?: lobbyOrderByWithRelationInput
  }

  export type lobby_playersWhereUniqueInput = {
    ID?: number
  }

  export type lobby_playersOrderByWithAggregationInput = {
    ID?: SortOrder
    STEAM_ID?: SortOrder
    LOBBY_ID?: SortOrder
    _count?: lobby_playersCountOrderByAggregateInput
    _avg?: lobby_playersAvgOrderByAggregateInput
    _max?: lobby_playersMaxOrderByAggregateInput
    _min?: lobby_playersMinOrderByAggregateInput
    _sum?: lobby_playersSumOrderByAggregateInput
  }

  export type lobby_playersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<lobby_playersScalarWhereWithAggregatesInput>
    OR?: Enumerable<lobby_playersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<lobby_playersScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    STEAM_ID?: StringWithAggregatesFilter | string
    LOBBY_ID?: StringWithAggregatesFilter | string
  }

  export type server_statusWhereInput = {
    AND?: Enumerable<server_statusWhereInput>
    OR?: Enumerable<server_statusWhereInput>
    NOT?: Enumerable<server_statusWhereInput>
    IP?: StringFilter | string
    USED?: BoolFilter | boolean
    GAME_MODE?: StringNullableFilter | string | null
    lobby?: LobbyListRelationFilter
  }

  export type server_statusOrderByWithRelationInput = {
    IP?: SortOrder
    USED?: SortOrder
    GAME_MODE?: SortOrder
    lobby?: lobbyOrderByRelationAggregateInput
  }

  export type server_statusWhereUniqueInput = {
    IP?: string
  }

  export type server_statusOrderByWithAggregationInput = {
    IP?: SortOrder
    USED?: SortOrder
    GAME_MODE?: SortOrder
    _count?: server_statusCountOrderByAggregateInput
    _max?: server_statusMaxOrderByAggregateInput
    _min?: server_statusMinOrderByAggregateInput
  }

  export type server_statusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<server_statusScalarWhereWithAggregatesInput>
    OR?: Enumerable<server_statusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<server_statusScalarWhereWithAggregatesInput>
    IP?: StringWithAggregatesFilter | string
    USED?: BoolWithAggregatesFilter | boolean
    GAME_MODE?: StringNullableWithAggregatesFilter | string | null
  }

  export type lobbyCreateInput = {
    ID: string
    ENDED: boolean
    ENDED_AT: Date | string
    server_status: server_statusCreateNestedOneWithoutLobbyInput
    lobby_players?: lobby_playersCreateNestedManyWithoutLobbyInput
  }

  export type lobbyUncheckedCreateInput = {
    ID: string
    SERVER_IP: string
    ENDED: boolean
    ENDED_AT: Date | string
    lobby_players?: lobby_playersUncheckedCreateNestedManyWithoutLobbyInput
  }

  export type lobbyUpdateInput = {
    ID?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
    server_status?: server_statusUpdateOneRequiredWithoutLobbyInput
    lobby_players?: lobby_playersUpdateManyWithoutLobbyInput
  }

  export type lobbyUncheckedUpdateInput = {
    ID?: StringFieldUpdateOperationsInput | string
    SERVER_IP?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
    lobby_players?: lobby_playersUncheckedUpdateManyWithoutLobbyInput
  }

  export type lobbyCreateManyInput = {
    ID: string
    SERVER_IP: string
    ENDED: boolean
    ENDED_AT: Date | string
  }

  export type lobbyUpdateManyMutationInput = {
    ID?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lobbyUncheckedUpdateManyInput = {
    ID?: StringFieldUpdateOperationsInput | string
    SERVER_IP?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lobby_playersCreateInput = {
    STEAM_ID: string
    lobby: lobbyCreateNestedOneWithoutLobby_playersInput
  }

  export type lobby_playersUncheckedCreateInput = {
    ID?: number
    STEAM_ID: string
    LOBBY_ID: string
  }

  export type lobby_playersUpdateInput = {
    STEAM_ID?: StringFieldUpdateOperationsInput | string
    lobby?: lobbyUpdateOneRequiredWithoutLobby_playersInput
  }

  export type lobby_playersUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    STEAM_ID?: StringFieldUpdateOperationsInput | string
    LOBBY_ID?: StringFieldUpdateOperationsInput | string
  }

  export type lobby_playersCreateManyInput = {
    ID?: number
    STEAM_ID: string
    LOBBY_ID: string
  }

  export type lobby_playersUpdateManyMutationInput = {
    STEAM_ID?: StringFieldUpdateOperationsInput | string
  }

  export type lobby_playersUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    STEAM_ID?: StringFieldUpdateOperationsInput | string
    LOBBY_ID?: StringFieldUpdateOperationsInput | string
  }

  export type server_statusCreateInput = {
    IP: string
    USED?: boolean
    GAME_MODE?: string | null
    lobby?: lobbyCreateNestedManyWithoutServer_statusInput
  }

  export type server_statusUncheckedCreateInput = {
    IP: string
    USED?: boolean
    GAME_MODE?: string | null
    lobby?: lobbyUncheckedCreateNestedManyWithoutServer_statusInput
  }

  export type server_statusUpdateInput = {
    IP?: StringFieldUpdateOperationsInput | string
    USED?: BoolFieldUpdateOperationsInput | boolean
    GAME_MODE?: NullableStringFieldUpdateOperationsInput | string | null
    lobby?: lobbyUpdateManyWithoutServer_statusInput
  }

  export type server_statusUncheckedUpdateInput = {
    IP?: StringFieldUpdateOperationsInput | string
    USED?: BoolFieldUpdateOperationsInput | boolean
    GAME_MODE?: NullableStringFieldUpdateOperationsInput | string | null
    lobby?: lobbyUncheckedUpdateManyWithoutServer_statusInput
  }

  export type server_statusCreateManyInput = {
    IP: string
    USED?: boolean
    GAME_MODE?: string | null
  }

  export type server_statusUpdateManyMutationInput = {
    IP?: StringFieldUpdateOperationsInput | string
    USED?: BoolFieldUpdateOperationsInput | boolean
    GAME_MODE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type server_statusUncheckedUpdateManyInput = {
    IP?: StringFieldUpdateOperationsInput | string
    USED?: BoolFieldUpdateOperationsInput | boolean
    GAME_MODE?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type Server_statusRelationFilter = {
    is?: server_statusWhereInput
    isNot?: server_statusWhereInput
  }

  export type Lobby_playersListRelationFilter = {
    every?: lobby_playersWhereInput
    some?: lobby_playersWhereInput
    none?: lobby_playersWhereInput
  }

  export type lobby_playersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lobbyCountOrderByAggregateInput = {
    ID?: SortOrder
    SERVER_IP?: SortOrder
    ENDED?: SortOrder
    ENDED_AT?: SortOrder
  }

  export type lobbyMaxOrderByAggregateInput = {
    ID?: SortOrder
    SERVER_IP?: SortOrder
    ENDED?: SortOrder
    ENDED_AT?: SortOrder
  }

  export type lobbyMinOrderByAggregateInput = {
    ID?: SortOrder
    SERVER_IP?: SortOrder
    ENDED?: SortOrder
    ENDED_AT?: SortOrder
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type LobbyRelationFilter = {
    is?: lobbyWhereInput
    isNot?: lobbyWhereInput
  }

  export type lobby_playersCountOrderByAggregateInput = {
    ID?: SortOrder
    STEAM_ID?: SortOrder
    LOBBY_ID?: SortOrder
  }

  export type lobby_playersAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type lobby_playersMaxOrderByAggregateInput = {
    ID?: SortOrder
    STEAM_ID?: SortOrder
    LOBBY_ID?: SortOrder
  }

  export type lobby_playersMinOrderByAggregateInput = {
    ID?: SortOrder
    STEAM_ID?: SortOrder
    LOBBY_ID?: SortOrder
  }

  export type lobby_playersSumOrderByAggregateInput = {
    ID?: SortOrder
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

  export type LobbyListRelationFilter = {
    every?: lobbyWhereInput
    some?: lobbyWhereInput
    none?: lobbyWhereInput
  }

  export type lobbyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type server_statusCountOrderByAggregateInput = {
    IP?: SortOrder
    USED?: SortOrder
    GAME_MODE?: SortOrder
  }

  export type server_statusMaxOrderByAggregateInput = {
    IP?: SortOrder
    USED?: SortOrder
    GAME_MODE?: SortOrder
  }

  export type server_statusMinOrderByAggregateInput = {
    IP?: SortOrder
    USED?: SortOrder
    GAME_MODE?: SortOrder
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

  export type server_statusCreateNestedOneWithoutLobbyInput = {
    create?: XOR<server_statusCreateWithoutLobbyInput, server_statusUncheckedCreateWithoutLobbyInput>
    connectOrCreate?: server_statusCreateOrConnectWithoutLobbyInput
    connect?: server_statusWhereUniqueInput
  }

  export type lobby_playersCreateNestedManyWithoutLobbyInput = {
    create?: XOR<Enumerable<lobby_playersCreateWithoutLobbyInput>, Enumerable<lobby_playersUncheckedCreateWithoutLobbyInput>>
    connectOrCreate?: Enumerable<lobby_playersCreateOrConnectWithoutLobbyInput>
    createMany?: lobby_playersCreateManyLobbyInputEnvelope
    connect?: Enumerable<lobby_playersWhereUniqueInput>
  }

  export type lobby_playersUncheckedCreateNestedManyWithoutLobbyInput = {
    create?: XOR<Enumerable<lobby_playersCreateWithoutLobbyInput>, Enumerable<lobby_playersUncheckedCreateWithoutLobbyInput>>
    connectOrCreate?: Enumerable<lobby_playersCreateOrConnectWithoutLobbyInput>
    createMany?: lobby_playersCreateManyLobbyInputEnvelope
    connect?: Enumerable<lobby_playersWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type server_statusUpdateOneRequiredWithoutLobbyInput = {
    create?: XOR<server_statusCreateWithoutLobbyInput, server_statusUncheckedCreateWithoutLobbyInput>
    connectOrCreate?: server_statusCreateOrConnectWithoutLobbyInput
    upsert?: server_statusUpsertWithoutLobbyInput
    connect?: server_statusWhereUniqueInput
    update?: XOR<server_statusUpdateWithoutLobbyInput, server_statusUncheckedUpdateWithoutLobbyInput>
  }

  export type lobby_playersUpdateManyWithoutLobbyInput = {
    create?: XOR<Enumerable<lobby_playersCreateWithoutLobbyInput>, Enumerable<lobby_playersUncheckedCreateWithoutLobbyInput>>
    connectOrCreate?: Enumerable<lobby_playersCreateOrConnectWithoutLobbyInput>
    upsert?: Enumerable<lobby_playersUpsertWithWhereUniqueWithoutLobbyInput>
    createMany?: lobby_playersCreateManyLobbyInputEnvelope
    set?: Enumerable<lobby_playersWhereUniqueInput>
    disconnect?: Enumerable<lobby_playersWhereUniqueInput>
    delete?: Enumerable<lobby_playersWhereUniqueInput>
    connect?: Enumerable<lobby_playersWhereUniqueInput>
    update?: Enumerable<lobby_playersUpdateWithWhereUniqueWithoutLobbyInput>
    updateMany?: Enumerable<lobby_playersUpdateManyWithWhereWithoutLobbyInput>
    deleteMany?: Enumerable<lobby_playersScalarWhereInput>
  }

  export type lobby_playersUncheckedUpdateManyWithoutLobbyInput = {
    create?: XOR<Enumerable<lobby_playersCreateWithoutLobbyInput>, Enumerable<lobby_playersUncheckedCreateWithoutLobbyInput>>
    connectOrCreate?: Enumerable<lobby_playersCreateOrConnectWithoutLobbyInput>
    upsert?: Enumerable<lobby_playersUpsertWithWhereUniqueWithoutLobbyInput>
    createMany?: lobby_playersCreateManyLobbyInputEnvelope
    set?: Enumerable<lobby_playersWhereUniqueInput>
    disconnect?: Enumerable<lobby_playersWhereUniqueInput>
    delete?: Enumerable<lobby_playersWhereUniqueInput>
    connect?: Enumerable<lobby_playersWhereUniqueInput>
    update?: Enumerable<lobby_playersUpdateWithWhereUniqueWithoutLobbyInput>
    updateMany?: Enumerable<lobby_playersUpdateManyWithWhereWithoutLobbyInput>
    deleteMany?: Enumerable<lobby_playersScalarWhereInput>
  }

  export type lobbyCreateNestedOneWithoutLobby_playersInput = {
    create?: XOR<lobbyCreateWithoutLobby_playersInput, lobbyUncheckedCreateWithoutLobby_playersInput>
    connectOrCreate?: lobbyCreateOrConnectWithoutLobby_playersInput
    connect?: lobbyWhereUniqueInput
  }

  export type lobbyUpdateOneRequiredWithoutLobby_playersInput = {
    create?: XOR<lobbyCreateWithoutLobby_playersInput, lobbyUncheckedCreateWithoutLobby_playersInput>
    connectOrCreate?: lobbyCreateOrConnectWithoutLobby_playersInput
    upsert?: lobbyUpsertWithoutLobby_playersInput
    connect?: lobbyWhereUniqueInput
    update?: XOR<lobbyUpdateWithoutLobby_playersInput, lobbyUncheckedUpdateWithoutLobby_playersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type lobbyCreateNestedManyWithoutServer_statusInput = {
    create?: XOR<Enumerable<lobbyCreateWithoutServer_statusInput>, Enumerable<lobbyUncheckedCreateWithoutServer_statusInput>>
    connectOrCreate?: Enumerable<lobbyCreateOrConnectWithoutServer_statusInput>
    createMany?: lobbyCreateManyServer_statusInputEnvelope
    connect?: Enumerable<lobbyWhereUniqueInput>
  }

  export type lobbyUncheckedCreateNestedManyWithoutServer_statusInput = {
    create?: XOR<Enumerable<lobbyCreateWithoutServer_statusInput>, Enumerable<lobbyUncheckedCreateWithoutServer_statusInput>>
    connectOrCreate?: Enumerable<lobbyCreateOrConnectWithoutServer_statusInput>
    createMany?: lobbyCreateManyServer_statusInputEnvelope
    connect?: Enumerable<lobbyWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type lobbyUpdateManyWithoutServer_statusInput = {
    create?: XOR<Enumerable<lobbyCreateWithoutServer_statusInput>, Enumerable<lobbyUncheckedCreateWithoutServer_statusInput>>
    connectOrCreate?: Enumerable<lobbyCreateOrConnectWithoutServer_statusInput>
    upsert?: Enumerable<lobbyUpsertWithWhereUniqueWithoutServer_statusInput>
    createMany?: lobbyCreateManyServer_statusInputEnvelope
    set?: Enumerable<lobbyWhereUniqueInput>
    disconnect?: Enumerable<lobbyWhereUniqueInput>
    delete?: Enumerable<lobbyWhereUniqueInput>
    connect?: Enumerable<lobbyWhereUniqueInput>
    update?: Enumerable<lobbyUpdateWithWhereUniqueWithoutServer_statusInput>
    updateMany?: Enumerable<lobbyUpdateManyWithWhereWithoutServer_statusInput>
    deleteMany?: Enumerable<lobbyScalarWhereInput>
  }

  export type lobbyUncheckedUpdateManyWithoutServer_statusInput = {
    create?: XOR<Enumerable<lobbyCreateWithoutServer_statusInput>, Enumerable<lobbyUncheckedCreateWithoutServer_statusInput>>
    connectOrCreate?: Enumerable<lobbyCreateOrConnectWithoutServer_statusInput>
    upsert?: Enumerable<lobbyUpsertWithWhereUniqueWithoutServer_statusInput>
    createMany?: lobbyCreateManyServer_statusInputEnvelope
    set?: Enumerable<lobbyWhereUniqueInput>
    disconnect?: Enumerable<lobbyWhereUniqueInput>
    delete?: Enumerable<lobbyWhereUniqueInput>
    connect?: Enumerable<lobbyWhereUniqueInput>
    update?: Enumerable<lobbyUpdateWithWhereUniqueWithoutServer_statusInput>
    updateMany?: Enumerable<lobbyUpdateManyWithWhereWithoutServer_statusInput>
    deleteMany?: Enumerable<lobbyScalarWhereInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type server_statusCreateWithoutLobbyInput = {
    IP: string
    USED?: boolean
    GAME_MODE?: string | null
  }

  export type server_statusUncheckedCreateWithoutLobbyInput = {
    IP: string
    USED?: boolean
    GAME_MODE?: string | null
  }

  export type server_statusCreateOrConnectWithoutLobbyInput = {
    where: server_statusWhereUniqueInput
    create: XOR<server_statusCreateWithoutLobbyInput, server_statusUncheckedCreateWithoutLobbyInput>
  }

  export type lobby_playersCreateWithoutLobbyInput = {
    STEAM_ID: string
  }

  export type lobby_playersUncheckedCreateWithoutLobbyInput = {
    ID?: number
    STEAM_ID: string
  }

  export type lobby_playersCreateOrConnectWithoutLobbyInput = {
    where: lobby_playersWhereUniqueInput
    create: XOR<lobby_playersCreateWithoutLobbyInput, lobby_playersUncheckedCreateWithoutLobbyInput>
  }

  export type lobby_playersCreateManyLobbyInputEnvelope = {
    data: Enumerable<lobby_playersCreateManyLobbyInput>
    skipDuplicates?: boolean
  }

  export type server_statusUpsertWithoutLobbyInput = {
    update: XOR<server_statusUpdateWithoutLobbyInput, server_statusUncheckedUpdateWithoutLobbyInput>
    create: XOR<server_statusCreateWithoutLobbyInput, server_statusUncheckedCreateWithoutLobbyInput>
  }

  export type server_statusUpdateWithoutLobbyInput = {
    IP?: StringFieldUpdateOperationsInput | string
    USED?: BoolFieldUpdateOperationsInput | boolean
    GAME_MODE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type server_statusUncheckedUpdateWithoutLobbyInput = {
    IP?: StringFieldUpdateOperationsInput | string
    USED?: BoolFieldUpdateOperationsInput | boolean
    GAME_MODE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type lobby_playersUpsertWithWhereUniqueWithoutLobbyInput = {
    where: lobby_playersWhereUniqueInput
    update: XOR<lobby_playersUpdateWithoutLobbyInput, lobby_playersUncheckedUpdateWithoutLobbyInput>
    create: XOR<lobby_playersCreateWithoutLobbyInput, lobby_playersUncheckedCreateWithoutLobbyInput>
  }

  export type lobby_playersUpdateWithWhereUniqueWithoutLobbyInput = {
    where: lobby_playersWhereUniqueInput
    data: XOR<lobby_playersUpdateWithoutLobbyInput, lobby_playersUncheckedUpdateWithoutLobbyInput>
  }

  export type lobby_playersUpdateManyWithWhereWithoutLobbyInput = {
    where: lobby_playersScalarWhereInput
    data: XOR<lobby_playersUpdateManyMutationInput, lobby_playersUncheckedUpdateManyWithoutLobby_playersInput>
  }

  export type lobby_playersScalarWhereInput = {
    AND?: Enumerable<lobby_playersScalarWhereInput>
    OR?: Enumerable<lobby_playersScalarWhereInput>
    NOT?: Enumerable<lobby_playersScalarWhereInput>
    ID?: IntFilter | number
    STEAM_ID?: StringFilter | string
    LOBBY_ID?: StringFilter | string
  }

  export type lobbyCreateWithoutLobby_playersInput = {
    ID: string
    ENDED: boolean
    ENDED_AT: Date | string
    server_status: server_statusCreateNestedOneWithoutLobbyInput
  }

  export type lobbyUncheckedCreateWithoutLobby_playersInput = {
    ID: string
    SERVER_IP: string
    ENDED: boolean
    ENDED_AT: Date | string
  }

  export type lobbyCreateOrConnectWithoutLobby_playersInput = {
    where: lobbyWhereUniqueInput
    create: XOR<lobbyCreateWithoutLobby_playersInput, lobbyUncheckedCreateWithoutLobby_playersInput>
  }

  export type lobbyUpsertWithoutLobby_playersInput = {
    update: XOR<lobbyUpdateWithoutLobby_playersInput, lobbyUncheckedUpdateWithoutLobby_playersInput>
    create: XOR<lobbyCreateWithoutLobby_playersInput, lobbyUncheckedCreateWithoutLobby_playersInput>
  }

  export type lobbyUpdateWithoutLobby_playersInput = {
    ID?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
    server_status?: server_statusUpdateOneRequiredWithoutLobbyInput
  }

  export type lobbyUncheckedUpdateWithoutLobby_playersInput = {
    ID?: StringFieldUpdateOperationsInput | string
    SERVER_IP?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lobbyCreateWithoutServer_statusInput = {
    ID: string
    ENDED: boolean
    ENDED_AT: Date | string
    lobby_players?: lobby_playersCreateNestedManyWithoutLobbyInput
  }

  export type lobbyUncheckedCreateWithoutServer_statusInput = {
    ID: string
    ENDED: boolean
    ENDED_AT: Date | string
    lobby_players?: lobby_playersUncheckedCreateNestedManyWithoutLobbyInput
  }

  export type lobbyCreateOrConnectWithoutServer_statusInput = {
    where: lobbyWhereUniqueInput
    create: XOR<lobbyCreateWithoutServer_statusInput, lobbyUncheckedCreateWithoutServer_statusInput>
  }

  export type lobbyCreateManyServer_statusInputEnvelope = {
    data: Enumerable<lobbyCreateManyServer_statusInput>
    skipDuplicates?: boolean
  }

  export type lobbyUpsertWithWhereUniqueWithoutServer_statusInput = {
    where: lobbyWhereUniqueInput
    update: XOR<lobbyUpdateWithoutServer_statusInput, lobbyUncheckedUpdateWithoutServer_statusInput>
    create: XOR<lobbyCreateWithoutServer_statusInput, lobbyUncheckedCreateWithoutServer_statusInput>
  }

  export type lobbyUpdateWithWhereUniqueWithoutServer_statusInput = {
    where: lobbyWhereUniqueInput
    data: XOR<lobbyUpdateWithoutServer_statusInput, lobbyUncheckedUpdateWithoutServer_statusInput>
  }

  export type lobbyUpdateManyWithWhereWithoutServer_statusInput = {
    where: lobbyScalarWhereInput
    data: XOR<lobbyUpdateManyMutationInput, lobbyUncheckedUpdateManyWithoutLobbyInput>
  }

  export type lobbyScalarWhereInput = {
    AND?: Enumerable<lobbyScalarWhereInput>
    OR?: Enumerable<lobbyScalarWhereInput>
    NOT?: Enumerable<lobbyScalarWhereInput>
    ID?: StringFilter | string
    SERVER_IP?: StringFilter | string
    ENDED?: BoolFilter | boolean
    ENDED_AT?: DateTimeFilter | Date | string
  }

  export type lobby_playersCreateManyLobbyInput = {
    ID?: number
    STEAM_ID: string
  }

  export type lobby_playersUpdateWithoutLobbyInput = {
    STEAM_ID?: StringFieldUpdateOperationsInput | string
  }

  export type lobby_playersUncheckedUpdateWithoutLobbyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    STEAM_ID?: StringFieldUpdateOperationsInput | string
  }

  export type lobby_playersUncheckedUpdateManyWithoutLobby_playersInput = {
    ID?: IntFieldUpdateOperationsInput | number
    STEAM_ID?: StringFieldUpdateOperationsInput | string
  }

  export type lobbyCreateManyServer_statusInput = {
    ID: string
    ENDED: boolean
    ENDED_AT: Date | string
  }

  export type lobbyUpdateWithoutServer_statusInput = {
    ID?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
    lobby_players?: lobby_playersUpdateManyWithoutLobbyInput
  }

  export type lobbyUncheckedUpdateWithoutServer_statusInput = {
    ID?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
    lobby_players?: lobby_playersUncheckedUpdateManyWithoutLobbyInput
  }

  export type lobbyUncheckedUpdateManyWithoutLobbyInput = {
    ID?: StringFieldUpdateOperationsInput | string
    ENDED?: BoolFieldUpdateOperationsInput | boolean
    ENDED_AT?: DateTimeFieldUpdateOperationsInput | Date | string
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