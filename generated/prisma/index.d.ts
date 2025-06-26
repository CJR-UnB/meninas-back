
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Aluna
 * 
 */
export type Aluna = $Result.DefaultSelection<Prisma.$AlunaPayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Foto
 * 
 */
export type Foto = $Result.DefaultSelection<Prisma.$FotoPayload>
/**
 * Model Imprensa
 * 
 */
export type Imprensa = $Result.DefaultSelection<Prisma.$ImprensaPayload>
/**
 * Model Escola
 * 
 */
export type Escola = $Result.DefaultSelection<Prisma.$EscolaPayload>
/**
 * Model Patrocinador
 * 
 */
export type Patrocinador = $Result.DefaultSelection<Prisma.$PatrocinadorPayload>
/**
 * Model Projeto
 * 
 */
export type Projeto = $Result.DefaultSelection<Prisma.$ProjetoPayload>
/**
 * Model ImpactoProjeto
 * 
 */
export type ImpactoProjeto = $Result.DefaultSelection<Prisma.$ImpactoProjetoPayload>
/**
 * Model Historia
 * 
 */
export type Historia = $Result.DefaultSelection<Prisma.$HistoriaPayload>
/**
 * Model Publicacao
 * 
 */
export type Publicacao = $Result.DefaultSelection<Prisma.$PublicacaoPayload>
/**
 * Model ProfessorHasPublicacao
 * 
 */
export type ProfessorHasPublicacao = $Result.DefaultSelection<Prisma.$ProfessorHasPublicacaoPayload>
/**
 * Model AlunaHasPublicacao
 * 
 */
export type AlunaHasPublicacao = $Result.DefaultSelection<Prisma.$AlunaHasPublicacaoPayload>
/**
 * Model AreaAtuacao
 * 
 */
export type AreaAtuacao = $Result.DefaultSelection<Prisma.$AreaAtuacaoPayload>
/**
 * Model AlunaHasAreaAtuacao
 * 
 */
export type AlunaHasAreaAtuacao = $Result.DefaultSelection<Prisma.$AlunaHasAreaAtuacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Professors
 * const professors = await prisma.professor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Professors
   * const professors = await prisma.professor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aluna`: Exposes CRUD operations for the **Aluna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunas
    * const alunas = await prisma.aluna.findMany()
    * ```
    */
  get aluna(): Prisma.AlunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foto`: Exposes CRUD operations for the **Foto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotos
    * const fotos = await prisma.foto.findMany()
    * ```
    */
  get foto(): Prisma.FotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imprensa`: Exposes CRUD operations for the **Imprensa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imprensas
    * const imprensas = await prisma.imprensa.findMany()
    * ```
    */
  get imprensa(): Prisma.ImprensaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escola`: Exposes CRUD operations for the **Escola** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escolas
    * const escolas = await prisma.escola.findMany()
    * ```
    */
  get escola(): Prisma.EscolaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patrocinador`: Exposes CRUD operations for the **Patrocinador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patrocinadors
    * const patrocinadors = await prisma.patrocinador.findMany()
    * ```
    */
  get patrocinador(): Prisma.PatrocinadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projeto`: Exposes CRUD operations for the **Projeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projetos
    * const projetos = await prisma.projeto.findMany()
    * ```
    */
  get projeto(): Prisma.ProjetoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.impactoProjeto`: Exposes CRUD operations for the **ImpactoProjeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImpactoProjetos
    * const impactoProjetos = await prisma.impactoProjeto.findMany()
    * ```
    */
  get impactoProjeto(): Prisma.ImpactoProjetoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historia`: Exposes CRUD operations for the **Historia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historias
    * const historias = await prisma.historia.findMany()
    * ```
    */
  get historia(): Prisma.HistoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicacao`: Exposes CRUD operations for the **Publicacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicacaos
    * const publicacaos = await prisma.publicacao.findMany()
    * ```
    */
  get publicacao(): Prisma.PublicacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professorHasPublicacao`: Exposes CRUD operations for the **ProfessorHasPublicacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessorHasPublicacaos
    * const professorHasPublicacaos = await prisma.professorHasPublicacao.findMany()
    * ```
    */
  get professorHasPublicacao(): Prisma.ProfessorHasPublicacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alunaHasPublicacao`: Exposes CRUD operations for the **AlunaHasPublicacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlunaHasPublicacaos
    * const alunaHasPublicacaos = await prisma.alunaHasPublicacao.findMany()
    * ```
    */
  get alunaHasPublicacao(): Prisma.AlunaHasPublicacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.areaAtuacao`: Exposes CRUD operations for the **AreaAtuacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AreaAtuacaos
    * const areaAtuacaos = await prisma.areaAtuacao.findMany()
    * ```
    */
  get areaAtuacao(): Prisma.AreaAtuacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alunaHasAreaAtuacao`: Exposes CRUD operations for the **AlunaHasAreaAtuacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlunaHasAreaAtuacaos
    * const alunaHasAreaAtuacaos = await prisma.alunaHasAreaAtuacao.findMany()
    * ```
    */
  get alunaHasAreaAtuacao(): Prisma.AlunaHasAreaAtuacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Professor: 'Professor',
    Aluna: 'Aluna',
    Evento: 'Evento',
    Foto: 'Foto',
    Imprensa: 'Imprensa',
    Escola: 'Escola',
    Patrocinador: 'Patrocinador',
    Projeto: 'Projeto',
    ImpactoProjeto: 'ImpactoProjeto',
    Historia: 'Historia',
    Publicacao: 'Publicacao',
    ProfessorHasPublicacao: 'ProfessorHasPublicacao',
    AlunaHasPublicacao: 'AlunaHasPublicacao',
    AreaAtuacao: 'AreaAtuacao',
    AlunaHasAreaAtuacao: 'AlunaHasAreaAtuacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "professor" | "aluna" | "evento" | "foto" | "imprensa" | "escola" | "patrocinador" | "projeto" | "impactoProjeto" | "historia" | "publicacao" | "professorHasPublicacao" | "alunaHasPublicacao" | "areaAtuacao" | "alunaHasAreaAtuacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Aluna: {
        payload: Prisma.$AlunaPayload<ExtArgs>
        fields: Prisma.AlunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>
          }
          findFirst: {
            args: Prisma.AlunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>
          }
          findMany: {
            args: Prisma.AlunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>[]
          }
          create: {
            args: Prisma.AlunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>
          }
          createMany: {
            args: Prisma.AlunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>[]
          }
          delete: {
            args: Prisma.AlunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>
          }
          update: {
            args: Prisma.AlunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>
          }
          deleteMany: {
            args: Prisma.AlunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlunaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>[]
          }
          upsert: {
            args: Prisma.AlunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaPayload>
          }
          aggregate: {
            args: Prisma.AlunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluna>
          }
          groupBy: {
            args: Prisma.AlunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunaCountArgs<ExtArgs>
            result: $Utils.Optional<AlunaCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Foto: {
        payload: Prisma.$FotoPayload<ExtArgs>
        fields: Prisma.FotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findFirst: {
            args: Prisma.FotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findMany: {
            args: Prisma.FotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          create: {
            args: Prisma.FotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          createMany: {
            args: Prisma.FotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          delete: {
            args: Prisma.FotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          update: {
            args: Prisma.FotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          deleteMany: {
            args: Prisma.FotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          upsert: {
            args: Prisma.FotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          aggregate: {
            args: Prisma.FotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoto>
          }
          groupBy: {
            args: Prisma.FotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoCountArgs<ExtArgs>
            result: $Utils.Optional<FotoCountAggregateOutputType> | number
          }
        }
      }
      Imprensa: {
        payload: Prisma.$ImprensaPayload<ExtArgs>
        fields: Prisma.ImprensaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImprensaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImprensaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>
          }
          findFirst: {
            args: Prisma.ImprensaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImprensaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>
          }
          findMany: {
            args: Prisma.ImprensaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>[]
          }
          create: {
            args: Prisma.ImprensaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>
          }
          createMany: {
            args: Prisma.ImprensaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImprensaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>[]
          }
          delete: {
            args: Prisma.ImprensaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>
          }
          update: {
            args: Prisma.ImprensaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>
          }
          deleteMany: {
            args: Prisma.ImprensaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImprensaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImprensaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>[]
          }
          upsert: {
            args: Prisma.ImprensaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImprensaPayload>
          }
          aggregate: {
            args: Prisma.ImprensaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImprensa>
          }
          groupBy: {
            args: Prisma.ImprensaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImprensaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImprensaCountArgs<ExtArgs>
            result: $Utils.Optional<ImprensaCountAggregateOutputType> | number
          }
        }
      }
      Escola: {
        payload: Prisma.$EscolaPayload<ExtArgs>
        fields: Prisma.EscolaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscolaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscolaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>
          }
          findFirst: {
            args: Prisma.EscolaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscolaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>
          }
          findMany: {
            args: Prisma.EscolaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>[]
          }
          create: {
            args: Prisma.EscolaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>
          }
          createMany: {
            args: Prisma.EscolaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscolaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>[]
          }
          delete: {
            args: Prisma.EscolaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>
          }
          update: {
            args: Prisma.EscolaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>
          }
          deleteMany: {
            args: Prisma.EscolaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscolaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscolaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>[]
          }
          upsert: {
            args: Prisma.EscolaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaPayload>
          }
          aggregate: {
            args: Prisma.EscolaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscola>
          }
          groupBy: {
            args: Prisma.EscolaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscolaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscolaCountArgs<ExtArgs>
            result: $Utils.Optional<EscolaCountAggregateOutputType> | number
          }
        }
      }
      Patrocinador: {
        payload: Prisma.$PatrocinadorPayload<ExtArgs>
        fields: Prisma.PatrocinadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatrocinadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatrocinadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>
          }
          findFirst: {
            args: Prisma.PatrocinadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatrocinadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>
          }
          findMany: {
            args: Prisma.PatrocinadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>[]
          }
          create: {
            args: Prisma.PatrocinadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>
          }
          createMany: {
            args: Prisma.PatrocinadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatrocinadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>[]
          }
          delete: {
            args: Prisma.PatrocinadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>
          }
          update: {
            args: Prisma.PatrocinadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>
          }
          deleteMany: {
            args: Prisma.PatrocinadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatrocinadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatrocinadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>[]
          }
          upsert: {
            args: Prisma.PatrocinadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatrocinadorPayload>
          }
          aggregate: {
            args: Prisma.PatrocinadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatrocinador>
          }
          groupBy: {
            args: Prisma.PatrocinadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatrocinadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatrocinadorCountArgs<ExtArgs>
            result: $Utils.Optional<PatrocinadorCountAggregateOutputType> | number
          }
        }
      }
      Projeto: {
        payload: Prisma.$ProjetoPayload<ExtArgs>
        fields: Prisma.ProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findFirst: {
            args: Prisma.ProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findMany: {
            args: Prisma.ProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          create: {
            args: Prisma.ProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          createMany: {
            args: Prisma.ProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          delete: {
            args: Prisma.ProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          update: {
            args: Prisma.ProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          deleteMany: {
            args: Prisma.ProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          upsert: {
            args: Prisma.ProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          aggregate: {
            args: Prisma.ProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjeto>
          }
          groupBy: {
            args: Prisma.ProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetoCountAggregateOutputType> | number
          }
        }
      }
      ImpactoProjeto: {
        payload: Prisma.$ImpactoProjetoPayload<ExtArgs>
        fields: Prisma.ImpactoProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImpactoProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImpactoProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>
          }
          findFirst: {
            args: Prisma.ImpactoProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImpactoProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>
          }
          findMany: {
            args: Prisma.ImpactoProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>[]
          }
          create: {
            args: Prisma.ImpactoProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>
          }
          createMany: {
            args: Prisma.ImpactoProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImpactoProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>[]
          }
          delete: {
            args: Prisma.ImpactoProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>
          }
          update: {
            args: Prisma.ImpactoProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>
          }
          deleteMany: {
            args: Prisma.ImpactoProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImpactoProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImpactoProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>[]
          }
          upsert: {
            args: Prisma.ImpactoProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactoProjetoPayload>
          }
          aggregate: {
            args: Prisma.ImpactoProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImpactoProjeto>
          }
          groupBy: {
            args: Prisma.ImpactoProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImpactoProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImpactoProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<ImpactoProjetoCountAggregateOutputType> | number
          }
        }
      }
      Historia: {
        payload: Prisma.$HistoriaPayload<ExtArgs>
        fields: Prisma.HistoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>
          }
          findFirst: {
            args: Prisma.HistoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>
          }
          findMany: {
            args: Prisma.HistoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>[]
          }
          create: {
            args: Prisma.HistoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>
          }
          createMany: {
            args: Prisma.HistoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>[]
          }
          delete: {
            args: Prisma.HistoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>
          }
          update: {
            args: Prisma.HistoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>
          }
          deleteMany: {
            args: Prisma.HistoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>[]
          }
          upsert: {
            args: Prisma.HistoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaPayload>
          }
          aggregate: {
            args: Prisma.HistoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoria>
          }
          groupBy: {
            args: Prisma.HistoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoriaCountArgs<ExtArgs>
            result: $Utils.Optional<HistoriaCountAggregateOutputType> | number
          }
        }
      }
      Publicacao: {
        payload: Prisma.$PublicacaoPayload<ExtArgs>
        fields: Prisma.PublicacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          findFirst: {
            args: Prisma.PublicacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          findMany: {
            args: Prisma.PublicacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>[]
          }
          create: {
            args: Prisma.PublicacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          createMany: {
            args: Prisma.PublicacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>[]
          }
          delete: {
            args: Prisma.PublicacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          update: {
            args: Prisma.PublicacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          deleteMany: {
            args: Prisma.PublicacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>[]
          }
          upsert: {
            args: Prisma.PublicacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          aggregate: {
            args: Prisma.PublicacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicacao>
          }
          groupBy: {
            args: Prisma.PublicacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicacaoCountArgs<ExtArgs>
            result: $Utils.Optional<PublicacaoCountAggregateOutputType> | number
          }
        }
      }
      ProfessorHasPublicacao: {
        payload: Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>
        fields: Prisma.ProfessorHasPublicacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorHasPublicacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorHasPublicacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>
          }
          findFirst: {
            args: Prisma.ProfessorHasPublicacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorHasPublicacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>
          }
          findMany: {
            args: Prisma.ProfessorHasPublicacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>[]
          }
          create: {
            args: Prisma.ProfessorHasPublicacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>
          }
          createMany: {
            args: Prisma.ProfessorHasPublicacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorHasPublicacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>[]
          }
          delete: {
            args: Prisma.ProfessorHasPublicacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>
          }
          update: {
            args: Prisma.ProfessorHasPublicacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorHasPublicacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorHasPublicacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorHasPublicacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorHasPublicacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorHasPublicacaoPayload>
          }
          aggregate: {
            args: Prisma.ProfessorHasPublicacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessorHasPublicacao>
          }
          groupBy: {
            args: Prisma.ProfessorHasPublicacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorHasPublicacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorHasPublicacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorHasPublicacaoCountAggregateOutputType> | number
          }
        }
      }
      AlunaHasPublicacao: {
        payload: Prisma.$AlunaHasPublicacaoPayload<ExtArgs>
        fields: Prisma.AlunaHasPublicacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunaHasPublicacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunaHasPublicacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>
          }
          findFirst: {
            args: Prisma.AlunaHasPublicacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunaHasPublicacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>
          }
          findMany: {
            args: Prisma.AlunaHasPublicacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>[]
          }
          create: {
            args: Prisma.AlunaHasPublicacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>
          }
          createMany: {
            args: Prisma.AlunaHasPublicacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunaHasPublicacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>[]
          }
          delete: {
            args: Prisma.AlunaHasPublicacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>
          }
          update: {
            args: Prisma.AlunaHasPublicacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>
          }
          deleteMany: {
            args: Prisma.AlunaHasPublicacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunaHasPublicacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlunaHasPublicacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>[]
          }
          upsert: {
            args: Prisma.AlunaHasPublicacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasPublicacaoPayload>
          }
          aggregate: {
            args: Prisma.AlunaHasPublicacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlunaHasPublicacao>
          }
          groupBy: {
            args: Prisma.AlunaHasPublicacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunaHasPublicacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunaHasPublicacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunaHasPublicacaoCountAggregateOutputType> | number
          }
        }
      }
      AreaAtuacao: {
        payload: Prisma.$AreaAtuacaoPayload<ExtArgs>
        fields: Prisma.AreaAtuacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaAtuacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaAtuacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>
          }
          findFirst: {
            args: Prisma.AreaAtuacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaAtuacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>
          }
          findMany: {
            args: Prisma.AreaAtuacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>[]
          }
          create: {
            args: Prisma.AreaAtuacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>
          }
          createMany: {
            args: Prisma.AreaAtuacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaAtuacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>[]
          }
          delete: {
            args: Prisma.AreaAtuacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>
          }
          update: {
            args: Prisma.AreaAtuacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>
          }
          deleteMany: {
            args: Prisma.AreaAtuacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaAtuacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaAtuacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>[]
          }
          upsert: {
            args: Prisma.AreaAtuacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaAtuacaoPayload>
          }
          aggregate: {
            args: Prisma.AreaAtuacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAreaAtuacao>
          }
          groupBy: {
            args: Prisma.AreaAtuacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaAtuacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaAtuacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AreaAtuacaoCountAggregateOutputType> | number
          }
        }
      }
      AlunaHasAreaAtuacao: {
        payload: Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>
        fields: Prisma.AlunaHasAreaAtuacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunaHasAreaAtuacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunaHasAreaAtuacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>
          }
          findFirst: {
            args: Prisma.AlunaHasAreaAtuacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunaHasAreaAtuacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>
          }
          findMany: {
            args: Prisma.AlunaHasAreaAtuacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>[]
          }
          create: {
            args: Prisma.AlunaHasAreaAtuacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>
          }
          createMany: {
            args: Prisma.AlunaHasAreaAtuacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunaHasAreaAtuacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>[]
          }
          delete: {
            args: Prisma.AlunaHasAreaAtuacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>
          }
          update: {
            args: Prisma.AlunaHasAreaAtuacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>
          }
          deleteMany: {
            args: Prisma.AlunaHasAreaAtuacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunaHasAreaAtuacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlunaHasAreaAtuacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>[]
          }
          upsert: {
            args: Prisma.AlunaHasAreaAtuacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunaHasAreaAtuacaoPayload>
          }
          aggregate: {
            args: Prisma.AlunaHasAreaAtuacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlunaHasAreaAtuacao>
          }
          groupBy: {
            args: Prisma.AlunaHasAreaAtuacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunaHasAreaAtuacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunaHasAreaAtuacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunaHasAreaAtuacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    professor?: ProfessorOmit
    aluna?: AlunaOmit
    evento?: EventoOmit
    foto?: FotoOmit
    imprensa?: ImprensaOmit
    escola?: EscolaOmit
    patrocinador?: PatrocinadorOmit
    projeto?: ProjetoOmit
    impactoProjeto?: ImpactoProjetoOmit
    historia?: HistoriaOmit
    publicacao?: PublicacaoOmit
    professorHasPublicacao?: ProfessorHasPublicacaoOmit
    alunaHasPublicacao?: AlunaHasPublicacaoOmit
    areaAtuacao?: AreaAtuacaoOmit
    alunaHasAreaAtuacao?: AlunaHasAreaAtuacaoOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    evento: number
    areasAtuacao: number
    publicacoes: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | ProfessorCountOutputTypeCountEventoArgs
    areasAtuacao?: boolean | ProfessorCountOutputTypeCountAreasAtuacaoArgs
    publicacoes?: boolean | ProfessorCountOutputTypeCountPublicacoesArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountEventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountAreasAtuacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaAtuacaoWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountPublicacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorHasPublicacaoWhereInput
  }


  /**
   * Count Type AlunaCountOutputType
   */

  export type AlunaCountOutputType = {
    areaAtuacao: number
    publicacoes: number
  }

  export type AlunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areaAtuacao?: boolean | AlunaCountOutputTypeCountAreaAtuacaoArgs
    publicacoes?: boolean | AlunaCountOutputTypeCountPublicacoesArgs
  }

  // Custom InputTypes
  /**
   * AlunaCountOutputType without action
   */
  export type AlunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaCountOutputType
     */
    select?: AlunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunaCountOutputType without action
   */
  export type AlunaCountOutputTypeCountAreaAtuacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunaHasAreaAtuacaoWhereInput
  }

  /**
   * AlunaCountOutputType without action
   */
  export type AlunaCountOutputTypeCountPublicacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunaHasPublicacaoWhereInput
  }


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    fotos: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | EventoCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }


  /**
   * Count Type PublicacaoCountOutputType
   */

  export type PublicacaoCountOutputType = {
    professor: number
    aluna: number
  }

  export type PublicacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | PublicacaoCountOutputTypeCountProfessorArgs
    aluna?: boolean | PublicacaoCountOutputTypeCountAlunaArgs
  }

  // Custom InputTypes
  /**
   * PublicacaoCountOutputType without action
   */
  export type PublicacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacaoCountOutputType
     */
    select?: PublicacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicacaoCountOutputType without action
   */
  export type PublicacaoCountOutputTypeCountProfessorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorHasPublicacaoWhereInput
  }

  /**
   * PublicacaoCountOutputType without action
   */
  export type PublicacaoCountOutputTypeCountAlunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunaHasPublicacaoWhereInput
  }


  /**
   * Count Type AreaAtuacaoCountOutputType
   */

  export type AreaAtuacaoCountOutputType = {
    alunas: number
  }

  export type AreaAtuacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunas?: boolean | AreaAtuacaoCountOutputTypeCountAlunasArgs
  }

  // Custom InputTypes
  /**
   * AreaAtuacaoCountOutputType without action
   */
  export type AreaAtuacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacaoCountOutputType
     */
    select?: AreaAtuacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaAtuacaoCountOutputType without action
   */
  export type AreaAtuacaoCountOutputTypeCountAlunasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunaHasAreaAtuacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    id: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    descricao: string | null
    foto: string | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    descricao: string | null
    foto: string | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    descricao: number
    foto: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    id?: true
  }

  export type ProfessorSumAggregateInputType = {
    id?: true
  }

  export type ProfessorMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    descricao?: true
    foto?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    descricao?: true
    foto?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    descricao?: true
    foto?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: number
    nome: string
    email: string
    descricao: string
    foto: string
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    foto?: boolean
    evento?: boolean | Professor$eventoArgs<ExtArgs>
    areasAtuacao?: boolean | Professor$areasAtuacaoArgs<ExtArgs>
    historia?: boolean | Professor$historiaArgs<ExtArgs>
    impactoProjeto?: boolean | Professor$impactoProjetoArgs<ExtArgs>
    publicacoes?: boolean | Professor$publicacoesArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    foto?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    foto?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    foto?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "descricao" | "foto", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | Professor$eventoArgs<ExtArgs>
    areasAtuacao?: boolean | Professor$areasAtuacaoArgs<ExtArgs>
    historia?: boolean | Professor$historiaArgs<ExtArgs>
    impactoProjeto?: boolean | Professor$impactoProjetoArgs<ExtArgs>
    publicacoes?: boolean | Professor$publicacoesArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      evento: Prisma.$EventoPayload<ExtArgs>[]
      areasAtuacao: Prisma.$AreaAtuacaoPayload<ExtArgs>[]
      historia: Prisma.$HistoriaPayload<ExtArgs> | null
      impactoProjeto: Prisma.$ImpactoProjetoPayload<ExtArgs> | null
      publicacoes: Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      descricao: string
      foto: string
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends Professor$eventoArgs<ExtArgs> = {}>(args?: Subset<T, Professor$eventoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    areasAtuacao<T extends Professor$areasAtuacaoArgs<ExtArgs> = {}>(args?: Subset<T, Professor$areasAtuacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historia<T extends Professor$historiaArgs<ExtArgs> = {}>(args?: Subset<T, Professor$historiaArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    impactoProjeto<T extends Professor$impactoProjetoArgs<ExtArgs> = {}>(args?: Subset<T, Professor$impactoProjetoArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    publicacoes<T extends Professor$publicacoesArgs<ExtArgs> = {}>(args?: Subset<T, Professor$publicacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'Int'>
    readonly nome: FieldRef<"Professor", 'String'>
    readonly email: FieldRef<"Professor", 'String'>
    readonly descricao: FieldRef<"Professor", 'String'>
    readonly foto: FieldRef<"Professor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.evento
   */
  export type Professor$eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Professor.areasAtuacao
   */
  export type Professor$areasAtuacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    where?: AreaAtuacaoWhereInput
    orderBy?: AreaAtuacaoOrderByWithRelationInput | AreaAtuacaoOrderByWithRelationInput[]
    cursor?: AreaAtuacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaAtuacaoScalarFieldEnum | AreaAtuacaoScalarFieldEnum[]
  }

  /**
   * Professor.historia
   */
  export type Professor$historiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    where?: HistoriaWhereInput
  }

  /**
   * Professor.impactoProjeto
   */
  export type Professor$impactoProjetoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    where?: ImpactoProjetoWhereInput
  }

  /**
   * Professor.publicacoes
   */
  export type Professor$publicacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    where?: ProfessorHasPublicacaoWhereInput
    orderBy?: ProfessorHasPublicacaoOrderByWithRelationInput | ProfessorHasPublicacaoOrderByWithRelationInput[]
    cursor?: ProfessorHasPublicacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorHasPublicacaoScalarFieldEnum | ProfessorHasPublicacaoScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Aluna
   */

  export type AggregateAluna = {
    _count: AlunaCountAggregateOutputType | null
    _avg: AlunaAvgAggregateOutputType | null
    _sum: AlunaSumAggregateOutputType | null
    _min: AlunaMinAggregateOutputType | null
    _max: AlunaMaxAggregateOutputType | null
  }

  export type AlunaAvgAggregateOutputType = {
    id: number | null
  }

  export type AlunaSumAggregateOutputType = {
    id: number | null
  }

  export type AlunaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    linkedin: string | null
    foto: Uint8Array | null
    relato: string | null
  }

  export type AlunaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    linkedin: string | null
    foto: Uint8Array | null
    relato: string | null
  }

  export type AlunaCountAggregateOutputType = {
    id: number
    nome: number
    linkedin: number
    foto: number
    relato: number
    _all: number
  }


  export type AlunaAvgAggregateInputType = {
    id?: true
  }

  export type AlunaSumAggregateInputType = {
    id?: true
  }

  export type AlunaMinAggregateInputType = {
    id?: true
    nome?: true
    linkedin?: true
    foto?: true
    relato?: true
  }

  export type AlunaMaxAggregateInputType = {
    id?: true
    nome?: true
    linkedin?: true
    foto?: true
    relato?: true
  }

  export type AlunaCountAggregateInputType = {
    id?: true
    nome?: true
    linkedin?: true
    foto?: true
    relato?: true
    _all?: true
  }

  export type AlunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluna to aggregate.
     */
    where?: AlunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunas to fetch.
     */
    orderBy?: AlunaOrderByWithRelationInput | AlunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunas
    **/
    _count?: true | AlunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunaMaxAggregateInputType
  }

  export type GetAlunaAggregateType<T extends AlunaAggregateArgs> = {
        [P in keyof T & keyof AggregateAluna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluna[P]>
      : GetScalarType<T[P], AggregateAluna[P]>
  }




  export type AlunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunaWhereInput
    orderBy?: AlunaOrderByWithAggregationInput | AlunaOrderByWithAggregationInput[]
    by: AlunaScalarFieldEnum[] | AlunaScalarFieldEnum
    having?: AlunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunaCountAggregateInputType | true
    _avg?: AlunaAvgAggregateInputType
    _sum?: AlunaSumAggregateInputType
    _min?: AlunaMinAggregateInputType
    _max?: AlunaMaxAggregateInputType
  }

  export type AlunaGroupByOutputType = {
    id: number
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    _count: AlunaCountAggregateOutputType | null
    _avg: AlunaAvgAggregateOutputType | null
    _sum: AlunaSumAggregateOutputType | null
    _min: AlunaMinAggregateOutputType | null
    _max: AlunaMaxAggregateOutputType | null
  }

  type GetAlunaGroupByPayload<T extends AlunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunaGroupByOutputType[P]>
            : GetScalarType<T[P], AlunaGroupByOutputType[P]>
        }
      >
    >


  export type AlunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    linkedin?: boolean
    foto?: boolean
    relato?: boolean
    areaAtuacao?: boolean | Aluna$areaAtuacaoArgs<ExtArgs>
    impactoProjeto?: boolean | Aluna$impactoProjetoArgs<ExtArgs>
    publicacoes?: boolean | Aluna$publicacoesArgs<ExtArgs>
    _count?: boolean | AlunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluna"]>

  export type AlunaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    linkedin?: boolean
    foto?: boolean
    relato?: boolean
  }, ExtArgs["result"]["aluna"]>

  export type AlunaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    linkedin?: boolean
    foto?: boolean
    relato?: boolean
  }, ExtArgs["result"]["aluna"]>

  export type AlunaSelectScalar = {
    id?: boolean
    nome?: boolean
    linkedin?: boolean
    foto?: boolean
    relato?: boolean
  }

  export type AlunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "linkedin" | "foto" | "relato", ExtArgs["result"]["aluna"]>
  export type AlunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areaAtuacao?: boolean | Aluna$areaAtuacaoArgs<ExtArgs>
    impactoProjeto?: boolean | Aluna$impactoProjetoArgs<ExtArgs>
    publicacoes?: boolean | Aluna$publicacoesArgs<ExtArgs>
    _count?: boolean | AlunaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlunaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlunaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluna"
    objects: {
      areaAtuacao: Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>[]
      impactoProjeto: Prisma.$ImpactoProjetoPayload<ExtArgs> | null
      publicacoes: Prisma.$AlunaHasPublicacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      linkedin: string
      foto: Uint8Array
      relato: string
    }, ExtArgs["result"]["aluna"]>
    composites: {}
  }

  type AlunaGetPayload<S extends boolean | null | undefined | AlunaDefaultArgs> = $Result.GetResult<Prisma.$AlunaPayload, S>

  type AlunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunaCountAggregateInputType | true
    }

  export interface AlunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluna'], meta: { name: 'Aluna' } }
    /**
     * Find zero or one Aluna that matches the filter.
     * @param {AlunaFindUniqueArgs} args - Arguments to find a Aluna
     * @example
     * // Get one Aluna
     * const aluna = await prisma.aluna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunaFindUniqueArgs>(args: SelectSubset<T, AlunaFindUniqueArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunaFindUniqueOrThrowArgs} args - Arguments to find a Aluna
     * @example
     * // Get one Aluna
     * const aluna = await prisma.aluna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaFindFirstArgs} args - Arguments to find a Aluna
     * @example
     * // Get one Aluna
     * const aluna = await prisma.aluna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunaFindFirstArgs>(args?: SelectSubset<T, AlunaFindFirstArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaFindFirstOrThrowArgs} args - Arguments to find a Aluna
     * @example
     * // Get one Aluna
     * const aluna = await prisma.aluna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunas
     * const alunas = await prisma.aluna.findMany()
     * 
     * // Get first 10 Alunas
     * const alunas = await prisma.aluna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunaWithIdOnly = await prisma.aluna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlunaFindManyArgs>(args?: SelectSubset<T, AlunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluna.
     * @param {AlunaCreateArgs} args - Arguments to create a Aluna.
     * @example
     * // Create one Aluna
     * const Aluna = await prisma.aluna.create({
     *   data: {
     *     // ... data to create a Aluna
     *   }
     * })
     * 
     */
    create<T extends AlunaCreateArgs>(args: SelectSubset<T, AlunaCreateArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunas.
     * @param {AlunaCreateManyArgs} args - Arguments to create many Alunas.
     * @example
     * // Create many Alunas
     * const aluna = await prisma.aluna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunaCreateManyArgs>(args?: SelectSubset<T, AlunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alunas and returns the data saved in the database.
     * @param {AlunaCreateManyAndReturnArgs} args - Arguments to create many Alunas.
     * @example
     * // Create many Alunas
     * const aluna = await prisma.aluna.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alunas and only return the `id`
     * const alunaWithIdOnly = await prisma.aluna.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunaCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aluna.
     * @param {AlunaDeleteArgs} args - Arguments to delete one Aluna.
     * @example
     * // Delete one Aluna
     * const Aluna = await prisma.aluna.delete({
     *   where: {
     *     // ... filter to delete one Aluna
     *   }
     * })
     * 
     */
    delete<T extends AlunaDeleteArgs>(args: SelectSubset<T, AlunaDeleteArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluna.
     * @param {AlunaUpdateArgs} args - Arguments to update one Aluna.
     * @example
     * // Update one Aluna
     * const aluna = await prisma.aluna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunaUpdateArgs>(args: SelectSubset<T, AlunaUpdateArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunas.
     * @param {AlunaDeleteManyArgs} args - Arguments to filter Alunas to delete.
     * @example
     * // Delete a few Alunas
     * const { count } = await prisma.aluna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunaDeleteManyArgs>(args?: SelectSubset<T, AlunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunas
     * const aluna = await prisma.aluna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunaUpdateManyArgs>(args: SelectSubset<T, AlunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunas and returns the data updated in the database.
     * @param {AlunaUpdateManyAndReturnArgs} args - Arguments to update many Alunas.
     * @example
     * // Update many Alunas
     * const aluna = await prisma.aluna.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alunas and only return the `id`
     * const alunaWithIdOnly = await prisma.aluna.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlunaUpdateManyAndReturnArgs>(args: SelectSubset<T, AlunaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aluna.
     * @param {AlunaUpsertArgs} args - Arguments to update or create a Aluna.
     * @example
     * // Update or create a Aluna
     * const aluna = await prisma.aluna.upsert({
     *   create: {
     *     // ... data to create a Aluna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluna we want to update
     *   }
     * })
     */
    upsert<T extends AlunaUpsertArgs>(args: SelectSubset<T, AlunaUpsertArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaCountArgs} args - Arguments to filter Alunas to count.
     * @example
     * // Count the number of Alunas
     * const count = await prisma.aluna.count({
     *   where: {
     *     // ... the filter for the Alunas we want to count
     *   }
     * })
    **/
    count<T extends AlunaCountArgs>(
      args?: Subset<T, AlunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunaAggregateArgs>(args: Subset<T, AlunaAggregateArgs>): Prisma.PrismaPromise<GetAlunaAggregateType<T>>

    /**
     * Group by Aluna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaGroupByArgs} args - Group by arguments.
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
      T extends AlunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunaGroupByArgs['orderBy'] }
        : { orderBy?: AlunaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AlunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluna model
   */
  readonly fields: AlunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areaAtuacao<T extends Aluna$areaAtuacaoArgs<ExtArgs> = {}>(args?: Subset<T, Aluna$areaAtuacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    impactoProjeto<T extends Aluna$impactoProjetoArgs<ExtArgs> = {}>(args?: Subset<T, Aluna$impactoProjetoArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    publicacoes<T extends Aluna$publicacoesArgs<ExtArgs> = {}>(args?: Subset<T, Aluna$publicacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aluna model
   */
  interface AlunaFieldRefs {
    readonly id: FieldRef<"Aluna", 'Int'>
    readonly nome: FieldRef<"Aluna", 'String'>
    readonly linkedin: FieldRef<"Aluna", 'String'>
    readonly foto: FieldRef<"Aluna", 'Bytes'>
    readonly relato: FieldRef<"Aluna", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aluna findUnique
   */
  export type AlunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * Filter, which Aluna to fetch.
     */
    where: AlunaWhereUniqueInput
  }

  /**
   * Aluna findUniqueOrThrow
   */
  export type AlunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * Filter, which Aluna to fetch.
     */
    where: AlunaWhereUniqueInput
  }

  /**
   * Aluna findFirst
   */
  export type AlunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * Filter, which Aluna to fetch.
     */
    where?: AlunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunas to fetch.
     */
    orderBy?: AlunaOrderByWithRelationInput | AlunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunas.
     */
    cursor?: AlunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunas.
     */
    distinct?: AlunaScalarFieldEnum | AlunaScalarFieldEnum[]
  }

  /**
   * Aluna findFirstOrThrow
   */
  export type AlunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * Filter, which Aluna to fetch.
     */
    where?: AlunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunas to fetch.
     */
    orderBy?: AlunaOrderByWithRelationInput | AlunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunas.
     */
    cursor?: AlunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunas.
     */
    distinct?: AlunaScalarFieldEnum | AlunaScalarFieldEnum[]
  }

  /**
   * Aluna findMany
   */
  export type AlunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * Filter, which Alunas to fetch.
     */
    where?: AlunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunas to fetch.
     */
    orderBy?: AlunaOrderByWithRelationInput | AlunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunas.
     */
    cursor?: AlunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunas.
     */
    skip?: number
    distinct?: AlunaScalarFieldEnum | AlunaScalarFieldEnum[]
  }

  /**
   * Aluna create
   */
  export type AlunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluna.
     */
    data: XOR<AlunaCreateInput, AlunaUncheckedCreateInput>
  }

  /**
   * Aluna createMany
   */
  export type AlunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunas.
     */
    data: AlunaCreateManyInput | AlunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluna createManyAndReturn
   */
  export type AlunaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * The data used to create many Alunas.
     */
    data: AlunaCreateManyInput | AlunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluna update
   */
  export type AlunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluna.
     */
    data: XOR<AlunaUpdateInput, AlunaUncheckedUpdateInput>
    /**
     * Choose, which Aluna to update.
     */
    where: AlunaWhereUniqueInput
  }

  /**
   * Aluna updateMany
   */
  export type AlunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunas.
     */
    data: XOR<AlunaUpdateManyMutationInput, AlunaUncheckedUpdateManyInput>
    /**
     * Filter which Alunas to update
     */
    where?: AlunaWhereInput
    /**
     * Limit how many Alunas to update.
     */
    limit?: number
  }

  /**
   * Aluna updateManyAndReturn
   */
  export type AlunaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * The data used to update Alunas.
     */
    data: XOR<AlunaUpdateManyMutationInput, AlunaUncheckedUpdateManyInput>
    /**
     * Filter which Alunas to update
     */
    where?: AlunaWhereInput
    /**
     * Limit how many Alunas to update.
     */
    limit?: number
  }

  /**
   * Aluna upsert
   */
  export type AlunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluna to update in case it exists.
     */
    where: AlunaWhereUniqueInput
    /**
     * In case the Aluna found by the `where` argument doesn't exist, create a new Aluna with this data.
     */
    create: XOR<AlunaCreateInput, AlunaUncheckedCreateInput>
    /**
     * In case the Aluna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunaUpdateInput, AlunaUncheckedUpdateInput>
  }

  /**
   * Aluna delete
   */
  export type AlunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
    /**
     * Filter which Aluna to delete.
     */
    where: AlunaWhereUniqueInput
  }

  /**
   * Aluna deleteMany
   */
  export type AlunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunas to delete
     */
    where?: AlunaWhereInput
    /**
     * Limit how many Alunas to delete.
     */
    limit?: number
  }

  /**
   * Aluna.areaAtuacao
   */
  export type Aluna$areaAtuacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    where?: AlunaHasAreaAtuacaoWhereInput
    orderBy?: AlunaHasAreaAtuacaoOrderByWithRelationInput | AlunaHasAreaAtuacaoOrderByWithRelationInput[]
    cursor?: AlunaHasAreaAtuacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunaHasAreaAtuacaoScalarFieldEnum | AlunaHasAreaAtuacaoScalarFieldEnum[]
  }

  /**
   * Aluna.impactoProjeto
   */
  export type Aluna$impactoProjetoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    where?: ImpactoProjetoWhereInput
  }

  /**
   * Aluna.publicacoes
   */
  export type Aluna$publicacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    where?: AlunaHasPublicacaoWhereInput
    orderBy?: AlunaHasPublicacaoOrderByWithRelationInput | AlunaHasPublicacaoOrderByWithRelationInput[]
    cursor?: AlunaHasPublicacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunaHasPublicacaoScalarFieldEnum | AlunaHasPublicacaoScalarFieldEnum[]
  }

  /**
   * Aluna without action
   */
  export type AlunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluna
     */
    select?: AlunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluna
     */
    omit?: AlunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
    professorId: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
    professorId: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    professorId: number | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    professorId: number | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    professorId: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
    professorId?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
    professorId?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    professorId?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    professorId?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    professorId?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    professorId: number
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    professorId?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    fotos?: boolean | Evento$fotosArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    professorId?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    professorId?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    professorId?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "professorId", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    fotos?: boolean | Evento$fotosArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      fotos: Prisma.$FotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      professorId: number
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
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
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotos<T extends Evento$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Evento$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'Int'>
    readonly nome: FieldRef<"Evento", 'String'>
    readonly descricao: FieldRef<"Evento", 'String'>
    readonly professorId: FieldRef<"Evento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento.fotos
   */
  export type Evento$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Foto
   */

  export type AggregateFoto = {
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  export type FotoAvgAggregateOutputType = {
    id: number | null
    idEvento: number | null
  }

  export type FotoSumAggregateOutputType = {
    id: number | null
    idEvento: number | null
  }

  export type FotoMinAggregateOutputType = {
    id: number | null
    foto: Uint8Array | null
    idEvento: number | null
  }

  export type FotoMaxAggregateOutputType = {
    id: number | null
    foto: Uint8Array | null
    idEvento: number | null
  }

  export type FotoCountAggregateOutputType = {
    id: number
    foto: number
    idEvento: number
    _all: number
  }


  export type FotoAvgAggregateInputType = {
    id?: true
    idEvento?: true
  }

  export type FotoSumAggregateInputType = {
    id?: true
    idEvento?: true
  }

  export type FotoMinAggregateInputType = {
    id?: true
    foto?: true
    idEvento?: true
  }

  export type FotoMaxAggregateInputType = {
    id?: true
    foto?: true
    idEvento?: true
  }

  export type FotoCountAggregateInputType = {
    id?: true
    foto?: true
    idEvento?: true
    _all?: true
  }

  export type FotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foto to aggregate.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotos
    **/
    _count?: true | FotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoMaxAggregateInputType
  }

  export type GetFotoAggregateType<T extends FotoAggregateArgs> = {
        [P in keyof T & keyof AggregateFoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoto[P]>
      : GetScalarType<T[P], AggregateFoto[P]>
  }




  export type FotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithAggregationInput | FotoOrderByWithAggregationInput[]
    by: FotoScalarFieldEnum[] | FotoScalarFieldEnum
    having?: FotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoCountAggregateInputType | true
    _avg?: FotoAvgAggregateInputType
    _sum?: FotoSumAggregateInputType
    _min?: FotoMinAggregateInputType
    _max?: FotoMaxAggregateInputType
  }

  export type FotoGroupByOutputType = {
    id: number
    foto: Uint8Array
    idEvento: number
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  type GetFotoGroupByPayload<T extends FotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoGroupByOutputType[P]>
            : GetScalarType<T[P], FotoGroupByOutputType[P]>
        }
      >
    >


  export type FotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foto?: boolean
    idEvento?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foto?: boolean
    idEvento?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foto?: boolean
    idEvento?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectScalar = {
    id?: boolean
    foto?: boolean
    idEvento?: boolean
  }

  export type FotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "foto" | "idEvento", ExtArgs["result"]["foto"]>
  export type FotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type FotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type FotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }

  export type $FotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foto"
    objects: {
      evento: Prisma.$EventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      foto: Uint8Array
      idEvento: number
    }, ExtArgs["result"]["foto"]>
    composites: {}
  }

  type FotoGetPayload<S extends boolean | null | undefined | FotoDefaultArgs> = $Result.GetResult<Prisma.$FotoPayload, S>

  type FotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoCountAggregateInputType | true
    }

  export interface FotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foto'], meta: { name: 'Foto' } }
    /**
     * Find zero or one Foto that matches the filter.
     * @param {FotoFindUniqueArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoFindUniqueArgs>(args: SelectSubset<T, FotoFindUniqueArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoFindUniqueOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoFindFirstArgs>(args?: SelectSubset<T, FotoFindFirstArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotos
     * const fotos = await prisma.foto.findMany()
     * 
     * // Get first 10 Fotos
     * const fotos = await prisma.foto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoWithIdOnly = await prisma.foto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoFindManyArgs>(args?: SelectSubset<T, FotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foto.
     * @param {FotoCreateArgs} args - Arguments to create a Foto.
     * @example
     * // Create one Foto
     * const Foto = await prisma.foto.create({
     *   data: {
     *     // ... data to create a Foto
     *   }
     * })
     * 
     */
    create<T extends FotoCreateArgs>(args: SelectSubset<T, FotoCreateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fotos.
     * @param {FotoCreateManyArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoCreateManyArgs>(args?: SelectSubset<T, FotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fotos and returns the data saved in the database.
     * @param {FotoCreateManyAndReturnArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fotos and only return the `id`
     * const fotoWithIdOnly = await prisma.foto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Foto.
     * @param {FotoDeleteArgs} args - Arguments to delete one Foto.
     * @example
     * // Delete one Foto
     * const Foto = await prisma.foto.delete({
     *   where: {
     *     // ... filter to delete one Foto
     *   }
     * })
     * 
     */
    delete<T extends FotoDeleteArgs>(args: SelectSubset<T, FotoDeleteArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foto.
     * @param {FotoUpdateArgs} args - Arguments to update one Foto.
     * @example
     * // Update one Foto
     * const foto = await prisma.foto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoUpdateArgs>(args: SelectSubset<T, FotoUpdateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fotos.
     * @param {FotoDeleteManyArgs} args - Arguments to filter Fotos to delete.
     * @example
     * // Delete a few Fotos
     * const { count } = await prisma.foto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoDeleteManyArgs>(args?: SelectSubset<T, FotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoUpdateManyArgs>(args: SelectSubset<T, FotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos and returns the data updated in the database.
     * @param {FotoUpdateManyAndReturnArgs} args - Arguments to update many Fotos.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fotos and only return the `id`
     * const fotoWithIdOnly = await prisma.foto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FotoUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Foto.
     * @param {FotoUpsertArgs} args - Arguments to update or create a Foto.
     * @example
     * // Update or create a Foto
     * const foto = await prisma.foto.upsert({
     *   create: {
     *     // ... data to create a Foto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foto we want to update
     *   }
     * })
     */
    upsert<T extends FotoUpsertArgs>(args: SelectSubset<T, FotoUpsertArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoCountArgs} args - Arguments to filter Fotos to count.
     * @example
     * // Count the number of Fotos
     * const count = await prisma.foto.count({
     *   where: {
     *     // ... the filter for the Fotos we want to count
     *   }
     * })
    **/
    count<T extends FotoCountArgs>(
      args?: Subset<T, FotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoAggregateArgs>(args: Subset<T, FotoAggregateArgs>): Prisma.PrismaPromise<GetFotoAggregateType<T>>

    /**
     * Group by Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGroupByArgs} args - Group by arguments.
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
      T extends FotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoGroupByArgs['orderBy'] }
        : { orderBy?: FotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foto model
   */
  readonly fields: FotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Foto model
   */
  interface FotoFieldRefs {
    readonly id: FieldRef<"Foto", 'Int'>
    readonly foto: FieldRef<"Foto", 'Bytes'>
    readonly idEvento: FieldRef<"Foto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Foto findUnique
   */
  export type FotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findUniqueOrThrow
   */
  export type FotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findFirst
   */
  export type FotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findFirstOrThrow
   */
  export type FotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findMany
   */
  export type FotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Fotos to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto create
   */
  export type FotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Foto.
     */
    data: XOR<FotoCreateInput, FotoUncheckedCreateInput>
  }

  /**
   * Foto createMany
   */
  export type FotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foto createManyAndReturn
   */
  export type FotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Foto update
   */
  export type FotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Foto.
     */
    data: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
    /**
     * Choose, which Foto to update.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto updateMany
   */
  export type FotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
  }

  /**
   * Foto updateManyAndReturn
   */
  export type FotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Foto upsert
   */
  export type FotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Foto to update in case it exists.
     */
    where: FotoWhereUniqueInput
    /**
     * In case the Foto found by the `where` argument doesn't exist, create a new Foto with this data.
     */
    create: XOR<FotoCreateInput, FotoUncheckedCreateInput>
    /**
     * In case the Foto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
  }

  /**
   * Foto delete
   */
  export type FotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter which Foto to delete.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto deleteMany
   */
  export type FotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotos to delete
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to delete.
     */
    limit?: number
  }

  /**
   * Foto without action
   */
  export type FotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
  }


  /**
   * Model Imprensa
   */

  export type AggregateImprensa = {
    _count: ImprensaCountAggregateOutputType | null
    _avg: ImprensaAvgAggregateOutputType | null
    _sum: ImprensaSumAggregateOutputType | null
    _min: ImprensaMinAggregateOutputType | null
    _max: ImprensaMaxAggregateOutputType | null
  }

  export type ImprensaAvgAggregateOutputType = {
    id: number | null
  }

  export type ImprensaSumAggregateOutputType = {
    id: number | null
  }

  export type ImprensaMinAggregateOutputType = {
    id: number | null
    nome_materia: string | null
    link: string | null
    midia: string | null
    foto: Uint8Array | null
  }

  export type ImprensaMaxAggregateOutputType = {
    id: number | null
    nome_materia: string | null
    link: string | null
    midia: string | null
    foto: Uint8Array | null
  }

  export type ImprensaCountAggregateOutputType = {
    id: number
    nome_materia: number
    link: number
    midia: number
    foto: number
    _all: number
  }


  export type ImprensaAvgAggregateInputType = {
    id?: true
  }

  export type ImprensaSumAggregateInputType = {
    id?: true
  }

  export type ImprensaMinAggregateInputType = {
    id?: true
    nome_materia?: true
    link?: true
    midia?: true
    foto?: true
  }

  export type ImprensaMaxAggregateInputType = {
    id?: true
    nome_materia?: true
    link?: true
    midia?: true
    foto?: true
  }

  export type ImprensaCountAggregateInputType = {
    id?: true
    nome_materia?: true
    link?: true
    midia?: true
    foto?: true
    _all?: true
  }

  export type ImprensaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imprensa to aggregate.
     */
    where?: ImprensaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imprensas to fetch.
     */
    orderBy?: ImprensaOrderByWithRelationInput | ImprensaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImprensaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imprensas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imprensas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imprensas
    **/
    _count?: true | ImprensaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImprensaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImprensaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImprensaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImprensaMaxAggregateInputType
  }

  export type GetImprensaAggregateType<T extends ImprensaAggregateArgs> = {
        [P in keyof T & keyof AggregateImprensa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImprensa[P]>
      : GetScalarType<T[P], AggregateImprensa[P]>
  }




  export type ImprensaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImprensaWhereInput
    orderBy?: ImprensaOrderByWithAggregationInput | ImprensaOrderByWithAggregationInput[]
    by: ImprensaScalarFieldEnum[] | ImprensaScalarFieldEnum
    having?: ImprensaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImprensaCountAggregateInputType | true
    _avg?: ImprensaAvgAggregateInputType
    _sum?: ImprensaSumAggregateInputType
    _min?: ImprensaMinAggregateInputType
    _max?: ImprensaMaxAggregateInputType
  }

  export type ImprensaGroupByOutputType = {
    id: number
    nome_materia: string
    link: string
    midia: string
    foto: Uint8Array
    _count: ImprensaCountAggregateOutputType | null
    _avg: ImprensaAvgAggregateOutputType | null
    _sum: ImprensaSumAggregateOutputType | null
    _min: ImprensaMinAggregateOutputType | null
    _max: ImprensaMaxAggregateOutputType | null
  }

  type GetImprensaGroupByPayload<T extends ImprensaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImprensaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImprensaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImprensaGroupByOutputType[P]>
            : GetScalarType<T[P], ImprensaGroupByOutputType[P]>
        }
      >
    >


  export type ImprensaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_materia?: boolean
    link?: boolean
    midia?: boolean
    foto?: boolean
  }, ExtArgs["result"]["imprensa"]>

  export type ImprensaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_materia?: boolean
    link?: boolean
    midia?: boolean
    foto?: boolean
  }, ExtArgs["result"]["imprensa"]>

  export type ImprensaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_materia?: boolean
    link?: boolean
    midia?: boolean
    foto?: boolean
  }, ExtArgs["result"]["imprensa"]>

  export type ImprensaSelectScalar = {
    id?: boolean
    nome_materia?: boolean
    link?: boolean
    midia?: boolean
    foto?: boolean
  }

  export type ImprensaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_materia" | "link" | "midia" | "foto", ExtArgs["result"]["imprensa"]>

  export type $ImprensaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imprensa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_materia: string
      link: string
      midia: string
      foto: Uint8Array
    }, ExtArgs["result"]["imprensa"]>
    composites: {}
  }

  type ImprensaGetPayload<S extends boolean | null | undefined | ImprensaDefaultArgs> = $Result.GetResult<Prisma.$ImprensaPayload, S>

  type ImprensaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImprensaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImprensaCountAggregateInputType | true
    }

  export interface ImprensaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imprensa'], meta: { name: 'Imprensa' } }
    /**
     * Find zero or one Imprensa that matches the filter.
     * @param {ImprensaFindUniqueArgs} args - Arguments to find a Imprensa
     * @example
     * // Get one Imprensa
     * const imprensa = await prisma.imprensa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImprensaFindUniqueArgs>(args: SelectSubset<T, ImprensaFindUniqueArgs<ExtArgs>>): Prisma__ImprensaClient<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imprensa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImprensaFindUniqueOrThrowArgs} args - Arguments to find a Imprensa
     * @example
     * // Get one Imprensa
     * const imprensa = await prisma.imprensa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImprensaFindUniqueOrThrowArgs>(args: SelectSubset<T, ImprensaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImprensaClient<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imprensa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImprensaFindFirstArgs} args - Arguments to find a Imprensa
     * @example
     * // Get one Imprensa
     * const imprensa = await prisma.imprensa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImprensaFindFirstArgs>(args?: SelectSubset<T, ImprensaFindFirstArgs<ExtArgs>>): Prisma__ImprensaClient<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imprensa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImprensaFindFirstOrThrowArgs} args - Arguments to find a Imprensa
     * @example
     * // Get one Imprensa
     * const imprensa = await prisma.imprensa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImprensaFindFirstOrThrowArgs>(args?: SelectSubset<T, ImprensaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImprensaClient<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imprensas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImprensaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imprensas
     * const imprensas = await prisma.imprensa.findMany()
     * 
     * // Get first 10 Imprensas
     * const imprensas = await prisma.imprensa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imprensaWithIdOnly = await prisma.imprensa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImprensaFindManyArgs>(args?: SelectSubset<T, ImprensaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imprensa.
     * @param {ImprensaCreateArgs} args - Arguments to create a Imprensa.
     * @example
     * // Create one Imprensa
     * const Imprensa = await prisma.imprensa.create({
     *   data: {
     *     // ... data to create a Imprensa
     *   }
     * })
     * 
     */
    create<T extends ImprensaCreateArgs>(args: SelectSubset<T, ImprensaCreateArgs<ExtArgs>>): Prisma__ImprensaClient<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imprensas.
     * @param {ImprensaCreateManyArgs} args - Arguments to create many Imprensas.
     * @example
     * // Create many Imprensas
     * const imprensa = await prisma.imprensa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImprensaCreateManyArgs>(args?: SelectSubset<T, ImprensaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imprensas and returns the data saved in the database.
     * @param {ImprensaCreateManyAndReturnArgs} args - Arguments to create many Imprensas.
     * @example
     * // Create many Imprensas
     * const imprensa = await prisma.imprensa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imprensas and only return the `id`
     * const imprensaWithIdOnly = await prisma.imprensa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImprensaCreateManyAndReturnArgs>(args?: SelectSubset<T, ImprensaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imprensa.
     * @param {ImprensaDeleteArgs} args - Arguments to delete one Imprensa.
     * @example
     * // Delete one Imprensa
     * const Imprensa = await prisma.imprensa.delete({
     *   where: {
     *     // ... filter to delete one Imprensa
     *   }
     * })
     * 
     */
    delete<T extends ImprensaDeleteArgs>(args: SelectSubset<T, ImprensaDeleteArgs<ExtArgs>>): Prisma__ImprensaClient<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imprensa.
     * @param {ImprensaUpdateArgs} args - Arguments to update one Imprensa.
     * @example
     * // Update one Imprensa
     * const imprensa = await prisma.imprensa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImprensaUpdateArgs>(args: SelectSubset<T, ImprensaUpdateArgs<ExtArgs>>): Prisma__ImprensaClient<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imprensas.
     * @param {ImprensaDeleteManyArgs} args - Arguments to filter Imprensas to delete.
     * @example
     * // Delete a few Imprensas
     * const { count } = await prisma.imprensa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImprensaDeleteManyArgs>(args?: SelectSubset<T, ImprensaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imprensas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImprensaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imprensas
     * const imprensa = await prisma.imprensa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImprensaUpdateManyArgs>(args: SelectSubset<T, ImprensaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imprensas and returns the data updated in the database.
     * @param {ImprensaUpdateManyAndReturnArgs} args - Arguments to update many Imprensas.
     * @example
     * // Update many Imprensas
     * const imprensa = await prisma.imprensa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imprensas and only return the `id`
     * const imprensaWithIdOnly = await prisma.imprensa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImprensaUpdateManyAndReturnArgs>(args: SelectSubset<T, ImprensaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imprensa.
     * @param {ImprensaUpsertArgs} args - Arguments to update or create a Imprensa.
     * @example
     * // Update or create a Imprensa
     * const imprensa = await prisma.imprensa.upsert({
     *   create: {
     *     // ... data to create a Imprensa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imprensa we want to update
     *   }
     * })
     */
    upsert<T extends ImprensaUpsertArgs>(args: SelectSubset<T, ImprensaUpsertArgs<ExtArgs>>): Prisma__ImprensaClient<$Result.GetResult<Prisma.$ImprensaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imprensas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImprensaCountArgs} args - Arguments to filter Imprensas to count.
     * @example
     * // Count the number of Imprensas
     * const count = await prisma.imprensa.count({
     *   where: {
     *     // ... the filter for the Imprensas we want to count
     *   }
     * })
    **/
    count<T extends ImprensaCountArgs>(
      args?: Subset<T, ImprensaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImprensaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imprensa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImprensaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImprensaAggregateArgs>(args: Subset<T, ImprensaAggregateArgs>): Prisma.PrismaPromise<GetImprensaAggregateType<T>>

    /**
     * Group by Imprensa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImprensaGroupByArgs} args - Group by arguments.
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
      T extends ImprensaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImprensaGroupByArgs['orderBy'] }
        : { orderBy?: ImprensaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ImprensaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImprensaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imprensa model
   */
  readonly fields: ImprensaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imprensa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImprensaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Imprensa model
   */
  interface ImprensaFieldRefs {
    readonly id: FieldRef<"Imprensa", 'Int'>
    readonly nome_materia: FieldRef<"Imprensa", 'String'>
    readonly link: FieldRef<"Imprensa", 'String'>
    readonly midia: FieldRef<"Imprensa", 'String'>
    readonly foto: FieldRef<"Imprensa", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * Imprensa findUnique
   */
  export type ImprensaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * Filter, which Imprensa to fetch.
     */
    where: ImprensaWhereUniqueInput
  }

  /**
   * Imprensa findUniqueOrThrow
   */
  export type ImprensaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * Filter, which Imprensa to fetch.
     */
    where: ImprensaWhereUniqueInput
  }

  /**
   * Imprensa findFirst
   */
  export type ImprensaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * Filter, which Imprensa to fetch.
     */
    where?: ImprensaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imprensas to fetch.
     */
    orderBy?: ImprensaOrderByWithRelationInput | ImprensaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imprensas.
     */
    cursor?: ImprensaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imprensas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imprensas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imprensas.
     */
    distinct?: ImprensaScalarFieldEnum | ImprensaScalarFieldEnum[]
  }

  /**
   * Imprensa findFirstOrThrow
   */
  export type ImprensaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * Filter, which Imprensa to fetch.
     */
    where?: ImprensaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imprensas to fetch.
     */
    orderBy?: ImprensaOrderByWithRelationInput | ImprensaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imprensas.
     */
    cursor?: ImprensaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imprensas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imprensas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imprensas.
     */
    distinct?: ImprensaScalarFieldEnum | ImprensaScalarFieldEnum[]
  }

  /**
   * Imprensa findMany
   */
  export type ImprensaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * Filter, which Imprensas to fetch.
     */
    where?: ImprensaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imprensas to fetch.
     */
    orderBy?: ImprensaOrderByWithRelationInput | ImprensaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imprensas.
     */
    cursor?: ImprensaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imprensas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imprensas.
     */
    skip?: number
    distinct?: ImprensaScalarFieldEnum | ImprensaScalarFieldEnum[]
  }

  /**
   * Imprensa create
   */
  export type ImprensaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * The data needed to create a Imprensa.
     */
    data: XOR<ImprensaCreateInput, ImprensaUncheckedCreateInput>
  }

  /**
   * Imprensa createMany
   */
  export type ImprensaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imprensas.
     */
    data: ImprensaCreateManyInput | ImprensaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imprensa createManyAndReturn
   */
  export type ImprensaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * The data used to create many Imprensas.
     */
    data: ImprensaCreateManyInput | ImprensaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imprensa update
   */
  export type ImprensaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * The data needed to update a Imprensa.
     */
    data: XOR<ImprensaUpdateInput, ImprensaUncheckedUpdateInput>
    /**
     * Choose, which Imprensa to update.
     */
    where: ImprensaWhereUniqueInput
  }

  /**
   * Imprensa updateMany
   */
  export type ImprensaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imprensas.
     */
    data: XOR<ImprensaUpdateManyMutationInput, ImprensaUncheckedUpdateManyInput>
    /**
     * Filter which Imprensas to update
     */
    where?: ImprensaWhereInput
    /**
     * Limit how many Imprensas to update.
     */
    limit?: number
  }

  /**
   * Imprensa updateManyAndReturn
   */
  export type ImprensaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * The data used to update Imprensas.
     */
    data: XOR<ImprensaUpdateManyMutationInput, ImprensaUncheckedUpdateManyInput>
    /**
     * Filter which Imprensas to update
     */
    where?: ImprensaWhereInput
    /**
     * Limit how many Imprensas to update.
     */
    limit?: number
  }

  /**
   * Imprensa upsert
   */
  export type ImprensaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * The filter to search for the Imprensa to update in case it exists.
     */
    where: ImprensaWhereUniqueInput
    /**
     * In case the Imprensa found by the `where` argument doesn't exist, create a new Imprensa with this data.
     */
    create: XOR<ImprensaCreateInput, ImprensaUncheckedCreateInput>
    /**
     * In case the Imprensa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImprensaUpdateInput, ImprensaUncheckedUpdateInput>
  }

  /**
   * Imprensa delete
   */
  export type ImprensaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
    /**
     * Filter which Imprensa to delete.
     */
    where: ImprensaWhereUniqueInput
  }

  /**
   * Imprensa deleteMany
   */
  export type ImprensaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imprensas to delete
     */
    where?: ImprensaWhereInput
    /**
     * Limit how many Imprensas to delete.
     */
    limit?: number
  }

  /**
   * Imprensa without action
   */
  export type ImprensaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imprensa
     */
    select?: ImprensaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imprensa
     */
    omit?: ImprensaOmit<ExtArgs> | null
  }


  /**
   * Model Escola
   */

  export type AggregateEscola = {
    _count: EscolaCountAggregateOutputType | null
    _avg: EscolaAvgAggregateOutputType | null
    _sum: EscolaSumAggregateOutputType | null
    _min: EscolaMinAggregateOutputType | null
    _max: EscolaMaxAggregateOutputType | null
  }

  export type EscolaAvgAggregateOutputType = {
    id: number | null
  }

  export type EscolaSumAggregateOutputType = {
    id: number | null
  }

  export type EscolaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    status: boolean | null
  }

  export type EscolaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    status: boolean | null
  }

  export type EscolaCountAggregateOutputType = {
    id: number
    nome: number
    status: number
    _all: number
  }


  export type EscolaAvgAggregateInputType = {
    id?: true
  }

  export type EscolaSumAggregateInputType = {
    id?: true
  }

  export type EscolaMinAggregateInputType = {
    id?: true
    nome?: true
    status?: true
  }

  export type EscolaMaxAggregateInputType = {
    id?: true
    nome?: true
    status?: true
  }

  export type EscolaCountAggregateInputType = {
    id?: true
    nome?: true
    status?: true
    _all?: true
  }

  export type EscolaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escola to aggregate.
     */
    where?: EscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolas to fetch.
     */
    orderBy?: EscolaOrderByWithRelationInput | EscolaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escolas
    **/
    _count?: true | EscolaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscolaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscolaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscolaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscolaMaxAggregateInputType
  }

  export type GetEscolaAggregateType<T extends EscolaAggregateArgs> = {
        [P in keyof T & keyof AggregateEscola]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscola[P]>
      : GetScalarType<T[P], AggregateEscola[P]>
  }




  export type EscolaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscolaWhereInput
    orderBy?: EscolaOrderByWithAggregationInput | EscolaOrderByWithAggregationInput[]
    by: EscolaScalarFieldEnum[] | EscolaScalarFieldEnum
    having?: EscolaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscolaCountAggregateInputType | true
    _avg?: EscolaAvgAggregateInputType
    _sum?: EscolaSumAggregateInputType
    _min?: EscolaMinAggregateInputType
    _max?: EscolaMaxAggregateInputType
  }

  export type EscolaGroupByOutputType = {
    id: number
    nome: string
    status: boolean
    _count: EscolaCountAggregateOutputType | null
    _avg: EscolaAvgAggregateOutputType | null
    _sum: EscolaSumAggregateOutputType | null
    _min: EscolaMinAggregateOutputType | null
    _max: EscolaMaxAggregateOutputType | null
  }

  type GetEscolaGroupByPayload<T extends EscolaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscolaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscolaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscolaGroupByOutputType[P]>
            : GetScalarType<T[P], EscolaGroupByOutputType[P]>
        }
      >
    >


  export type EscolaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    status?: boolean
  }, ExtArgs["result"]["escola"]>

  export type EscolaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    status?: boolean
  }, ExtArgs["result"]["escola"]>

  export type EscolaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    status?: boolean
  }, ExtArgs["result"]["escola"]>

  export type EscolaSelectScalar = {
    id?: boolean
    nome?: boolean
    status?: boolean
  }

  export type EscolaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "status", ExtArgs["result"]["escola"]>

  export type $EscolaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Escola"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      status: boolean
    }, ExtArgs["result"]["escola"]>
    composites: {}
  }

  type EscolaGetPayload<S extends boolean | null | undefined | EscolaDefaultArgs> = $Result.GetResult<Prisma.$EscolaPayload, S>

  type EscolaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscolaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscolaCountAggregateInputType | true
    }

  export interface EscolaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escola'], meta: { name: 'Escola' } }
    /**
     * Find zero or one Escola that matches the filter.
     * @param {EscolaFindUniqueArgs} args - Arguments to find a Escola
     * @example
     * // Get one Escola
     * const escola = await prisma.escola.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscolaFindUniqueArgs>(args: SelectSubset<T, EscolaFindUniqueArgs<ExtArgs>>): Prisma__EscolaClient<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Escola that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscolaFindUniqueOrThrowArgs} args - Arguments to find a Escola
     * @example
     * // Get one Escola
     * const escola = await prisma.escola.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscolaFindUniqueOrThrowArgs>(args: SelectSubset<T, EscolaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscolaClient<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escola that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaFindFirstArgs} args - Arguments to find a Escola
     * @example
     * // Get one Escola
     * const escola = await prisma.escola.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscolaFindFirstArgs>(args?: SelectSubset<T, EscolaFindFirstArgs<ExtArgs>>): Prisma__EscolaClient<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escola that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaFindFirstOrThrowArgs} args - Arguments to find a Escola
     * @example
     * // Get one Escola
     * const escola = await prisma.escola.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscolaFindFirstOrThrowArgs>(args?: SelectSubset<T, EscolaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscolaClient<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Escolas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escolas
     * const escolas = await prisma.escola.findMany()
     * 
     * // Get first 10 Escolas
     * const escolas = await prisma.escola.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escolaWithIdOnly = await prisma.escola.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscolaFindManyArgs>(args?: SelectSubset<T, EscolaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Escola.
     * @param {EscolaCreateArgs} args - Arguments to create a Escola.
     * @example
     * // Create one Escola
     * const Escola = await prisma.escola.create({
     *   data: {
     *     // ... data to create a Escola
     *   }
     * })
     * 
     */
    create<T extends EscolaCreateArgs>(args: SelectSubset<T, EscolaCreateArgs<ExtArgs>>): Prisma__EscolaClient<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Escolas.
     * @param {EscolaCreateManyArgs} args - Arguments to create many Escolas.
     * @example
     * // Create many Escolas
     * const escola = await prisma.escola.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscolaCreateManyArgs>(args?: SelectSubset<T, EscolaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Escolas and returns the data saved in the database.
     * @param {EscolaCreateManyAndReturnArgs} args - Arguments to create many Escolas.
     * @example
     * // Create many Escolas
     * const escola = await prisma.escola.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Escolas and only return the `id`
     * const escolaWithIdOnly = await prisma.escola.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscolaCreateManyAndReturnArgs>(args?: SelectSubset<T, EscolaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Escola.
     * @param {EscolaDeleteArgs} args - Arguments to delete one Escola.
     * @example
     * // Delete one Escola
     * const Escola = await prisma.escola.delete({
     *   where: {
     *     // ... filter to delete one Escola
     *   }
     * })
     * 
     */
    delete<T extends EscolaDeleteArgs>(args: SelectSubset<T, EscolaDeleteArgs<ExtArgs>>): Prisma__EscolaClient<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Escola.
     * @param {EscolaUpdateArgs} args - Arguments to update one Escola.
     * @example
     * // Update one Escola
     * const escola = await prisma.escola.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscolaUpdateArgs>(args: SelectSubset<T, EscolaUpdateArgs<ExtArgs>>): Prisma__EscolaClient<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Escolas.
     * @param {EscolaDeleteManyArgs} args - Arguments to filter Escolas to delete.
     * @example
     * // Delete a few Escolas
     * const { count } = await prisma.escola.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscolaDeleteManyArgs>(args?: SelectSubset<T, EscolaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escolas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escolas
     * const escola = await prisma.escola.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscolaUpdateManyArgs>(args: SelectSubset<T, EscolaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escolas and returns the data updated in the database.
     * @param {EscolaUpdateManyAndReturnArgs} args - Arguments to update many Escolas.
     * @example
     * // Update many Escolas
     * const escola = await prisma.escola.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Escolas and only return the `id`
     * const escolaWithIdOnly = await prisma.escola.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EscolaUpdateManyAndReturnArgs>(args: SelectSubset<T, EscolaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Escola.
     * @param {EscolaUpsertArgs} args - Arguments to update or create a Escola.
     * @example
     * // Update or create a Escola
     * const escola = await prisma.escola.upsert({
     *   create: {
     *     // ... data to create a Escola
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escola we want to update
     *   }
     * })
     */
    upsert<T extends EscolaUpsertArgs>(args: SelectSubset<T, EscolaUpsertArgs<ExtArgs>>): Prisma__EscolaClient<$Result.GetResult<Prisma.$EscolaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Escolas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaCountArgs} args - Arguments to filter Escolas to count.
     * @example
     * // Count the number of Escolas
     * const count = await prisma.escola.count({
     *   where: {
     *     // ... the filter for the Escolas we want to count
     *   }
     * })
    **/
    count<T extends EscolaCountArgs>(
      args?: Subset<T, EscolaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscolaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escola.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscolaAggregateArgs>(args: Subset<T, EscolaAggregateArgs>): Prisma.PrismaPromise<GetEscolaAggregateType<T>>

    /**
     * Group by Escola.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaGroupByArgs} args - Group by arguments.
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
      T extends EscolaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscolaGroupByArgs['orderBy'] }
        : { orderBy?: EscolaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EscolaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscolaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Escola model
   */
  readonly fields: EscolaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Escola.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscolaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Escola model
   */
  interface EscolaFieldRefs {
    readonly id: FieldRef<"Escola", 'Int'>
    readonly nome: FieldRef<"Escola", 'String'>
    readonly status: FieldRef<"Escola", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Escola findUnique
   */
  export type EscolaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * Filter, which Escola to fetch.
     */
    where: EscolaWhereUniqueInput
  }

  /**
   * Escola findUniqueOrThrow
   */
  export type EscolaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * Filter, which Escola to fetch.
     */
    where: EscolaWhereUniqueInput
  }

  /**
   * Escola findFirst
   */
  export type EscolaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * Filter, which Escola to fetch.
     */
    where?: EscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolas to fetch.
     */
    orderBy?: EscolaOrderByWithRelationInput | EscolaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escolas.
     */
    cursor?: EscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escolas.
     */
    distinct?: EscolaScalarFieldEnum | EscolaScalarFieldEnum[]
  }

  /**
   * Escola findFirstOrThrow
   */
  export type EscolaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * Filter, which Escola to fetch.
     */
    where?: EscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolas to fetch.
     */
    orderBy?: EscolaOrderByWithRelationInput | EscolaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escolas.
     */
    cursor?: EscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escolas.
     */
    distinct?: EscolaScalarFieldEnum | EscolaScalarFieldEnum[]
  }

  /**
   * Escola findMany
   */
  export type EscolaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * Filter, which Escolas to fetch.
     */
    where?: EscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolas to fetch.
     */
    orderBy?: EscolaOrderByWithRelationInput | EscolaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escolas.
     */
    cursor?: EscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolas.
     */
    skip?: number
    distinct?: EscolaScalarFieldEnum | EscolaScalarFieldEnum[]
  }

  /**
   * Escola create
   */
  export type EscolaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * The data needed to create a Escola.
     */
    data: XOR<EscolaCreateInput, EscolaUncheckedCreateInput>
  }

  /**
   * Escola createMany
   */
  export type EscolaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escolas.
     */
    data: EscolaCreateManyInput | EscolaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escola createManyAndReturn
   */
  export type EscolaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * The data used to create many Escolas.
     */
    data: EscolaCreateManyInput | EscolaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escola update
   */
  export type EscolaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * The data needed to update a Escola.
     */
    data: XOR<EscolaUpdateInput, EscolaUncheckedUpdateInput>
    /**
     * Choose, which Escola to update.
     */
    where: EscolaWhereUniqueInput
  }

  /**
   * Escola updateMany
   */
  export type EscolaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escolas.
     */
    data: XOR<EscolaUpdateManyMutationInput, EscolaUncheckedUpdateManyInput>
    /**
     * Filter which Escolas to update
     */
    where?: EscolaWhereInput
    /**
     * Limit how many Escolas to update.
     */
    limit?: number
  }

  /**
   * Escola updateManyAndReturn
   */
  export type EscolaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * The data used to update Escolas.
     */
    data: XOR<EscolaUpdateManyMutationInput, EscolaUncheckedUpdateManyInput>
    /**
     * Filter which Escolas to update
     */
    where?: EscolaWhereInput
    /**
     * Limit how many Escolas to update.
     */
    limit?: number
  }

  /**
   * Escola upsert
   */
  export type EscolaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * The filter to search for the Escola to update in case it exists.
     */
    where: EscolaWhereUniqueInput
    /**
     * In case the Escola found by the `where` argument doesn't exist, create a new Escola with this data.
     */
    create: XOR<EscolaCreateInput, EscolaUncheckedCreateInput>
    /**
     * In case the Escola was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscolaUpdateInput, EscolaUncheckedUpdateInput>
  }

  /**
   * Escola delete
   */
  export type EscolaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
    /**
     * Filter which Escola to delete.
     */
    where: EscolaWhereUniqueInput
  }

  /**
   * Escola deleteMany
   */
  export type EscolaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escolas to delete
     */
    where?: EscolaWhereInput
    /**
     * Limit how many Escolas to delete.
     */
    limit?: number
  }

  /**
   * Escola without action
   */
  export type EscolaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escola
     */
    omit?: EscolaOmit<ExtArgs> | null
  }


  /**
   * Model Patrocinador
   */

  export type AggregatePatrocinador = {
    _count: PatrocinadorCountAggregateOutputType | null
    _avg: PatrocinadorAvgAggregateOutputType | null
    _sum: PatrocinadorSumAggregateOutputType | null
    _min: PatrocinadorMinAggregateOutputType | null
    _max: PatrocinadorMaxAggregateOutputType | null
  }

  export type PatrocinadorAvgAggregateOutputType = {
    id: number | null
  }

  export type PatrocinadorSumAggregateOutputType = {
    id: number | null
  }

  export type PatrocinadorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    foto: Uint8Array | null
    link: string | null
  }

  export type PatrocinadorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    foto: Uint8Array | null
    link: string | null
  }

  export type PatrocinadorCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    foto: number
    link: number
    _all: number
  }


  export type PatrocinadorAvgAggregateInputType = {
    id?: true
  }

  export type PatrocinadorSumAggregateInputType = {
    id?: true
  }

  export type PatrocinadorMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    foto?: true
    link?: true
  }

  export type PatrocinadorMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    foto?: true
    link?: true
  }

  export type PatrocinadorCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    foto?: true
    link?: true
    _all?: true
  }

  export type PatrocinadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patrocinador to aggregate.
     */
    where?: PatrocinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrocinadors to fetch.
     */
    orderBy?: PatrocinadorOrderByWithRelationInput | PatrocinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatrocinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrocinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrocinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patrocinadors
    **/
    _count?: true | PatrocinadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatrocinadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatrocinadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatrocinadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatrocinadorMaxAggregateInputType
  }

  export type GetPatrocinadorAggregateType<T extends PatrocinadorAggregateArgs> = {
        [P in keyof T & keyof AggregatePatrocinador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatrocinador[P]>
      : GetScalarType<T[P], AggregatePatrocinador[P]>
  }




  export type PatrocinadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatrocinadorWhereInput
    orderBy?: PatrocinadorOrderByWithAggregationInput | PatrocinadorOrderByWithAggregationInput[]
    by: PatrocinadorScalarFieldEnum[] | PatrocinadorScalarFieldEnum
    having?: PatrocinadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatrocinadorCountAggregateInputType | true
    _avg?: PatrocinadorAvgAggregateInputType
    _sum?: PatrocinadorSumAggregateInputType
    _min?: PatrocinadorMinAggregateInputType
    _max?: PatrocinadorMaxAggregateInputType
  }

  export type PatrocinadorGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    foto: Uint8Array
    link: string
    _count: PatrocinadorCountAggregateOutputType | null
    _avg: PatrocinadorAvgAggregateOutputType | null
    _sum: PatrocinadorSumAggregateOutputType | null
    _min: PatrocinadorMinAggregateOutputType | null
    _max: PatrocinadorMaxAggregateOutputType | null
  }

  type GetPatrocinadorGroupByPayload<T extends PatrocinadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatrocinadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatrocinadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatrocinadorGroupByOutputType[P]>
            : GetScalarType<T[P], PatrocinadorGroupByOutputType[P]>
        }
      >
    >


  export type PatrocinadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    foto?: boolean
    link?: boolean
  }, ExtArgs["result"]["patrocinador"]>

  export type PatrocinadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    foto?: boolean
    link?: boolean
  }, ExtArgs["result"]["patrocinador"]>

  export type PatrocinadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    foto?: boolean
    link?: boolean
  }, ExtArgs["result"]["patrocinador"]>

  export type PatrocinadorSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    foto?: boolean
    link?: boolean
  }

  export type PatrocinadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "foto" | "link", ExtArgs["result"]["patrocinador"]>

  export type $PatrocinadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patrocinador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      foto: Uint8Array
      link: string
    }, ExtArgs["result"]["patrocinador"]>
    composites: {}
  }

  type PatrocinadorGetPayload<S extends boolean | null | undefined | PatrocinadorDefaultArgs> = $Result.GetResult<Prisma.$PatrocinadorPayload, S>

  type PatrocinadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatrocinadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatrocinadorCountAggregateInputType | true
    }

  export interface PatrocinadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patrocinador'], meta: { name: 'Patrocinador' } }
    /**
     * Find zero or one Patrocinador that matches the filter.
     * @param {PatrocinadorFindUniqueArgs} args - Arguments to find a Patrocinador
     * @example
     * // Get one Patrocinador
     * const patrocinador = await prisma.patrocinador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatrocinadorFindUniqueArgs>(args: SelectSubset<T, PatrocinadorFindUniqueArgs<ExtArgs>>): Prisma__PatrocinadorClient<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patrocinador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatrocinadorFindUniqueOrThrowArgs} args - Arguments to find a Patrocinador
     * @example
     * // Get one Patrocinador
     * const patrocinador = await prisma.patrocinador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatrocinadorFindUniqueOrThrowArgs>(args: SelectSubset<T, PatrocinadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatrocinadorClient<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patrocinador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadorFindFirstArgs} args - Arguments to find a Patrocinador
     * @example
     * // Get one Patrocinador
     * const patrocinador = await prisma.patrocinador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatrocinadorFindFirstArgs>(args?: SelectSubset<T, PatrocinadorFindFirstArgs<ExtArgs>>): Prisma__PatrocinadorClient<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patrocinador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadorFindFirstOrThrowArgs} args - Arguments to find a Patrocinador
     * @example
     * // Get one Patrocinador
     * const patrocinador = await prisma.patrocinador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatrocinadorFindFirstOrThrowArgs>(args?: SelectSubset<T, PatrocinadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatrocinadorClient<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patrocinadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patrocinadors
     * const patrocinadors = await prisma.patrocinador.findMany()
     * 
     * // Get first 10 Patrocinadors
     * const patrocinadors = await prisma.patrocinador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patrocinadorWithIdOnly = await prisma.patrocinador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatrocinadorFindManyArgs>(args?: SelectSubset<T, PatrocinadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patrocinador.
     * @param {PatrocinadorCreateArgs} args - Arguments to create a Patrocinador.
     * @example
     * // Create one Patrocinador
     * const Patrocinador = await prisma.patrocinador.create({
     *   data: {
     *     // ... data to create a Patrocinador
     *   }
     * })
     * 
     */
    create<T extends PatrocinadorCreateArgs>(args: SelectSubset<T, PatrocinadorCreateArgs<ExtArgs>>): Prisma__PatrocinadorClient<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patrocinadors.
     * @param {PatrocinadorCreateManyArgs} args - Arguments to create many Patrocinadors.
     * @example
     * // Create many Patrocinadors
     * const patrocinador = await prisma.patrocinador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatrocinadorCreateManyArgs>(args?: SelectSubset<T, PatrocinadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patrocinadors and returns the data saved in the database.
     * @param {PatrocinadorCreateManyAndReturnArgs} args - Arguments to create many Patrocinadors.
     * @example
     * // Create many Patrocinadors
     * const patrocinador = await prisma.patrocinador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patrocinadors and only return the `id`
     * const patrocinadorWithIdOnly = await prisma.patrocinador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatrocinadorCreateManyAndReturnArgs>(args?: SelectSubset<T, PatrocinadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patrocinador.
     * @param {PatrocinadorDeleteArgs} args - Arguments to delete one Patrocinador.
     * @example
     * // Delete one Patrocinador
     * const Patrocinador = await prisma.patrocinador.delete({
     *   where: {
     *     // ... filter to delete one Patrocinador
     *   }
     * })
     * 
     */
    delete<T extends PatrocinadorDeleteArgs>(args: SelectSubset<T, PatrocinadorDeleteArgs<ExtArgs>>): Prisma__PatrocinadorClient<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patrocinador.
     * @param {PatrocinadorUpdateArgs} args - Arguments to update one Patrocinador.
     * @example
     * // Update one Patrocinador
     * const patrocinador = await prisma.patrocinador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatrocinadorUpdateArgs>(args: SelectSubset<T, PatrocinadorUpdateArgs<ExtArgs>>): Prisma__PatrocinadorClient<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patrocinadors.
     * @param {PatrocinadorDeleteManyArgs} args - Arguments to filter Patrocinadors to delete.
     * @example
     * // Delete a few Patrocinadors
     * const { count } = await prisma.patrocinador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatrocinadorDeleteManyArgs>(args?: SelectSubset<T, PatrocinadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrocinadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patrocinadors
     * const patrocinador = await prisma.patrocinador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatrocinadorUpdateManyArgs>(args: SelectSubset<T, PatrocinadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrocinadors and returns the data updated in the database.
     * @param {PatrocinadorUpdateManyAndReturnArgs} args - Arguments to update many Patrocinadors.
     * @example
     * // Update many Patrocinadors
     * const patrocinador = await prisma.patrocinador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patrocinadors and only return the `id`
     * const patrocinadorWithIdOnly = await prisma.patrocinador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatrocinadorUpdateManyAndReturnArgs>(args: SelectSubset<T, PatrocinadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patrocinador.
     * @param {PatrocinadorUpsertArgs} args - Arguments to update or create a Patrocinador.
     * @example
     * // Update or create a Patrocinador
     * const patrocinador = await prisma.patrocinador.upsert({
     *   create: {
     *     // ... data to create a Patrocinador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patrocinador we want to update
     *   }
     * })
     */
    upsert<T extends PatrocinadorUpsertArgs>(args: SelectSubset<T, PatrocinadorUpsertArgs<ExtArgs>>): Prisma__PatrocinadorClient<$Result.GetResult<Prisma.$PatrocinadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patrocinadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadorCountArgs} args - Arguments to filter Patrocinadors to count.
     * @example
     * // Count the number of Patrocinadors
     * const count = await prisma.patrocinador.count({
     *   where: {
     *     // ... the filter for the Patrocinadors we want to count
     *   }
     * })
    **/
    count<T extends PatrocinadorCountArgs>(
      args?: Subset<T, PatrocinadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatrocinadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patrocinador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatrocinadorAggregateArgs>(args: Subset<T, PatrocinadorAggregateArgs>): Prisma.PrismaPromise<GetPatrocinadorAggregateType<T>>

    /**
     * Group by Patrocinador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatrocinadorGroupByArgs} args - Group by arguments.
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
      T extends PatrocinadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatrocinadorGroupByArgs['orderBy'] }
        : { orderBy?: PatrocinadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PatrocinadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatrocinadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patrocinador model
   */
  readonly fields: PatrocinadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patrocinador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatrocinadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patrocinador model
   */
  interface PatrocinadorFieldRefs {
    readonly id: FieldRef<"Patrocinador", 'Int'>
    readonly nome: FieldRef<"Patrocinador", 'String'>
    readonly descricao: FieldRef<"Patrocinador", 'String'>
    readonly foto: FieldRef<"Patrocinador", 'Bytes'>
    readonly link: FieldRef<"Patrocinador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patrocinador findUnique
   */
  export type PatrocinadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * Filter, which Patrocinador to fetch.
     */
    where: PatrocinadorWhereUniqueInput
  }

  /**
   * Patrocinador findUniqueOrThrow
   */
  export type PatrocinadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * Filter, which Patrocinador to fetch.
     */
    where: PatrocinadorWhereUniqueInput
  }

  /**
   * Patrocinador findFirst
   */
  export type PatrocinadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * Filter, which Patrocinador to fetch.
     */
    where?: PatrocinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrocinadors to fetch.
     */
    orderBy?: PatrocinadorOrderByWithRelationInput | PatrocinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patrocinadors.
     */
    cursor?: PatrocinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrocinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrocinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patrocinadors.
     */
    distinct?: PatrocinadorScalarFieldEnum | PatrocinadorScalarFieldEnum[]
  }

  /**
   * Patrocinador findFirstOrThrow
   */
  export type PatrocinadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * Filter, which Patrocinador to fetch.
     */
    where?: PatrocinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrocinadors to fetch.
     */
    orderBy?: PatrocinadorOrderByWithRelationInput | PatrocinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patrocinadors.
     */
    cursor?: PatrocinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrocinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrocinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patrocinadors.
     */
    distinct?: PatrocinadorScalarFieldEnum | PatrocinadorScalarFieldEnum[]
  }

  /**
   * Patrocinador findMany
   */
  export type PatrocinadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * Filter, which Patrocinadors to fetch.
     */
    where?: PatrocinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrocinadors to fetch.
     */
    orderBy?: PatrocinadorOrderByWithRelationInput | PatrocinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patrocinadors.
     */
    cursor?: PatrocinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrocinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrocinadors.
     */
    skip?: number
    distinct?: PatrocinadorScalarFieldEnum | PatrocinadorScalarFieldEnum[]
  }

  /**
   * Patrocinador create
   */
  export type PatrocinadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * The data needed to create a Patrocinador.
     */
    data: XOR<PatrocinadorCreateInput, PatrocinadorUncheckedCreateInput>
  }

  /**
   * Patrocinador createMany
   */
  export type PatrocinadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patrocinadors.
     */
    data: PatrocinadorCreateManyInput | PatrocinadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patrocinador createManyAndReturn
   */
  export type PatrocinadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * The data used to create many Patrocinadors.
     */
    data: PatrocinadorCreateManyInput | PatrocinadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patrocinador update
   */
  export type PatrocinadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * The data needed to update a Patrocinador.
     */
    data: XOR<PatrocinadorUpdateInput, PatrocinadorUncheckedUpdateInput>
    /**
     * Choose, which Patrocinador to update.
     */
    where: PatrocinadorWhereUniqueInput
  }

  /**
   * Patrocinador updateMany
   */
  export type PatrocinadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patrocinadors.
     */
    data: XOR<PatrocinadorUpdateManyMutationInput, PatrocinadorUncheckedUpdateManyInput>
    /**
     * Filter which Patrocinadors to update
     */
    where?: PatrocinadorWhereInput
    /**
     * Limit how many Patrocinadors to update.
     */
    limit?: number
  }

  /**
   * Patrocinador updateManyAndReturn
   */
  export type PatrocinadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * The data used to update Patrocinadors.
     */
    data: XOR<PatrocinadorUpdateManyMutationInput, PatrocinadorUncheckedUpdateManyInput>
    /**
     * Filter which Patrocinadors to update
     */
    where?: PatrocinadorWhereInput
    /**
     * Limit how many Patrocinadors to update.
     */
    limit?: number
  }

  /**
   * Patrocinador upsert
   */
  export type PatrocinadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * The filter to search for the Patrocinador to update in case it exists.
     */
    where: PatrocinadorWhereUniqueInput
    /**
     * In case the Patrocinador found by the `where` argument doesn't exist, create a new Patrocinador with this data.
     */
    create: XOR<PatrocinadorCreateInput, PatrocinadorUncheckedCreateInput>
    /**
     * In case the Patrocinador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatrocinadorUpdateInput, PatrocinadorUncheckedUpdateInput>
  }

  /**
   * Patrocinador delete
   */
  export type PatrocinadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
    /**
     * Filter which Patrocinador to delete.
     */
    where: PatrocinadorWhereUniqueInput
  }

  /**
   * Patrocinador deleteMany
   */
  export type PatrocinadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patrocinadors to delete
     */
    where?: PatrocinadorWhereInput
    /**
     * Limit how many Patrocinadors to delete.
     */
    limit?: number
  }

  /**
   * Patrocinador without action
   */
  export type PatrocinadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patrocinador
     */
    select?: PatrocinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patrocinador
     */
    omit?: PatrocinadorOmit<ExtArgs> | null
  }


  /**
   * Model Projeto
   */

  export type AggregateProjeto = {
    _count: ProjetoCountAggregateOutputType | null
    _avg: ProjetoAvgAggregateOutputType | null
    _sum: ProjetoSumAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  export type ProjetoAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjetoSumAggregateOutputType = {
    id: number | null
  }

  export type ProjetoMinAggregateOutputType = {
    id: number | null
    email: string | null
    localizacao: string | null
  }

  export type ProjetoMaxAggregateOutputType = {
    id: number | null
    email: string | null
    localizacao: string | null
  }

  export type ProjetoCountAggregateOutputType = {
    id: number
    email: number
    localizacao: number
    _all: number
  }


  export type ProjetoAvgAggregateInputType = {
    id?: true
  }

  export type ProjetoSumAggregateInputType = {
    id?: true
  }

  export type ProjetoMinAggregateInputType = {
    id?: true
    email?: true
    localizacao?: true
  }

  export type ProjetoMaxAggregateInputType = {
    id?: true
    email?: true
    localizacao?: true
  }

  export type ProjetoCountAggregateInputType = {
    id?: true
    email?: true
    localizacao?: true
    _all?: true
  }

  export type ProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projeto to aggregate.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projetos
    **/
    _count?: true | ProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjetoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjetoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetoMaxAggregateInputType
  }

  export type GetProjetoAggregateType<T extends ProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjeto[P]>
      : GetScalarType<T[P], AggregateProjeto[P]>
  }




  export type ProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithAggregationInput | ProjetoOrderByWithAggregationInput[]
    by: ProjetoScalarFieldEnum[] | ProjetoScalarFieldEnum
    having?: ProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetoCountAggregateInputType | true
    _avg?: ProjetoAvgAggregateInputType
    _sum?: ProjetoSumAggregateInputType
    _min?: ProjetoMinAggregateInputType
    _max?: ProjetoMaxAggregateInputType
  }

  export type ProjetoGroupByOutputType = {
    id: number
    email: string
    localizacao: string
    _count: ProjetoCountAggregateOutputType | null
    _avg: ProjetoAvgAggregateOutputType | null
    _sum: ProjetoSumAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  type GetProjetoGroupByPayload<T extends ProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
        }
      >
    >


  export type ProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    localizacao?: boolean
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    localizacao?: boolean
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    localizacao?: boolean
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectScalar = {
    id?: boolean
    email?: boolean
    localizacao?: boolean
  }

  export type ProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "localizacao", ExtArgs["result"]["projeto"]>

  export type $ProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projeto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      localizacao: string
    }, ExtArgs["result"]["projeto"]>
    composites: {}
  }

  type ProjetoGetPayload<S extends boolean | null | undefined | ProjetoDefaultArgs> = $Result.GetResult<Prisma.$ProjetoPayload, S>

  type ProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetoCountAggregateInputType | true
    }

  export interface ProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projeto'], meta: { name: 'Projeto' } }
    /**
     * Find zero or one Projeto that matches the filter.
     * @param {ProjetoFindUniqueArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjetoFindUniqueArgs>(args: SelectSubset<T, ProjetoFindUniqueArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjetoFindUniqueOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjetoFindFirstArgs>(args?: SelectSubset<T, ProjetoFindFirstArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projetos
     * const projetos = await prisma.projeto.findMany()
     * 
     * // Get first 10 Projetos
     * const projetos = await prisma.projeto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetoWithIdOnly = await prisma.projeto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjetoFindManyArgs>(args?: SelectSubset<T, ProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projeto.
     * @param {ProjetoCreateArgs} args - Arguments to create a Projeto.
     * @example
     * // Create one Projeto
     * const Projeto = await prisma.projeto.create({
     *   data: {
     *     // ... data to create a Projeto
     *   }
     * })
     * 
     */
    create<T extends ProjetoCreateArgs>(args: SelectSubset<T, ProjetoCreateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projetos.
     * @param {ProjetoCreateManyArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjetoCreateManyArgs>(args?: SelectSubset<T, ProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projetos and returns the data saved in the database.
     * @param {ProjetoCreateManyAndReturnArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projeto.
     * @param {ProjetoDeleteArgs} args - Arguments to delete one Projeto.
     * @example
     * // Delete one Projeto
     * const Projeto = await prisma.projeto.delete({
     *   where: {
     *     // ... filter to delete one Projeto
     *   }
     * })
     * 
     */
    delete<T extends ProjetoDeleteArgs>(args: SelectSubset<T, ProjetoDeleteArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projeto.
     * @param {ProjetoUpdateArgs} args - Arguments to update one Projeto.
     * @example
     * // Update one Projeto
     * const projeto = await prisma.projeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjetoUpdateArgs>(args: SelectSubset<T, ProjetoUpdateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projetos.
     * @param {ProjetoDeleteManyArgs} args - Arguments to filter Projetos to delete.
     * @example
     * // Delete a few Projetos
     * const { count } = await prisma.projeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjetoDeleteManyArgs>(args?: SelectSubset<T, ProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjetoUpdateManyArgs>(args: SelectSubset<T, ProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos and returns the data updated in the database.
     * @param {ProjetoUpdateManyAndReturnArgs} args - Arguments to update many Projetos.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projeto.
     * @param {ProjetoUpsertArgs} args - Arguments to update or create a Projeto.
     * @example
     * // Update or create a Projeto
     * const projeto = await prisma.projeto.upsert({
     *   create: {
     *     // ... data to create a Projeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projeto we want to update
     *   }
     * })
     */
    upsert<T extends ProjetoUpsertArgs>(args: SelectSubset<T, ProjetoUpsertArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoCountArgs} args - Arguments to filter Projetos to count.
     * @example
     * // Count the number of Projetos
     * const count = await prisma.projeto.count({
     *   where: {
     *     // ... the filter for the Projetos we want to count
     *   }
     * })
    **/
    count<T extends ProjetoCountArgs>(
      args?: Subset<T, ProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjetoAggregateArgs>(args: Subset<T, ProjetoAggregateArgs>): Prisma.PrismaPromise<GetProjetoAggregateType<T>>

    /**
     * Group by Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoGroupByArgs} args - Group by arguments.
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
      T extends ProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetoGroupByArgs['orderBy'] }
        : { orderBy?: ProjetoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projeto model
   */
  readonly fields: ProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projeto model
   */
  interface ProjetoFieldRefs {
    readonly id: FieldRef<"Projeto", 'Int'>
    readonly email: FieldRef<"Projeto", 'String'>
    readonly localizacao: FieldRef<"Projeto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Projeto findUnique
   */
  export type ProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findUniqueOrThrow
   */
  export type ProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findFirst
   */
  export type ProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findFirstOrThrow
   */
  export type ProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findMany
   */
  export type ProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Filter, which Projetos to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto create
   */
  export type ProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data needed to create a Projeto.
     */
    data: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
  }

  /**
   * Projeto createMany
   */
  export type ProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projeto createManyAndReturn
   */
  export type ProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projeto update
   */
  export type ProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data needed to update a Projeto.
     */
    data: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
    /**
     * Choose, which Projeto to update.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto updateMany
   */
  export type ProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
  }

  /**
   * Projeto updateManyAndReturn
   */
  export type ProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
  }

  /**
   * Projeto upsert
   */
  export type ProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The filter to search for the Projeto to update in case it exists.
     */
    where: ProjetoWhereUniqueInput
    /**
     * In case the Projeto found by the `where` argument doesn't exist, create a new Projeto with this data.
     */
    create: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
    /**
     * In case the Projeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
  }

  /**
   * Projeto delete
   */
  export type ProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Filter which Projeto to delete.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto deleteMany
   */
  export type ProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projetos to delete
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to delete.
     */
    limit?: number
  }

  /**
   * Projeto without action
   */
  export type ProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
  }


  /**
   * Model ImpactoProjeto
   */

  export type AggregateImpactoProjeto = {
    _count: ImpactoProjetoCountAggregateOutputType | null
    _avg: ImpactoProjetoAvgAggregateOutputType | null
    _sum: ImpactoProjetoSumAggregateOutputType | null
    _min: ImpactoProjetoMinAggregateOutputType | null
    _max: ImpactoProjetoMaxAggregateOutputType | null
  }

  export type ImpactoProjetoAvgAggregateOutputType = {
    id: number | null
    idProfessor: number | null
    idAluna: number | null
  }

  export type ImpactoProjetoSumAggregateOutputType = {
    id: number | null
    idProfessor: number | null
    idAluna: number | null
  }

  export type ImpactoProjetoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    idProfessor: number | null
    idAluna: number | null
  }

  export type ImpactoProjetoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    idProfessor: number | null
    idAluna: number | null
  }

  export type ImpactoProjetoCountAggregateOutputType = {
    id: number
    descricao: number
    idProfessor: number
    idAluna: number
    _all: number
  }


  export type ImpactoProjetoAvgAggregateInputType = {
    id?: true
    idProfessor?: true
    idAluna?: true
  }

  export type ImpactoProjetoSumAggregateInputType = {
    id?: true
    idProfessor?: true
    idAluna?: true
  }

  export type ImpactoProjetoMinAggregateInputType = {
    id?: true
    descricao?: true
    idProfessor?: true
    idAluna?: true
  }

  export type ImpactoProjetoMaxAggregateInputType = {
    id?: true
    descricao?: true
    idProfessor?: true
    idAluna?: true
  }

  export type ImpactoProjetoCountAggregateInputType = {
    id?: true
    descricao?: true
    idProfessor?: true
    idAluna?: true
    _all?: true
  }

  export type ImpactoProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImpactoProjeto to aggregate.
     */
    where?: ImpactoProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactoProjetos to fetch.
     */
    orderBy?: ImpactoProjetoOrderByWithRelationInput | ImpactoProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImpactoProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactoProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactoProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImpactoProjetos
    **/
    _count?: true | ImpactoProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImpactoProjetoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImpactoProjetoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImpactoProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImpactoProjetoMaxAggregateInputType
  }

  export type GetImpactoProjetoAggregateType<T extends ImpactoProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateImpactoProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImpactoProjeto[P]>
      : GetScalarType<T[P], AggregateImpactoProjeto[P]>
  }




  export type ImpactoProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImpactoProjetoWhereInput
    orderBy?: ImpactoProjetoOrderByWithAggregationInput | ImpactoProjetoOrderByWithAggregationInput[]
    by: ImpactoProjetoScalarFieldEnum[] | ImpactoProjetoScalarFieldEnum
    having?: ImpactoProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImpactoProjetoCountAggregateInputType | true
    _avg?: ImpactoProjetoAvgAggregateInputType
    _sum?: ImpactoProjetoSumAggregateInputType
    _min?: ImpactoProjetoMinAggregateInputType
    _max?: ImpactoProjetoMaxAggregateInputType
  }

  export type ImpactoProjetoGroupByOutputType = {
    id: number
    descricao: string
    idProfessor: number
    idAluna: number
    _count: ImpactoProjetoCountAggregateOutputType | null
    _avg: ImpactoProjetoAvgAggregateOutputType | null
    _sum: ImpactoProjetoSumAggregateOutputType | null
    _min: ImpactoProjetoMinAggregateOutputType | null
    _max: ImpactoProjetoMaxAggregateOutputType | null
  }

  type GetImpactoProjetoGroupByPayload<T extends ImpactoProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImpactoProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImpactoProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImpactoProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], ImpactoProjetoGroupByOutputType[P]>
        }
      >
    >


  export type ImpactoProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    idProfessor?: boolean
    idAluna?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["impactoProjeto"]>

  export type ImpactoProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    idProfessor?: boolean
    idAluna?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["impactoProjeto"]>

  export type ImpactoProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    idProfessor?: boolean
    idAluna?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["impactoProjeto"]>

  export type ImpactoProjetoSelectScalar = {
    id?: boolean
    descricao?: boolean
    idProfessor?: boolean
    idAluna?: boolean
  }

  export type ImpactoProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "idProfessor" | "idAluna", ExtArgs["result"]["impactoProjeto"]>
  export type ImpactoProjetoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }
  export type ImpactoProjetoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }
  export type ImpactoProjetoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }

  export type $ImpactoProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImpactoProjeto"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      aluna: Prisma.$AlunaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      idProfessor: number
      idAluna: number
    }, ExtArgs["result"]["impactoProjeto"]>
    composites: {}
  }

  type ImpactoProjetoGetPayload<S extends boolean | null | undefined | ImpactoProjetoDefaultArgs> = $Result.GetResult<Prisma.$ImpactoProjetoPayload, S>

  type ImpactoProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImpactoProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImpactoProjetoCountAggregateInputType | true
    }

  export interface ImpactoProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImpactoProjeto'], meta: { name: 'ImpactoProjeto' } }
    /**
     * Find zero or one ImpactoProjeto that matches the filter.
     * @param {ImpactoProjetoFindUniqueArgs} args - Arguments to find a ImpactoProjeto
     * @example
     * // Get one ImpactoProjeto
     * const impactoProjeto = await prisma.impactoProjeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImpactoProjetoFindUniqueArgs>(args: SelectSubset<T, ImpactoProjetoFindUniqueArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImpactoProjeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImpactoProjetoFindUniqueOrThrowArgs} args - Arguments to find a ImpactoProjeto
     * @example
     * // Get one ImpactoProjeto
     * const impactoProjeto = await prisma.impactoProjeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImpactoProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, ImpactoProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImpactoProjeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactoProjetoFindFirstArgs} args - Arguments to find a ImpactoProjeto
     * @example
     * // Get one ImpactoProjeto
     * const impactoProjeto = await prisma.impactoProjeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImpactoProjetoFindFirstArgs>(args?: SelectSubset<T, ImpactoProjetoFindFirstArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImpactoProjeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactoProjetoFindFirstOrThrowArgs} args - Arguments to find a ImpactoProjeto
     * @example
     * // Get one ImpactoProjeto
     * const impactoProjeto = await prisma.impactoProjeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImpactoProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, ImpactoProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImpactoProjetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactoProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImpactoProjetos
     * const impactoProjetos = await prisma.impactoProjeto.findMany()
     * 
     * // Get first 10 ImpactoProjetos
     * const impactoProjetos = await prisma.impactoProjeto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const impactoProjetoWithIdOnly = await prisma.impactoProjeto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImpactoProjetoFindManyArgs>(args?: SelectSubset<T, ImpactoProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImpactoProjeto.
     * @param {ImpactoProjetoCreateArgs} args - Arguments to create a ImpactoProjeto.
     * @example
     * // Create one ImpactoProjeto
     * const ImpactoProjeto = await prisma.impactoProjeto.create({
     *   data: {
     *     // ... data to create a ImpactoProjeto
     *   }
     * })
     * 
     */
    create<T extends ImpactoProjetoCreateArgs>(args: SelectSubset<T, ImpactoProjetoCreateArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImpactoProjetos.
     * @param {ImpactoProjetoCreateManyArgs} args - Arguments to create many ImpactoProjetos.
     * @example
     * // Create many ImpactoProjetos
     * const impactoProjeto = await prisma.impactoProjeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImpactoProjetoCreateManyArgs>(args?: SelectSubset<T, ImpactoProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImpactoProjetos and returns the data saved in the database.
     * @param {ImpactoProjetoCreateManyAndReturnArgs} args - Arguments to create many ImpactoProjetos.
     * @example
     * // Create many ImpactoProjetos
     * const impactoProjeto = await prisma.impactoProjeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImpactoProjetos and only return the `id`
     * const impactoProjetoWithIdOnly = await prisma.impactoProjeto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImpactoProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, ImpactoProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImpactoProjeto.
     * @param {ImpactoProjetoDeleteArgs} args - Arguments to delete one ImpactoProjeto.
     * @example
     * // Delete one ImpactoProjeto
     * const ImpactoProjeto = await prisma.impactoProjeto.delete({
     *   where: {
     *     // ... filter to delete one ImpactoProjeto
     *   }
     * })
     * 
     */
    delete<T extends ImpactoProjetoDeleteArgs>(args: SelectSubset<T, ImpactoProjetoDeleteArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImpactoProjeto.
     * @param {ImpactoProjetoUpdateArgs} args - Arguments to update one ImpactoProjeto.
     * @example
     * // Update one ImpactoProjeto
     * const impactoProjeto = await prisma.impactoProjeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImpactoProjetoUpdateArgs>(args: SelectSubset<T, ImpactoProjetoUpdateArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImpactoProjetos.
     * @param {ImpactoProjetoDeleteManyArgs} args - Arguments to filter ImpactoProjetos to delete.
     * @example
     * // Delete a few ImpactoProjetos
     * const { count } = await prisma.impactoProjeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImpactoProjetoDeleteManyArgs>(args?: SelectSubset<T, ImpactoProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImpactoProjetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactoProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImpactoProjetos
     * const impactoProjeto = await prisma.impactoProjeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImpactoProjetoUpdateManyArgs>(args: SelectSubset<T, ImpactoProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImpactoProjetos and returns the data updated in the database.
     * @param {ImpactoProjetoUpdateManyAndReturnArgs} args - Arguments to update many ImpactoProjetos.
     * @example
     * // Update many ImpactoProjetos
     * const impactoProjeto = await prisma.impactoProjeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImpactoProjetos and only return the `id`
     * const impactoProjetoWithIdOnly = await prisma.impactoProjeto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImpactoProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, ImpactoProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImpactoProjeto.
     * @param {ImpactoProjetoUpsertArgs} args - Arguments to update or create a ImpactoProjeto.
     * @example
     * // Update or create a ImpactoProjeto
     * const impactoProjeto = await prisma.impactoProjeto.upsert({
     *   create: {
     *     // ... data to create a ImpactoProjeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImpactoProjeto we want to update
     *   }
     * })
     */
    upsert<T extends ImpactoProjetoUpsertArgs>(args: SelectSubset<T, ImpactoProjetoUpsertArgs<ExtArgs>>): Prisma__ImpactoProjetoClient<$Result.GetResult<Prisma.$ImpactoProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImpactoProjetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactoProjetoCountArgs} args - Arguments to filter ImpactoProjetos to count.
     * @example
     * // Count the number of ImpactoProjetos
     * const count = await prisma.impactoProjeto.count({
     *   where: {
     *     // ... the filter for the ImpactoProjetos we want to count
     *   }
     * })
    **/
    count<T extends ImpactoProjetoCountArgs>(
      args?: Subset<T, ImpactoProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImpactoProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImpactoProjeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactoProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImpactoProjetoAggregateArgs>(args: Subset<T, ImpactoProjetoAggregateArgs>): Prisma.PrismaPromise<GetImpactoProjetoAggregateType<T>>

    /**
     * Group by ImpactoProjeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactoProjetoGroupByArgs} args - Group by arguments.
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
      T extends ImpactoProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImpactoProjetoGroupByArgs['orderBy'] }
        : { orderBy?: ImpactoProjetoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ImpactoProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImpactoProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImpactoProjeto model
   */
  readonly fields: ImpactoProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImpactoProjeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImpactoProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aluna<T extends AlunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunaDefaultArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImpactoProjeto model
   */
  interface ImpactoProjetoFieldRefs {
    readonly id: FieldRef<"ImpactoProjeto", 'Int'>
    readonly descricao: FieldRef<"ImpactoProjeto", 'String'>
    readonly idProfessor: FieldRef<"ImpactoProjeto", 'Int'>
    readonly idAluna: FieldRef<"ImpactoProjeto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ImpactoProjeto findUnique
   */
  export type ImpactoProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * Filter, which ImpactoProjeto to fetch.
     */
    where: ImpactoProjetoWhereUniqueInput
  }

  /**
   * ImpactoProjeto findUniqueOrThrow
   */
  export type ImpactoProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * Filter, which ImpactoProjeto to fetch.
     */
    where: ImpactoProjetoWhereUniqueInput
  }

  /**
   * ImpactoProjeto findFirst
   */
  export type ImpactoProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * Filter, which ImpactoProjeto to fetch.
     */
    where?: ImpactoProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactoProjetos to fetch.
     */
    orderBy?: ImpactoProjetoOrderByWithRelationInput | ImpactoProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImpactoProjetos.
     */
    cursor?: ImpactoProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactoProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactoProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImpactoProjetos.
     */
    distinct?: ImpactoProjetoScalarFieldEnum | ImpactoProjetoScalarFieldEnum[]
  }

  /**
   * ImpactoProjeto findFirstOrThrow
   */
  export type ImpactoProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * Filter, which ImpactoProjeto to fetch.
     */
    where?: ImpactoProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactoProjetos to fetch.
     */
    orderBy?: ImpactoProjetoOrderByWithRelationInput | ImpactoProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImpactoProjetos.
     */
    cursor?: ImpactoProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactoProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactoProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImpactoProjetos.
     */
    distinct?: ImpactoProjetoScalarFieldEnum | ImpactoProjetoScalarFieldEnum[]
  }

  /**
   * ImpactoProjeto findMany
   */
  export type ImpactoProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * Filter, which ImpactoProjetos to fetch.
     */
    where?: ImpactoProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactoProjetos to fetch.
     */
    orderBy?: ImpactoProjetoOrderByWithRelationInput | ImpactoProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImpactoProjetos.
     */
    cursor?: ImpactoProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactoProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactoProjetos.
     */
    skip?: number
    distinct?: ImpactoProjetoScalarFieldEnum | ImpactoProjetoScalarFieldEnum[]
  }

  /**
   * ImpactoProjeto create
   */
  export type ImpactoProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * The data needed to create a ImpactoProjeto.
     */
    data: XOR<ImpactoProjetoCreateInput, ImpactoProjetoUncheckedCreateInput>
  }

  /**
   * ImpactoProjeto createMany
   */
  export type ImpactoProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImpactoProjetos.
     */
    data: ImpactoProjetoCreateManyInput | ImpactoProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImpactoProjeto createManyAndReturn
   */
  export type ImpactoProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many ImpactoProjetos.
     */
    data: ImpactoProjetoCreateManyInput | ImpactoProjetoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImpactoProjeto update
   */
  export type ImpactoProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * The data needed to update a ImpactoProjeto.
     */
    data: XOR<ImpactoProjetoUpdateInput, ImpactoProjetoUncheckedUpdateInput>
    /**
     * Choose, which ImpactoProjeto to update.
     */
    where: ImpactoProjetoWhereUniqueInput
  }

  /**
   * ImpactoProjeto updateMany
   */
  export type ImpactoProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImpactoProjetos.
     */
    data: XOR<ImpactoProjetoUpdateManyMutationInput, ImpactoProjetoUncheckedUpdateManyInput>
    /**
     * Filter which ImpactoProjetos to update
     */
    where?: ImpactoProjetoWhereInput
    /**
     * Limit how many ImpactoProjetos to update.
     */
    limit?: number
  }

  /**
   * ImpactoProjeto updateManyAndReturn
   */
  export type ImpactoProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * The data used to update ImpactoProjetos.
     */
    data: XOR<ImpactoProjetoUpdateManyMutationInput, ImpactoProjetoUncheckedUpdateManyInput>
    /**
     * Filter which ImpactoProjetos to update
     */
    where?: ImpactoProjetoWhereInput
    /**
     * Limit how many ImpactoProjetos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImpactoProjeto upsert
   */
  export type ImpactoProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * The filter to search for the ImpactoProjeto to update in case it exists.
     */
    where: ImpactoProjetoWhereUniqueInput
    /**
     * In case the ImpactoProjeto found by the `where` argument doesn't exist, create a new ImpactoProjeto with this data.
     */
    create: XOR<ImpactoProjetoCreateInput, ImpactoProjetoUncheckedCreateInput>
    /**
     * In case the ImpactoProjeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImpactoProjetoUpdateInput, ImpactoProjetoUncheckedUpdateInput>
  }

  /**
   * ImpactoProjeto delete
   */
  export type ImpactoProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
    /**
     * Filter which ImpactoProjeto to delete.
     */
    where: ImpactoProjetoWhereUniqueInput
  }

  /**
   * ImpactoProjeto deleteMany
   */
  export type ImpactoProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImpactoProjetos to delete
     */
    where?: ImpactoProjetoWhereInput
    /**
     * Limit how many ImpactoProjetos to delete.
     */
    limit?: number
  }

  /**
   * ImpactoProjeto without action
   */
  export type ImpactoProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactoProjeto
     */
    select?: ImpactoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactoProjeto
     */
    omit?: ImpactoProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImpactoProjetoInclude<ExtArgs> | null
  }


  /**
   * Model Historia
   */

  export type AggregateHistoria = {
    _count: HistoriaCountAggregateOutputType | null
    _avg: HistoriaAvgAggregateOutputType | null
    _sum: HistoriaSumAggregateOutputType | null
    _min: HistoriaMinAggregateOutputType | null
    _max: HistoriaMaxAggregateOutputType | null
  }

  export type HistoriaAvgAggregateOutputType = {
    id: number | null
    idProfessor: number | null
  }

  export type HistoriaSumAggregateOutputType = {
    id: number | null
    idProfessor: number | null
  }

  export type HistoriaMinAggregateOutputType = {
    id: number | null
    data: Date | null
    descricao: string | null
    idProfessor: number | null
  }

  export type HistoriaMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    descricao: string | null
    idProfessor: number | null
  }

  export type HistoriaCountAggregateOutputType = {
    id: number
    data: number
    descricao: number
    idProfessor: number
    _all: number
  }


  export type HistoriaAvgAggregateInputType = {
    id?: true
    idProfessor?: true
  }

  export type HistoriaSumAggregateInputType = {
    id?: true
    idProfessor?: true
  }

  export type HistoriaMinAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    idProfessor?: true
  }

  export type HistoriaMaxAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    idProfessor?: true
  }

  export type HistoriaCountAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    idProfessor?: true
    _all?: true
  }

  export type HistoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historia to aggregate.
     */
    where?: HistoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historias to fetch.
     */
    orderBy?: HistoriaOrderByWithRelationInput | HistoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historias
    **/
    _count?: true | HistoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriaMaxAggregateInputType
  }

  export type GetHistoriaAggregateType<T extends HistoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoria[P]>
      : GetScalarType<T[P], AggregateHistoria[P]>
  }




  export type HistoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriaWhereInput
    orderBy?: HistoriaOrderByWithAggregationInput | HistoriaOrderByWithAggregationInput[]
    by: HistoriaScalarFieldEnum[] | HistoriaScalarFieldEnum
    having?: HistoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriaCountAggregateInputType | true
    _avg?: HistoriaAvgAggregateInputType
    _sum?: HistoriaSumAggregateInputType
    _min?: HistoriaMinAggregateInputType
    _max?: HistoriaMaxAggregateInputType
  }

  export type HistoriaGroupByOutputType = {
    id: number
    data: Date
    descricao: string
    idProfessor: number
    _count: HistoriaCountAggregateOutputType | null
    _avg: HistoriaAvgAggregateOutputType | null
    _sum: HistoriaSumAggregateOutputType | null
    _min: HistoriaMinAggregateOutputType | null
    _max: HistoriaMaxAggregateOutputType | null
  }

  type GetHistoriaGroupByPayload<T extends HistoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriaGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriaGroupByOutputType[P]>
        }
      >
    >


  export type HistoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    idProfessor?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historia"]>

  export type HistoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    idProfessor?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historia"]>

  export type HistoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    idProfessor?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historia"]>

  export type HistoriaSelectScalar = {
    id?: boolean
    data?: boolean
    descricao?: boolean
    idProfessor?: boolean
  }

  export type HistoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "descricao" | "idProfessor", ExtArgs["result"]["historia"]>
  export type HistoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type HistoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type HistoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $HistoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historia"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      descricao: string
      idProfessor: number
    }, ExtArgs["result"]["historia"]>
    composites: {}
  }

  type HistoriaGetPayload<S extends boolean | null | undefined | HistoriaDefaultArgs> = $Result.GetResult<Prisma.$HistoriaPayload, S>

  type HistoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoriaCountAggregateInputType | true
    }

  export interface HistoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historia'], meta: { name: 'Historia' } }
    /**
     * Find zero or one Historia that matches the filter.
     * @param {HistoriaFindUniqueArgs} args - Arguments to find a Historia
     * @example
     * // Get one Historia
     * const historia = await prisma.historia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoriaFindUniqueArgs>(args: SelectSubset<T, HistoriaFindUniqueArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoriaFindUniqueOrThrowArgs} args - Arguments to find a Historia
     * @example
     * // Get one Historia
     * const historia = await prisma.historia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaFindFirstArgs} args - Arguments to find a Historia
     * @example
     * // Get one Historia
     * const historia = await prisma.historia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoriaFindFirstArgs>(args?: SelectSubset<T, HistoriaFindFirstArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaFindFirstOrThrowArgs} args - Arguments to find a Historia
     * @example
     * // Get one Historia
     * const historia = await prisma.historia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historias
     * const historias = await prisma.historia.findMany()
     * 
     * // Get first 10 Historias
     * const historias = await prisma.historia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historiaWithIdOnly = await prisma.historia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoriaFindManyArgs>(args?: SelectSubset<T, HistoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historia.
     * @param {HistoriaCreateArgs} args - Arguments to create a Historia.
     * @example
     * // Create one Historia
     * const Historia = await prisma.historia.create({
     *   data: {
     *     // ... data to create a Historia
     *   }
     * })
     * 
     */
    create<T extends HistoriaCreateArgs>(args: SelectSubset<T, HistoriaCreateArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historias.
     * @param {HistoriaCreateManyArgs} args - Arguments to create many Historias.
     * @example
     * // Create many Historias
     * const historia = await prisma.historia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoriaCreateManyArgs>(args?: SelectSubset<T, HistoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historias and returns the data saved in the database.
     * @param {HistoriaCreateManyAndReturnArgs} args - Arguments to create many Historias.
     * @example
     * // Create many Historias
     * const historia = await prisma.historia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historias and only return the `id`
     * const historiaWithIdOnly = await prisma.historia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historia.
     * @param {HistoriaDeleteArgs} args - Arguments to delete one Historia.
     * @example
     * // Delete one Historia
     * const Historia = await prisma.historia.delete({
     *   where: {
     *     // ... filter to delete one Historia
     *   }
     * })
     * 
     */
    delete<T extends HistoriaDeleteArgs>(args: SelectSubset<T, HistoriaDeleteArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historia.
     * @param {HistoriaUpdateArgs} args - Arguments to update one Historia.
     * @example
     * // Update one Historia
     * const historia = await prisma.historia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoriaUpdateArgs>(args: SelectSubset<T, HistoriaUpdateArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historias.
     * @param {HistoriaDeleteManyArgs} args - Arguments to filter Historias to delete.
     * @example
     * // Delete a few Historias
     * const { count } = await prisma.historia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoriaDeleteManyArgs>(args?: SelectSubset<T, HistoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historias
     * const historia = await prisma.historia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoriaUpdateManyArgs>(args: SelectSubset<T, HistoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historias and returns the data updated in the database.
     * @param {HistoriaUpdateManyAndReturnArgs} args - Arguments to update many Historias.
     * @example
     * // Update many Historias
     * const historia = await prisma.historia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historias and only return the `id`
     * const historiaWithIdOnly = await prisma.historia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historia.
     * @param {HistoriaUpsertArgs} args - Arguments to update or create a Historia.
     * @example
     * // Update or create a Historia
     * const historia = await prisma.historia.upsert({
     *   create: {
     *     // ... data to create a Historia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historia we want to update
     *   }
     * })
     */
    upsert<T extends HistoriaUpsertArgs>(args: SelectSubset<T, HistoriaUpsertArgs<ExtArgs>>): Prisma__HistoriaClient<$Result.GetResult<Prisma.$HistoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaCountArgs} args - Arguments to filter Historias to count.
     * @example
     * // Count the number of Historias
     * const count = await prisma.historia.count({
     *   where: {
     *     // ... the filter for the Historias we want to count
     *   }
     * })
    **/
    count<T extends HistoriaCountArgs>(
      args?: Subset<T, HistoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoriaAggregateArgs>(args: Subset<T, HistoriaAggregateArgs>): Prisma.PrismaPromise<GetHistoriaAggregateType<T>>

    /**
     * Group by Historia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaGroupByArgs} args - Group by arguments.
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
      T extends HistoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoriaGroupByArgs['orderBy'] }
        : { orderBy?: HistoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HistoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historia model
   */
  readonly fields: HistoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Historia model
   */
  interface HistoriaFieldRefs {
    readonly id: FieldRef<"Historia", 'Int'>
    readonly data: FieldRef<"Historia", 'DateTime'>
    readonly descricao: FieldRef<"Historia", 'String'>
    readonly idProfessor: FieldRef<"Historia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Historia findUnique
   */
  export type HistoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * Filter, which Historia to fetch.
     */
    where: HistoriaWhereUniqueInput
  }

  /**
   * Historia findUniqueOrThrow
   */
  export type HistoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * Filter, which Historia to fetch.
     */
    where: HistoriaWhereUniqueInput
  }

  /**
   * Historia findFirst
   */
  export type HistoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * Filter, which Historia to fetch.
     */
    where?: HistoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historias to fetch.
     */
    orderBy?: HistoriaOrderByWithRelationInput | HistoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historias.
     */
    cursor?: HistoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historias.
     */
    distinct?: HistoriaScalarFieldEnum | HistoriaScalarFieldEnum[]
  }

  /**
   * Historia findFirstOrThrow
   */
  export type HistoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * Filter, which Historia to fetch.
     */
    where?: HistoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historias to fetch.
     */
    orderBy?: HistoriaOrderByWithRelationInput | HistoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historias.
     */
    cursor?: HistoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historias.
     */
    distinct?: HistoriaScalarFieldEnum | HistoriaScalarFieldEnum[]
  }

  /**
   * Historia findMany
   */
  export type HistoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * Filter, which Historias to fetch.
     */
    where?: HistoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historias to fetch.
     */
    orderBy?: HistoriaOrderByWithRelationInput | HistoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historias.
     */
    cursor?: HistoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historias.
     */
    skip?: number
    distinct?: HistoriaScalarFieldEnum | HistoriaScalarFieldEnum[]
  }

  /**
   * Historia create
   */
  export type HistoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Historia.
     */
    data: XOR<HistoriaCreateInput, HistoriaUncheckedCreateInput>
  }

  /**
   * Historia createMany
   */
  export type HistoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historias.
     */
    data: HistoriaCreateManyInput | HistoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historia createManyAndReturn
   */
  export type HistoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Historias.
     */
    data: HistoriaCreateManyInput | HistoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historia update
   */
  export type HistoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Historia.
     */
    data: XOR<HistoriaUpdateInput, HistoriaUncheckedUpdateInput>
    /**
     * Choose, which Historia to update.
     */
    where: HistoriaWhereUniqueInput
  }

  /**
   * Historia updateMany
   */
  export type HistoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historias.
     */
    data: XOR<HistoriaUpdateManyMutationInput, HistoriaUncheckedUpdateManyInput>
    /**
     * Filter which Historias to update
     */
    where?: HistoriaWhereInput
    /**
     * Limit how many Historias to update.
     */
    limit?: number
  }

  /**
   * Historia updateManyAndReturn
   */
  export type HistoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * The data used to update Historias.
     */
    data: XOR<HistoriaUpdateManyMutationInput, HistoriaUncheckedUpdateManyInput>
    /**
     * Filter which Historias to update
     */
    where?: HistoriaWhereInput
    /**
     * Limit how many Historias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historia upsert
   */
  export type HistoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Historia to update in case it exists.
     */
    where: HistoriaWhereUniqueInput
    /**
     * In case the Historia found by the `where` argument doesn't exist, create a new Historia with this data.
     */
    create: XOR<HistoriaCreateInput, HistoriaUncheckedCreateInput>
    /**
     * In case the Historia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoriaUpdateInput, HistoriaUncheckedUpdateInput>
  }

  /**
   * Historia delete
   */
  export type HistoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
    /**
     * Filter which Historia to delete.
     */
    where: HistoriaWhereUniqueInput
  }

  /**
   * Historia deleteMany
   */
  export type HistoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historias to delete
     */
    where?: HistoriaWhereInput
    /**
     * Limit how many Historias to delete.
     */
    limit?: number
  }

  /**
   * Historia without action
   */
  export type HistoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historia
     */
    select?: HistoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historia
     */
    omit?: HistoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaInclude<ExtArgs> | null
  }


  /**
   * Model Publicacao
   */

  export type AggregatePublicacao = {
    _count: PublicacaoCountAggregateOutputType | null
    _avg: PublicacaoAvgAggregateOutputType | null
    _sum: PublicacaoSumAggregateOutputType | null
    _min: PublicacaoMinAggregateOutputType | null
    _max: PublicacaoMaxAggregateOutputType | null
  }

  export type PublicacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type PublicacaoSumAggregateOutputType = {
    id: number | null
  }

  export type PublicacaoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    link: string | null
    autor: string | null
    ano: Date | null
    idioma: string | null
  }

  export type PublicacaoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    link: string | null
    autor: string | null
    ano: Date | null
    idioma: string | null
  }

  export type PublicacaoCountAggregateOutputType = {
    id: number
    titulo: number
    link: number
    autor: number
    ano: number
    idioma: number
    _all: number
  }


  export type PublicacaoAvgAggregateInputType = {
    id?: true
  }

  export type PublicacaoSumAggregateInputType = {
    id?: true
  }

  export type PublicacaoMinAggregateInputType = {
    id?: true
    titulo?: true
    link?: true
    autor?: true
    ano?: true
    idioma?: true
  }

  export type PublicacaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    link?: true
    autor?: true
    ano?: true
    idioma?: true
  }

  export type PublicacaoCountAggregateInputType = {
    id?: true
    titulo?: true
    link?: true
    autor?: true
    ano?: true
    idioma?: true
    _all?: true
  }

  export type PublicacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacao to aggregate.
     */
    where?: PublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacaos to fetch.
     */
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publicacaos
    **/
    _count?: true | PublicacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicacaoMaxAggregateInputType
  }

  export type GetPublicacaoAggregateType<T extends PublicacaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicacao[P]>
      : GetScalarType<T[P], AggregatePublicacao[P]>
  }




  export type PublicacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacaoWhereInput
    orderBy?: PublicacaoOrderByWithAggregationInput | PublicacaoOrderByWithAggregationInput[]
    by: PublicacaoScalarFieldEnum[] | PublicacaoScalarFieldEnum
    having?: PublicacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicacaoCountAggregateInputType | true
    _avg?: PublicacaoAvgAggregateInputType
    _sum?: PublicacaoSumAggregateInputType
    _min?: PublicacaoMinAggregateInputType
    _max?: PublicacaoMaxAggregateInputType
  }

  export type PublicacaoGroupByOutputType = {
    id: number
    titulo: string
    link: string
    autor: string
    ano: Date
    idioma: string
    _count: PublicacaoCountAggregateOutputType | null
    _avg: PublicacaoAvgAggregateOutputType | null
    _sum: PublicacaoSumAggregateOutputType | null
    _min: PublicacaoMinAggregateOutputType | null
    _max: PublicacaoMaxAggregateOutputType | null
  }

  type GetPublicacaoGroupByPayload<T extends PublicacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicacaoGroupByOutputType[P]>
            : GetScalarType<T[P], PublicacaoGroupByOutputType[P]>
        }
      >
    >


  export type PublicacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    link?: boolean
    autor?: boolean
    ano?: boolean
    idioma?: boolean
    professor?: boolean | Publicacao$professorArgs<ExtArgs>
    aluna?: boolean | Publicacao$alunaArgs<ExtArgs>
    _count?: boolean | PublicacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacao"]>

  export type PublicacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    link?: boolean
    autor?: boolean
    ano?: boolean
    idioma?: boolean
  }, ExtArgs["result"]["publicacao"]>

  export type PublicacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    link?: boolean
    autor?: boolean
    ano?: boolean
    idioma?: boolean
  }, ExtArgs["result"]["publicacao"]>

  export type PublicacaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    link?: boolean
    autor?: boolean
    ano?: boolean
    idioma?: boolean
  }

  export type PublicacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "link" | "autor" | "ano" | "idioma", ExtArgs["result"]["publicacao"]>
  export type PublicacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | Publicacao$professorArgs<ExtArgs>
    aluna?: boolean | Publicacao$alunaArgs<ExtArgs>
    _count?: boolean | PublicacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PublicacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PublicacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publicacao"
    objects: {
      professor: Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>[]
      aluna: Prisma.$AlunaHasPublicacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      link: string
      autor: string
      ano: Date
      idioma: string
    }, ExtArgs["result"]["publicacao"]>
    composites: {}
  }

  type PublicacaoGetPayload<S extends boolean | null | undefined | PublicacaoDefaultArgs> = $Result.GetResult<Prisma.$PublicacaoPayload, S>

  type PublicacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicacaoCountAggregateInputType | true
    }

  export interface PublicacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publicacao'], meta: { name: 'Publicacao' } }
    /**
     * Find zero or one Publicacao that matches the filter.
     * @param {PublicacaoFindUniqueArgs} args - Arguments to find a Publicacao
     * @example
     * // Get one Publicacao
     * const publicacao = await prisma.publicacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicacaoFindUniqueArgs>(args: SelectSubset<T, PublicacaoFindUniqueArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publicacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicacaoFindUniqueOrThrowArgs} args - Arguments to find a Publicacao
     * @example
     * // Get one Publicacao
     * const publicacao = await prisma.publicacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoFindFirstArgs} args - Arguments to find a Publicacao
     * @example
     * // Get one Publicacao
     * const publicacao = await prisma.publicacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicacaoFindFirstArgs>(args?: SelectSubset<T, PublicacaoFindFirstArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoFindFirstOrThrowArgs} args - Arguments to find a Publicacao
     * @example
     * // Get one Publicacao
     * const publicacao = await prisma.publicacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publicacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publicacaos
     * const publicacaos = await prisma.publicacao.findMany()
     * 
     * // Get first 10 Publicacaos
     * const publicacaos = await prisma.publicacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicacaoWithIdOnly = await prisma.publicacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicacaoFindManyArgs>(args?: SelectSubset<T, PublicacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publicacao.
     * @param {PublicacaoCreateArgs} args - Arguments to create a Publicacao.
     * @example
     * // Create one Publicacao
     * const Publicacao = await prisma.publicacao.create({
     *   data: {
     *     // ... data to create a Publicacao
     *   }
     * })
     * 
     */
    create<T extends PublicacaoCreateArgs>(args: SelectSubset<T, PublicacaoCreateArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publicacaos.
     * @param {PublicacaoCreateManyArgs} args - Arguments to create many Publicacaos.
     * @example
     * // Create many Publicacaos
     * const publicacao = await prisma.publicacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicacaoCreateManyArgs>(args?: SelectSubset<T, PublicacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publicacaos and returns the data saved in the database.
     * @param {PublicacaoCreateManyAndReturnArgs} args - Arguments to create many Publicacaos.
     * @example
     * // Create many Publicacaos
     * const publicacao = await prisma.publicacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publicacaos and only return the `id`
     * const publicacaoWithIdOnly = await prisma.publicacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publicacao.
     * @param {PublicacaoDeleteArgs} args - Arguments to delete one Publicacao.
     * @example
     * // Delete one Publicacao
     * const Publicacao = await prisma.publicacao.delete({
     *   where: {
     *     // ... filter to delete one Publicacao
     *   }
     * })
     * 
     */
    delete<T extends PublicacaoDeleteArgs>(args: SelectSubset<T, PublicacaoDeleteArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publicacao.
     * @param {PublicacaoUpdateArgs} args - Arguments to update one Publicacao.
     * @example
     * // Update one Publicacao
     * const publicacao = await prisma.publicacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicacaoUpdateArgs>(args: SelectSubset<T, PublicacaoUpdateArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publicacaos.
     * @param {PublicacaoDeleteManyArgs} args - Arguments to filter Publicacaos to delete.
     * @example
     * // Delete a few Publicacaos
     * const { count } = await prisma.publicacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicacaoDeleteManyArgs>(args?: SelectSubset<T, PublicacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publicacaos
     * const publicacao = await prisma.publicacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicacaoUpdateManyArgs>(args: SelectSubset<T, PublicacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacaos and returns the data updated in the database.
     * @param {PublicacaoUpdateManyAndReturnArgs} args - Arguments to update many Publicacaos.
     * @example
     * // Update many Publicacaos
     * const publicacao = await prisma.publicacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publicacaos and only return the `id`
     * const publicacaoWithIdOnly = await prisma.publicacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publicacao.
     * @param {PublicacaoUpsertArgs} args - Arguments to update or create a Publicacao.
     * @example
     * // Update or create a Publicacao
     * const publicacao = await prisma.publicacao.upsert({
     *   create: {
     *     // ... data to create a Publicacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publicacao we want to update
     *   }
     * })
     */
    upsert<T extends PublicacaoUpsertArgs>(args: SelectSubset<T, PublicacaoUpsertArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoCountArgs} args - Arguments to filter Publicacaos to count.
     * @example
     * // Count the number of Publicacaos
     * const count = await prisma.publicacao.count({
     *   where: {
     *     // ... the filter for the Publicacaos we want to count
     *   }
     * })
    **/
    count<T extends PublicacaoCountArgs>(
      args?: Subset<T, PublicacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicacaoAggregateArgs>(args: Subset<T, PublicacaoAggregateArgs>): Prisma.PrismaPromise<GetPublicacaoAggregateType<T>>

    /**
     * Group by Publicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoGroupByArgs} args - Group by arguments.
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
      T extends PublicacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicacaoGroupByArgs['orderBy'] }
        : { orderBy?: PublicacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PublicacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publicacao model
   */
  readonly fields: PublicacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publicacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends Publicacao$professorArgs<ExtArgs> = {}>(args?: Subset<T, Publicacao$professorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aluna<T extends Publicacao$alunaArgs<ExtArgs> = {}>(args?: Subset<T, Publicacao$alunaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publicacao model
   */
  interface PublicacaoFieldRefs {
    readonly id: FieldRef<"Publicacao", 'Int'>
    readonly titulo: FieldRef<"Publicacao", 'String'>
    readonly link: FieldRef<"Publicacao", 'String'>
    readonly autor: FieldRef<"Publicacao", 'String'>
    readonly ano: FieldRef<"Publicacao", 'DateTime'>
    readonly idioma: FieldRef<"Publicacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Publicacao findUnique
   */
  export type PublicacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacao to fetch.
     */
    where: PublicacaoWhereUniqueInput
  }

  /**
   * Publicacao findUniqueOrThrow
   */
  export type PublicacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacao to fetch.
     */
    where: PublicacaoWhereUniqueInput
  }

  /**
   * Publicacao findFirst
   */
  export type PublicacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacao to fetch.
     */
    where?: PublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacaos to fetch.
     */
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacaos.
     */
    cursor?: PublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacaos.
     */
    distinct?: PublicacaoScalarFieldEnum | PublicacaoScalarFieldEnum[]
  }

  /**
   * Publicacao findFirstOrThrow
   */
  export type PublicacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacao to fetch.
     */
    where?: PublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacaos to fetch.
     */
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacaos.
     */
    cursor?: PublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacaos.
     */
    distinct?: PublicacaoScalarFieldEnum | PublicacaoScalarFieldEnum[]
  }

  /**
   * Publicacao findMany
   */
  export type PublicacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacaos to fetch.
     */
    where?: PublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacaos to fetch.
     */
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publicacaos.
     */
    cursor?: PublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacaos.
     */
    skip?: number
    distinct?: PublicacaoScalarFieldEnum | PublicacaoScalarFieldEnum[]
  }

  /**
   * Publicacao create
   */
  export type PublicacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Publicacao.
     */
    data: XOR<PublicacaoCreateInput, PublicacaoUncheckedCreateInput>
  }

  /**
   * Publicacao createMany
   */
  export type PublicacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publicacaos.
     */
    data: PublicacaoCreateManyInput | PublicacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publicacao createManyAndReturn
   */
  export type PublicacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Publicacaos.
     */
    data: PublicacaoCreateManyInput | PublicacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publicacao update
   */
  export type PublicacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Publicacao.
     */
    data: XOR<PublicacaoUpdateInput, PublicacaoUncheckedUpdateInput>
    /**
     * Choose, which Publicacao to update.
     */
    where: PublicacaoWhereUniqueInput
  }

  /**
   * Publicacao updateMany
   */
  export type PublicacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publicacaos.
     */
    data: XOR<PublicacaoUpdateManyMutationInput, PublicacaoUncheckedUpdateManyInput>
    /**
     * Filter which Publicacaos to update
     */
    where?: PublicacaoWhereInput
    /**
     * Limit how many Publicacaos to update.
     */
    limit?: number
  }

  /**
   * Publicacao updateManyAndReturn
   */
  export type PublicacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * The data used to update Publicacaos.
     */
    data: XOR<PublicacaoUpdateManyMutationInput, PublicacaoUncheckedUpdateManyInput>
    /**
     * Filter which Publicacaos to update
     */
    where?: PublicacaoWhereInput
    /**
     * Limit how many Publicacaos to update.
     */
    limit?: number
  }

  /**
   * Publicacao upsert
   */
  export type PublicacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Publicacao to update in case it exists.
     */
    where: PublicacaoWhereUniqueInput
    /**
     * In case the Publicacao found by the `where` argument doesn't exist, create a new Publicacao with this data.
     */
    create: XOR<PublicacaoCreateInput, PublicacaoUncheckedCreateInput>
    /**
     * In case the Publicacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicacaoUpdateInput, PublicacaoUncheckedUpdateInput>
  }

  /**
   * Publicacao delete
   */
  export type PublicacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter which Publicacao to delete.
     */
    where: PublicacaoWhereUniqueInput
  }

  /**
   * Publicacao deleteMany
   */
  export type PublicacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacaos to delete
     */
    where?: PublicacaoWhereInput
    /**
     * Limit how many Publicacaos to delete.
     */
    limit?: number
  }

  /**
   * Publicacao.professor
   */
  export type Publicacao$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    where?: ProfessorHasPublicacaoWhereInput
    orderBy?: ProfessorHasPublicacaoOrderByWithRelationInput | ProfessorHasPublicacaoOrderByWithRelationInput[]
    cursor?: ProfessorHasPublicacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorHasPublicacaoScalarFieldEnum | ProfessorHasPublicacaoScalarFieldEnum[]
  }

  /**
   * Publicacao.aluna
   */
  export type Publicacao$alunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    where?: AlunaHasPublicacaoWhereInput
    orderBy?: AlunaHasPublicacaoOrderByWithRelationInput | AlunaHasPublicacaoOrderByWithRelationInput[]
    cursor?: AlunaHasPublicacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunaHasPublicacaoScalarFieldEnum | AlunaHasPublicacaoScalarFieldEnum[]
  }

  /**
   * Publicacao without action
   */
  export type PublicacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
  }


  /**
   * Model ProfessorHasPublicacao
   */

  export type AggregateProfessorHasPublicacao = {
    _count: ProfessorHasPublicacaoCountAggregateOutputType | null
    _avg: ProfessorHasPublicacaoAvgAggregateOutputType | null
    _sum: ProfessorHasPublicacaoSumAggregateOutputType | null
    _min: ProfessorHasPublicacaoMinAggregateOutputType | null
    _max: ProfessorHasPublicacaoMaxAggregateOutputType | null
  }

  export type ProfessorHasPublicacaoAvgAggregateOutputType = {
    idPublicacao: number | null
    idProfessor: number | null
  }

  export type ProfessorHasPublicacaoSumAggregateOutputType = {
    idPublicacao: number | null
    idProfessor: number | null
  }

  export type ProfessorHasPublicacaoMinAggregateOutputType = {
    idPublicacao: number | null
    idProfessor: number | null
  }

  export type ProfessorHasPublicacaoMaxAggregateOutputType = {
    idPublicacao: number | null
    idProfessor: number | null
  }

  export type ProfessorHasPublicacaoCountAggregateOutputType = {
    idPublicacao: number
    idProfessor: number
    _all: number
  }


  export type ProfessorHasPublicacaoAvgAggregateInputType = {
    idPublicacao?: true
    idProfessor?: true
  }

  export type ProfessorHasPublicacaoSumAggregateInputType = {
    idPublicacao?: true
    idProfessor?: true
  }

  export type ProfessorHasPublicacaoMinAggregateInputType = {
    idPublicacao?: true
    idProfessor?: true
  }

  export type ProfessorHasPublicacaoMaxAggregateInputType = {
    idPublicacao?: true
    idProfessor?: true
  }

  export type ProfessorHasPublicacaoCountAggregateInputType = {
    idPublicacao?: true
    idProfessor?: true
    _all?: true
  }

  export type ProfessorHasPublicacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessorHasPublicacao to aggregate.
     */
    where?: ProfessorHasPublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorHasPublicacaos to fetch.
     */
    orderBy?: ProfessorHasPublicacaoOrderByWithRelationInput | ProfessorHasPublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorHasPublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorHasPublicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorHasPublicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfessorHasPublicacaos
    **/
    _count?: true | ProfessorHasPublicacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorHasPublicacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorHasPublicacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorHasPublicacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorHasPublicacaoMaxAggregateInputType
  }

  export type GetProfessorHasPublicacaoAggregateType<T extends ProfessorHasPublicacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessorHasPublicacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessorHasPublicacao[P]>
      : GetScalarType<T[P], AggregateProfessorHasPublicacao[P]>
  }




  export type ProfessorHasPublicacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorHasPublicacaoWhereInput
    orderBy?: ProfessorHasPublicacaoOrderByWithAggregationInput | ProfessorHasPublicacaoOrderByWithAggregationInput[]
    by: ProfessorHasPublicacaoScalarFieldEnum[] | ProfessorHasPublicacaoScalarFieldEnum
    having?: ProfessorHasPublicacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorHasPublicacaoCountAggregateInputType | true
    _avg?: ProfessorHasPublicacaoAvgAggregateInputType
    _sum?: ProfessorHasPublicacaoSumAggregateInputType
    _min?: ProfessorHasPublicacaoMinAggregateInputType
    _max?: ProfessorHasPublicacaoMaxAggregateInputType
  }

  export type ProfessorHasPublicacaoGroupByOutputType = {
    idPublicacao: number
    idProfessor: number
    _count: ProfessorHasPublicacaoCountAggregateOutputType | null
    _avg: ProfessorHasPublicacaoAvgAggregateOutputType | null
    _sum: ProfessorHasPublicacaoSumAggregateOutputType | null
    _min: ProfessorHasPublicacaoMinAggregateOutputType | null
    _max: ProfessorHasPublicacaoMaxAggregateOutputType | null
  }

  type GetProfessorHasPublicacaoGroupByPayload<T extends ProfessorHasPublicacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorHasPublicacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorHasPublicacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorHasPublicacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorHasPublicacaoGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorHasPublicacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPublicacao?: boolean
    idProfessor?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorHasPublicacao"]>

  export type ProfessorHasPublicacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPublicacao?: boolean
    idProfessor?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorHasPublicacao"]>

  export type ProfessorHasPublicacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPublicacao?: boolean
    idProfessor?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorHasPublicacao"]>

  export type ProfessorHasPublicacaoSelectScalar = {
    idPublicacao?: boolean
    idProfessor?: boolean
  }

  export type ProfessorHasPublicacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPublicacao" | "idProfessor", ExtArgs["result"]["professorHasPublicacao"]>
  export type ProfessorHasPublicacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type ProfessorHasPublicacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type ProfessorHasPublicacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $ProfessorHasPublicacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfessorHasPublicacao"
    objects: {
      publicacao: Prisma.$PublicacaoPayload<ExtArgs>
      professor: Prisma.$ProfessorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPublicacao: number
      idProfessor: number
    }, ExtArgs["result"]["professorHasPublicacao"]>
    composites: {}
  }

  type ProfessorHasPublicacaoGetPayload<S extends boolean | null | undefined | ProfessorHasPublicacaoDefaultArgs> = $Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload, S>

  type ProfessorHasPublicacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorHasPublicacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorHasPublicacaoCountAggregateInputType | true
    }

  export interface ProfessorHasPublicacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfessorHasPublicacao'], meta: { name: 'ProfessorHasPublicacao' } }
    /**
     * Find zero or one ProfessorHasPublicacao that matches the filter.
     * @param {ProfessorHasPublicacaoFindUniqueArgs} args - Arguments to find a ProfessorHasPublicacao
     * @example
     * // Get one ProfessorHasPublicacao
     * const professorHasPublicacao = await prisma.professorHasPublicacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorHasPublicacaoFindUniqueArgs>(args: SelectSubset<T, ProfessorHasPublicacaoFindUniqueArgs<ExtArgs>>): Prisma__ProfessorHasPublicacaoClient<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessorHasPublicacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorHasPublicacaoFindUniqueOrThrowArgs} args - Arguments to find a ProfessorHasPublicacao
     * @example
     * // Get one ProfessorHasPublicacao
     * const professorHasPublicacao = await prisma.professorHasPublicacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorHasPublicacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorHasPublicacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorHasPublicacaoClient<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessorHasPublicacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorHasPublicacaoFindFirstArgs} args - Arguments to find a ProfessorHasPublicacao
     * @example
     * // Get one ProfessorHasPublicacao
     * const professorHasPublicacao = await prisma.professorHasPublicacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorHasPublicacaoFindFirstArgs>(args?: SelectSubset<T, ProfessorHasPublicacaoFindFirstArgs<ExtArgs>>): Prisma__ProfessorHasPublicacaoClient<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessorHasPublicacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorHasPublicacaoFindFirstOrThrowArgs} args - Arguments to find a ProfessorHasPublicacao
     * @example
     * // Get one ProfessorHasPublicacao
     * const professorHasPublicacao = await prisma.professorHasPublicacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorHasPublicacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorHasPublicacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorHasPublicacaoClient<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessorHasPublicacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorHasPublicacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessorHasPublicacaos
     * const professorHasPublicacaos = await prisma.professorHasPublicacao.findMany()
     * 
     * // Get first 10 ProfessorHasPublicacaos
     * const professorHasPublicacaos = await prisma.professorHasPublicacao.findMany({ take: 10 })
     * 
     * // Only select the `idPublicacao`
     * const professorHasPublicacaoWithIdPublicacaoOnly = await prisma.professorHasPublicacao.findMany({ select: { idPublicacao: true } })
     * 
     */
    findMany<T extends ProfessorHasPublicacaoFindManyArgs>(args?: SelectSubset<T, ProfessorHasPublicacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessorHasPublicacao.
     * @param {ProfessorHasPublicacaoCreateArgs} args - Arguments to create a ProfessorHasPublicacao.
     * @example
     * // Create one ProfessorHasPublicacao
     * const ProfessorHasPublicacao = await prisma.professorHasPublicacao.create({
     *   data: {
     *     // ... data to create a ProfessorHasPublicacao
     *   }
     * })
     * 
     */
    create<T extends ProfessorHasPublicacaoCreateArgs>(args: SelectSubset<T, ProfessorHasPublicacaoCreateArgs<ExtArgs>>): Prisma__ProfessorHasPublicacaoClient<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessorHasPublicacaos.
     * @param {ProfessorHasPublicacaoCreateManyArgs} args - Arguments to create many ProfessorHasPublicacaos.
     * @example
     * // Create many ProfessorHasPublicacaos
     * const professorHasPublicacao = await prisma.professorHasPublicacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorHasPublicacaoCreateManyArgs>(args?: SelectSubset<T, ProfessorHasPublicacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessorHasPublicacaos and returns the data saved in the database.
     * @param {ProfessorHasPublicacaoCreateManyAndReturnArgs} args - Arguments to create many ProfessorHasPublicacaos.
     * @example
     * // Create many ProfessorHasPublicacaos
     * const professorHasPublicacao = await prisma.professorHasPublicacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessorHasPublicacaos and only return the `idPublicacao`
     * const professorHasPublicacaoWithIdPublicacaoOnly = await prisma.professorHasPublicacao.createManyAndReturn({
     *   select: { idPublicacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorHasPublicacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorHasPublicacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessorHasPublicacao.
     * @param {ProfessorHasPublicacaoDeleteArgs} args - Arguments to delete one ProfessorHasPublicacao.
     * @example
     * // Delete one ProfessorHasPublicacao
     * const ProfessorHasPublicacao = await prisma.professorHasPublicacao.delete({
     *   where: {
     *     // ... filter to delete one ProfessorHasPublicacao
     *   }
     * })
     * 
     */
    delete<T extends ProfessorHasPublicacaoDeleteArgs>(args: SelectSubset<T, ProfessorHasPublicacaoDeleteArgs<ExtArgs>>): Prisma__ProfessorHasPublicacaoClient<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessorHasPublicacao.
     * @param {ProfessorHasPublicacaoUpdateArgs} args - Arguments to update one ProfessorHasPublicacao.
     * @example
     * // Update one ProfessorHasPublicacao
     * const professorHasPublicacao = await prisma.professorHasPublicacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorHasPublicacaoUpdateArgs>(args: SelectSubset<T, ProfessorHasPublicacaoUpdateArgs<ExtArgs>>): Prisma__ProfessorHasPublicacaoClient<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessorHasPublicacaos.
     * @param {ProfessorHasPublicacaoDeleteManyArgs} args - Arguments to filter ProfessorHasPublicacaos to delete.
     * @example
     * // Delete a few ProfessorHasPublicacaos
     * const { count } = await prisma.professorHasPublicacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorHasPublicacaoDeleteManyArgs>(args?: SelectSubset<T, ProfessorHasPublicacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessorHasPublicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorHasPublicacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessorHasPublicacaos
     * const professorHasPublicacao = await prisma.professorHasPublicacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorHasPublicacaoUpdateManyArgs>(args: SelectSubset<T, ProfessorHasPublicacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessorHasPublicacaos and returns the data updated in the database.
     * @param {ProfessorHasPublicacaoUpdateManyAndReturnArgs} args - Arguments to update many ProfessorHasPublicacaos.
     * @example
     * // Update many ProfessorHasPublicacaos
     * const professorHasPublicacao = await prisma.professorHasPublicacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessorHasPublicacaos and only return the `idPublicacao`
     * const professorHasPublicacaoWithIdPublicacaoOnly = await prisma.professorHasPublicacao.updateManyAndReturn({
     *   select: { idPublicacao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorHasPublicacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorHasPublicacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessorHasPublicacao.
     * @param {ProfessorHasPublicacaoUpsertArgs} args - Arguments to update or create a ProfessorHasPublicacao.
     * @example
     * // Update or create a ProfessorHasPublicacao
     * const professorHasPublicacao = await prisma.professorHasPublicacao.upsert({
     *   create: {
     *     // ... data to create a ProfessorHasPublicacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessorHasPublicacao we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorHasPublicacaoUpsertArgs>(args: SelectSubset<T, ProfessorHasPublicacaoUpsertArgs<ExtArgs>>): Prisma__ProfessorHasPublicacaoClient<$Result.GetResult<Prisma.$ProfessorHasPublicacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessorHasPublicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorHasPublicacaoCountArgs} args - Arguments to filter ProfessorHasPublicacaos to count.
     * @example
     * // Count the number of ProfessorHasPublicacaos
     * const count = await prisma.professorHasPublicacao.count({
     *   where: {
     *     // ... the filter for the ProfessorHasPublicacaos we want to count
     *   }
     * })
    **/
    count<T extends ProfessorHasPublicacaoCountArgs>(
      args?: Subset<T, ProfessorHasPublicacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorHasPublicacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessorHasPublicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorHasPublicacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorHasPublicacaoAggregateArgs>(args: Subset<T, ProfessorHasPublicacaoAggregateArgs>): Prisma.PrismaPromise<GetProfessorHasPublicacaoAggregateType<T>>

    /**
     * Group by ProfessorHasPublicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorHasPublicacaoGroupByArgs} args - Group by arguments.
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
      T extends ProfessorHasPublicacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorHasPublicacaoGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorHasPublicacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProfessorHasPublicacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorHasPublicacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfessorHasPublicacao model
   */
  readonly fields: ProfessorHasPublicacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfessorHasPublicacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorHasPublicacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicacao<T extends PublicacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacaoDefaultArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfessorHasPublicacao model
   */
  interface ProfessorHasPublicacaoFieldRefs {
    readonly idPublicacao: FieldRef<"ProfessorHasPublicacao", 'Int'>
    readonly idProfessor: FieldRef<"ProfessorHasPublicacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProfessorHasPublicacao findUnique
   */
  export type ProfessorHasPublicacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorHasPublicacao to fetch.
     */
    where: ProfessorHasPublicacaoWhereUniqueInput
  }

  /**
   * ProfessorHasPublicacao findUniqueOrThrow
   */
  export type ProfessorHasPublicacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorHasPublicacao to fetch.
     */
    where: ProfessorHasPublicacaoWhereUniqueInput
  }

  /**
   * ProfessorHasPublicacao findFirst
   */
  export type ProfessorHasPublicacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorHasPublicacao to fetch.
     */
    where?: ProfessorHasPublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorHasPublicacaos to fetch.
     */
    orderBy?: ProfessorHasPublicacaoOrderByWithRelationInput | ProfessorHasPublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessorHasPublicacaos.
     */
    cursor?: ProfessorHasPublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorHasPublicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorHasPublicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessorHasPublicacaos.
     */
    distinct?: ProfessorHasPublicacaoScalarFieldEnum | ProfessorHasPublicacaoScalarFieldEnum[]
  }

  /**
   * ProfessorHasPublicacao findFirstOrThrow
   */
  export type ProfessorHasPublicacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorHasPublicacao to fetch.
     */
    where?: ProfessorHasPublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorHasPublicacaos to fetch.
     */
    orderBy?: ProfessorHasPublicacaoOrderByWithRelationInput | ProfessorHasPublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessorHasPublicacaos.
     */
    cursor?: ProfessorHasPublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorHasPublicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorHasPublicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessorHasPublicacaos.
     */
    distinct?: ProfessorHasPublicacaoScalarFieldEnum | ProfessorHasPublicacaoScalarFieldEnum[]
  }

  /**
   * ProfessorHasPublicacao findMany
   */
  export type ProfessorHasPublicacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorHasPublicacaos to fetch.
     */
    where?: ProfessorHasPublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorHasPublicacaos to fetch.
     */
    orderBy?: ProfessorHasPublicacaoOrderByWithRelationInput | ProfessorHasPublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfessorHasPublicacaos.
     */
    cursor?: ProfessorHasPublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorHasPublicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorHasPublicacaos.
     */
    skip?: number
    distinct?: ProfessorHasPublicacaoScalarFieldEnum | ProfessorHasPublicacaoScalarFieldEnum[]
  }

  /**
   * ProfessorHasPublicacao create
   */
  export type ProfessorHasPublicacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfessorHasPublicacao.
     */
    data: XOR<ProfessorHasPublicacaoCreateInput, ProfessorHasPublicacaoUncheckedCreateInput>
  }

  /**
   * ProfessorHasPublicacao createMany
   */
  export type ProfessorHasPublicacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfessorHasPublicacaos.
     */
    data: ProfessorHasPublicacaoCreateManyInput | ProfessorHasPublicacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfessorHasPublicacao createManyAndReturn
   */
  export type ProfessorHasPublicacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * The data used to create many ProfessorHasPublicacaos.
     */
    data: ProfessorHasPublicacaoCreateManyInput | ProfessorHasPublicacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessorHasPublicacao update
   */
  export type ProfessorHasPublicacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfessorHasPublicacao.
     */
    data: XOR<ProfessorHasPublicacaoUpdateInput, ProfessorHasPublicacaoUncheckedUpdateInput>
    /**
     * Choose, which ProfessorHasPublicacao to update.
     */
    where: ProfessorHasPublicacaoWhereUniqueInput
  }

  /**
   * ProfessorHasPublicacao updateMany
   */
  export type ProfessorHasPublicacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfessorHasPublicacaos.
     */
    data: XOR<ProfessorHasPublicacaoUpdateManyMutationInput, ProfessorHasPublicacaoUncheckedUpdateManyInput>
    /**
     * Filter which ProfessorHasPublicacaos to update
     */
    where?: ProfessorHasPublicacaoWhereInput
    /**
     * Limit how many ProfessorHasPublicacaos to update.
     */
    limit?: number
  }

  /**
   * ProfessorHasPublicacao updateManyAndReturn
   */
  export type ProfessorHasPublicacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * The data used to update ProfessorHasPublicacaos.
     */
    data: XOR<ProfessorHasPublicacaoUpdateManyMutationInput, ProfessorHasPublicacaoUncheckedUpdateManyInput>
    /**
     * Filter which ProfessorHasPublicacaos to update
     */
    where?: ProfessorHasPublicacaoWhereInput
    /**
     * Limit how many ProfessorHasPublicacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessorHasPublicacao upsert
   */
  export type ProfessorHasPublicacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfessorHasPublicacao to update in case it exists.
     */
    where: ProfessorHasPublicacaoWhereUniqueInput
    /**
     * In case the ProfessorHasPublicacao found by the `where` argument doesn't exist, create a new ProfessorHasPublicacao with this data.
     */
    create: XOR<ProfessorHasPublicacaoCreateInput, ProfessorHasPublicacaoUncheckedCreateInput>
    /**
     * In case the ProfessorHasPublicacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorHasPublicacaoUpdateInput, ProfessorHasPublicacaoUncheckedUpdateInput>
  }

  /**
   * ProfessorHasPublicacao delete
   */
  export type ProfessorHasPublicacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter which ProfessorHasPublicacao to delete.
     */
    where: ProfessorHasPublicacaoWhereUniqueInput
  }

  /**
   * ProfessorHasPublicacao deleteMany
   */
  export type ProfessorHasPublicacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessorHasPublicacaos to delete
     */
    where?: ProfessorHasPublicacaoWhereInput
    /**
     * Limit how many ProfessorHasPublicacaos to delete.
     */
    limit?: number
  }

  /**
   * ProfessorHasPublicacao without action
   */
  export type ProfessorHasPublicacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorHasPublicacao
     */
    select?: ProfessorHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorHasPublicacao
     */
    omit?: ProfessorHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorHasPublicacaoInclude<ExtArgs> | null
  }


  /**
   * Model AlunaHasPublicacao
   */

  export type AggregateAlunaHasPublicacao = {
    _count: AlunaHasPublicacaoCountAggregateOutputType | null
    _avg: AlunaHasPublicacaoAvgAggregateOutputType | null
    _sum: AlunaHasPublicacaoSumAggregateOutputType | null
    _min: AlunaHasPublicacaoMinAggregateOutputType | null
    _max: AlunaHasPublicacaoMaxAggregateOutputType | null
  }

  export type AlunaHasPublicacaoAvgAggregateOutputType = {
    idPublicacao: number | null
    idAluna: number | null
  }

  export type AlunaHasPublicacaoSumAggregateOutputType = {
    idPublicacao: number | null
    idAluna: number | null
  }

  export type AlunaHasPublicacaoMinAggregateOutputType = {
    idPublicacao: number | null
    idAluna: number | null
  }

  export type AlunaHasPublicacaoMaxAggregateOutputType = {
    idPublicacao: number | null
    idAluna: number | null
  }

  export type AlunaHasPublicacaoCountAggregateOutputType = {
    idPublicacao: number
    idAluna: number
    _all: number
  }


  export type AlunaHasPublicacaoAvgAggregateInputType = {
    idPublicacao?: true
    idAluna?: true
  }

  export type AlunaHasPublicacaoSumAggregateInputType = {
    idPublicacao?: true
    idAluna?: true
  }

  export type AlunaHasPublicacaoMinAggregateInputType = {
    idPublicacao?: true
    idAluna?: true
  }

  export type AlunaHasPublicacaoMaxAggregateInputType = {
    idPublicacao?: true
    idAluna?: true
  }

  export type AlunaHasPublicacaoCountAggregateInputType = {
    idPublicacao?: true
    idAluna?: true
    _all?: true
  }

  export type AlunaHasPublicacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlunaHasPublicacao to aggregate.
     */
    where?: AlunaHasPublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunaHasPublicacaos to fetch.
     */
    orderBy?: AlunaHasPublicacaoOrderByWithRelationInput | AlunaHasPublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunaHasPublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunaHasPublicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunaHasPublicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlunaHasPublicacaos
    **/
    _count?: true | AlunaHasPublicacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunaHasPublicacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunaHasPublicacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunaHasPublicacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunaHasPublicacaoMaxAggregateInputType
  }

  export type GetAlunaHasPublicacaoAggregateType<T extends AlunaHasPublicacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlunaHasPublicacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlunaHasPublicacao[P]>
      : GetScalarType<T[P], AggregateAlunaHasPublicacao[P]>
  }




  export type AlunaHasPublicacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunaHasPublicacaoWhereInput
    orderBy?: AlunaHasPublicacaoOrderByWithAggregationInput | AlunaHasPublicacaoOrderByWithAggregationInput[]
    by: AlunaHasPublicacaoScalarFieldEnum[] | AlunaHasPublicacaoScalarFieldEnum
    having?: AlunaHasPublicacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunaHasPublicacaoCountAggregateInputType | true
    _avg?: AlunaHasPublicacaoAvgAggregateInputType
    _sum?: AlunaHasPublicacaoSumAggregateInputType
    _min?: AlunaHasPublicacaoMinAggregateInputType
    _max?: AlunaHasPublicacaoMaxAggregateInputType
  }

  export type AlunaHasPublicacaoGroupByOutputType = {
    idPublicacao: number
    idAluna: number
    _count: AlunaHasPublicacaoCountAggregateOutputType | null
    _avg: AlunaHasPublicacaoAvgAggregateOutputType | null
    _sum: AlunaHasPublicacaoSumAggregateOutputType | null
    _min: AlunaHasPublicacaoMinAggregateOutputType | null
    _max: AlunaHasPublicacaoMaxAggregateOutputType | null
  }

  type GetAlunaHasPublicacaoGroupByPayload<T extends AlunaHasPublicacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunaHasPublicacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunaHasPublicacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunaHasPublicacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunaHasPublicacaoGroupByOutputType[P]>
        }
      >
    >


  export type AlunaHasPublicacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPublicacao?: boolean
    idAluna?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunaHasPublicacao"]>

  export type AlunaHasPublicacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPublicacao?: boolean
    idAluna?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunaHasPublicacao"]>

  export type AlunaHasPublicacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPublicacao?: boolean
    idAluna?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunaHasPublicacao"]>

  export type AlunaHasPublicacaoSelectScalar = {
    idPublicacao?: boolean
    idAluna?: boolean
  }

  export type AlunaHasPublicacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPublicacao" | "idAluna", ExtArgs["result"]["alunaHasPublicacao"]>
  export type AlunaHasPublicacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }
  export type AlunaHasPublicacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }
  export type AlunaHasPublicacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
  }

  export type $AlunaHasPublicacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlunaHasPublicacao"
    objects: {
      publicacao: Prisma.$PublicacaoPayload<ExtArgs>
      aluna: Prisma.$AlunaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPublicacao: number
      idAluna: number
    }, ExtArgs["result"]["alunaHasPublicacao"]>
    composites: {}
  }

  type AlunaHasPublicacaoGetPayload<S extends boolean | null | undefined | AlunaHasPublicacaoDefaultArgs> = $Result.GetResult<Prisma.$AlunaHasPublicacaoPayload, S>

  type AlunaHasPublicacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunaHasPublicacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunaHasPublicacaoCountAggregateInputType | true
    }

  export interface AlunaHasPublicacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlunaHasPublicacao'], meta: { name: 'AlunaHasPublicacao' } }
    /**
     * Find zero or one AlunaHasPublicacao that matches the filter.
     * @param {AlunaHasPublicacaoFindUniqueArgs} args - Arguments to find a AlunaHasPublicacao
     * @example
     * // Get one AlunaHasPublicacao
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunaHasPublicacaoFindUniqueArgs>(args: SelectSubset<T, AlunaHasPublicacaoFindUniqueArgs<ExtArgs>>): Prisma__AlunaHasPublicacaoClient<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlunaHasPublicacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunaHasPublicacaoFindUniqueOrThrowArgs} args - Arguments to find a AlunaHasPublicacao
     * @example
     * // Get one AlunaHasPublicacao
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunaHasPublicacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunaHasPublicacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunaHasPublicacaoClient<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlunaHasPublicacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasPublicacaoFindFirstArgs} args - Arguments to find a AlunaHasPublicacao
     * @example
     * // Get one AlunaHasPublicacao
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunaHasPublicacaoFindFirstArgs>(args?: SelectSubset<T, AlunaHasPublicacaoFindFirstArgs<ExtArgs>>): Prisma__AlunaHasPublicacaoClient<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlunaHasPublicacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasPublicacaoFindFirstOrThrowArgs} args - Arguments to find a AlunaHasPublicacao
     * @example
     * // Get one AlunaHasPublicacao
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunaHasPublicacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunaHasPublicacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunaHasPublicacaoClient<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlunaHasPublicacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasPublicacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlunaHasPublicacaos
     * const alunaHasPublicacaos = await prisma.alunaHasPublicacao.findMany()
     * 
     * // Get first 10 AlunaHasPublicacaos
     * const alunaHasPublicacaos = await prisma.alunaHasPublicacao.findMany({ take: 10 })
     * 
     * // Only select the `idPublicacao`
     * const alunaHasPublicacaoWithIdPublicacaoOnly = await prisma.alunaHasPublicacao.findMany({ select: { idPublicacao: true } })
     * 
     */
    findMany<T extends AlunaHasPublicacaoFindManyArgs>(args?: SelectSubset<T, AlunaHasPublicacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlunaHasPublicacao.
     * @param {AlunaHasPublicacaoCreateArgs} args - Arguments to create a AlunaHasPublicacao.
     * @example
     * // Create one AlunaHasPublicacao
     * const AlunaHasPublicacao = await prisma.alunaHasPublicacao.create({
     *   data: {
     *     // ... data to create a AlunaHasPublicacao
     *   }
     * })
     * 
     */
    create<T extends AlunaHasPublicacaoCreateArgs>(args: SelectSubset<T, AlunaHasPublicacaoCreateArgs<ExtArgs>>): Prisma__AlunaHasPublicacaoClient<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlunaHasPublicacaos.
     * @param {AlunaHasPublicacaoCreateManyArgs} args - Arguments to create many AlunaHasPublicacaos.
     * @example
     * // Create many AlunaHasPublicacaos
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunaHasPublicacaoCreateManyArgs>(args?: SelectSubset<T, AlunaHasPublicacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlunaHasPublicacaos and returns the data saved in the database.
     * @param {AlunaHasPublicacaoCreateManyAndReturnArgs} args - Arguments to create many AlunaHasPublicacaos.
     * @example
     * // Create many AlunaHasPublicacaos
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlunaHasPublicacaos and only return the `idPublicacao`
     * const alunaHasPublicacaoWithIdPublicacaoOnly = await prisma.alunaHasPublicacao.createManyAndReturn({
     *   select: { idPublicacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunaHasPublicacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunaHasPublicacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlunaHasPublicacao.
     * @param {AlunaHasPublicacaoDeleteArgs} args - Arguments to delete one AlunaHasPublicacao.
     * @example
     * // Delete one AlunaHasPublicacao
     * const AlunaHasPublicacao = await prisma.alunaHasPublicacao.delete({
     *   where: {
     *     // ... filter to delete one AlunaHasPublicacao
     *   }
     * })
     * 
     */
    delete<T extends AlunaHasPublicacaoDeleteArgs>(args: SelectSubset<T, AlunaHasPublicacaoDeleteArgs<ExtArgs>>): Prisma__AlunaHasPublicacaoClient<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlunaHasPublicacao.
     * @param {AlunaHasPublicacaoUpdateArgs} args - Arguments to update one AlunaHasPublicacao.
     * @example
     * // Update one AlunaHasPublicacao
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunaHasPublicacaoUpdateArgs>(args: SelectSubset<T, AlunaHasPublicacaoUpdateArgs<ExtArgs>>): Prisma__AlunaHasPublicacaoClient<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlunaHasPublicacaos.
     * @param {AlunaHasPublicacaoDeleteManyArgs} args - Arguments to filter AlunaHasPublicacaos to delete.
     * @example
     * // Delete a few AlunaHasPublicacaos
     * const { count } = await prisma.alunaHasPublicacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunaHasPublicacaoDeleteManyArgs>(args?: SelectSubset<T, AlunaHasPublicacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlunaHasPublicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasPublicacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlunaHasPublicacaos
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunaHasPublicacaoUpdateManyArgs>(args: SelectSubset<T, AlunaHasPublicacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlunaHasPublicacaos and returns the data updated in the database.
     * @param {AlunaHasPublicacaoUpdateManyAndReturnArgs} args - Arguments to update many AlunaHasPublicacaos.
     * @example
     * // Update many AlunaHasPublicacaos
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlunaHasPublicacaos and only return the `idPublicacao`
     * const alunaHasPublicacaoWithIdPublicacaoOnly = await prisma.alunaHasPublicacao.updateManyAndReturn({
     *   select: { idPublicacao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlunaHasPublicacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlunaHasPublicacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlunaHasPublicacao.
     * @param {AlunaHasPublicacaoUpsertArgs} args - Arguments to update or create a AlunaHasPublicacao.
     * @example
     * // Update or create a AlunaHasPublicacao
     * const alunaHasPublicacao = await prisma.alunaHasPublicacao.upsert({
     *   create: {
     *     // ... data to create a AlunaHasPublicacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlunaHasPublicacao we want to update
     *   }
     * })
     */
    upsert<T extends AlunaHasPublicacaoUpsertArgs>(args: SelectSubset<T, AlunaHasPublicacaoUpsertArgs<ExtArgs>>): Prisma__AlunaHasPublicacaoClient<$Result.GetResult<Prisma.$AlunaHasPublicacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlunaHasPublicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasPublicacaoCountArgs} args - Arguments to filter AlunaHasPublicacaos to count.
     * @example
     * // Count the number of AlunaHasPublicacaos
     * const count = await prisma.alunaHasPublicacao.count({
     *   where: {
     *     // ... the filter for the AlunaHasPublicacaos we want to count
     *   }
     * })
    **/
    count<T extends AlunaHasPublicacaoCountArgs>(
      args?: Subset<T, AlunaHasPublicacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunaHasPublicacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlunaHasPublicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasPublicacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunaHasPublicacaoAggregateArgs>(args: Subset<T, AlunaHasPublicacaoAggregateArgs>): Prisma.PrismaPromise<GetAlunaHasPublicacaoAggregateType<T>>

    /**
     * Group by AlunaHasPublicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasPublicacaoGroupByArgs} args - Group by arguments.
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
      T extends AlunaHasPublicacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunaHasPublicacaoGroupByArgs['orderBy'] }
        : { orderBy?: AlunaHasPublicacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AlunaHasPublicacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunaHasPublicacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlunaHasPublicacao model
   */
  readonly fields: AlunaHasPublicacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlunaHasPublicacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunaHasPublicacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicacao<T extends PublicacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacaoDefaultArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aluna<T extends AlunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunaDefaultArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlunaHasPublicacao model
   */
  interface AlunaHasPublicacaoFieldRefs {
    readonly idPublicacao: FieldRef<"AlunaHasPublicacao", 'Int'>
    readonly idAluna: FieldRef<"AlunaHasPublicacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlunaHasPublicacao findUnique
   */
  export type AlunaHasPublicacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasPublicacao to fetch.
     */
    where: AlunaHasPublicacaoWhereUniqueInput
  }

  /**
   * AlunaHasPublicacao findUniqueOrThrow
   */
  export type AlunaHasPublicacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasPublicacao to fetch.
     */
    where: AlunaHasPublicacaoWhereUniqueInput
  }

  /**
   * AlunaHasPublicacao findFirst
   */
  export type AlunaHasPublicacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasPublicacao to fetch.
     */
    where?: AlunaHasPublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunaHasPublicacaos to fetch.
     */
    orderBy?: AlunaHasPublicacaoOrderByWithRelationInput | AlunaHasPublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlunaHasPublicacaos.
     */
    cursor?: AlunaHasPublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunaHasPublicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunaHasPublicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlunaHasPublicacaos.
     */
    distinct?: AlunaHasPublicacaoScalarFieldEnum | AlunaHasPublicacaoScalarFieldEnum[]
  }

  /**
   * AlunaHasPublicacao findFirstOrThrow
   */
  export type AlunaHasPublicacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasPublicacao to fetch.
     */
    where?: AlunaHasPublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunaHasPublicacaos to fetch.
     */
    orderBy?: AlunaHasPublicacaoOrderByWithRelationInput | AlunaHasPublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlunaHasPublicacaos.
     */
    cursor?: AlunaHasPublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunaHasPublicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunaHasPublicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlunaHasPublicacaos.
     */
    distinct?: AlunaHasPublicacaoScalarFieldEnum | AlunaHasPublicacaoScalarFieldEnum[]
  }

  /**
   * AlunaHasPublicacao findMany
   */
  export type AlunaHasPublicacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasPublicacaos to fetch.
     */
    where?: AlunaHasPublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunaHasPublicacaos to fetch.
     */
    orderBy?: AlunaHasPublicacaoOrderByWithRelationInput | AlunaHasPublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlunaHasPublicacaos.
     */
    cursor?: AlunaHasPublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunaHasPublicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunaHasPublicacaos.
     */
    skip?: number
    distinct?: AlunaHasPublicacaoScalarFieldEnum | AlunaHasPublicacaoScalarFieldEnum[]
  }

  /**
   * AlunaHasPublicacao create
   */
  export type AlunaHasPublicacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a AlunaHasPublicacao.
     */
    data: XOR<AlunaHasPublicacaoCreateInput, AlunaHasPublicacaoUncheckedCreateInput>
  }

  /**
   * AlunaHasPublicacao createMany
   */
  export type AlunaHasPublicacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlunaHasPublicacaos.
     */
    data: AlunaHasPublicacaoCreateManyInput | AlunaHasPublicacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlunaHasPublicacao createManyAndReturn
   */
  export type AlunaHasPublicacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * The data used to create many AlunaHasPublicacaos.
     */
    data: AlunaHasPublicacaoCreateManyInput | AlunaHasPublicacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlunaHasPublicacao update
   */
  export type AlunaHasPublicacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a AlunaHasPublicacao.
     */
    data: XOR<AlunaHasPublicacaoUpdateInput, AlunaHasPublicacaoUncheckedUpdateInput>
    /**
     * Choose, which AlunaHasPublicacao to update.
     */
    where: AlunaHasPublicacaoWhereUniqueInput
  }

  /**
   * AlunaHasPublicacao updateMany
   */
  export type AlunaHasPublicacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlunaHasPublicacaos.
     */
    data: XOR<AlunaHasPublicacaoUpdateManyMutationInput, AlunaHasPublicacaoUncheckedUpdateManyInput>
    /**
     * Filter which AlunaHasPublicacaos to update
     */
    where?: AlunaHasPublicacaoWhereInput
    /**
     * Limit how many AlunaHasPublicacaos to update.
     */
    limit?: number
  }

  /**
   * AlunaHasPublicacao updateManyAndReturn
   */
  export type AlunaHasPublicacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * The data used to update AlunaHasPublicacaos.
     */
    data: XOR<AlunaHasPublicacaoUpdateManyMutationInput, AlunaHasPublicacaoUncheckedUpdateManyInput>
    /**
     * Filter which AlunaHasPublicacaos to update
     */
    where?: AlunaHasPublicacaoWhereInput
    /**
     * Limit how many AlunaHasPublicacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlunaHasPublicacao upsert
   */
  export type AlunaHasPublicacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the AlunaHasPublicacao to update in case it exists.
     */
    where: AlunaHasPublicacaoWhereUniqueInput
    /**
     * In case the AlunaHasPublicacao found by the `where` argument doesn't exist, create a new AlunaHasPublicacao with this data.
     */
    create: XOR<AlunaHasPublicacaoCreateInput, AlunaHasPublicacaoUncheckedCreateInput>
    /**
     * In case the AlunaHasPublicacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunaHasPublicacaoUpdateInput, AlunaHasPublicacaoUncheckedUpdateInput>
  }

  /**
   * AlunaHasPublicacao delete
   */
  export type AlunaHasPublicacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
    /**
     * Filter which AlunaHasPublicacao to delete.
     */
    where: AlunaHasPublicacaoWhereUniqueInput
  }

  /**
   * AlunaHasPublicacao deleteMany
   */
  export type AlunaHasPublicacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlunaHasPublicacaos to delete
     */
    where?: AlunaHasPublicacaoWhereInput
    /**
     * Limit how many AlunaHasPublicacaos to delete.
     */
    limit?: number
  }

  /**
   * AlunaHasPublicacao without action
   */
  export type AlunaHasPublicacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasPublicacao
     */
    select?: AlunaHasPublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasPublicacao
     */
    omit?: AlunaHasPublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasPublicacaoInclude<ExtArgs> | null
  }


  /**
   * Model AreaAtuacao
   */

  export type AggregateAreaAtuacao = {
    _count: AreaAtuacaoCountAggregateOutputType | null
    _avg: AreaAtuacaoAvgAggregateOutputType | null
    _sum: AreaAtuacaoSumAggregateOutputType | null
    _min: AreaAtuacaoMinAggregateOutputType | null
    _max: AreaAtuacaoMaxAggregateOutputType | null
  }

  export type AreaAtuacaoAvgAggregateOutputType = {
    id: number | null
    idProfessor: number | null
  }

  export type AreaAtuacaoSumAggregateOutputType = {
    id: number | null
    idProfessor: number | null
  }

  export type AreaAtuacaoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    idProfessor: number | null
  }

  export type AreaAtuacaoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    idProfessor: number | null
  }

  export type AreaAtuacaoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    idProfessor: number
    _all: number
  }


  export type AreaAtuacaoAvgAggregateInputType = {
    id?: true
    idProfessor?: true
  }

  export type AreaAtuacaoSumAggregateInputType = {
    id?: true
    idProfessor?: true
  }

  export type AreaAtuacaoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    idProfessor?: true
  }

  export type AreaAtuacaoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    idProfessor?: true
  }

  export type AreaAtuacaoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    idProfessor?: true
    _all?: true
  }

  export type AreaAtuacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AreaAtuacao to aggregate.
     */
    where?: AreaAtuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaAtuacaos to fetch.
     */
    orderBy?: AreaAtuacaoOrderByWithRelationInput | AreaAtuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaAtuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaAtuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaAtuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AreaAtuacaos
    **/
    _count?: true | AreaAtuacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAtuacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaAtuacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaAtuacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaAtuacaoMaxAggregateInputType
  }

  export type GetAreaAtuacaoAggregateType<T extends AreaAtuacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAreaAtuacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreaAtuacao[P]>
      : GetScalarType<T[P], AggregateAreaAtuacao[P]>
  }




  export type AreaAtuacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaAtuacaoWhereInput
    orderBy?: AreaAtuacaoOrderByWithAggregationInput | AreaAtuacaoOrderByWithAggregationInput[]
    by: AreaAtuacaoScalarFieldEnum[] | AreaAtuacaoScalarFieldEnum
    having?: AreaAtuacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaAtuacaoCountAggregateInputType | true
    _avg?: AreaAtuacaoAvgAggregateInputType
    _sum?: AreaAtuacaoSumAggregateInputType
    _min?: AreaAtuacaoMinAggregateInputType
    _max?: AreaAtuacaoMaxAggregateInputType
  }

  export type AreaAtuacaoGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    idProfessor: number
    _count: AreaAtuacaoCountAggregateOutputType | null
    _avg: AreaAtuacaoAvgAggregateOutputType | null
    _sum: AreaAtuacaoSumAggregateOutputType | null
    _min: AreaAtuacaoMinAggregateOutputType | null
    _max: AreaAtuacaoMaxAggregateOutputType | null
  }

  type GetAreaAtuacaoGroupByPayload<T extends AreaAtuacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaAtuacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaAtuacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaAtuacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AreaAtuacaoGroupByOutputType[P]>
        }
      >
    >


  export type AreaAtuacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    idProfessor?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    alunas?: boolean | AreaAtuacao$alunasArgs<ExtArgs>
    _count?: boolean | AreaAtuacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areaAtuacao"]>

  export type AreaAtuacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    idProfessor?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areaAtuacao"]>

  export type AreaAtuacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    idProfessor?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areaAtuacao"]>

  export type AreaAtuacaoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    idProfessor?: boolean
  }

  export type AreaAtuacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "idProfessor", ExtArgs["result"]["areaAtuacao"]>
  export type AreaAtuacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    alunas?: boolean | AreaAtuacao$alunasArgs<ExtArgs>
    _count?: boolean | AreaAtuacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaAtuacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type AreaAtuacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $AreaAtuacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AreaAtuacao"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      alunas: Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      idProfessor: number
    }, ExtArgs["result"]["areaAtuacao"]>
    composites: {}
  }

  type AreaAtuacaoGetPayload<S extends boolean | null | undefined | AreaAtuacaoDefaultArgs> = $Result.GetResult<Prisma.$AreaAtuacaoPayload, S>

  type AreaAtuacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaAtuacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaAtuacaoCountAggregateInputType | true
    }

  export interface AreaAtuacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AreaAtuacao'], meta: { name: 'AreaAtuacao' } }
    /**
     * Find zero or one AreaAtuacao that matches the filter.
     * @param {AreaAtuacaoFindUniqueArgs} args - Arguments to find a AreaAtuacao
     * @example
     * // Get one AreaAtuacao
     * const areaAtuacao = await prisma.areaAtuacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaAtuacaoFindUniqueArgs>(args: SelectSubset<T, AreaAtuacaoFindUniqueArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AreaAtuacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaAtuacaoFindUniqueOrThrowArgs} args - Arguments to find a AreaAtuacao
     * @example
     * // Get one AreaAtuacao
     * const areaAtuacao = await prisma.areaAtuacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaAtuacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaAtuacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AreaAtuacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAtuacaoFindFirstArgs} args - Arguments to find a AreaAtuacao
     * @example
     * // Get one AreaAtuacao
     * const areaAtuacao = await prisma.areaAtuacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaAtuacaoFindFirstArgs>(args?: SelectSubset<T, AreaAtuacaoFindFirstArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AreaAtuacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAtuacaoFindFirstOrThrowArgs} args - Arguments to find a AreaAtuacao
     * @example
     * // Get one AreaAtuacao
     * const areaAtuacao = await prisma.areaAtuacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaAtuacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaAtuacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AreaAtuacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAtuacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AreaAtuacaos
     * const areaAtuacaos = await prisma.areaAtuacao.findMany()
     * 
     * // Get first 10 AreaAtuacaos
     * const areaAtuacaos = await prisma.areaAtuacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaAtuacaoWithIdOnly = await prisma.areaAtuacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaAtuacaoFindManyArgs>(args?: SelectSubset<T, AreaAtuacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AreaAtuacao.
     * @param {AreaAtuacaoCreateArgs} args - Arguments to create a AreaAtuacao.
     * @example
     * // Create one AreaAtuacao
     * const AreaAtuacao = await prisma.areaAtuacao.create({
     *   data: {
     *     // ... data to create a AreaAtuacao
     *   }
     * })
     * 
     */
    create<T extends AreaAtuacaoCreateArgs>(args: SelectSubset<T, AreaAtuacaoCreateArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AreaAtuacaos.
     * @param {AreaAtuacaoCreateManyArgs} args - Arguments to create many AreaAtuacaos.
     * @example
     * // Create many AreaAtuacaos
     * const areaAtuacao = await prisma.areaAtuacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaAtuacaoCreateManyArgs>(args?: SelectSubset<T, AreaAtuacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AreaAtuacaos and returns the data saved in the database.
     * @param {AreaAtuacaoCreateManyAndReturnArgs} args - Arguments to create many AreaAtuacaos.
     * @example
     * // Create many AreaAtuacaos
     * const areaAtuacao = await prisma.areaAtuacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AreaAtuacaos and only return the `id`
     * const areaAtuacaoWithIdOnly = await prisma.areaAtuacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaAtuacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaAtuacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AreaAtuacao.
     * @param {AreaAtuacaoDeleteArgs} args - Arguments to delete one AreaAtuacao.
     * @example
     * // Delete one AreaAtuacao
     * const AreaAtuacao = await prisma.areaAtuacao.delete({
     *   where: {
     *     // ... filter to delete one AreaAtuacao
     *   }
     * })
     * 
     */
    delete<T extends AreaAtuacaoDeleteArgs>(args: SelectSubset<T, AreaAtuacaoDeleteArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AreaAtuacao.
     * @param {AreaAtuacaoUpdateArgs} args - Arguments to update one AreaAtuacao.
     * @example
     * // Update one AreaAtuacao
     * const areaAtuacao = await prisma.areaAtuacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaAtuacaoUpdateArgs>(args: SelectSubset<T, AreaAtuacaoUpdateArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AreaAtuacaos.
     * @param {AreaAtuacaoDeleteManyArgs} args - Arguments to filter AreaAtuacaos to delete.
     * @example
     * // Delete a few AreaAtuacaos
     * const { count } = await prisma.areaAtuacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaAtuacaoDeleteManyArgs>(args?: SelectSubset<T, AreaAtuacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreaAtuacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAtuacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AreaAtuacaos
     * const areaAtuacao = await prisma.areaAtuacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaAtuacaoUpdateManyArgs>(args: SelectSubset<T, AreaAtuacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreaAtuacaos and returns the data updated in the database.
     * @param {AreaAtuacaoUpdateManyAndReturnArgs} args - Arguments to update many AreaAtuacaos.
     * @example
     * // Update many AreaAtuacaos
     * const areaAtuacao = await prisma.areaAtuacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AreaAtuacaos and only return the `id`
     * const areaAtuacaoWithIdOnly = await prisma.areaAtuacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AreaAtuacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaAtuacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AreaAtuacao.
     * @param {AreaAtuacaoUpsertArgs} args - Arguments to update or create a AreaAtuacao.
     * @example
     * // Update or create a AreaAtuacao
     * const areaAtuacao = await prisma.areaAtuacao.upsert({
     *   create: {
     *     // ... data to create a AreaAtuacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AreaAtuacao we want to update
     *   }
     * })
     */
    upsert<T extends AreaAtuacaoUpsertArgs>(args: SelectSubset<T, AreaAtuacaoUpsertArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AreaAtuacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAtuacaoCountArgs} args - Arguments to filter AreaAtuacaos to count.
     * @example
     * // Count the number of AreaAtuacaos
     * const count = await prisma.areaAtuacao.count({
     *   where: {
     *     // ... the filter for the AreaAtuacaos we want to count
     *   }
     * })
    **/
    count<T extends AreaAtuacaoCountArgs>(
      args?: Subset<T, AreaAtuacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaAtuacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AreaAtuacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAtuacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaAtuacaoAggregateArgs>(args: Subset<T, AreaAtuacaoAggregateArgs>): Prisma.PrismaPromise<GetAreaAtuacaoAggregateType<T>>

    /**
     * Group by AreaAtuacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAtuacaoGroupByArgs} args - Group by arguments.
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
      T extends AreaAtuacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaAtuacaoGroupByArgs['orderBy'] }
        : { orderBy?: AreaAtuacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AreaAtuacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaAtuacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AreaAtuacao model
   */
  readonly fields: AreaAtuacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AreaAtuacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaAtuacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alunas<T extends AreaAtuacao$alunasArgs<ExtArgs> = {}>(args?: Subset<T, AreaAtuacao$alunasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AreaAtuacao model
   */
  interface AreaAtuacaoFieldRefs {
    readonly id: FieldRef<"AreaAtuacao", 'Int'>
    readonly nome: FieldRef<"AreaAtuacao", 'String'>
    readonly descricao: FieldRef<"AreaAtuacao", 'String'>
    readonly idProfessor: FieldRef<"AreaAtuacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AreaAtuacao findUnique
   */
  export type AreaAtuacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AreaAtuacao to fetch.
     */
    where: AreaAtuacaoWhereUniqueInput
  }

  /**
   * AreaAtuacao findUniqueOrThrow
   */
  export type AreaAtuacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AreaAtuacao to fetch.
     */
    where: AreaAtuacaoWhereUniqueInput
  }

  /**
   * AreaAtuacao findFirst
   */
  export type AreaAtuacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AreaAtuacao to fetch.
     */
    where?: AreaAtuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaAtuacaos to fetch.
     */
    orderBy?: AreaAtuacaoOrderByWithRelationInput | AreaAtuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaAtuacaos.
     */
    cursor?: AreaAtuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaAtuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaAtuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaAtuacaos.
     */
    distinct?: AreaAtuacaoScalarFieldEnum | AreaAtuacaoScalarFieldEnum[]
  }

  /**
   * AreaAtuacao findFirstOrThrow
   */
  export type AreaAtuacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AreaAtuacao to fetch.
     */
    where?: AreaAtuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaAtuacaos to fetch.
     */
    orderBy?: AreaAtuacaoOrderByWithRelationInput | AreaAtuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaAtuacaos.
     */
    cursor?: AreaAtuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaAtuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaAtuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaAtuacaos.
     */
    distinct?: AreaAtuacaoScalarFieldEnum | AreaAtuacaoScalarFieldEnum[]
  }

  /**
   * AreaAtuacao findMany
   */
  export type AreaAtuacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AreaAtuacaos to fetch.
     */
    where?: AreaAtuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaAtuacaos to fetch.
     */
    orderBy?: AreaAtuacaoOrderByWithRelationInput | AreaAtuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AreaAtuacaos.
     */
    cursor?: AreaAtuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaAtuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaAtuacaos.
     */
    skip?: number
    distinct?: AreaAtuacaoScalarFieldEnum | AreaAtuacaoScalarFieldEnum[]
  }

  /**
   * AreaAtuacao create
   */
  export type AreaAtuacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a AreaAtuacao.
     */
    data: XOR<AreaAtuacaoCreateInput, AreaAtuacaoUncheckedCreateInput>
  }

  /**
   * AreaAtuacao createMany
   */
  export type AreaAtuacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AreaAtuacaos.
     */
    data: AreaAtuacaoCreateManyInput | AreaAtuacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AreaAtuacao createManyAndReturn
   */
  export type AreaAtuacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * The data used to create many AreaAtuacaos.
     */
    data: AreaAtuacaoCreateManyInput | AreaAtuacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AreaAtuacao update
   */
  export type AreaAtuacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a AreaAtuacao.
     */
    data: XOR<AreaAtuacaoUpdateInput, AreaAtuacaoUncheckedUpdateInput>
    /**
     * Choose, which AreaAtuacao to update.
     */
    where: AreaAtuacaoWhereUniqueInput
  }

  /**
   * AreaAtuacao updateMany
   */
  export type AreaAtuacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AreaAtuacaos.
     */
    data: XOR<AreaAtuacaoUpdateManyMutationInput, AreaAtuacaoUncheckedUpdateManyInput>
    /**
     * Filter which AreaAtuacaos to update
     */
    where?: AreaAtuacaoWhereInput
    /**
     * Limit how many AreaAtuacaos to update.
     */
    limit?: number
  }

  /**
   * AreaAtuacao updateManyAndReturn
   */
  export type AreaAtuacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * The data used to update AreaAtuacaos.
     */
    data: XOR<AreaAtuacaoUpdateManyMutationInput, AreaAtuacaoUncheckedUpdateManyInput>
    /**
     * Filter which AreaAtuacaos to update
     */
    where?: AreaAtuacaoWhereInput
    /**
     * Limit how many AreaAtuacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AreaAtuacao upsert
   */
  export type AreaAtuacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the AreaAtuacao to update in case it exists.
     */
    where: AreaAtuacaoWhereUniqueInput
    /**
     * In case the AreaAtuacao found by the `where` argument doesn't exist, create a new AreaAtuacao with this data.
     */
    create: XOR<AreaAtuacaoCreateInput, AreaAtuacaoUncheckedCreateInput>
    /**
     * In case the AreaAtuacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaAtuacaoUpdateInput, AreaAtuacaoUncheckedUpdateInput>
  }

  /**
   * AreaAtuacao delete
   */
  export type AreaAtuacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter which AreaAtuacao to delete.
     */
    where: AreaAtuacaoWhereUniqueInput
  }

  /**
   * AreaAtuacao deleteMany
   */
  export type AreaAtuacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AreaAtuacaos to delete
     */
    where?: AreaAtuacaoWhereInput
    /**
     * Limit how many AreaAtuacaos to delete.
     */
    limit?: number
  }

  /**
   * AreaAtuacao.alunas
   */
  export type AreaAtuacao$alunasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    where?: AlunaHasAreaAtuacaoWhereInput
    orderBy?: AlunaHasAreaAtuacaoOrderByWithRelationInput | AlunaHasAreaAtuacaoOrderByWithRelationInput[]
    cursor?: AlunaHasAreaAtuacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunaHasAreaAtuacaoScalarFieldEnum | AlunaHasAreaAtuacaoScalarFieldEnum[]
  }

  /**
   * AreaAtuacao without action
   */
  export type AreaAtuacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaAtuacao
     */
    select?: AreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaAtuacao
     */
    omit?: AreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaAtuacaoInclude<ExtArgs> | null
  }


  /**
   * Model AlunaHasAreaAtuacao
   */

  export type AggregateAlunaHasAreaAtuacao = {
    _count: AlunaHasAreaAtuacaoCountAggregateOutputType | null
    _avg: AlunaHasAreaAtuacaoAvgAggregateOutputType | null
    _sum: AlunaHasAreaAtuacaoSumAggregateOutputType | null
    _min: AlunaHasAreaAtuacaoMinAggregateOutputType | null
    _max: AlunaHasAreaAtuacaoMaxAggregateOutputType | null
  }

  export type AlunaHasAreaAtuacaoAvgAggregateOutputType = {
    idAluna: number | null
    idAreaAtuacao: number | null
  }

  export type AlunaHasAreaAtuacaoSumAggregateOutputType = {
    idAluna: number | null
    idAreaAtuacao: number | null
  }

  export type AlunaHasAreaAtuacaoMinAggregateOutputType = {
    idAluna: number | null
    idAreaAtuacao: number | null
  }

  export type AlunaHasAreaAtuacaoMaxAggregateOutputType = {
    idAluna: number | null
    idAreaAtuacao: number | null
  }

  export type AlunaHasAreaAtuacaoCountAggregateOutputType = {
    idAluna: number
    idAreaAtuacao: number
    _all: number
  }


  export type AlunaHasAreaAtuacaoAvgAggregateInputType = {
    idAluna?: true
    idAreaAtuacao?: true
  }

  export type AlunaHasAreaAtuacaoSumAggregateInputType = {
    idAluna?: true
    idAreaAtuacao?: true
  }

  export type AlunaHasAreaAtuacaoMinAggregateInputType = {
    idAluna?: true
    idAreaAtuacao?: true
  }

  export type AlunaHasAreaAtuacaoMaxAggregateInputType = {
    idAluna?: true
    idAreaAtuacao?: true
  }

  export type AlunaHasAreaAtuacaoCountAggregateInputType = {
    idAluna?: true
    idAreaAtuacao?: true
    _all?: true
  }

  export type AlunaHasAreaAtuacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlunaHasAreaAtuacao to aggregate.
     */
    where?: AlunaHasAreaAtuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunaHasAreaAtuacaos to fetch.
     */
    orderBy?: AlunaHasAreaAtuacaoOrderByWithRelationInput | AlunaHasAreaAtuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunaHasAreaAtuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunaHasAreaAtuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunaHasAreaAtuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlunaHasAreaAtuacaos
    **/
    _count?: true | AlunaHasAreaAtuacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunaHasAreaAtuacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunaHasAreaAtuacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunaHasAreaAtuacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunaHasAreaAtuacaoMaxAggregateInputType
  }

  export type GetAlunaHasAreaAtuacaoAggregateType<T extends AlunaHasAreaAtuacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlunaHasAreaAtuacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlunaHasAreaAtuacao[P]>
      : GetScalarType<T[P], AggregateAlunaHasAreaAtuacao[P]>
  }




  export type AlunaHasAreaAtuacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunaHasAreaAtuacaoWhereInput
    orderBy?: AlunaHasAreaAtuacaoOrderByWithAggregationInput | AlunaHasAreaAtuacaoOrderByWithAggregationInput[]
    by: AlunaHasAreaAtuacaoScalarFieldEnum[] | AlunaHasAreaAtuacaoScalarFieldEnum
    having?: AlunaHasAreaAtuacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunaHasAreaAtuacaoCountAggregateInputType | true
    _avg?: AlunaHasAreaAtuacaoAvgAggregateInputType
    _sum?: AlunaHasAreaAtuacaoSumAggregateInputType
    _min?: AlunaHasAreaAtuacaoMinAggregateInputType
    _max?: AlunaHasAreaAtuacaoMaxAggregateInputType
  }

  export type AlunaHasAreaAtuacaoGroupByOutputType = {
    idAluna: number
    idAreaAtuacao: number
    _count: AlunaHasAreaAtuacaoCountAggregateOutputType | null
    _avg: AlunaHasAreaAtuacaoAvgAggregateOutputType | null
    _sum: AlunaHasAreaAtuacaoSumAggregateOutputType | null
    _min: AlunaHasAreaAtuacaoMinAggregateOutputType | null
    _max: AlunaHasAreaAtuacaoMaxAggregateOutputType | null
  }

  type GetAlunaHasAreaAtuacaoGroupByPayload<T extends AlunaHasAreaAtuacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunaHasAreaAtuacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunaHasAreaAtuacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunaHasAreaAtuacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunaHasAreaAtuacaoGroupByOutputType[P]>
        }
      >
    >


  export type AlunaHasAreaAtuacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAluna?: boolean
    idAreaAtuacao?: boolean
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
    areaAtuacao?: boolean | AreaAtuacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunaHasAreaAtuacao"]>

  export type AlunaHasAreaAtuacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAluna?: boolean
    idAreaAtuacao?: boolean
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
    areaAtuacao?: boolean | AreaAtuacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunaHasAreaAtuacao"]>

  export type AlunaHasAreaAtuacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAluna?: boolean
    idAreaAtuacao?: boolean
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
    areaAtuacao?: boolean | AreaAtuacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunaHasAreaAtuacao"]>

  export type AlunaHasAreaAtuacaoSelectScalar = {
    idAluna?: boolean
    idAreaAtuacao?: boolean
  }

  export type AlunaHasAreaAtuacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idAluna" | "idAreaAtuacao", ExtArgs["result"]["alunaHasAreaAtuacao"]>
  export type AlunaHasAreaAtuacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
    areaAtuacao?: boolean | AreaAtuacaoDefaultArgs<ExtArgs>
  }
  export type AlunaHasAreaAtuacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
    areaAtuacao?: boolean | AreaAtuacaoDefaultArgs<ExtArgs>
  }
  export type AlunaHasAreaAtuacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluna?: boolean | AlunaDefaultArgs<ExtArgs>
    areaAtuacao?: boolean | AreaAtuacaoDefaultArgs<ExtArgs>
  }

  export type $AlunaHasAreaAtuacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlunaHasAreaAtuacao"
    objects: {
      aluna: Prisma.$AlunaPayload<ExtArgs>
      areaAtuacao: Prisma.$AreaAtuacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idAluna: number
      idAreaAtuacao: number
    }, ExtArgs["result"]["alunaHasAreaAtuacao"]>
    composites: {}
  }

  type AlunaHasAreaAtuacaoGetPayload<S extends boolean | null | undefined | AlunaHasAreaAtuacaoDefaultArgs> = $Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload, S>

  type AlunaHasAreaAtuacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunaHasAreaAtuacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunaHasAreaAtuacaoCountAggregateInputType | true
    }

  export interface AlunaHasAreaAtuacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlunaHasAreaAtuacao'], meta: { name: 'AlunaHasAreaAtuacao' } }
    /**
     * Find zero or one AlunaHasAreaAtuacao that matches the filter.
     * @param {AlunaHasAreaAtuacaoFindUniqueArgs} args - Arguments to find a AlunaHasAreaAtuacao
     * @example
     * // Get one AlunaHasAreaAtuacao
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunaHasAreaAtuacaoFindUniqueArgs>(args: SelectSubset<T, AlunaHasAreaAtuacaoFindUniqueArgs<ExtArgs>>): Prisma__AlunaHasAreaAtuacaoClient<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlunaHasAreaAtuacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunaHasAreaAtuacaoFindUniqueOrThrowArgs} args - Arguments to find a AlunaHasAreaAtuacao
     * @example
     * // Get one AlunaHasAreaAtuacao
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunaHasAreaAtuacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunaHasAreaAtuacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunaHasAreaAtuacaoClient<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlunaHasAreaAtuacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasAreaAtuacaoFindFirstArgs} args - Arguments to find a AlunaHasAreaAtuacao
     * @example
     * // Get one AlunaHasAreaAtuacao
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunaHasAreaAtuacaoFindFirstArgs>(args?: SelectSubset<T, AlunaHasAreaAtuacaoFindFirstArgs<ExtArgs>>): Prisma__AlunaHasAreaAtuacaoClient<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlunaHasAreaAtuacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasAreaAtuacaoFindFirstOrThrowArgs} args - Arguments to find a AlunaHasAreaAtuacao
     * @example
     * // Get one AlunaHasAreaAtuacao
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunaHasAreaAtuacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunaHasAreaAtuacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunaHasAreaAtuacaoClient<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlunaHasAreaAtuacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasAreaAtuacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlunaHasAreaAtuacaos
     * const alunaHasAreaAtuacaos = await prisma.alunaHasAreaAtuacao.findMany()
     * 
     * // Get first 10 AlunaHasAreaAtuacaos
     * const alunaHasAreaAtuacaos = await prisma.alunaHasAreaAtuacao.findMany({ take: 10 })
     * 
     * // Only select the `idAluna`
     * const alunaHasAreaAtuacaoWithIdAlunaOnly = await prisma.alunaHasAreaAtuacao.findMany({ select: { idAluna: true } })
     * 
     */
    findMany<T extends AlunaHasAreaAtuacaoFindManyArgs>(args?: SelectSubset<T, AlunaHasAreaAtuacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlunaHasAreaAtuacao.
     * @param {AlunaHasAreaAtuacaoCreateArgs} args - Arguments to create a AlunaHasAreaAtuacao.
     * @example
     * // Create one AlunaHasAreaAtuacao
     * const AlunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.create({
     *   data: {
     *     // ... data to create a AlunaHasAreaAtuacao
     *   }
     * })
     * 
     */
    create<T extends AlunaHasAreaAtuacaoCreateArgs>(args: SelectSubset<T, AlunaHasAreaAtuacaoCreateArgs<ExtArgs>>): Prisma__AlunaHasAreaAtuacaoClient<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlunaHasAreaAtuacaos.
     * @param {AlunaHasAreaAtuacaoCreateManyArgs} args - Arguments to create many AlunaHasAreaAtuacaos.
     * @example
     * // Create many AlunaHasAreaAtuacaos
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunaHasAreaAtuacaoCreateManyArgs>(args?: SelectSubset<T, AlunaHasAreaAtuacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlunaHasAreaAtuacaos and returns the data saved in the database.
     * @param {AlunaHasAreaAtuacaoCreateManyAndReturnArgs} args - Arguments to create many AlunaHasAreaAtuacaos.
     * @example
     * // Create many AlunaHasAreaAtuacaos
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlunaHasAreaAtuacaos and only return the `idAluna`
     * const alunaHasAreaAtuacaoWithIdAlunaOnly = await prisma.alunaHasAreaAtuacao.createManyAndReturn({
     *   select: { idAluna: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunaHasAreaAtuacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunaHasAreaAtuacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlunaHasAreaAtuacao.
     * @param {AlunaHasAreaAtuacaoDeleteArgs} args - Arguments to delete one AlunaHasAreaAtuacao.
     * @example
     * // Delete one AlunaHasAreaAtuacao
     * const AlunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.delete({
     *   where: {
     *     // ... filter to delete one AlunaHasAreaAtuacao
     *   }
     * })
     * 
     */
    delete<T extends AlunaHasAreaAtuacaoDeleteArgs>(args: SelectSubset<T, AlunaHasAreaAtuacaoDeleteArgs<ExtArgs>>): Prisma__AlunaHasAreaAtuacaoClient<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlunaHasAreaAtuacao.
     * @param {AlunaHasAreaAtuacaoUpdateArgs} args - Arguments to update one AlunaHasAreaAtuacao.
     * @example
     * // Update one AlunaHasAreaAtuacao
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunaHasAreaAtuacaoUpdateArgs>(args: SelectSubset<T, AlunaHasAreaAtuacaoUpdateArgs<ExtArgs>>): Prisma__AlunaHasAreaAtuacaoClient<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlunaHasAreaAtuacaos.
     * @param {AlunaHasAreaAtuacaoDeleteManyArgs} args - Arguments to filter AlunaHasAreaAtuacaos to delete.
     * @example
     * // Delete a few AlunaHasAreaAtuacaos
     * const { count } = await prisma.alunaHasAreaAtuacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunaHasAreaAtuacaoDeleteManyArgs>(args?: SelectSubset<T, AlunaHasAreaAtuacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlunaHasAreaAtuacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasAreaAtuacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlunaHasAreaAtuacaos
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunaHasAreaAtuacaoUpdateManyArgs>(args: SelectSubset<T, AlunaHasAreaAtuacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlunaHasAreaAtuacaos and returns the data updated in the database.
     * @param {AlunaHasAreaAtuacaoUpdateManyAndReturnArgs} args - Arguments to update many AlunaHasAreaAtuacaos.
     * @example
     * // Update many AlunaHasAreaAtuacaos
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlunaHasAreaAtuacaos and only return the `idAluna`
     * const alunaHasAreaAtuacaoWithIdAlunaOnly = await prisma.alunaHasAreaAtuacao.updateManyAndReturn({
     *   select: { idAluna: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlunaHasAreaAtuacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlunaHasAreaAtuacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlunaHasAreaAtuacao.
     * @param {AlunaHasAreaAtuacaoUpsertArgs} args - Arguments to update or create a AlunaHasAreaAtuacao.
     * @example
     * // Update or create a AlunaHasAreaAtuacao
     * const alunaHasAreaAtuacao = await prisma.alunaHasAreaAtuacao.upsert({
     *   create: {
     *     // ... data to create a AlunaHasAreaAtuacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlunaHasAreaAtuacao we want to update
     *   }
     * })
     */
    upsert<T extends AlunaHasAreaAtuacaoUpsertArgs>(args: SelectSubset<T, AlunaHasAreaAtuacaoUpsertArgs<ExtArgs>>): Prisma__AlunaHasAreaAtuacaoClient<$Result.GetResult<Prisma.$AlunaHasAreaAtuacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlunaHasAreaAtuacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasAreaAtuacaoCountArgs} args - Arguments to filter AlunaHasAreaAtuacaos to count.
     * @example
     * // Count the number of AlunaHasAreaAtuacaos
     * const count = await prisma.alunaHasAreaAtuacao.count({
     *   where: {
     *     // ... the filter for the AlunaHasAreaAtuacaos we want to count
     *   }
     * })
    **/
    count<T extends AlunaHasAreaAtuacaoCountArgs>(
      args?: Subset<T, AlunaHasAreaAtuacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunaHasAreaAtuacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlunaHasAreaAtuacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasAreaAtuacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunaHasAreaAtuacaoAggregateArgs>(args: Subset<T, AlunaHasAreaAtuacaoAggregateArgs>): Prisma.PrismaPromise<GetAlunaHasAreaAtuacaoAggregateType<T>>

    /**
     * Group by AlunaHasAreaAtuacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunaHasAreaAtuacaoGroupByArgs} args - Group by arguments.
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
      T extends AlunaHasAreaAtuacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunaHasAreaAtuacaoGroupByArgs['orderBy'] }
        : { orderBy?: AlunaHasAreaAtuacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AlunaHasAreaAtuacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunaHasAreaAtuacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlunaHasAreaAtuacao model
   */
  readonly fields: AlunaHasAreaAtuacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlunaHasAreaAtuacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunaHasAreaAtuacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluna<T extends AlunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunaDefaultArgs<ExtArgs>>): Prisma__AlunaClient<$Result.GetResult<Prisma.$AlunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    areaAtuacao<T extends AreaAtuacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaAtuacaoDefaultArgs<ExtArgs>>): Prisma__AreaAtuacaoClient<$Result.GetResult<Prisma.$AreaAtuacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlunaHasAreaAtuacao model
   */
  interface AlunaHasAreaAtuacaoFieldRefs {
    readonly idAluna: FieldRef<"AlunaHasAreaAtuacao", 'Int'>
    readonly idAreaAtuacao: FieldRef<"AlunaHasAreaAtuacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlunaHasAreaAtuacao findUnique
   */
  export type AlunaHasAreaAtuacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasAreaAtuacao to fetch.
     */
    where: AlunaHasAreaAtuacaoWhereUniqueInput
  }

  /**
   * AlunaHasAreaAtuacao findUniqueOrThrow
   */
  export type AlunaHasAreaAtuacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasAreaAtuacao to fetch.
     */
    where: AlunaHasAreaAtuacaoWhereUniqueInput
  }

  /**
   * AlunaHasAreaAtuacao findFirst
   */
  export type AlunaHasAreaAtuacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasAreaAtuacao to fetch.
     */
    where?: AlunaHasAreaAtuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunaHasAreaAtuacaos to fetch.
     */
    orderBy?: AlunaHasAreaAtuacaoOrderByWithRelationInput | AlunaHasAreaAtuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlunaHasAreaAtuacaos.
     */
    cursor?: AlunaHasAreaAtuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunaHasAreaAtuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunaHasAreaAtuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlunaHasAreaAtuacaos.
     */
    distinct?: AlunaHasAreaAtuacaoScalarFieldEnum | AlunaHasAreaAtuacaoScalarFieldEnum[]
  }

  /**
   * AlunaHasAreaAtuacao findFirstOrThrow
   */
  export type AlunaHasAreaAtuacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasAreaAtuacao to fetch.
     */
    where?: AlunaHasAreaAtuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunaHasAreaAtuacaos to fetch.
     */
    orderBy?: AlunaHasAreaAtuacaoOrderByWithRelationInput | AlunaHasAreaAtuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlunaHasAreaAtuacaos.
     */
    cursor?: AlunaHasAreaAtuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunaHasAreaAtuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunaHasAreaAtuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlunaHasAreaAtuacaos.
     */
    distinct?: AlunaHasAreaAtuacaoScalarFieldEnum | AlunaHasAreaAtuacaoScalarFieldEnum[]
  }

  /**
   * AlunaHasAreaAtuacao findMany
   */
  export type AlunaHasAreaAtuacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter, which AlunaHasAreaAtuacaos to fetch.
     */
    where?: AlunaHasAreaAtuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunaHasAreaAtuacaos to fetch.
     */
    orderBy?: AlunaHasAreaAtuacaoOrderByWithRelationInput | AlunaHasAreaAtuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlunaHasAreaAtuacaos.
     */
    cursor?: AlunaHasAreaAtuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunaHasAreaAtuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunaHasAreaAtuacaos.
     */
    skip?: number
    distinct?: AlunaHasAreaAtuacaoScalarFieldEnum | AlunaHasAreaAtuacaoScalarFieldEnum[]
  }

  /**
   * AlunaHasAreaAtuacao create
   */
  export type AlunaHasAreaAtuacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a AlunaHasAreaAtuacao.
     */
    data: XOR<AlunaHasAreaAtuacaoCreateInput, AlunaHasAreaAtuacaoUncheckedCreateInput>
  }

  /**
   * AlunaHasAreaAtuacao createMany
   */
  export type AlunaHasAreaAtuacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlunaHasAreaAtuacaos.
     */
    data: AlunaHasAreaAtuacaoCreateManyInput | AlunaHasAreaAtuacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlunaHasAreaAtuacao createManyAndReturn
   */
  export type AlunaHasAreaAtuacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * The data used to create many AlunaHasAreaAtuacaos.
     */
    data: AlunaHasAreaAtuacaoCreateManyInput | AlunaHasAreaAtuacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlunaHasAreaAtuacao update
   */
  export type AlunaHasAreaAtuacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a AlunaHasAreaAtuacao.
     */
    data: XOR<AlunaHasAreaAtuacaoUpdateInput, AlunaHasAreaAtuacaoUncheckedUpdateInput>
    /**
     * Choose, which AlunaHasAreaAtuacao to update.
     */
    where: AlunaHasAreaAtuacaoWhereUniqueInput
  }

  /**
   * AlunaHasAreaAtuacao updateMany
   */
  export type AlunaHasAreaAtuacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlunaHasAreaAtuacaos.
     */
    data: XOR<AlunaHasAreaAtuacaoUpdateManyMutationInput, AlunaHasAreaAtuacaoUncheckedUpdateManyInput>
    /**
     * Filter which AlunaHasAreaAtuacaos to update
     */
    where?: AlunaHasAreaAtuacaoWhereInput
    /**
     * Limit how many AlunaHasAreaAtuacaos to update.
     */
    limit?: number
  }

  /**
   * AlunaHasAreaAtuacao updateManyAndReturn
   */
  export type AlunaHasAreaAtuacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * The data used to update AlunaHasAreaAtuacaos.
     */
    data: XOR<AlunaHasAreaAtuacaoUpdateManyMutationInput, AlunaHasAreaAtuacaoUncheckedUpdateManyInput>
    /**
     * Filter which AlunaHasAreaAtuacaos to update
     */
    where?: AlunaHasAreaAtuacaoWhereInput
    /**
     * Limit how many AlunaHasAreaAtuacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlunaHasAreaAtuacao upsert
   */
  export type AlunaHasAreaAtuacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the AlunaHasAreaAtuacao to update in case it exists.
     */
    where: AlunaHasAreaAtuacaoWhereUniqueInput
    /**
     * In case the AlunaHasAreaAtuacao found by the `where` argument doesn't exist, create a new AlunaHasAreaAtuacao with this data.
     */
    create: XOR<AlunaHasAreaAtuacaoCreateInput, AlunaHasAreaAtuacaoUncheckedCreateInput>
    /**
     * In case the AlunaHasAreaAtuacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunaHasAreaAtuacaoUpdateInput, AlunaHasAreaAtuacaoUncheckedUpdateInput>
  }

  /**
   * AlunaHasAreaAtuacao delete
   */
  export type AlunaHasAreaAtuacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
    /**
     * Filter which AlunaHasAreaAtuacao to delete.
     */
    where: AlunaHasAreaAtuacaoWhereUniqueInput
  }

  /**
   * AlunaHasAreaAtuacao deleteMany
   */
  export type AlunaHasAreaAtuacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlunaHasAreaAtuacaos to delete
     */
    where?: AlunaHasAreaAtuacaoWhereInput
    /**
     * Limit how many AlunaHasAreaAtuacaos to delete.
     */
    limit?: number
  }

  /**
   * AlunaHasAreaAtuacao without action
   */
  export type AlunaHasAreaAtuacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunaHasAreaAtuacao
     */
    select?: AlunaHasAreaAtuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunaHasAreaAtuacao
     */
    omit?: AlunaHasAreaAtuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunaHasAreaAtuacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    descricao: 'descricao',
    foto: 'foto'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const AlunaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    linkedin: 'linkedin',
    foto: 'foto',
    relato: 'relato'
  };

  export type AlunaScalarFieldEnum = (typeof AlunaScalarFieldEnum)[keyof typeof AlunaScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    professorId: 'professorId'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const FotoScalarFieldEnum: {
    id: 'id',
    foto: 'foto',
    idEvento: 'idEvento'
  };

  export type FotoScalarFieldEnum = (typeof FotoScalarFieldEnum)[keyof typeof FotoScalarFieldEnum]


  export const ImprensaScalarFieldEnum: {
    id: 'id',
    nome_materia: 'nome_materia',
    link: 'link',
    midia: 'midia',
    foto: 'foto'
  };

  export type ImprensaScalarFieldEnum = (typeof ImprensaScalarFieldEnum)[keyof typeof ImprensaScalarFieldEnum]


  export const EscolaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    status: 'status'
  };

  export type EscolaScalarFieldEnum = (typeof EscolaScalarFieldEnum)[keyof typeof EscolaScalarFieldEnum]


  export const PatrocinadorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    foto: 'foto',
    link: 'link'
  };

  export type PatrocinadorScalarFieldEnum = (typeof PatrocinadorScalarFieldEnum)[keyof typeof PatrocinadorScalarFieldEnum]


  export const ProjetoScalarFieldEnum: {
    id: 'id',
    email: 'email',
    localizacao: 'localizacao'
  };

  export type ProjetoScalarFieldEnum = (typeof ProjetoScalarFieldEnum)[keyof typeof ProjetoScalarFieldEnum]


  export const ImpactoProjetoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    idProfessor: 'idProfessor',
    idAluna: 'idAluna'
  };

  export type ImpactoProjetoScalarFieldEnum = (typeof ImpactoProjetoScalarFieldEnum)[keyof typeof ImpactoProjetoScalarFieldEnum]


  export const HistoriaScalarFieldEnum: {
    id: 'id',
    data: 'data',
    descricao: 'descricao',
    idProfessor: 'idProfessor'
  };

  export type HistoriaScalarFieldEnum = (typeof HistoriaScalarFieldEnum)[keyof typeof HistoriaScalarFieldEnum]


  export const PublicacaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    link: 'link',
    autor: 'autor',
    ano: 'ano',
    idioma: 'idioma'
  };

  export type PublicacaoScalarFieldEnum = (typeof PublicacaoScalarFieldEnum)[keyof typeof PublicacaoScalarFieldEnum]


  export const ProfessorHasPublicacaoScalarFieldEnum: {
    idPublicacao: 'idPublicacao',
    idProfessor: 'idProfessor'
  };

  export type ProfessorHasPublicacaoScalarFieldEnum = (typeof ProfessorHasPublicacaoScalarFieldEnum)[keyof typeof ProfessorHasPublicacaoScalarFieldEnum]


  export const AlunaHasPublicacaoScalarFieldEnum: {
    idPublicacao: 'idPublicacao',
    idAluna: 'idAluna'
  };

  export type AlunaHasPublicacaoScalarFieldEnum = (typeof AlunaHasPublicacaoScalarFieldEnum)[keyof typeof AlunaHasPublicacaoScalarFieldEnum]


  export const AreaAtuacaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    idProfessor: 'idProfessor'
  };

  export type AreaAtuacaoScalarFieldEnum = (typeof AreaAtuacaoScalarFieldEnum)[keyof typeof AreaAtuacaoScalarFieldEnum]


  export const AlunaHasAreaAtuacaoScalarFieldEnum: {
    idAluna: 'idAluna',
    idAreaAtuacao: 'idAreaAtuacao'
  };

  export type AlunaHasAreaAtuacaoScalarFieldEnum = (typeof AlunaHasAreaAtuacaoScalarFieldEnum)[keyof typeof AlunaHasAreaAtuacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: IntFilter<"Professor"> | number
    nome?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    descricao?: StringFilter<"Professor"> | string
    foto?: StringFilter<"Professor"> | string
    evento?: EventoListRelationFilter
    areasAtuacao?: AreaAtuacaoListRelationFilter
    historia?: XOR<HistoriaNullableScalarRelationFilter, HistoriaWhereInput> | null
    impactoProjeto?: XOR<ImpactoProjetoNullableScalarRelationFilter, ImpactoProjetoWhereInput> | null
    publicacoes?: ProfessorHasPublicacaoListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    evento?: EventoOrderByRelationAggregateInput
    areasAtuacao?: AreaAtuacaoOrderByRelationAggregateInput
    historia?: HistoriaOrderByWithRelationInput
    impactoProjeto?: ImpactoProjetoOrderByWithRelationInput
    publicacoes?: ProfessorHasPublicacaoOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    nome?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    descricao?: StringFilter<"Professor"> | string
    foto?: StringFilter<"Professor"> | string
    evento?: EventoListRelationFilter
    areasAtuacao?: AreaAtuacaoListRelationFilter
    historia?: XOR<HistoriaNullableScalarRelationFilter, HistoriaWhereInput> | null
    impactoProjeto?: XOR<ImpactoProjetoNullableScalarRelationFilter, ImpactoProjetoWhereInput> | null
    publicacoes?: ProfessorHasPublicacaoListRelationFilter
  }, "id">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Professor"> | number
    nome?: StringWithAggregatesFilter<"Professor"> | string
    email?: StringWithAggregatesFilter<"Professor"> | string
    descricao?: StringWithAggregatesFilter<"Professor"> | string
    foto?: StringWithAggregatesFilter<"Professor"> | string
  }

  export type AlunaWhereInput = {
    AND?: AlunaWhereInput | AlunaWhereInput[]
    OR?: AlunaWhereInput[]
    NOT?: AlunaWhereInput | AlunaWhereInput[]
    id?: IntFilter<"Aluna"> | number
    nome?: StringFilter<"Aluna"> | string
    linkedin?: StringFilter<"Aluna"> | string
    foto?: BytesFilter<"Aluna"> | Uint8Array
    relato?: StringFilter<"Aluna"> | string
    areaAtuacao?: AlunaHasAreaAtuacaoListRelationFilter
    impactoProjeto?: XOR<ImpactoProjetoNullableScalarRelationFilter, ImpactoProjetoWhereInput> | null
    publicacoes?: AlunaHasPublicacaoListRelationFilter
  }

  export type AlunaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    linkedin?: SortOrder
    foto?: SortOrder
    relato?: SortOrder
    areaAtuacao?: AlunaHasAreaAtuacaoOrderByRelationAggregateInput
    impactoProjeto?: ImpactoProjetoOrderByWithRelationInput
    publicacoes?: AlunaHasPublicacaoOrderByRelationAggregateInput
  }

  export type AlunaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlunaWhereInput | AlunaWhereInput[]
    OR?: AlunaWhereInput[]
    NOT?: AlunaWhereInput | AlunaWhereInput[]
    nome?: StringFilter<"Aluna"> | string
    linkedin?: StringFilter<"Aluna"> | string
    foto?: BytesFilter<"Aluna"> | Uint8Array
    relato?: StringFilter<"Aluna"> | string
    areaAtuacao?: AlunaHasAreaAtuacaoListRelationFilter
    impactoProjeto?: XOR<ImpactoProjetoNullableScalarRelationFilter, ImpactoProjetoWhereInput> | null
    publicacoes?: AlunaHasPublicacaoListRelationFilter
  }, "id">

  export type AlunaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    linkedin?: SortOrder
    foto?: SortOrder
    relato?: SortOrder
    _count?: AlunaCountOrderByAggregateInput
    _avg?: AlunaAvgOrderByAggregateInput
    _max?: AlunaMaxOrderByAggregateInput
    _min?: AlunaMinOrderByAggregateInput
    _sum?: AlunaSumOrderByAggregateInput
  }

  export type AlunaScalarWhereWithAggregatesInput = {
    AND?: AlunaScalarWhereWithAggregatesInput | AlunaScalarWhereWithAggregatesInput[]
    OR?: AlunaScalarWhereWithAggregatesInput[]
    NOT?: AlunaScalarWhereWithAggregatesInput | AlunaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aluna"> | number
    nome?: StringWithAggregatesFilter<"Aluna"> | string
    linkedin?: StringWithAggregatesFilter<"Aluna"> | string
    foto?: BytesWithAggregatesFilter<"Aluna"> | Uint8Array
    relato?: StringWithAggregatesFilter<"Aluna"> | string
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: IntFilter<"Evento"> | number
    nome?: StringFilter<"Evento"> | string
    descricao?: StringFilter<"Evento"> | string
    professorId?: IntFilter<"Evento"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    fotos?: FotoListRelationFilter
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    professorId?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    fotos?: FotoOrderByRelationAggregateInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    nome?: StringFilter<"Evento"> | string
    descricao?: StringFilter<"Evento"> | string
    professorId?: IntFilter<"Evento"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    fotos?: FotoListRelationFilter
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    professorId?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evento"> | number
    nome?: StringWithAggregatesFilter<"Evento"> | string
    descricao?: StringWithAggregatesFilter<"Evento"> | string
    professorId?: IntWithAggregatesFilter<"Evento"> | number
  }

  export type FotoWhereInput = {
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    id?: IntFilter<"Foto"> | number
    foto?: BytesFilter<"Foto"> | Uint8Array
    idEvento?: IntFilter<"Foto"> | number
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }

  export type FotoOrderByWithRelationInput = {
    id?: SortOrder
    foto?: SortOrder
    idEvento?: SortOrder
    evento?: EventoOrderByWithRelationInput
  }

  export type FotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    foto?: BytesFilter<"Foto"> | Uint8Array
    idEvento?: IntFilter<"Foto"> | number
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }, "id">

  export type FotoOrderByWithAggregationInput = {
    id?: SortOrder
    foto?: SortOrder
    idEvento?: SortOrder
    _count?: FotoCountOrderByAggregateInput
    _avg?: FotoAvgOrderByAggregateInput
    _max?: FotoMaxOrderByAggregateInput
    _min?: FotoMinOrderByAggregateInput
    _sum?: FotoSumOrderByAggregateInput
  }

  export type FotoScalarWhereWithAggregatesInput = {
    AND?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    OR?: FotoScalarWhereWithAggregatesInput[]
    NOT?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Foto"> | number
    foto?: BytesWithAggregatesFilter<"Foto"> | Uint8Array
    idEvento?: IntWithAggregatesFilter<"Foto"> | number
  }

  export type ImprensaWhereInput = {
    AND?: ImprensaWhereInput | ImprensaWhereInput[]
    OR?: ImprensaWhereInput[]
    NOT?: ImprensaWhereInput | ImprensaWhereInput[]
    id?: IntFilter<"Imprensa"> | number
    nome_materia?: StringFilter<"Imprensa"> | string
    link?: StringFilter<"Imprensa"> | string
    midia?: StringFilter<"Imprensa"> | string
    foto?: BytesFilter<"Imprensa"> | Uint8Array
  }

  export type ImprensaOrderByWithRelationInput = {
    id?: SortOrder
    nome_materia?: SortOrder
    link?: SortOrder
    midia?: SortOrder
    foto?: SortOrder
  }

  export type ImprensaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImprensaWhereInput | ImprensaWhereInput[]
    OR?: ImprensaWhereInput[]
    NOT?: ImprensaWhereInput | ImprensaWhereInput[]
    nome_materia?: StringFilter<"Imprensa"> | string
    link?: StringFilter<"Imprensa"> | string
    midia?: StringFilter<"Imprensa"> | string
    foto?: BytesFilter<"Imprensa"> | Uint8Array
  }, "id">

  export type ImprensaOrderByWithAggregationInput = {
    id?: SortOrder
    nome_materia?: SortOrder
    link?: SortOrder
    midia?: SortOrder
    foto?: SortOrder
    _count?: ImprensaCountOrderByAggregateInput
    _avg?: ImprensaAvgOrderByAggregateInput
    _max?: ImprensaMaxOrderByAggregateInput
    _min?: ImprensaMinOrderByAggregateInput
    _sum?: ImprensaSumOrderByAggregateInput
  }

  export type ImprensaScalarWhereWithAggregatesInput = {
    AND?: ImprensaScalarWhereWithAggregatesInput | ImprensaScalarWhereWithAggregatesInput[]
    OR?: ImprensaScalarWhereWithAggregatesInput[]
    NOT?: ImprensaScalarWhereWithAggregatesInput | ImprensaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Imprensa"> | number
    nome_materia?: StringWithAggregatesFilter<"Imprensa"> | string
    link?: StringWithAggregatesFilter<"Imprensa"> | string
    midia?: StringWithAggregatesFilter<"Imprensa"> | string
    foto?: BytesWithAggregatesFilter<"Imprensa"> | Uint8Array
  }

  export type EscolaWhereInput = {
    AND?: EscolaWhereInput | EscolaWhereInput[]
    OR?: EscolaWhereInput[]
    NOT?: EscolaWhereInput | EscolaWhereInput[]
    id?: IntFilter<"Escola"> | number
    nome?: StringFilter<"Escola"> | string
    status?: BoolFilter<"Escola"> | boolean
  }

  export type EscolaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
  }

  export type EscolaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EscolaWhereInput | EscolaWhereInput[]
    OR?: EscolaWhereInput[]
    NOT?: EscolaWhereInput | EscolaWhereInput[]
    nome?: StringFilter<"Escola"> | string
    status?: BoolFilter<"Escola"> | boolean
  }, "id">

  export type EscolaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
    _count?: EscolaCountOrderByAggregateInput
    _avg?: EscolaAvgOrderByAggregateInput
    _max?: EscolaMaxOrderByAggregateInput
    _min?: EscolaMinOrderByAggregateInput
    _sum?: EscolaSumOrderByAggregateInput
  }

  export type EscolaScalarWhereWithAggregatesInput = {
    AND?: EscolaScalarWhereWithAggregatesInput | EscolaScalarWhereWithAggregatesInput[]
    OR?: EscolaScalarWhereWithAggregatesInput[]
    NOT?: EscolaScalarWhereWithAggregatesInput | EscolaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Escola"> | number
    nome?: StringWithAggregatesFilter<"Escola"> | string
    status?: BoolWithAggregatesFilter<"Escola"> | boolean
  }

  export type PatrocinadorWhereInput = {
    AND?: PatrocinadorWhereInput | PatrocinadorWhereInput[]
    OR?: PatrocinadorWhereInput[]
    NOT?: PatrocinadorWhereInput | PatrocinadorWhereInput[]
    id?: IntFilter<"Patrocinador"> | number
    nome?: StringFilter<"Patrocinador"> | string
    descricao?: StringFilter<"Patrocinador"> | string
    foto?: BytesFilter<"Patrocinador"> | Uint8Array
    link?: StringFilter<"Patrocinador"> | string
  }

  export type PatrocinadorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    link?: SortOrder
  }

  export type PatrocinadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatrocinadorWhereInput | PatrocinadorWhereInput[]
    OR?: PatrocinadorWhereInput[]
    NOT?: PatrocinadorWhereInput | PatrocinadorWhereInput[]
    nome?: StringFilter<"Patrocinador"> | string
    descricao?: StringFilter<"Patrocinador"> | string
    foto?: BytesFilter<"Patrocinador"> | Uint8Array
    link?: StringFilter<"Patrocinador"> | string
  }, "id">

  export type PatrocinadorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    link?: SortOrder
    _count?: PatrocinadorCountOrderByAggregateInput
    _avg?: PatrocinadorAvgOrderByAggregateInput
    _max?: PatrocinadorMaxOrderByAggregateInput
    _min?: PatrocinadorMinOrderByAggregateInput
    _sum?: PatrocinadorSumOrderByAggregateInput
  }

  export type PatrocinadorScalarWhereWithAggregatesInput = {
    AND?: PatrocinadorScalarWhereWithAggregatesInput | PatrocinadorScalarWhereWithAggregatesInput[]
    OR?: PatrocinadorScalarWhereWithAggregatesInput[]
    NOT?: PatrocinadorScalarWhereWithAggregatesInput | PatrocinadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patrocinador"> | number
    nome?: StringWithAggregatesFilter<"Patrocinador"> | string
    descricao?: StringWithAggregatesFilter<"Patrocinador"> | string
    foto?: BytesWithAggregatesFilter<"Patrocinador"> | Uint8Array
    link?: StringWithAggregatesFilter<"Patrocinador"> | string
  }

  export type ProjetoWhereInput = {
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    id?: IntFilter<"Projeto"> | number
    email?: StringFilter<"Projeto"> | string
    localizacao?: StringFilter<"Projeto"> | string
  }

  export type ProjetoOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    localizacao?: SortOrder
  }

  export type ProjetoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    email?: StringFilter<"Projeto"> | string
    localizacao?: StringFilter<"Projeto"> | string
  }, "id">

  export type ProjetoOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    localizacao?: SortOrder
    _count?: ProjetoCountOrderByAggregateInput
    _avg?: ProjetoAvgOrderByAggregateInput
    _max?: ProjetoMaxOrderByAggregateInput
    _min?: ProjetoMinOrderByAggregateInput
    _sum?: ProjetoSumOrderByAggregateInput
  }

  export type ProjetoScalarWhereWithAggregatesInput = {
    AND?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    OR?: ProjetoScalarWhereWithAggregatesInput[]
    NOT?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projeto"> | number
    email?: StringWithAggregatesFilter<"Projeto"> | string
    localizacao?: StringWithAggregatesFilter<"Projeto"> | string
  }

  export type ImpactoProjetoWhereInput = {
    AND?: ImpactoProjetoWhereInput | ImpactoProjetoWhereInput[]
    OR?: ImpactoProjetoWhereInput[]
    NOT?: ImpactoProjetoWhereInput | ImpactoProjetoWhereInput[]
    id?: IntFilter<"ImpactoProjeto"> | number
    descricao?: StringFilter<"ImpactoProjeto"> | string
    idProfessor?: IntFilter<"ImpactoProjeto"> | number
    idAluna?: IntFilter<"ImpactoProjeto"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    aluna?: XOR<AlunaScalarRelationFilter, AlunaWhereInput>
  }

  export type ImpactoProjetoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    idAluna?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    aluna?: AlunaOrderByWithRelationInput
  }

  export type ImpactoProjetoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idProfessor?: number
    idAluna?: number
    AND?: ImpactoProjetoWhereInput | ImpactoProjetoWhereInput[]
    OR?: ImpactoProjetoWhereInput[]
    NOT?: ImpactoProjetoWhereInput | ImpactoProjetoWhereInput[]
    descricao?: StringFilter<"ImpactoProjeto"> | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    aluna?: XOR<AlunaScalarRelationFilter, AlunaWhereInput>
  }, "id" | "idProfessor" | "idAluna">

  export type ImpactoProjetoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    idAluna?: SortOrder
    _count?: ImpactoProjetoCountOrderByAggregateInput
    _avg?: ImpactoProjetoAvgOrderByAggregateInput
    _max?: ImpactoProjetoMaxOrderByAggregateInput
    _min?: ImpactoProjetoMinOrderByAggregateInput
    _sum?: ImpactoProjetoSumOrderByAggregateInput
  }

  export type ImpactoProjetoScalarWhereWithAggregatesInput = {
    AND?: ImpactoProjetoScalarWhereWithAggregatesInput | ImpactoProjetoScalarWhereWithAggregatesInput[]
    OR?: ImpactoProjetoScalarWhereWithAggregatesInput[]
    NOT?: ImpactoProjetoScalarWhereWithAggregatesInput | ImpactoProjetoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImpactoProjeto"> | number
    descricao?: StringWithAggregatesFilter<"ImpactoProjeto"> | string
    idProfessor?: IntWithAggregatesFilter<"ImpactoProjeto"> | number
    idAluna?: IntWithAggregatesFilter<"ImpactoProjeto"> | number
  }

  export type HistoriaWhereInput = {
    AND?: HistoriaWhereInput | HistoriaWhereInput[]
    OR?: HistoriaWhereInput[]
    NOT?: HistoriaWhereInput | HistoriaWhereInput[]
    id?: IntFilter<"Historia"> | number
    data?: DateTimeFilter<"Historia"> | Date | string
    descricao?: StringFilter<"Historia"> | string
    idProfessor?: IntFilter<"Historia"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }

  export type HistoriaOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
  }

  export type HistoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idProfessor?: number
    AND?: HistoriaWhereInput | HistoriaWhereInput[]
    OR?: HistoriaWhereInput[]
    NOT?: HistoriaWhereInput | HistoriaWhereInput[]
    data?: DateTimeFilter<"Historia"> | Date | string
    descricao?: StringFilter<"Historia"> | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }, "id" | "idProfessor">

  export type HistoriaOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    _count?: HistoriaCountOrderByAggregateInput
    _avg?: HistoriaAvgOrderByAggregateInput
    _max?: HistoriaMaxOrderByAggregateInput
    _min?: HistoriaMinOrderByAggregateInput
    _sum?: HistoriaSumOrderByAggregateInput
  }

  export type HistoriaScalarWhereWithAggregatesInput = {
    AND?: HistoriaScalarWhereWithAggregatesInput | HistoriaScalarWhereWithAggregatesInput[]
    OR?: HistoriaScalarWhereWithAggregatesInput[]
    NOT?: HistoriaScalarWhereWithAggregatesInput | HistoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Historia"> | number
    data?: DateTimeWithAggregatesFilter<"Historia"> | Date | string
    descricao?: StringWithAggregatesFilter<"Historia"> | string
    idProfessor?: IntWithAggregatesFilter<"Historia"> | number
  }

  export type PublicacaoWhereInput = {
    AND?: PublicacaoWhereInput | PublicacaoWhereInput[]
    OR?: PublicacaoWhereInput[]
    NOT?: PublicacaoWhereInput | PublicacaoWhereInput[]
    id?: IntFilter<"Publicacao"> | number
    titulo?: StringFilter<"Publicacao"> | string
    link?: StringFilter<"Publicacao"> | string
    autor?: StringFilter<"Publicacao"> | string
    ano?: DateTimeFilter<"Publicacao"> | Date | string
    idioma?: StringFilter<"Publicacao"> | string
    professor?: ProfessorHasPublicacaoListRelationFilter
    aluna?: AlunaHasPublicacaoListRelationFilter
  }

  export type PublicacaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    link?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
    idioma?: SortOrder
    professor?: ProfessorHasPublicacaoOrderByRelationAggregateInput
    aluna?: AlunaHasPublicacaoOrderByRelationAggregateInput
  }

  export type PublicacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicacaoWhereInput | PublicacaoWhereInput[]
    OR?: PublicacaoWhereInput[]
    NOT?: PublicacaoWhereInput | PublicacaoWhereInput[]
    titulo?: StringFilter<"Publicacao"> | string
    link?: StringFilter<"Publicacao"> | string
    autor?: StringFilter<"Publicacao"> | string
    ano?: DateTimeFilter<"Publicacao"> | Date | string
    idioma?: StringFilter<"Publicacao"> | string
    professor?: ProfessorHasPublicacaoListRelationFilter
    aluna?: AlunaHasPublicacaoListRelationFilter
  }, "id">

  export type PublicacaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    link?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
    idioma?: SortOrder
    _count?: PublicacaoCountOrderByAggregateInput
    _avg?: PublicacaoAvgOrderByAggregateInput
    _max?: PublicacaoMaxOrderByAggregateInput
    _min?: PublicacaoMinOrderByAggregateInput
    _sum?: PublicacaoSumOrderByAggregateInput
  }

  export type PublicacaoScalarWhereWithAggregatesInput = {
    AND?: PublicacaoScalarWhereWithAggregatesInput | PublicacaoScalarWhereWithAggregatesInput[]
    OR?: PublicacaoScalarWhereWithAggregatesInput[]
    NOT?: PublicacaoScalarWhereWithAggregatesInput | PublicacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publicacao"> | number
    titulo?: StringWithAggregatesFilter<"Publicacao"> | string
    link?: StringWithAggregatesFilter<"Publicacao"> | string
    autor?: StringWithAggregatesFilter<"Publicacao"> | string
    ano?: DateTimeWithAggregatesFilter<"Publicacao"> | Date | string
    idioma?: StringWithAggregatesFilter<"Publicacao"> | string
  }

  export type ProfessorHasPublicacaoWhereInput = {
    AND?: ProfessorHasPublicacaoWhereInput | ProfessorHasPublicacaoWhereInput[]
    OR?: ProfessorHasPublicacaoWhereInput[]
    NOT?: ProfessorHasPublicacaoWhereInput | ProfessorHasPublicacaoWhereInput[]
    idPublicacao?: IntFilter<"ProfessorHasPublicacao"> | number
    idProfessor?: IntFilter<"ProfessorHasPublicacao"> | number
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }

  export type ProfessorHasPublicacaoOrderByWithRelationInput = {
    idPublicacao?: SortOrder
    idProfessor?: SortOrder
    publicacao?: PublicacaoOrderByWithRelationInput
    professor?: ProfessorOrderByWithRelationInput
  }

  export type ProfessorHasPublicacaoWhereUniqueInput = Prisma.AtLeast<{
    idProfessor_idPublicacao?: ProfessorHasPublicacaoIdProfessorIdPublicacaoCompoundUniqueInput
    AND?: ProfessorHasPublicacaoWhereInput | ProfessorHasPublicacaoWhereInput[]
    OR?: ProfessorHasPublicacaoWhereInput[]
    NOT?: ProfessorHasPublicacaoWhereInput | ProfessorHasPublicacaoWhereInput[]
    idPublicacao?: IntFilter<"ProfessorHasPublicacao"> | number
    idProfessor?: IntFilter<"ProfessorHasPublicacao"> | number
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }, "idProfessor_idPublicacao">

  export type ProfessorHasPublicacaoOrderByWithAggregationInput = {
    idPublicacao?: SortOrder
    idProfessor?: SortOrder
    _count?: ProfessorHasPublicacaoCountOrderByAggregateInput
    _avg?: ProfessorHasPublicacaoAvgOrderByAggregateInput
    _max?: ProfessorHasPublicacaoMaxOrderByAggregateInput
    _min?: ProfessorHasPublicacaoMinOrderByAggregateInput
    _sum?: ProfessorHasPublicacaoSumOrderByAggregateInput
  }

  export type ProfessorHasPublicacaoScalarWhereWithAggregatesInput = {
    AND?: ProfessorHasPublicacaoScalarWhereWithAggregatesInput | ProfessorHasPublicacaoScalarWhereWithAggregatesInput[]
    OR?: ProfessorHasPublicacaoScalarWhereWithAggregatesInput[]
    NOT?: ProfessorHasPublicacaoScalarWhereWithAggregatesInput | ProfessorHasPublicacaoScalarWhereWithAggregatesInput[]
    idPublicacao?: IntWithAggregatesFilter<"ProfessorHasPublicacao"> | number
    idProfessor?: IntWithAggregatesFilter<"ProfessorHasPublicacao"> | number
  }

  export type AlunaHasPublicacaoWhereInput = {
    AND?: AlunaHasPublicacaoWhereInput | AlunaHasPublicacaoWhereInput[]
    OR?: AlunaHasPublicacaoWhereInput[]
    NOT?: AlunaHasPublicacaoWhereInput | AlunaHasPublicacaoWhereInput[]
    idPublicacao?: IntFilter<"AlunaHasPublicacao"> | number
    idAluna?: IntFilter<"AlunaHasPublicacao"> | number
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
    aluna?: XOR<AlunaScalarRelationFilter, AlunaWhereInput>
  }

  export type AlunaHasPublicacaoOrderByWithRelationInput = {
    idPublicacao?: SortOrder
    idAluna?: SortOrder
    publicacao?: PublicacaoOrderByWithRelationInput
    aluna?: AlunaOrderByWithRelationInput
  }

  export type AlunaHasPublicacaoWhereUniqueInput = Prisma.AtLeast<{
    idAluna_idPublicacao?: AlunaHasPublicacaoIdAlunaIdPublicacaoCompoundUniqueInput
    AND?: AlunaHasPublicacaoWhereInput | AlunaHasPublicacaoWhereInput[]
    OR?: AlunaHasPublicacaoWhereInput[]
    NOT?: AlunaHasPublicacaoWhereInput | AlunaHasPublicacaoWhereInput[]
    idPublicacao?: IntFilter<"AlunaHasPublicacao"> | number
    idAluna?: IntFilter<"AlunaHasPublicacao"> | number
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
    aluna?: XOR<AlunaScalarRelationFilter, AlunaWhereInput>
  }, "idAluna_idPublicacao">

  export type AlunaHasPublicacaoOrderByWithAggregationInput = {
    idPublicacao?: SortOrder
    idAluna?: SortOrder
    _count?: AlunaHasPublicacaoCountOrderByAggregateInput
    _avg?: AlunaHasPublicacaoAvgOrderByAggregateInput
    _max?: AlunaHasPublicacaoMaxOrderByAggregateInput
    _min?: AlunaHasPublicacaoMinOrderByAggregateInput
    _sum?: AlunaHasPublicacaoSumOrderByAggregateInput
  }

  export type AlunaHasPublicacaoScalarWhereWithAggregatesInput = {
    AND?: AlunaHasPublicacaoScalarWhereWithAggregatesInput | AlunaHasPublicacaoScalarWhereWithAggregatesInput[]
    OR?: AlunaHasPublicacaoScalarWhereWithAggregatesInput[]
    NOT?: AlunaHasPublicacaoScalarWhereWithAggregatesInput | AlunaHasPublicacaoScalarWhereWithAggregatesInput[]
    idPublicacao?: IntWithAggregatesFilter<"AlunaHasPublicacao"> | number
    idAluna?: IntWithAggregatesFilter<"AlunaHasPublicacao"> | number
  }

  export type AreaAtuacaoWhereInput = {
    AND?: AreaAtuacaoWhereInput | AreaAtuacaoWhereInput[]
    OR?: AreaAtuacaoWhereInput[]
    NOT?: AreaAtuacaoWhereInput | AreaAtuacaoWhereInput[]
    id?: IntFilter<"AreaAtuacao"> | number
    nome?: StringFilter<"AreaAtuacao"> | string
    descricao?: StringFilter<"AreaAtuacao"> | string
    idProfessor?: IntFilter<"AreaAtuacao"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    alunas?: AlunaHasAreaAtuacaoListRelationFilter
  }

  export type AreaAtuacaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    alunas?: AlunaHasAreaAtuacaoOrderByRelationAggregateInput
  }

  export type AreaAtuacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AreaAtuacaoWhereInput | AreaAtuacaoWhereInput[]
    OR?: AreaAtuacaoWhereInput[]
    NOT?: AreaAtuacaoWhereInput | AreaAtuacaoWhereInput[]
    nome?: StringFilter<"AreaAtuacao"> | string
    descricao?: StringFilter<"AreaAtuacao"> | string
    idProfessor?: IntFilter<"AreaAtuacao"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    alunas?: AlunaHasAreaAtuacaoListRelationFilter
  }, "id">

  export type AreaAtuacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    _count?: AreaAtuacaoCountOrderByAggregateInput
    _avg?: AreaAtuacaoAvgOrderByAggregateInput
    _max?: AreaAtuacaoMaxOrderByAggregateInput
    _min?: AreaAtuacaoMinOrderByAggregateInput
    _sum?: AreaAtuacaoSumOrderByAggregateInput
  }

  export type AreaAtuacaoScalarWhereWithAggregatesInput = {
    AND?: AreaAtuacaoScalarWhereWithAggregatesInput | AreaAtuacaoScalarWhereWithAggregatesInput[]
    OR?: AreaAtuacaoScalarWhereWithAggregatesInput[]
    NOT?: AreaAtuacaoScalarWhereWithAggregatesInput | AreaAtuacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AreaAtuacao"> | number
    nome?: StringWithAggregatesFilter<"AreaAtuacao"> | string
    descricao?: StringWithAggregatesFilter<"AreaAtuacao"> | string
    idProfessor?: IntWithAggregatesFilter<"AreaAtuacao"> | number
  }

  export type AlunaHasAreaAtuacaoWhereInput = {
    AND?: AlunaHasAreaAtuacaoWhereInput | AlunaHasAreaAtuacaoWhereInput[]
    OR?: AlunaHasAreaAtuacaoWhereInput[]
    NOT?: AlunaHasAreaAtuacaoWhereInput | AlunaHasAreaAtuacaoWhereInput[]
    idAluna?: IntFilter<"AlunaHasAreaAtuacao"> | number
    idAreaAtuacao?: IntFilter<"AlunaHasAreaAtuacao"> | number
    aluna?: XOR<AlunaScalarRelationFilter, AlunaWhereInput>
    areaAtuacao?: XOR<AreaAtuacaoScalarRelationFilter, AreaAtuacaoWhereInput>
  }

  export type AlunaHasAreaAtuacaoOrderByWithRelationInput = {
    idAluna?: SortOrder
    idAreaAtuacao?: SortOrder
    aluna?: AlunaOrderByWithRelationInput
    areaAtuacao?: AreaAtuacaoOrderByWithRelationInput
  }

  export type AlunaHasAreaAtuacaoWhereUniqueInput = Prisma.AtLeast<{
    idAluna_idAreaAtuacao?: AlunaHasAreaAtuacaoIdAlunaIdAreaAtuacaoCompoundUniqueInput
    AND?: AlunaHasAreaAtuacaoWhereInput | AlunaHasAreaAtuacaoWhereInput[]
    OR?: AlunaHasAreaAtuacaoWhereInput[]
    NOT?: AlunaHasAreaAtuacaoWhereInput | AlunaHasAreaAtuacaoWhereInput[]
    idAluna?: IntFilter<"AlunaHasAreaAtuacao"> | number
    idAreaAtuacao?: IntFilter<"AlunaHasAreaAtuacao"> | number
    aluna?: XOR<AlunaScalarRelationFilter, AlunaWhereInput>
    areaAtuacao?: XOR<AreaAtuacaoScalarRelationFilter, AreaAtuacaoWhereInput>
  }, "idAluna_idAreaAtuacao">

  export type AlunaHasAreaAtuacaoOrderByWithAggregationInput = {
    idAluna?: SortOrder
    idAreaAtuacao?: SortOrder
    _count?: AlunaHasAreaAtuacaoCountOrderByAggregateInput
    _avg?: AlunaHasAreaAtuacaoAvgOrderByAggregateInput
    _max?: AlunaHasAreaAtuacaoMaxOrderByAggregateInput
    _min?: AlunaHasAreaAtuacaoMinOrderByAggregateInput
    _sum?: AlunaHasAreaAtuacaoSumOrderByAggregateInput
  }

  export type AlunaHasAreaAtuacaoScalarWhereWithAggregatesInput = {
    AND?: AlunaHasAreaAtuacaoScalarWhereWithAggregatesInput | AlunaHasAreaAtuacaoScalarWhereWithAggregatesInput[]
    OR?: AlunaHasAreaAtuacaoScalarWhereWithAggregatesInput[]
    NOT?: AlunaHasAreaAtuacaoScalarWhereWithAggregatesInput | AlunaHasAreaAtuacaoScalarWhereWithAggregatesInput[]
    idAluna?: IntWithAggregatesFilter<"AlunaHasAreaAtuacao"> | number
    idAreaAtuacao?: IntWithAggregatesFilter<"AlunaHasAreaAtuacao"> | number
  }

  export type ProfessorCreateInput = {
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoCreateNestedManyWithoutProfessorInput
    areasAtuacao?: AreaAtuacaoCreateNestedManyWithoutProfessorInput
    historia?: HistoriaCreateNestedOneWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoUncheckedCreateNestedManyWithoutProfessorInput
    areasAtuacao?: AreaAtuacaoUncheckedCreateNestedManyWithoutProfessorInput
    historia?: HistoriaUncheckedCreateNestedOneWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoUncheckedCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUpdateManyWithoutProfessorNestedInput
    areasAtuacao?: AreaAtuacaoUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUpdateOneWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUncheckedUpdateManyWithoutProfessorNestedInput
    areasAtuacao?: AreaAtuacaoUncheckedUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUncheckedUpdateOneWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUncheckedUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id?: number
    nome: string
    email: string
    descricao: string
    foto: string
  }

  export type ProfessorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type AlunaCreateInput = {
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    areaAtuacao?: AlunaHasAreaAtuacaoCreateNestedManyWithoutAlunaInput
    impactoProjeto?: ImpactoProjetoCreateNestedOneWithoutAlunaInput
    publicacoes?: AlunaHasPublicacaoCreateNestedManyWithoutAlunaInput
  }

  export type AlunaUncheckedCreateInput = {
    id?: number
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    areaAtuacao?: AlunaHasAreaAtuacaoUncheckedCreateNestedManyWithoutAlunaInput
    impactoProjeto?: ImpactoProjetoUncheckedCreateNestedOneWithoutAlunaInput
    publicacoes?: AlunaHasPublicacaoUncheckedCreateNestedManyWithoutAlunaInput
  }

  export type AlunaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: AlunaHasAreaAtuacaoUpdateManyWithoutAlunaNestedInput
    impactoProjeto?: ImpactoProjetoUpdateOneWithoutAlunaNestedInput
    publicacoes?: AlunaHasPublicacaoUpdateManyWithoutAlunaNestedInput
  }

  export type AlunaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAlunaNestedInput
    impactoProjeto?: ImpactoProjetoUncheckedUpdateOneWithoutAlunaNestedInput
    publicacoes?: AlunaHasPublicacaoUncheckedUpdateManyWithoutAlunaNestedInput
  }

  export type AlunaCreateManyInput = {
    id?: number
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
  }

  export type AlunaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
  }

  export type AlunaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
  }

  export type EventoCreateInput = {
    nome: string
    descricao: string
    professor: ProfessorCreateNestedOneWithoutEventoInput
    fotos?: FotoCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    professorId: number
    fotos?: FotoUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutEventoNestedInput
    fotos?: FotoUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
    fotos?: FotoUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    professorId: number
  }

  export type EventoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoCreateInput = {
    foto: Uint8Array
    evento: EventoCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateInput = {
    id?: number
    foto: Uint8Array
    idEvento: number
  }

  export type FotoUpdateInput = {
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    evento?: EventoUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    idEvento?: IntFieldUpdateOperationsInput | number
  }

  export type FotoCreateManyInput = {
    id?: number
    foto: Uint8Array
    idEvento: number
  }

  export type FotoUpdateManyMutationInput = {
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type FotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    idEvento?: IntFieldUpdateOperationsInput | number
  }

  export type ImprensaCreateInput = {
    nome_materia: string
    link: string
    midia: string
    foto: Uint8Array
  }

  export type ImprensaUncheckedCreateInput = {
    id?: number
    nome_materia: string
    link: string
    midia: string
    foto: Uint8Array
  }

  export type ImprensaUpdateInput = {
    nome_materia?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    midia?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type ImprensaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_materia?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    midia?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type ImprensaCreateManyInput = {
    id?: number
    nome_materia: string
    link: string
    midia: string
    foto: Uint8Array
  }

  export type ImprensaUpdateManyMutationInput = {
    nome_materia?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    midia?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type ImprensaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_materia?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    midia?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type EscolaCreateInput = {
    nome: string
    status: boolean
  }

  export type EscolaUncheckedCreateInput = {
    id?: number
    nome: string
    status: boolean
  }

  export type EscolaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EscolaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EscolaCreateManyInput = {
    id?: number
    nome: string
    status: boolean
  }

  export type EscolaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EscolaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PatrocinadorCreateInput = {
    nome: string
    descricao: string
    foto: Uint8Array
    link: string
  }

  export type PatrocinadorUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    foto: Uint8Array
    link: string
  }

  export type PatrocinadorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PatrocinadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PatrocinadorCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    foto: Uint8Array
    link: string
  }

  export type PatrocinadorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PatrocinadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoCreateInput = {
    email: string
    localizacao: string
  }

  export type ProjetoUncheckedCreateInput = {
    id?: number
    email: string
    localizacao: string
  }

  export type ProjetoUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoCreateManyInput = {
    id?: number
    email: string
    localizacao: string
  }

  export type ProjetoUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type ImpactoProjetoCreateInput = {
    descricao: string
    professor: ProfessorCreateNestedOneWithoutImpactoProjetoInput
    aluna: AlunaCreateNestedOneWithoutImpactoProjetoInput
  }

  export type ImpactoProjetoUncheckedCreateInput = {
    id?: number
    descricao: string
    idProfessor: number
    idAluna: number
  }

  export type ImpactoProjetoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutImpactoProjetoNestedInput
    aluna?: AlunaUpdateOneRequiredWithoutImpactoProjetoNestedInput
  }

  export type ImpactoProjetoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    idProfessor?: IntFieldUpdateOperationsInput | number
    idAluna?: IntFieldUpdateOperationsInput | number
  }

  export type ImpactoProjetoCreateManyInput = {
    id?: number
    descricao: string
    idProfessor: number
    idAluna: number
  }

  export type ImpactoProjetoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ImpactoProjetoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    idProfessor?: IntFieldUpdateOperationsInput | number
    idAluna?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaCreateInput = {
    data: Date | string
    descricao: string
    professor: ProfessorCreateNestedOneWithoutHistoriaInput
  }

  export type HistoriaUncheckedCreateInput = {
    id?: number
    data: Date | string
    descricao: string
    idProfessor: number
  }

  export type HistoriaUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutHistoriaNestedInput
  }

  export type HistoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaCreateManyInput = {
    id?: number
    data: Date | string
    descricao: string
    idProfessor: number
  }

  export type HistoriaUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type HistoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacaoCreateInput = {
    titulo: string
    link: string
    autor: string
    ano: Date | string
    idioma: string
    professor?: ProfessorHasPublicacaoCreateNestedManyWithoutPublicacaoInput
    aluna?: AlunaHasPublicacaoCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUncheckedCreateInput = {
    id?: number
    titulo: string
    link: string
    autor: string
    ano: Date | string
    idioma: string
    professor?: ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutPublicacaoInput
    aluna?: AlunaHasPublicacaoUncheckedCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: DateTimeFieldUpdateOperationsInput | Date | string
    idioma?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorHasPublicacaoUpdateManyWithoutPublicacaoNestedInput
    aluna?: AlunaHasPublicacaoUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: DateTimeFieldUpdateOperationsInput | Date | string
    idioma?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorHasPublicacaoUncheckedUpdateManyWithoutPublicacaoNestedInput
    aluna?: AlunaHasPublicacaoUncheckedUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoCreateManyInput = {
    id?: number
    titulo: string
    link: string
    autor: string
    ano: Date | string
    idioma: string
  }

  export type PublicacaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: DateTimeFieldUpdateOperationsInput | Date | string
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type PublicacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: DateTimeFieldUpdateOperationsInput | Date | string
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorHasPublicacaoCreateInput = {
    publicacao: PublicacaoCreateNestedOneWithoutProfessorInput
    professor: ProfessorCreateNestedOneWithoutPublicacoesInput
  }

  export type ProfessorHasPublicacaoUncheckedCreateInput = {
    idPublicacao: number
    idProfessor: number
  }

  export type ProfessorHasPublicacaoUpdateInput = {
    publicacao?: PublicacaoUpdateOneRequiredWithoutProfessorNestedInput
    professor?: ProfessorUpdateOneRequiredWithoutPublicacoesNestedInput
  }

  export type ProfessorHasPublicacaoUncheckedUpdateInput = {
    idPublicacao?: IntFieldUpdateOperationsInput | number
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessorHasPublicacaoCreateManyInput = {
    idPublicacao: number
    idProfessor: number
  }

  export type ProfessorHasPublicacaoUpdateManyMutationInput = {

  }

  export type ProfessorHasPublicacaoUncheckedUpdateManyInput = {
    idPublicacao?: IntFieldUpdateOperationsInput | number
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasPublicacaoCreateInput = {
    publicacao: PublicacaoCreateNestedOneWithoutAlunaInput
    aluna: AlunaCreateNestedOneWithoutPublicacoesInput
  }

  export type AlunaHasPublicacaoUncheckedCreateInput = {
    idPublicacao: number
    idAluna: number
  }

  export type AlunaHasPublicacaoUpdateInput = {
    publicacao?: PublicacaoUpdateOneRequiredWithoutAlunaNestedInput
    aluna?: AlunaUpdateOneRequiredWithoutPublicacoesNestedInput
  }

  export type AlunaHasPublicacaoUncheckedUpdateInput = {
    idPublicacao?: IntFieldUpdateOperationsInput | number
    idAluna?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasPublicacaoCreateManyInput = {
    idPublicacao: number
    idAluna: number
  }

  export type AlunaHasPublicacaoUpdateManyMutationInput = {

  }

  export type AlunaHasPublicacaoUncheckedUpdateManyInput = {
    idPublicacao?: IntFieldUpdateOperationsInput | number
    idAluna?: IntFieldUpdateOperationsInput | number
  }

  export type AreaAtuacaoCreateInput = {
    nome: string
    descricao: string
    professor: ProfessorCreateNestedOneWithoutAreasAtuacaoInput
    alunas?: AlunaHasAreaAtuacaoCreateNestedManyWithoutAreaAtuacaoInput
  }

  export type AreaAtuacaoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    idProfessor: number
    alunas?: AlunaHasAreaAtuacaoUncheckedCreateNestedManyWithoutAreaAtuacaoInput
  }

  export type AreaAtuacaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutAreasAtuacaoNestedInput
    alunas?: AlunaHasAreaAtuacaoUpdateManyWithoutAreaAtuacaoNestedInput
  }

  export type AreaAtuacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    idProfessor?: IntFieldUpdateOperationsInput | number
    alunas?: AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAreaAtuacaoNestedInput
  }

  export type AreaAtuacaoCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    idProfessor: number
  }

  export type AreaAtuacaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AreaAtuacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasAreaAtuacaoCreateInput = {
    aluna: AlunaCreateNestedOneWithoutAreaAtuacaoInput
    areaAtuacao: AreaAtuacaoCreateNestedOneWithoutAlunasInput
  }

  export type AlunaHasAreaAtuacaoUncheckedCreateInput = {
    idAluna: number
    idAreaAtuacao: number
  }

  export type AlunaHasAreaAtuacaoUpdateInput = {
    aluna?: AlunaUpdateOneRequiredWithoutAreaAtuacaoNestedInput
    areaAtuacao?: AreaAtuacaoUpdateOneRequiredWithoutAlunasNestedInput
  }

  export type AlunaHasAreaAtuacaoUncheckedUpdateInput = {
    idAluna?: IntFieldUpdateOperationsInput | number
    idAreaAtuacao?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasAreaAtuacaoCreateManyInput = {
    idAluna: number
    idAreaAtuacao: number
  }

  export type AlunaHasAreaAtuacaoUpdateManyMutationInput = {

  }

  export type AlunaHasAreaAtuacaoUncheckedUpdateManyInput = {
    idAluna?: IntFieldUpdateOperationsInput | number
    idAreaAtuacao?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EventoListRelationFilter = {
    every?: EventoWhereInput
    some?: EventoWhereInput
    none?: EventoWhereInput
  }

  export type AreaAtuacaoListRelationFilter = {
    every?: AreaAtuacaoWhereInput
    some?: AreaAtuacaoWhereInput
    none?: AreaAtuacaoWhereInput
  }

  export type HistoriaNullableScalarRelationFilter = {
    is?: HistoriaWhereInput | null
    isNot?: HistoriaWhereInput | null
  }

  export type ImpactoProjetoNullableScalarRelationFilter = {
    is?: ImpactoProjetoWhereInput | null
    isNot?: ImpactoProjetoWhereInput | null
  }

  export type ProfessorHasPublicacaoListRelationFilter = {
    every?: ProfessorHasPublicacaoWhereInput
    some?: ProfessorHasPublicacaoWhereInput
    none?: ProfessorHasPublicacaoWhereInput
  }

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaAtuacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorHasPublicacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type AlunaHasAreaAtuacaoListRelationFilter = {
    every?: AlunaHasAreaAtuacaoWhereInput
    some?: AlunaHasAreaAtuacaoWhereInput
    none?: AlunaHasAreaAtuacaoWhereInput
  }

  export type AlunaHasPublicacaoListRelationFilter = {
    every?: AlunaHasPublicacaoWhereInput
    some?: AlunaHasPublicacaoWhereInput
    none?: AlunaHasPublicacaoWhereInput
  }

  export type AlunaHasAreaAtuacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunaHasPublicacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    linkedin?: SortOrder
    foto?: SortOrder
    relato?: SortOrder
  }

  export type AlunaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlunaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    linkedin?: SortOrder
    foto?: SortOrder
    relato?: SortOrder
  }

  export type AlunaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    linkedin?: SortOrder
    foto?: SortOrder
    relato?: SortOrder
  }

  export type AlunaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type FotoListRelationFilter = {
    every?: FotoWhereInput
    some?: FotoWhereInput
    none?: FotoWhereInput
  }

  export type FotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    professorId?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    id?: SortOrder
    professorId?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    professorId?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    professorId?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
    professorId?: SortOrder
  }

  export type EventoScalarRelationFilter = {
    is?: EventoWhereInput
    isNot?: EventoWhereInput
  }

  export type FotoCountOrderByAggregateInput = {
    id?: SortOrder
    foto?: SortOrder
    idEvento?: SortOrder
  }

  export type FotoAvgOrderByAggregateInput = {
    id?: SortOrder
    idEvento?: SortOrder
  }

  export type FotoMaxOrderByAggregateInput = {
    id?: SortOrder
    foto?: SortOrder
    idEvento?: SortOrder
  }

  export type FotoMinOrderByAggregateInput = {
    id?: SortOrder
    foto?: SortOrder
    idEvento?: SortOrder
  }

  export type FotoSumOrderByAggregateInput = {
    id?: SortOrder
    idEvento?: SortOrder
  }

  export type ImprensaCountOrderByAggregateInput = {
    id?: SortOrder
    nome_materia?: SortOrder
    link?: SortOrder
    midia?: SortOrder
    foto?: SortOrder
  }

  export type ImprensaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImprensaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_materia?: SortOrder
    link?: SortOrder
    midia?: SortOrder
    foto?: SortOrder
  }

  export type ImprensaMinOrderByAggregateInput = {
    id?: SortOrder
    nome_materia?: SortOrder
    link?: SortOrder
    midia?: SortOrder
    foto?: SortOrder
  }

  export type ImprensaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EscolaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
  }

  export type EscolaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EscolaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
  }

  export type EscolaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
  }

  export type EscolaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PatrocinadorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    link?: SortOrder
  }

  export type PatrocinadorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatrocinadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    link?: SortOrder
  }

  export type PatrocinadorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    link?: SortOrder
  }

  export type PatrocinadorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjetoCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    localizacao?: SortOrder
  }

  export type ProjetoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjetoMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    localizacao?: SortOrder
  }

  export type ProjetoMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    localizacao?: SortOrder
  }

  export type ProjetoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlunaScalarRelationFilter = {
    is?: AlunaWhereInput
    isNot?: AlunaWhereInput
  }

  export type ImpactoProjetoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    idAluna?: SortOrder
  }

  export type ImpactoProjetoAvgOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
    idAluna?: SortOrder
  }

  export type ImpactoProjetoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    idAluna?: SortOrder
  }

  export type ImpactoProjetoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
    idAluna?: SortOrder
  }

  export type ImpactoProjetoSumOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
    idAluna?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HistoriaCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
  }

  export type HistoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
  }

  export type HistoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
  }

  export type HistoriaMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
  }

  export type HistoriaSumOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PublicacaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    link?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
    idioma?: SortOrder
  }

  export type PublicacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublicacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    link?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
    idioma?: SortOrder
  }

  export type PublicacaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    link?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
    idioma?: SortOrder
  }

  export type PublicacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublicacaoScalarRelationFilter = {
    is?: PublicacaoWhereInput
    isNot?: PublicacaoWhereInput
  }

  export type ProfessorHasPublicacaoIdProfessorIdPublicacaoCompoundUniqueInput = {
    idProfessor: number
    idPublicacao: number
  }

  export type ProfessorHasPublicacaoCountOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idProfessor?: SortOrder
  }

  export type ProfessorHasPublicacaoAvgOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idProfessor?: SortOrder
  }

  export type ProfessorHasPublicacaoMaxOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idProfessor?: SortOrder
  }

  export type ProfessorHasPublicacaoMinOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idProfessor?: SortOrder
  }

  export type ProfessorHasPublicacaoSumOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idProfessor?: SortOrder
  }

  export type AlunaHasPublicacaoIdAlunaIdPublicacaoCompoundUniqueInput = {
    idAluna: number
    idPublicacao: number
  }

  export type AlunaHasPublicacaoCountOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idAluna?: SortOrder
  }

  export type AlunaHasPublicacaoAvgOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idAluna?: SortOrder
  }

  export type AlunaHasPublicacaoMaxOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idAluna?: SortOrder
  }

  export type AlunaHasPublicacaoMinOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idAluna?: SortOrder
  }

  export type AlunaHasPublicacaoSumOrderByAggregateInput = {
    idPublicacao?: SortOrder
    idAluna?: SortOrder
  }

  export type AreaAtuacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
  }

  export type AreaAtuacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
  }

  export type AreaAtuacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
  }

  export type AreaAtuacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    idProfessor?: SortOrder
  }

  export type AreaAtuacaoSumOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
  }

  export type AreaAtuacaoScalarRelationFilter = {
    is?: AreaAtuacaoWhereInput
    isNot?: AreaAtuacaoWhereInput
  }

  export type AlunaHasAreaAtuacaoIdAlunaIdAreaAtuacaoCompoundUniqueInput = {
    idAluna: number
    idAreaAtuacao: number
  }

  export type AlunaHasAreaAtuacaoCountOrderByAggregateInput = {
    idAluna?: SortOrder
    idAreaAtuacao?: SortOrder
  }

  export type AlunaHasAreaAtuacaoAvgOrderByAggregateInput = {
    idAluna?: SortOrder
    idAreaAtuacao?: SortOrder
  }

  export type AlunaHasAreaAtuacaoMaxOrderByAggregateInput = {
    idAluna?: SortOrder
    idAreaAtuacao?: SortOrder
  }

  export type AlunaHasAreaAtuacaoMinOrderByAggregateInput = {
    idAluna?: SortOrder
    idAreaAtuacao?: SortOrder
  }

  export type AlunaHasAreaAtuacaoSumOrderByAggregateInput = {
    idAluna?: SortOrder
    idAreaAtuacao?: SortOrder
  }

  export type EventoCreateNestedManyWithoutProfessorInput = {
    create?: XOR<EventoCreateWithoutProfessorInput, EventoUncheckedCreateWithoutProfessorInput> | EventoCreateWithoutProfessorInput[] | EventoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutProfessorInput | EventoCreateOrConnectWithoutProfessorInput[]
    createMany?: EventoCreateManyProfessorInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type AreaAtuacaoCreateNestedManyWithoutProfessorInput = {
    create?: XOR<AreaAtuacaoCreateWithoutProfessorInput, AreaAtuacaoUncheckedCreateWithoutProfessorInput> | AreaAtuacaoCreateWithoutProfessorInput[] | AreaAtuacaoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AreaAtuacaoCreateOrConnectWithoutProfessorInput | AreaAtuacaoCreateOrConnectWithoutProfessorInput[]
    createMany?: AreaAtuacaoCreateManyProfessorInputEnvelope
    connect?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
  }

  export type HistoriaCreateNestedOneWithoutProfessorInput = {
    create?: XOR<HistoriaCreateWithoutProfessorInput, HistoriaUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: HistoriaCreateOrConnectWithoutProfessorInput
    connect?: HistoriaWhereUniqueInput
  }

  export type ImpactoProjetoCreateNestedOneWithoutProfessorInput = {
    create?: XOR<ImpactoProjetoCreateWithoutProfessorInput, ImpactoProjetoUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: ImpactoProjetoCreateOrConnectWithoutProfessorInput
    connect?: ImpactoProjetoWhereUniqueInput
  }

  export type ProfessorHasPublicacaoCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfessorHasPublicacaoCreateWithoutProfessorInput, ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput> | ProfessorHasPublicacaoCreateWithoutProfessorInput[] | ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput | ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfessorHasPublicacaoCreateManyProfessorInputEnvelope
    connect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<EventoCreateWithoutProfessorInput, EventoUncheckedCreateWithoutProfessorInput> | EventoCreateWithoutProfessorInput[] | EventoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutProfessorInput | EventoCreateOrConnectWithoutProfessorInput[]
    createMany?: EventoCreateManyProfessorInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type AreaAtuacaoUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<AreaAtuacaoCreateWithoutProfessorInput, AreaAtuacaoUncheckedCreateWithoutProfessorInput> | AreaAtuacaoCreateWithoutProfessorInput[] | AreaAtuacaoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AreaAtuacaoCreateOrConnectWithoutProfessorInput | AreaAtuacaoCreateOrConnectWithoutProfessorInput[]
    createMany?: AreaAtuacaoCreateManyProfessorInputEnvelope
    connect?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
  }

  export type HistoriaUncheckedCreateNestedOneWithoutProfessorInput = {
    create?: XOR<HistoriaCreateWithoutProfessorInput, HistoriaUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: HistoriaCreateOrConnectWithoutProfessorInput
    connect?: HistoriaWhereUniqueInput
  }

  export type ImpactoProjetoUncheckedCreateNestedOneWithoutProfessorInput = {
    create?: XOR<ImpactoProjetoCreateWithoutProfessorInput, ImpactoProjetoUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: ImpactoProjetoCreateOrConnectWithoutProfessorInput
    connect?: ImpactoProjetoWhereUniqueInput
  }

  export type ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfessorHasPublicacaoCreateWithoutProfessorInput, ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput> | ProfessorHasPublicacaoCreateWithoutProfessorInput[] | ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput | ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfessorHasPublicacaoCreateManyProfessorInputEnvelope
    connect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EventoUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<EventoCreateWithoutProfessorInput, EventoUncheckedCreateWithoutProfessorInput> | EventoCreateWithoutProfessorInput[] | EventoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutProfessorInput | EventoCreateOrConnectWithoutProfessorInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutProfessorInput | EventoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: EventoCreateManyProfessorInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutProfessorInput | EventoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutProfessorInput | EventoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type AreaAtuacaoUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<AreaAtuacaoCreateWithoutProfessorInput, AreaAtuacaoUncheckedCreateWithoutProfessorInput> | AreaAtuacaoCreateWithoutProfessorInput[] | AreaAtuacaoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AreaAtuacaoCreateOrConnectWithoutProfessorInput | AreaAtuacaoCreateOrConnectWithoutProfessorInput[]
    upsert?: AreaAtuacaoUpsertWithWhereUniqueWithoutProfessorInput | AreaAtuacaoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: AreaAtuacaoCreateManyProfessorInputEnvelope
    set?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
    disconnect?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
    delete?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
    connect?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
    update?: AreaAtuacaoUpdateWithWhereUniqueWithoutProfessorInput | AreaAtuacaoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: AreaAtuacaoUpdateManyWithWhereWithoutProfessorInput | AreaAtuacaoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: AreaAtuacaoScalarWhereInput | AreaAtuacaoScalarWhereInput[]
  }

  export type HistoriaUpdateOneWithoutProfessorNestedInput = {
    create?: XOR<HistoriaCreateWithoutProfessorInput, HistoriaUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: HistoriaCreateOrConnectWithoutProfessorInput
    upsert?: HistoriaUpsertWithoutProfessorInput
    disconnect?: HistoriaWhereInput | boolean
    delete?: HistoriaWhereInput | boolean
    connect?: HistoriaWhereUniqueInput
    update?: XOR<XOR<HistoriaUpdateToOneWithWhereWithoutProfessorInput, HistoriaUpdateWithoutProfessorInput>, HistoriaUncheckedUpdateWithoutProfessorInput>
  }

  export type ImpactoProjetoUpdateOneWithoutProfessorNestedInput = {
    create?: XOR<ImpactoProjetoCreateWithoutProfessorInput, ImpactoProjetoUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: ImpactoProjetoCreateOrConnectWithoutProfessorInput
    upsert?: ImpactoProjetoUpsertWithoutProfessorInput
    disconnect?: ImpactoProjetoWhereInput | boolean
    delete?: ImpactoProjetoWhereInput | boolean
    connect?: ImpactoProjetoWhereUniqueInput
    update?: XOR<XOR<ImpactoProjetoUpdateToOneWithWhereWithoutProfessorInput, ImpactoProjetoUpdateWithoutProfessorInput>, ImpactoProjetoUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfessorHasPublicacaoUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfessorHasPublicacaoCreateWithoutProfessorInput, ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput> | ProfessorHasPublicacaoCreateWithoutProfessorInput[] | ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput | ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutProfessorInput | ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfessorHasPublicacaoCreateManyProfessorInputEnvelope
    set?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    disconnect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    delete?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    connect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    update?: ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutProfessorInput | ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfessorHasPublicacaoUpdateManyWithWhereWithoutProfessorInput | ProfessorHasPublicacaoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfessorHasPublicacaoScalarWhereInput | ProfessorHasPublicacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventoUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<EventoCreateWithoutProfessorInput, EventoUncheckedCreateWithoutProfessorInput> | EventoCreateWithoutProfessorInput[] | EventoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutProfessorInput | EventoCreateOrConnectWithoutProfessorInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutProfessorInput | EventoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: EventoCreateManyProfessorInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutProfessorInput | EventoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutProfessorInput | EventoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type AreaAtuacaoUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<AreaAtuacaoCreateWithoutProfessorInput, AreaAtuacaoUncheckedCreateWithoutProfessorInput> | AreaAtuacaoCreateWithoutProfessorInput[] | AreaAtuacaoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AreaAtuacaoCreateOrConnectWithoutProfessorInput | AreaAtuacaoCreateOrConnectWithoutProfessorInput[]
    upsert?: AreaAtuacaoUpsertWithWhereUniqueWithoutProfessorInput | AreaAtuacaoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: AreaAtuacaoCreateManyProfessorInputEnvelope
    set?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
    disconnect?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
    delete?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
    connect?: AreaAtuacaoWhereUniqueInput | AreaAtuacaoWhereUniqueInput[]
    update?: AreaAtuacaoUpdateWithWhereUniqueWithoutProfessorInput | AreaAtuacaoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: AreaAtuacaoUpdateManyWithWhereWithoutProfessorInput | AreaAtuacaoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: AreaAtuacaoScalarWhereInput | AreaAtuacaoScalarWhereInput[]
  }

  export type HistoriaUncheckedUpdateOneWithoutProfessorNestedInput = {
    create?: XOR<HistoriaCreateWithoutProfessorInput, HistoriaUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: HistoriaCreateOrConnectWithoutProfessorInput
    upsert?: HistoriaUpsertWithoutProfessorInput
    disconnect?: HistoriaWhereInput | boolean
    delete?: HistoriaWhereInput | boolean
    connect?: HistoriaWhereUniqueInput
    update?: XOR<XOR<HistoriaUpdateToOneWithWhereWithoutProfessorInput, HistoriaUpdateWithoutProfessorInput>, HistoriaUncheckedUpdateWithoutProfessorInput>
  }

  export type ImpactoProjetoUncheckedUpdateOneWithoutProfessorNestedInput = {
    create?: XOR<ImpactoProjetoCreateWithoutProfessorInput, ImpactoProjetoUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: ImpactoProjetoCreateOrConnectWithoutProfessorInput
    upsert?: ImpactoProjetoUpsertWithoutProfessorInput
    disconnect?: ImpactoProjetoWhereInput | boolean
    delete?: ImpactoProjetoWhereInput | boolean
    connect?: ImpactoProjetoWhereUniqueInput
    update?: XOR<XOR<ImpactoProjetoUpdateToOneWithWhereWithoutProfessorInput, ImpactoProjetoUpdateWithoutProfessorInput>, ImpactoProjetoUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfessorHasPublicacaoUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfessorHasPublicacaoCreateWithoutProfessorInput, ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput> | ProfessorHasPublicacaoCreateWithoutProfessorInput[] | ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput | ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutProfessorInput | ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfessorHasPublicacaoCreateManyProfessorInputEnvelope
    set?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    disconnect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    delete?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    connect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    update?: ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutProfessorInput | ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfessorHasPublicacaoUpdateManyWithWhereWithoutProfessorInput | ProfessorHasPublicacaoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfessorHasPublicacaoScalarWhereInput | ProfessorHasPublicacaoScalarWhereInput[]
  }

  export type AlunaHasAreaAtuacaoCreateNestedManyWithoutAlunaInput = {
    create?: XOR<AlunaHasAreaAtuacaoCreateWithoutAlunaInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput> | AlunaHasAreaAtuacaoCreateWithoutAlunaInput[] | AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput[]
    connectOrCreate?: AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput | AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput[]
    createMany?: AlunaHasAreaAtuacaoCreateManyAlunaInputEnvelope
    connect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
  }

  export type ImpactoProjetoCreateNestedOneWithoutAlunaInput = {
    create?: XOR<ImpactoProjetoCreateWithoutAlunaInput, ImpactoProjetoUncheckedCreateWithoutAlunaInput>
    connectOrCreate?: ImpactoProjetoCreateOrConnectWithoutAlunaInput
    connect?: ImpactoProjetoWhereUniqueInput
  }

  export type AlunaHasPublicacaoCreateNestedManyWithoutAlunaInput = {
    create?: XOR<AlunaHasPublicacaoCreateWithoutAlunaInput, AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput> | AlunaHasPublicacaoCreateWithoutAlunaInput[] | AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput[]
    connectOrCreate?: AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput | AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput[]
    createMany?: AlunaHasPublicacaoCreateManyAlunaInputEnvelope
    connect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
  }

  export type AlunaHasAreaAtuacaoUncheckedCreateNestedManyWithoutAlunaInput = {
    create?: XOR<AlunaHasAreaAtuacaoCreateWithoutAlunaInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput> | AlunaHasAreaAtuacaoCreateWithoutAlunaInput[] | AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput[]
    connectOrCreate?: AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput | AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput[]
    createMany?: AlunaHasAreaAtuacaoCreateManyAlunaInputEnvelope
    connect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
  }

  export type ImpactoProjetoUncheckedCreateNestedOneWithoutAlunaInput = {
    create?: XOR<ImpactoProjetoCreateWithoutAlunaInput, ImpactoProjetoUncheckedCreateWithoutAlunaInput>
    connectOrCreate?: ImpactoProjetoCreateOrConnectWithoutAlunaInput
    connect?: ImpactoProjetoWhereUniqueInput
  }

  export type AlunaHasPublicacaoUncheckedCreateNestedManyWithoutAlunaInput = {
    create?: XOR<AlunaHasPublicacaoCreateWithoutAlunaInput, AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput> | AlunaHasPublicacaoCreateWithoutAlunaInput[] | AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput[]
    connectOrCreate?: AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput | AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput[]
    createMany?: AlunaHasPublicacaoCreateManyAlunaInputEnvelope
    connect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type AlunaHasAreaAtuacaoUpdateManyWithoutAlunaNestedInput = {
    create?: XOR<AlunaHasAreaAtuacaoCreateWithoutAlunaInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput> | AlunaHasAreaAtuacaoCreateWithoutAlunaInput[] | AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput[]
    connectOrCreate?: AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput | AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput[]
    upsert?: AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAlunaInput | AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAlunaInput[]
    createMany?: AlunaHasAreaAtuacaoCreateManyAlunaInputEnvelope
    set?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    disconnect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    delete?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    connect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    update?: AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAlunaInput | AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAlunaInput[]
    updateMany?: AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAlunaInput | AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAlunaInput[]
    deleteMany?: AlunaHasAreaAtuacaoScalarWhereInput | AlunaHasAreaAtuacaoScalarWhereInput[]
  }

  export type ImpactoProjetoUpdateOneWithoutAlunaNestedInput = {
    create?: XOR<ImpactoProjetoCreateWithoutAlunaInput, ImpactoProjetoUncheckedCreateWithoutAlunaInput>
    connectOrCreate?: ImpactoProjetoCreateOrConnectWithoutAlunaInput
    upsert?: ImpactoProjetoUpsertWithoutAlunaInput
    disconnect?: ImpactoProjetoWhereInput | boolean
    delete?: ImpactoProjetoWhereInput | boolean
    connect?: ImpactoProjetoWhereUniqueInput
    update?: XOR<XOR<ImpactoProjetoUpdateToOneWithWhereWithoutAlunaInput, ImpactoProjetoUpdateWithoutAlunaInput>, ImpactoProjetoUncheckedUpdateWithoutAlunaInput>
  }

  export type AlunaHasPublicacaoUpdateManyWithoutAlunaNestedInput = {
    create?: XOR<AlunaHasPublicacaoCreateWithoutAlunaInput, AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput> | AlunaHasPublicacaoCreateWithoutAlunaInput[] | AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput[]
    connectOrCreate?: AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput | AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput[]
    upsert?: AlunaHasPublicacaoUpsertWithWhereUniqueWithoutAlunaInput | AlunaHasPublicacaoUpsertWithWhereUniqueWithoutAlunaInput[]
    createMany?: AlunaHasPublicacaoCreateManyAlunaInputEnvelope
    set?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    disconnect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    delete?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    connect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    update?: AlunaHasPublicacaoUpdateWithWhereUniqueWithoutAlunaInput | AlunaHasPublicacaoUpdateWithWhereUniqueWithoutAlunaInput[]
    updateMany?: AlunaHasPublicacaoUpdateManyWithWhereWithoutAlunaInput | AlunaHasPublicacaoUpdateManyWithWhereWithoutAlunaInput[]
    deleteMany?: AlunaHasPublicacaoScalarWhereInput | AlunaHasPublicacaoScalarWhereInput[]
  }

  export type AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAlunaNestedInput = {
    create?: XOR<AlunaHasAreaAtuacaoCreateWithoutAlunaInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput> | AlunaHasAreaAtuacaoCreateWithoutAlunaInput[] | AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput[]
    connectOrCreate?: AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput | AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput[]
    upsert?: AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAlunaInput | AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAlunaInput[]
    createMany?: AlunaHasAreaAtuacaoCreateManyAlunaInputEnvelope
    set?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    disconnect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    delete?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    connect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    update?: AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAlunaInput | AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAlunaInput[]
    updateMany?: AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAlunaInput | AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAlunaInput[]
    deleteMany?: AlunaHasAreaAtuacaoScalarWhereInput | AlunaHasAreaAtuacaoScalarWhereInput[]
  }

  export type ImpactoProjetoUncheckedUpdateOneWithoutAlunaNestedInput = {
    create?: XOR<ImpactoProjetoCreateWithoutAlunaInput, ImpactoProjetoUncheckedCreateWithoutAlunaInput>
    connectOrCreate?: ImpactoProjetoCreateOrConnectWithoutAlunaInput
    upsert?: ImpactoProjetoUpsertWithoutAlunaInput
    disconnect?: ImpactoProjetoWhereInput | boolean
    delete?: ImpactoProjetoWhereInput | boolean
    connect?: ImpactoProjetoWhereUniqueInput
    update?: XOR<XOR<ImpactoProjetoUpdateToOneWithWhereWithoutAlunaInput, ImpactoProjetoUpdateWithoutAlunaInput>, ImpactoProjetoUncheckedUpdateWithoutAlunaInput>
  }

  export type AlunaHasPublicacaoUncheckedUpdateManyWithoutAlunaNestedInput = {
    create?: XOR<AlunaHasPublicacaoCreateWithoutAlunaInput, AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput> | AlunaHasPublicacaoCreateWithoutAlunaInput[] | AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput[]
    connectOrCreate?: AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput | AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput[]
    upsert?: AlunaHasPublicacaoUpsertWithWhereUniqueWithoutAlunaInput | AlunaHasPublicacaoUpsertWithWhereUniqueWithoutAlunaInput[]
    createMany?: AlunaHasPublicacaoCreateManyAlunaInputEnvelope
    set?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    disconnect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    delete?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    connect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    update?: AlunaHasPublicacaoUpdateWithWhereUniqueWithoutAlunaInput | AlunaHasPublicacaoUpdateWithWhereUniqueWithoutAlunaInput[]
    updateMany?: AlunaHasPublicacaoUpdateManyWithWhereWithoutAlunaInput | AlunaHasPublicacaoUpdateManyWithWhereWithoutAlunaInput[]
    deleteMany?: AlunaHasPublicacaoScalarWhereInput | AlunaHasPublicacaoScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutEventoInput = {
    create?: XOR<ProfessorCreateWithoutEventoInput, ProfessorUncheckedCreateWithoutEventoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutEventoInput
    connect?: ProfessorWhereUniqueInput
  }

  export type FotoCreateNestedManyWithoutEventoInput = {
    create?: XOR<FotoCreateWithoutEventoInput, FotoUncheckedCreateWithoutEventoInput> | FotoCreateWithoutEventoInput[] | FotoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutEventoInput | FotoCreateOrConnectWithoutEventoInput[]
    createMany?: FotoCreateManyEventoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<FotoCreateWithoutEventoInput, FotoUncheckedCreateWithoutEventoInput> | FotoCreateWithoutEventoInput[] | FotoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutEventoInput | FotoCreateOrConnectWithoutEventoInput[]
    createMany?: FotoCreateManyEventoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type ProfessorUpdateOneRequiredWithoutEventoNestedInput = {
    create?: XOR<ProfessorCreateWithoutEventoInput, ProfessorUncheckedCreateWithoutEventoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutEventoInput
    upsert?: ProfessorUpsertWithoutEventoInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutEventoInput, ProfessorUpdateWithoutEventoInput>, ProfessorUncheckedUpdateWithoutEventoInput>
  }

  export type FotoUpdateManyWithoutEventoNestedInput = {
    create?: XOR<FotoCreateWithoutEventoInput, FotoUncheckedCreateWithoutEventoInput> | FotoCreateWithoutEventoInput[] | FotoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutEventoInput | FotoCreateOrConnectWithoutEventoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutEventoInput | FotoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: FotoCreateManyEventoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutEventoInput | FotoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutEventoInput | FotoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<FotoCreateWithoutEventoInput, FotoUncheckedCreateWithoutEventoInput> | FotoCreateWithoutEventoInput[] | FotoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutEventoInput | FotoCreateOrConnectWithoutEventoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutEventoInput | FotoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: FotoCreateManyEventoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutEventoInput | FotoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutEventoInput | FotoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type EventoCreateNestedOneWithoutFotosInput = {
    create?: XOR<EventoCreateWithoutFotosInput, EventoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: EventoCreateOrConnectWithoutFotosInput
    connect?: EventoWhereUniqueInput
  }

  export type EventoUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<EventoCreateWithoutFotosInput, EventoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: EventoCreateOrConnectWithoutFotosInput
    upsert?: EventoUpsertWithoutFotosInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutFotosInput, EventoUpdateWithoutFotosInput>, EventoUncheckedUpdateWithoutFotosInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfessorCreateNestedOneWithoutImpactoProjetoInput = {
    create?: XOR<ProfessorCreateWithoutImpactoProjetoInput, ProfessorUncheckedCreateWithoutImpactoProjetoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutImpactoProjetoInput
    connect?: ProfessorWhereUniqueInput
  }

  export type AlunaCreateNestedOneWithoutImpactoProjetoInput = {
    create?: XOR<AlunaCreateWithoutImpactoProjetoInput, AlunaUncheckedCreateWithoutImpactoProjetoInput>
    connectOrCreate?: AlunaCreateOrConnectWithoutImpactoProjetoInput
    connect?: AlunaWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutImpactoProjetoNestedInput = {
    create?: XOR<ProfessorCreateWithoutImpactoProjetoInput, ProfessorUncheckedCreateWithoutImpactoProjetoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutImpactoProjetoInput
    upsert?: ProfessorUpsertWithoutImpactoProjetoInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutImpactoProjetoInput, ProfessorUpdateWithoutImpactoProjetoInput>, ProfessorUncheckedUpdateWithoutImpactoProjetoInput>
  }

  export type AlunaUpdateOneRequiredWithoutImpactoProjetoNestedInput = {
    create?: XOR<AlunaCreateWithoutImpactoProjetoInput, AlunaUncheckedCreateWithoutImpactoProjetoInput>
    connectOrCreate?: AlunaCreateOrConnectWithoutImpactoProjetoInput
    upsert?: AlunaUpsertWithoutImpactoProjetoInput
    connect?: AlunaWhereUniqueInput
    update?: XOR<XOR<AlunaUpdateToOneWithWhereWithoutImpactoProjetoInput, AlunaUpdateWithoutImpactoProjetoInput>, AlunaUncheckedUpdateWithoutImpactoProjetoInput>
  }

  export type ProfessorCreateNestedOneWithoutHistoriaInput = {
    create?: XOR<ProfessorCreateWithoutHistoriaInput, ProfessorUncheckedCreateWithoutHistoriaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutHistoriaInput
    connect?: ProfessorWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfessorUpdateOneRequiredWithoutHistoriaNestedInput = {
    create?: XOR<ProfessorCreateWithoutHistoriaInput, ProfessorUncheckedCreateWithoutHistoriaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutHistoriaInput
    upsert?: ProfessorUpsertWithoutHistoriaInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutHistoriaInput, ProfessorUpdateWithoutHistoriaInput>, ProfessorUncheckedUpdateWithoutHistoriaInput>
  }

  export type ProfessorHasPublicacaoCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<ProfessorHasPublicacaoCreateWithoutPublicacaoInput, ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput> | ProfessorHasPublicacaoCreateWithoutPublicacaoInput[] | ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput | ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput[]
    createMany?: ProfessorHasPublicacaoCreateManyPublicacaoInputEnvelope
    connect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
  }

  export type AlunaHasPublicacaoCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<AlunaHasPublicacaoCreateWithoutPublicacaoInput, AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput> | AlunaHasPublicacaoCreateWithoutPublicacaoInput[] | AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput | AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput[]
    createMany?: AlunaHasPublicacaoCreateManyPublicacaoInputEnvelope
    connect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
  }

  export type ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<ProfessorHasPublicacaoCreateWithoutPublicacaoInput, ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput> | ProfessorHasPublicacaoCreateWithoutPublicacaoInput[] | ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput | ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput[]
    createMany?: ProfessorHasPublicacaoCreateManyPublicacaoInputEnvelope
    connect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
  }

  export type AlunaHasPublicacaoUncheckedCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<AlunaHasPublicacaoCreateWithoutPublicacaoInput, AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput> | AlunaHasPublicacaoCreateWithoutPublicacaoInput[] | AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput | AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput[]
    createMany?: AlunaHasPublicacaoCreateManyPublicacaoInputEnvelope
    connect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
  }

  export type ProfessorHasPublicacaoUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<ProfessorHasPublicacaoCreateWithoutPublicacaoInput, ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput> | ProfessorHasPublicacaoCreateWithoutPublicacaoInput[] | ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput | ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput[]
    upsert?: ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput | ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: ProfessorHasPublicacaoCreateManyPublicacaoInputEnvelope
    set?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    disconnect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    delete?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    connect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    update?: ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput | ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: ProfessorHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput | ProfessorHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: ProfessorHasPublicacaoScalarWhereInput | ProfessorHasPublicacaoScalarWhereInput[]
  }

  export type AlunaHasPublicacaoUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<AlunaHasPublicacaoCreateWithoutPublicacaoInput, AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput> | AlunaHasPublicacaoCreateWithoutPublicacaoInput[] | AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput | AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput[]
    upsert?: AlunaHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput | AlunaHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: AlunaHasPublicacaoCreateManyPublicacaoInputEnvelope
    set?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    disconnect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    delete?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    connect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    update?: AlunaHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput | AlunaHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: AlunaHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput | AlunaHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: AlunaHasPublicacaoScalarWhereInput | AlunaHasPublicacaoScalarWhereInput[]
  }

  export type ProfessorHasPublicacaoUncheckedUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<ProfessorHasPublicacaoCreateWithoutPublicacaoInput, ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput> | ProfessorHasPublicacaoCreateWithoutPublicacaoInput[] | ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput | ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput[]
    upsert?: ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput | ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: ProfessorHasPublicacaoCreateManyPublicacaoInputEnvelope
    set?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    disconnect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    delete?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    connect?: ProfessorHasPublicacaoWhereUniqueInput | ProfessorHasPublicacaoWhereUniqueInput[]
    update?: ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput | ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: ProfessorHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput | ProfessorHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: ProfessorHasPublicacaoScalarWhereInput | ProfessorHasPublicacaoScalarWhereInput[]
  }

  export type AlunaHasPublicacaoUncheckedUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<AlunaHasPublicacaoCreateWithoutPublicacaoInput, AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput> | AlunaHasPublicacaoCreateWithoutPublicacaoInput[] | AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput | AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput[]
    upsert?: AlunaHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput | AlunaHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: AlunaHasPublicacaoCreateManyPublicacaoInputEnvelope
    set?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    disconnect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    delete?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    connect?: AlunaHasPublicacaoWhereUniqueInput | AlunaHasPublicacaoWhereUniqueInput[]
    update?: AlunaHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput | AlunaHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: AlunaHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput | AlunaHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: AlunaHasPublicacaoScalarWhereInput | AlunaHasPublicacaoScalarWhereInput[]
  }

  export type PublicacaoCreateNestedOneWithoutProfessorInput = {
    create?: XOR<PublicacaoCreateWithoutProfessorInput, PublicacaoUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutProfessorInput
    connect?: PublicacaoWhereUniqueInput
  }

  export type ProfessorCreateNestedOneWithoutPublicacoesInput = {
    create?: XOR<ProfessorCreateWithoutPublicacoesInput, ProfessorUncheckedCreateWithoutPublicacoesInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutPublicacoesInput
    connect?: ProfessorWhereUniqueInput
  }

  export type PublicacaoUpdateOneRequiredWithoutProfessorNestedInput = {
    create?: XOR<PublicacaoCreateWithoutProfessorInput, PublicacaoUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutProfessorInput
    upsert?: PublicacaoUpsertWithoutProfessorInput
    connect?: PublicacaoWhereUniqueInput
    update?: XOR<XOR<PublicacaoUpdateToOneWithWhereWithoutProfessorInput, PublicacaoUpdateWithoutProfessorInput>, PublicacaoUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfessorUpdateOneRequiredWithoutPublicacoesNestedInput = {
    create?: XOR<ProfessorCreateWithoutPublicacoesInput, ProfessorUncheckedCreateWithoutPublicacoesInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutPublicacoesInput
    upsert?: ProfessorUpsertWithoutPublicacoesInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutPublicacoesInput, ProfessorUpdateWithoutPublicacoesInput>, ProfessorUncheckedUpdateWithoutPublicacoesInput>
  }

  export type PublicacaoCreateNestedOneWithoutAlunaInput = {
    create?: XOR<PublicacaoCreateWithoutAlunaInput, PublicacaoUncheckedCreateWithoutAlunaInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutAlunaInput
    connect?: PublicacaoWhereUniqueInput
  }

  export type AlunaCreateNestedOneWithoutPublicacoesInput = {
    create?: XOR<AlunaCreateWithoutPublicacoesInput, AlunaUncheckedCreateWithoutPublicacoesInput>
    connectOrCreate?: AlunaCreateOrConnectWithoutPublicacoesInput
    connect?: AlunaWhereUniqueInput
  }

  export type PublicacaoUpdateOneRequiredWithoutAlunaNestedInput = {
    create?: XOR<PublicacaoCreateWithoutAlunaInput, PublicacaoUncheckedCreateWithoutAlunaInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutAlunaInput
    upsert?: PublicacaoUpsertWithoutAlunaInput
    connect?: PublicacaoWhereUniqueInput
    update?: XOR<XOR<PublicacaoUpdateToOneWithWhereWithoutAlunaInput, PublicacaoUpdateWithoutAlunaInput>, PublicacaoUncheckedUpdateWithoutAlunaInput>
  }

  export type AlunaUpdateOneRequiredWithoutPublicacoesNestedInput = {
    create?: XOR<AlunaCreateWithoutPublicacoesInput, AlunaUncheckedCreateWithoutPublicacoesInput>
    connectOrCreate?: AlunaCreateOrConnectWithoutPublicacoesInput
    upsert?: AlunaUpsertWithoutPublicacoesInput
    connect?: AlunaWhereUniqueInput
    update?: XOR<XOR<AlunaUpdateToOneWithWhereWithoutPublicacoesInput, AlunaUpdateWithoutPublicacoesInput>, AlunaUncheckedUpdateWithoutPublicacoesInput>
  }

  export type ProfessorCreateNestedOneWithoutAreasAtuacaoInput = {
    create?: XOR<ProfessorCreateWithoutAreasAtuacaoInput, ProfessorUncheckedCreateWithoutAreasAtuacaoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutAreasAtuacaoInput
    connect?: ProfessorWhereUniqueInput
  }

  export type AlunaHasAreaAtuacaoCreateNestedManyWithoutAreaAtuacaoInput = {
    create?: XOR<AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput> | AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput[] | AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput[]
    connectOrCreate?: AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput[]
    createMany?: AlunaHasAreaAtuacaoCreateManyAreaAtuacaoInputEnvelope
    connect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
  }

  export type AlunaHasAreaAtuacaoUncheckedCreateNestedManyWithoutAreaAtuacaoInput = {
    create?: XOR<AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput> | AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput[] | AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput[]
    connectOrCreate?: AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput[]
    createMany?: AlunaHasAreaAtuacaoCreateManyAreaAtuacaoInputEnvelope
    connect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
  }

  export type ProfessorUpdateOneRequiredWithoutAreasAtuacaoNestedInput = {
    create?: XOR<ProfessorCreateWithoutAreasAtuacaoInput, ProfessorUncheckedCreateWithoutAreasAtuacaoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutAreasAtuacaoInput
    upsert?: ProfessorUpsertWithoutAreasAtuacaoInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutAreasAtuacaoInput, ProfessorUpdateWithoutAreasAtuacaoInput>, ProfessorUncheckedUpdateWithoutAreasAtuacaoInput>
  }

  export type AlunaHasAreaAtuacaoUpdateManyWithoutAreaAtuacaoNestedInput = {
    create?: XOR<AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput> | AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput[] | AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput[]
    connectOrCreate?: AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput[]
    upsert?: AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAreaAtuacaoInput[]
    createMany?: AlunaHasAreaAtuacaoCreateManyAreaAtuacaoInputEnvelope
    set?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    disconnect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    delete?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    connect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    update?: AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAreaAtuacaoInput[]
    updateMany?: AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAreaAtuacaoInput[]
    deleteMany?: AlunaHasAreaAtuacaoScalarWhereInput | AlunaHasAreaAtuacaoScalarWhereInput[]
  }

  export type AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAreaAtuacaoNestedInput = {
    create?: XOR<AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput> | AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput[] | AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput[]
    connectOrCreate?: AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput[]
    upsert?: AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAreaAtuacaoInput[]
    createMany?: AlunaHasAreaAtuacaoCreateManyAreaAtuacaoInputEnvelope
    set?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    disconnect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    delete?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    connect?: AlunaHasAreaAtuacaoWhereUniqueInput | AlunaHasAreaAtuacaoWhereUniqueInput[]
    update?: AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAreaAtuacaoInput[]
    updateMany?: AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAreaAtuacaoInput | AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAreaAtuacaoInput[]
    deleteMany?: AlunaHasAreaAtuacaoScalarWhereInput | AlunaHasAreaAtuacaoScalarWhereInput[]
  }

  export type AlunaCreateNestedOneWithoutAreaAtuacaoInput = {
    create?: XOR<AlunaCreateWithoutAreaAtuacaoInput, AlunaUncheckedCreateWithoutAreaAtuacaoInput>
    connectOrCreate?: AlunaCreateOrConnectWithoutAreaAtuacaoInput
    connect?: AlunaWhereUniqueInput
  }

  export type AreaAtuacaoCreateNestedOneWithoutAlunasInput = {
    create?: XOR<AreaAtuacaoCreateWithoutAlunasInput, AreaAtuacaoUncheckedCreateWithoutAlunasInput>
    connectOrCreate?: AreaAtuacaoCreateOrConnectWithoutAlunasInput
    connect?: AreaAtuacaoWhereUniqueInput
  }

  export type AlunaUpdateOneRequiredWithoutAreaAtuacaoNestedInput = {
    create?: XOR<AlunaCreateWithoutAreaAtuacaoInput, AlunaUncheckedCreateWithoutAreaAtuacaoInput>
    connectOrCreate?: AlunaCreateOrConnectWithoutAreaAtuacaoInput
    upsert?: AlunaUpsertWithoutAreaAtuacaoInput
    connect?: AlunaWhereUniqueInput
    update?: XOR<XOR<AlunaUpdateToOneWithWhereWithoutAreaAtuacaoInput, AlunaUpdateWithoutAreaAtuacaoInput>, AlunaUncheckedUpdateWithoutAreaAtuacaoInput>
  }

  export type AreaAtuacaoUpdateOneRequiredWithoutAlunasNestedInput = {
    create?: XOR<AreaAtuacaoCreateWithoutAlunasInput, AreaAtuacaoUncheckedCreateWithoutAlunasInput>
    connectOrCreate?: AreaAtuacaoCreateOrConnectWithoutAlunasInput
    upsert?: AreaAtuacaoUpsertWithoutAlunasInput
    connect?: AreaAtuacaoWhereUniqueInput
    update?: XOR<XOR<AreaAtuacaoUpdateToOneWithWhereWithoutAlunasInput, AreaAtuacaoUpdateWithoutAlunasInput>, AreaAtuacaoUncheckedUpdateWithoutAlunasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EventoCreateWithoutProfessorInput = {
    nome: string
    descricao: string
    fotos?: FotoCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutProfessorInput = {
    id?: number
    nome: string
    descricao: string
    fotos?: FotoUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoCreateOrConnectWithoutProfessorInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutProfessorInput, EventoUncheckedCreateWithoutProfessorInput>
  }

  export type EventoCreateManyProfessorInputEnvelope = {
    data: EventoCreateManyProfessorInput | EventoCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type AreaAtuacaoCreateWithoutProfessorInput = {
    nome: string
    descricao: string
    alunas?: AlunaHasAreaAtuacaoCreateNestedManyWithoutAreaAtuacaoInput
  }

  export type AreaAtuacaoUncheckedCreateWithoutProfessorInput = {
    id?: number
    nome: string
    descricao: string
    alunas?: AlunaHasAreaAtuacaoUncheckedCreateNestedManyWithoutAreaAtuacaoInput
  }

  export type AreaAtuacaoCreateOrConnectWithoutProfessorInput = {
    where: AreaAtuacaoWhereUniqueInput
    create: XOR<AreaAtuacaoCreateWithoutProfessorInput, AreaAtuacaoUncheckedCreateWithoutProfessorInput>
  }

  export type AreaAtuacaoCreateManyProfessorInputEnvelope = {
    data: AreaAtuacaoCreateManyProfessorInput | AreaAtuacaoCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type HistoriaCreateWithoutProfessorInput = {
    data: Date | string
    descricao: string
  }

  export type HistoriaUncheckedCreateWithoutProfessorInput = {
    id?: number
    data: Date | string
    descricao: string
  }

  export type HistoriaCreateOrConnectWithoutProfessorInput = {
    where: HistoriaWhereUniqueInput
    create: XOR<HistoriaCreateWithoutProfessorInput, HistoriaUncheckedCreateWithoutProfessorInput>
  }

  export type ImpactoProjetoCreateWithoutProfessorInput = {
    descricao: string
    aluna: AlunaCreateNestedOneWithoutImpactoProjetoInput
  }

  export type ImpactoProjetoUncheckedCreateWithoutProfessorInput = {
    id?: number
    descricao: string
    idAluna: number
  }

  export type ImpactoProjetoCreateOrConnectWithoutProfessorInput = {
    where: ImpactoProjetoWhereUniqueInput
    create: XOR<ImpactoProjetoCreateWithoutProfessorInput, ImpactoProjetoUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorHasPublicacaoCreateWithoutProfessorInput = {
    publicacao: PublicacaoCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput = {
    idPublicacao: number
  }

  export type ProfessorHasPublicacaoCreateOrConnectWithoutProfessorInput = {
    where: ProfessorHasPublicacaoWhereUniqueInput
    create: XOR<ProfessorHasPublicacaoCreateWithoutProfessorInput, ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorHasPublicacaoCreateManyProfessorInputEnvelope = {
    data: ProfessorHasPublicacaoCreateManyProfessorInput | ProfessorHasPublicacaoCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type EventoUpsertWithWhereUniqueWithoutProfessorInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutProfessorInput, EventoUncheckedUpdateWithoutProfessorInput>
    create: XOR<EventoCreateWithoutProfessorInput, EventoUncheckedCreateWithoutProfessorInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutProfessorInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutProfessorInput, EventoUncheckedUpdateWithoutProfessorInput>
  }

  export type EventoUpdateManyWithWhereWithoutProfessorInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutProfessorInput>
  }

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[]
    OR?: EventoScalarWhereInput[]
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[]
    id?: IntFilter<"Evento"> | number
    nome?: StringFilter<"Evento"> | string
    descricao?: StringFilter<"Evento"> | string
    professorId?: IntFilter<"Evento"> | number
  }

  export type AreaAtuacaoUpsertWithWhereUniqueWithoutProfessorInput = {
    where: AreaAtuacaoWhereUniqueInput
    update: XOR<AreaAtuacaoUpdateWithoutProfessorInput, AreaAtuacaoUncheckedUpdateWithoutProfessorInput>
    create: XOR<AreaAtuacaoCreateWithoutProfessorInput, AreaAtuacaoUncheckedCreateWithoutProfessorInput>
  }

  export type AreaAtuacaoUpdateWithWhereUniqueWithoutProfessorInput = {
    where: AreaAtuacaoWhereUniqueInput
    data: XOR<AreaAtuacaoUpdateWithoutProfessorInput, AreaAtuacaoUncheckedUpdateWithoutProfessorInput>
  }

  export type AreaAtuacaoUpdateManyWithWhereWithoutProfessorInput = {
    where: AreaAtuacaoScalarWhereInput
    data: XOR<AreaAtuacaoUpdateManyMutationInput, AreaAtuacaoUncheckedUpdateManyWithoutProfessorInput>
  }

  export type AreaAtuacaoScalarWhereInput = {
    AND?: AreaAtuacaoScalarWhereInput | AreaAtuacaoScalarWhereInput[]
    OR?: AreaAtuacaoScalarWhereInput[]
    NOT?: AreaAtuacaoScalarWhereInput | AreaAtuacaoScalarWhereInput[]
    id?: IntFilter<"AreaAtuacao"> | number
    nome?: StringFilter<"AreaAtuacao"> | string
    descricao?: StringFilter<"AreaAtuacao"> | string
    idProfessor?: IntFilter<"AreaAtuacao"> | number
  }

  export type HistoriaUpsertWithoutProfessorInput = {
    update: XOR<HistoriaUpdateWithoutProfessorInput, HistoriaUncheckedUpdateWithoutProfessorInput>
    create: XOR<HistoriaCreateWithoutProfessorInput, HistoriaUncheckedCreateWithoutProfessorInput>
    where?: HistoriaWhereInput
  }

  export type HistoriaUpdateToOneWithWhereWithoutProfessorInput = {
    where?: HistoriaWhereInput
    data: XOR<HistoriaUpdateWithoutProfessorInput, HistoriaUncheckedUpdateWithoutProfessorInput>
  }

  export type HistoriaUpdateWithoutProfessorInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type HistoriaUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ImpactoProjetoUpsertWithoutProfessorInput = {
    update: XOR<ImpactoProjetoUpdateWithoutProfessorInput, ImpactoProjetoUncheckedUpdateWithoutProfessorInput>
    create: XOR<ImpactoProjetoCreateWithoutProfessorInput, ImpactoProjetoUncheckedCreateWithoutProfessorInput>
    where?: ImpactoProjetoWhereInput
  }

  export type ImpactoProjetoUpdateToOneWithWhereWithoutProfessorInput = {
    where?: ImpactoProjetoWhereInput
    data: XOR<ImpactoProjetoUpdateWithoutProfessorInput, ImpactoProjetoUncheckedUpdateWithoutProfessorInput>
  }

  export type ImpactoProjetoUpdateWithoutProfessorInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    aluna?: AlunaUpdateOneRequiredWithoutImpactoProjetoNestedInput
  }

  export type ImpactoProjetoUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    idAluna?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutProfessorInput = {
    where: ProfessorHasPublicacaoWhereUniqueInput
    update: XOR<ProfessorHasPublicacaoUpdateWithoutProfessorInput, ProfessorHasPublicacaoUncheckedUpdateWithoutProfessorInput>
    create: XOR<ProfessorHasPublicacaoCreateWithoutProfessorInput, ProfessorHasPublicacaoUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutProfessorInput = {
    where: ProfessorHasPublicacaoWhereUniqueInput
    data: XOR<ProfessorHasPublicacaoUpdateWithoutProfessorInput, ProfessorHasPublicacaoUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfessorHasPublicacaoUpdateManyWithWhereWithoutProfessorInput = {
    where: ProfessorHasPublicacaoScalarWhereInput
    data: XOR<ProfessorHasPublicacaoUpdateManyMutationInput, ProfessorHasPublicacaoUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ProfessorHasPublicacaoScalarWhereInput = {
    AND?: ProfessorHasPublicacaoScalarWhereInput | ProfessorHasPublicacaoScalarWhereInput[]
    OR?: ProfessorHasPublicacaoScalarWhereInput[]
    NOT?: ProfessorHasPublicacaoScalarWhereInput | ProfessorHasPublicacaoScalarWhereInput[]
    idPublicacao?: IntFilter<"ProfessorHasPublicacao"> | number
    idProfessor?: IntFilter<"ProfessorHasPublicacao"> | number
  }

  export type AlunaHasAreaAtuacaoCreateWithoutAlunaInput = {
    areaAtuacao: AreaAtuacaoCreateNestedOneWithoutAlunasInput
  }

  export type AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput = {
    idAreaAtuacao: number
  }

  export type AlunaHasAreaAtuacaoCreateOrConnectWithoutAlunaInput = {
    where: AlunaHasAreaAtuacaoWhereUniqueInput
    create: XOR<AlunaHasAreaAtuacaoCreateWithoutAlunaInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput>
  }

  export type AlunaHasAreaAtuacaoCreateManyAlunaInputEnvelope = {
    data: AlunaHasAreaAtuacaoCreateManyAlunaInput | AlunaHasAreaAtuacaoCreateManyAlunaInput[]
    skipDuplicates?: boolean
  }

  export type ImpactoProjetoCreateWithoutAlunaInput = {
    descricao: string
    professor: ProfessorCreateNestedOneWithoutImpactoProjetoInput
  }

  export type ImpactoProjetoUncheckedCreateWithoutAlunaInput = {
    id?: number
    descricao: string
    idProfessor: number
  }

  export type ImpactoProjetoCreateOrConnectWithoutAlunaInput = {
    where: ImpactoProjetoWhereUniqueInput
    create: XOR<ImpactoProjetoCreateWithoutAlunaInput, ImpactoProjetoUncheckedCreateWithoutAlunaInput>
  }

  export type AlunaHasPublicacaoCreateWithoutAlunaInput = {
    publicacao: PublicacaoCreateNestedOneWithoutAlunaInput
  }

  export type AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput = {
    idPublicacao: number
  }

  export type AlunaHasPublicacaoCreateOrConnectWithoutAlunaInput = {
    where: AlunaHasPublicacaoWhereUniqueInput
    create: XOR<AlunaHasPublicacaoCreateWithoutAlunaInput, AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput>
  }

  export type AlunaHasPublicacaoCreateManyAlunaInputEnvelope = {
    data: AlunaHasPublicacaoCreateManyAlunaInput | AlunaHasPublicacaoCreateManyAlunaInput[]
    skipDuplicates?: boolean
  }

  export type AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAlunaInput = {
    where: AlunaHasAreaAtuacaoWhereUniqueInput
    update: XOR<AlunaHasAreaAtuacaoUpdateWithoutAlunaInput, AlunaHasAreaAtuacaoUncheckedUpdateWithoutAlunaInput>
    create: XOR<AlunaHasAreaAtuacaoCreateWithoutAlunaInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAlunaInput>
  }

  export type AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAlunaInput = {
    where: AlunaHasAreaAtuacaoWhereUniqueInput
    data: XOR<AlunaHasAreaAtuacaoUpdateWithoutAlunaInput, AlunaHasAreaAtuacaoUncheckedUpdateWithoutAlunaInput>
  }

  export type AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAlunaInput = {
    where: AlunaHasAreaAtuacaoScalarWhereInput
    data: XOR<AlunaHasAreaAtuacaoUpdateManyMutationInput, AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAlunaInput>
  }

  export type AlunaHasAreaAtuacaoScalarWhereInput = {
    AND?: AlunaHasAreaAtuacaoScalarWhereInput | AlunaHasAreaAtuacaoScalarWhereInput[]
    OR?: AlunaHasAreaAtuacaoScalarWhereInput[]
    NOT?: AlunaHasAreaAtuacaoScalarWhereInput | AlunaHasAreaAtuacaoScalarWhereInput[]
    idAluna?: IntFilter<"AlunaHasAreaAtuacao"> | number
    idAreaAtuacao?: IntFilter<"AlunaHasAreaAtuacao"> | number
  }

  export type ImpactoProjetoUpsertWithoutAlunaInput = {
    update: XOR<ImpactoProjetoUpdateWithoutAlunaInput, ImpactoProjetoUncheckedUpdateWithoutAlunaInput>
    create: XOR<ImpactoProjetoCreateWithoutAlunaInput, ImpactoProjetoUncheckedCreateWithoutAlunaInput>
    where?: ImpactoProjetoWhereInput
  }

  export type ImpactoProjetoUpdateToOneWithWhereWithoutAlunaInput = {
    where?: ImpactoProjetoWhereInput
    data: XOR<ImpactoProjetoUpdateWithoutAlunaInput, ImpactoProjetoUncheckedUpdateWithoutAlunaInput>
  }

  export type ImpactoProjetoUpdateWithoutAlunaInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutImpactoProjetoNestedInput
  }

  export type ImpactoProjetoUncheckedUpdateWithoutAlunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasPublicacaoUpsertWithWhereUniqueWithoutAlunaInput = {
    where: AlunaHasPublicacaoWhereUniqueInput
    update: XOR<AlunaHasPublicacaoUpdateWithoutAlunaInput, AlunaHasPublicacaoUncheckedUpdateWithoutAlunaInput>
    create: XOR<AlunaHasPublicacaoCreateWithoutAlunaInput, AlunaHasPublicacaoUncheckedCreateWithoutAlunaInput>
  }

  export type AlunaHasPublicacaoUpdateWithWhereUniqueWithoutAlunaInput = {
    where: AlunaHasPublicacaoWhereUniqueInput
    data: XOR<AlunaHasPublicacaoUpdateWithoutAlunaInput, AlunaHasPublicacaoUncheckedUpdateWithoutAlunaInput>
  }

  export type AlunaHasPublicacaoUpdateManyWithWhereWithoutAlunaInput = {
    where: AlunaHasPublicacaoScalarWhereInput
    data: XOR<AlunaHasPublicacaoUpdateManyMutationInput, AlunaHasPublicacaoUncheckedUpdateManyWithoutAlunaInput>
  }

  export type AlunaHasPublicacaoScalarWhereInput = {
    AND?: AlunaHasPublicacaoScalarWhereInput | AlunaHasPublicacaoScalarWhereInput[]
    OR?: AlunaHasPublicacaoScalarWhereInput[]
    NOT?: AlunaHasPublicacaoScalarWhereInput | AlunaHasPublicacaoScalarWhereInput[]
    idPublicacao?: IntFilter<"AlunaHasPublicacao"> | number
    idAluna?: IntFilter<"AlunaHasPublicacao"> | number
  }

  export type ProfessorCreateWithoutEventoInput = {
    nome: string
    email: string
    descricao: string
    foto: string
    areasAtuacao?: AreaAtuacaoCreateNestedManyWithoutProfessorInput
    historia?: HistoriaCreateNestedOneWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutEventoInput = {
    id?: number
    nome: string
    email: string
    descricao: string
    foto: string
    areasAtuacao?: AreaAtuacaoUncheckedCreateNestedManyWithoutProfessorInput
    historia?: HistoriaUncheckedCreateNestedOneWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoUncheckedCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutEventoInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutEventoInput, ProfessorUncheckedCreateWithoutEventoInput>
  }

  export type FotoCreateWithoutEventoInput = {
    foto: Uint8Array
  }

  export type FotoUncheckedCreateWithoutEventoInput = {
    id?: number
    foto: Uint8Array
  }

  export type FotoCreateOrConnectWithoutEventoInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutEventoInput, FotoUncheckedCreateWithoutEventoInput>
  }

  export type FotoCreateManyEventoInputEnvelope = {
    data: FotoCreateManyEventoInput | FotoCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorUpsertWithoutEventoInput = {
    update: XOR<ProfessorUpdateWithoutEventoInput, ProfessorUncheckedUpdateWithoutEventoInput>
    create: XOR<ProfessorCreateWithoutEventoInput, ProfessorUncheckedCreateWithoutEventoInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutEventoInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutEventoInput, ProfessorUncheckedUpdateWithoutEventoInput>
  }

  export type ProfessorUpdateWithoutEventoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    areasAtuacao?: AreaAtuacaoUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUpdateOneWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    areasAtuacao?: AreaAtuacaoUncheckedUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUncheckedUpdateOneWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUncheckedUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type FotoUpsertWithWhereUniqueWithoutEventoInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutEventoInput, FotoUncheckedUpdateWithoutEventoInput>
    create: XOR<FotoCreateWithoutEventoInput, FotoUncheckedCreateWithoutEventoInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutEventoInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutEventoInput, FotoUncheckedUpdateWithoutEventoInput>
  }

  export type FotoUpdateManyWithWhereWithoutEventoInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutEventoInput>
  }

  export type FotoScalarWhereInput = {
    AND?: FotoScalarWhereInput | FotoScalarWhereInput[]
    OR?: FotoScalarWhereInput[]
    NOT?: FotoScalarWhereInput | FotoScalarWhereInput[]
    id?: IntFilter<"Foto"> | number
    foto?: BytesFilter<"Foto"> | Uint8Array
    idEvento?: IntFilter<"Foto"> | number
  }

  export type EventoCreateWithoutFotosInput = {
    nome: string
    descricao: string
    professor: ProfessorCreateNestedOneWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutFotosInput = {
    id?: number
    nome: string
    descricao: string
    professorId: number
  }

  export type EventoCreateOrConnectWithoutFotosInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutFotosInput, EventoUncheckedCreateWithoutFotosInput>
  }

  export type EventoUpsertWithoutFotosInput = {
    update: XOR<EventoUpdateWithoutFotosInput, EventoUncheckedUpdateWithoutFotosInput>
    create: XOR<EventoCreateWithoutFotosInput, EventoUncheckedCreateWithoutFotosInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutFotosInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutFotosInput, EventoUncheckedUpdateWithoutFotosInput>
  }

  export type EventoUpdateWithoutFotosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessorCreateWithoutImpactoProjetoInput = {
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoCreateNestedManyWithoutProfessorInput
    areasAtuacao?: AreaAtuacaoCreateNestedManyWithoutProfessorInput
    historia?: HistoriaCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutImpactoProjetoInput = {
    id?: number
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoUncheckedCreateNestedManyWithoutProfessorInput
    areasAtuacao?: AreaAtuacaoUncheckedCreateNestedManyWithoutProfessorInput
    historia?: HistoriaUncheckedCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutImpactoProjetoInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutImpactoProjetoInput, ProfessorUncheckedCreateWithoutImpactoProjetoInput>
  }

  export type AlunaCreateWithoutImpactoProjetoInput = {
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    areaAtuacao?: AlunaHasAreaAtuacaoCreateNestedManyWithoutAlunaInput
    publicacoes?: AlunaHasPublicacaoCreateNestedManyWithoutAlunaInput
  }

  export type AlunaUncheckedCreateWithoutImpactoProjetoInput = {
    id?: number
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    areaAtuacao?: AlunaHasAreaAtuacaoUncheckedCreateNestedManyWithoutAlunaInput
    publicacoes?: AlunaHasPublicacaoUncheckedCreateNestedManyWithoutAlunaInput
  }

  export type AlunaCreateOrConnectWithoutImpactoProjetoInput = {
    where: AlunaWhereUniqueInput
    create: XOR<AlunaCreateWithoutImpactoProjetoInput, AlunaUncheckedCreateWithoutImpactoProjetoInput>
  }

  export type ProfessorUpsertWithoutImpactoProjetoInput = {
    update: XOR<ProfessorUpdateWithoutImpactoProjetoInput, ProfessorUncheckedUpdateWithoutImpactoProjetoInput>
    create: XOR<ProfessorCreateWithoutImpactoProjetoInput, ProfessorUncheckedCreateWithoutImpactoProjetoInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutImpactoProjetoInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutImpactoProjetoInput, ProfessorUncheckedUpdateWithoutImpactoProjetoInput>
  }

  export type ProfessorUpdateWithoutImpactoProjetoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUpdateManyWithoutProfessorNestedInput
    areasAtuacao?: AreaAtuacaoUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutImpactoProjetoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUncheckedUpdateManyWithoutProfessorNestedInput
    areasAtuacao?: AreaAtuacaoUncheckedUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUncheckedUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type AlunaUpsertWithoutImpactoProjetoInput = {
    update: XOR<AlunaUpdateWithoutImpactoProjetoInput, AlunaUncheckedUpdateWithoutImpactoProjetoInput>
    create: XOR<AlunaCreateWithoutImpactoProjetoInput, AlunaUncheckedCreateWithoutImpactoProjetoInput>
    where?: AlunaWhereInput
  }

  export type AlunaUpdateToOneWithWhereWithoutImpactoProjetoInput = {
    where?: AlunaWhereInput
    data: XOR<AlunaUpdateWithoutImpactoProjetoInput, AlunaUncheckedUpdateWithoutImpactoProjetoInput>
  }

  export type AlunaUpdateWithoutImpactoProjetoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: AlunaHasAreaAtuacaoUpdateManyWithoutAlunaNestedInput
    publicacoes?: AlunaHasPublicacaoUpdateManyWithoutAlunaNestedInput
  }

  export type AlunaUncheckedUpdateWithoutImpactoProjetoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAlunaNestedInput
    publicacoes?: AlunaHasPublicacaoUncheckedUpdateManyWithoutAlunaNestedInput
  }

  export type ProfessorCreateWithoutHistoriaInput = {
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoCreateNestedManyWithoutProfessorInput
    areasAtuacao?: AreaAtuacaoCreateNestedManyWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutHistoriaInput = {
    id?: number
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoUncheckedCreateNestedManyWithoutProfessorInput
    areasAtuacao?: AreaAtuacaoUncheckedCreateNestedManyWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoUncheckedCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutHistoriaInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutHistoriaInput, ProfessorUncheckedCreateWithoutHistoriaInput>
  }

  export type ProfessorUpsertWithoutHistoriaInput = {
    update: XOR<ProfessorUpdateWithoutHistoriaInput, ProfessorUncheckedUpdateWithoutHistoriaInput>
    create: XOR<ProfessorCreateWithoutHistoriaInput, ProfessorUncheckedCreateWithoutHistoriaInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutHistoriaInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutHistoriaInput, ProfessorUncheckedUpdateWithoutHistoriaInput>
  }

  export type ProfessorUpdateWithoutHistoriaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUpdateManyWithoutProfessorNestedInput
    areasAtuacao?: AreaAtuacaoUpdateManyWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutHistoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUncheckedUpdateManyWithoutProfessorNestedInput
    areasAtuacao?: AreaAtuacaoUncheckedUpdateManyWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUncheckedUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorHasPublicacaoCreateWithoutPublicacaoInput = {
    professor: ProfessorCreateNestedOneWithoutPublicacoesInput
  }

  export type ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput = {
    idProfessor: number
  }

  export type ProfessorHasPublicacaoCreateOrConnectWithoutPublicacaoInput = {
    where: ProfessorHasPublicacaoWhereUniqueInput
    create: XOR<ProfessorHasPublicacaoCreateWithoutPublicacaoInput, ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput>
  }

  export type ProfessorHasPublicacaoCreateManyPublicacaoInputEnvelope = {
    data: ProfessorHasPublicacaoCreateManyPublicacaoInput | ProfessorHasPublicacaoCreateManyPublicacaoInput[]
    skipDuplicates?: boolean
  }

  export type AlunaHasPublicacaoCreateWithoutPublicacaoInput = {
    aluna: AlunaCreateNestedOneWithoutPublicacoesInput
  }

  export type AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput = {
    idAluna: number
  }

  export type AlunaHasPublicacaoCreateOrConnectWithoutPublicacaoInput = {
    where: AlunaHasPublicacaoWhereUniqueInput
    create: XOR<AlunaHasPublicacaoCreateWithoutPublicacaoInput, AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput>
  }

  export type AlunaHasPublicacaoCreateManyPublicacaoInputEnvelope = {
    data: AlunaHasPublicacaoCreateManyPublicacaoInput | AlunaHasPublicacaoCreateManyPublicacaoInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput = {
    where: ProfessorHasPublicacaoWhereUniqueInput
    update: XOR<ProfessorHasPublicacaoUpdateWithoutPublicacaoInput, ProfessorHasPublicacaoUncheckedUpdateWithoutPublicacaoInput>
    create: XOR<ProfessorHasPublicacaoCreateWithoutPublicacaoInput, ProfessorHasPublicacaoUncheckedCreateWithoutPublicacaoInput>
  }

  export type ProfessorHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput = {
    where: ProfessorHasPublicacaoWhereUniqueInput
    data: XOR<ProfessorHasPublicacaoUpdateWithoutPublicacaoInput, ProfessorHasPublicacaoUncheckedUpdateWithoutPublicacaoInput>
  }

  export type ProfessorHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput = {
    where: ProfessorHasPublicacaoScalarWhereInput
    data: XOR<ProfessorHasPublicacaoUpdateManyMutationInput, ProfessorHasPublicacaoUncheckedUpdateManyWithoutPublicacaoInput>
  }

  export type AlunaHasPublicacaoUpsertWithWhereUniqueWithoutPublicacaoInput = {
    where: AlunaHasPublicacaoWhereUniqueInput
    update: XOR<AlunaHasPublicacaoUpdateWithoutPublicacaoInput, AlunaHasPublicacaoUncheckedUpdateWithoutPublicacaoInput>
    create: XOR<AlunaHasPublicacaoCreateWithoutPublicacaoInput, AlunaHasPublicacaoUncheckedCreateWithoutPublicacaoInput>
  }

  export type AlunaHasPublicacaoUpdateWithWhereUniqueWithoutPublicacaoInput = {
    where: AlunaHasPublicacaoWhereUniqueInput
    data: XOR<AlunaHasPublicacaoUpdateWithoutPublicacaoInput, AlunaHasPublicacaoUncheckedUpdateWithoutPublicacaoInput>
  }

  export type AlunaHasPublicacaoUpdateManyWithWhereWithoutPublicacaoInput = {
    where: AlunaHasPublicacaoScalarWhereInput
    data: XOR<AlunaHasPublicacaoUpdateManyMutationInput, AlunaHasPublicacaoUncheckedUpdateManyWithoutPublicacaoInput>
  }

  export type PublicacaoCreateWithoutProfessorInput = {
    titulo: string
    link: string
    autor: string
    ano: Date | string
    idioma: string
    aluna?: AlunaHasPublicacaoCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUncheckedCreateWithoutProfessorInput = {
    id?: number
    titulo: string
    link: string
    autor: string
    ano: Date | string
    idioma: string
    aluna?: AlunaHasPublicacaoUncheckedCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoCreateOrConnectWithoutProfessorInput = {
    where: PublicacaoWhereUniqueInput
    create: XOR<PublicacaoCreateWithoutProfessorInput, PublicacaoUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorCreateWithoutPublicacoesInput = {
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoCreateNestedManyWithoutProfessorInput
    areasAtuacao?: AreaAtuacaoCreateNestedManyWithoutProfessorInput
    historia?: HistoriaCreateNestedOneWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutPublicacoesInput = {
    id?: number
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoUncheckedCreateNestedManyWithoutProfessorInput
    areasAtuacao?: AreaAtuacaoUncheckedCreateNestedManyWithoutProfessorInput
    historia?: HistoriaUncheckedCreateNestedOneWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoUncheckedCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutPublicacoesInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutPublicacoesInput, ProfessorUncheckedCreateWithoutPublicacoesInput>
  }

  export type PublicacaoUpsertWithoutProfessorInput = {
    update: XOR<PublicacaoUpdateWithoutProfessorInput, PublicacaoUncheckedUpdateWithoutProfessorInput>
    create: XOR<PublicacaoCreateWithoutProfessorInput, PublicacaoUncheckedCreateWithoutProfessorInput>
    where?: PublicacaoWhereInput
  }

  export type PublicacaoUpdateToOneWithWhereWithoutProfessorInput = {
    where?: PublicacaoWhereInput
    data: XOR<PublicacaoUpdateWithoutProfessorInput, PublicacaoUncheckedUpdateWithoutProfessorInput>
  }

  export type PublicacaoUpdateWithoutProfessorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: DateTimeFieldUpdateOperationsInput | Date | string
    idioma?: StringFieldUpdateOperationsInput | string
    aluna?: AlunaHasPublicacaoUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: DateTimeFieldUpdateOperationsInput | Date | string
    idioma?: StringFieldUpdateOperationsInput | string
    aluna?: AlunaHasPublicacaoUncheckedUpdateManyWithoutPublicacaoNestedInput
  }

  export type ProfessorUpsertWithoutPublicacoesInput = {
    update: XOR<ProfessorUpdateWithoutPublicacoesInput, ProfessorUncheckedUpdateWithoutPublicacoesInput>
    create: XOR<ProfessorCreateWithoutPublicacoesInput, ProfessorUncheckedCreateWithoutPublicacoesInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutPublicacoesInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutPublicacoesInput, ProfessorUncheckedUpdateWithoutPublicacoesInput>
  }

  export type ProfessorUpdateWithoutPublicacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUpdateManyWithoutProfessorNestedInput
    areasAtuacao?: AreaAtuacaoUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUpdateOneWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUpdateOneWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutPublicacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUncheckedUpdateManyWithoutProfessorNestedInput
    areasAtuacao?: AreaAtuacaoUncheckedUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUncheckedUpdateOneWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUncheckedUpdateOneWithoutProfessorNestedInput
  }

  export type PublicacaoCreateWithoutAlunaInput = {
    titulo: string
    link: string
    autor: string
    ano: Date | string
    idioma: string
    professor?: ProfessorHasPublicacaoCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUncheckedCreateWithoutAlunaInput = {
    id?: number
    titulo: string
    link: string
    autor: string
    ano: Date | string
    idioma: string
    professor?: ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoCreateOrConnectWithoutAlunaInput = {
    where: PublicacaoWhereUniqueInput
    create: XOR<PublicacaoCreateWithoutAlunaInput, PublicacaoUncheckedCreateWithoutAlunaInput>
  }

  export type AlunaCreateWithoutPublicacoesInput = {
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    areaAtuacao?: AlunaHasAreaAtuacaoCreateNestedManyWithoutAlunaInput
    impactoProjeto?: ImpactoProjetoCreateNestedOneWithoutAlunaInput
  }

  export type AlunaUncheckedCreateWithoutPublicacoesInput = {
    id?: number
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    areaAtuacao?: AlunaHasAreaAtuacaoUncheckedCreateNestedManyWithoutAlunaInput
    impactoProjeto?: ImpactoProjetoUncheckedCreateNestedOneWithoutAlunaInput
  }

  export type AlunaCreateOrConnectWithoutPublicacoesInput = {
    where: AlunaWhereUniqueInput
    create: XOR<AlunaCreateWithoutPublicacoesInput, AlunaUncheckedCreateWithoutPublicacoesInput>
  }

  export type PublicacaoUpsertWithoutAlunaInput = {
    update: XOR<PublicacaoUpdateWithoutAlunaInput, PublicacaoUncheckedUpdateWithoutAlunaInput>
    create: XOR<PublicacaoCreateWithoutAlunaInput, PublicacaoUncheckedCreateWithoutAlunaInput>
    where?: PublicacaoWhereInput
  }

  export type PublicacaoUpdateToOneWithWhereWithoutAlunaInput = {
    where?: PublicacaoWhereInput
    data: XOR<PublicacaoUpdateWithoutAlunaInput, PublicacaoUncheckedUpdateWithoutAlunaInput>
  }

  export type PublicacaoUpdateWithoutAlunaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: DateTimeFieldUpdateOperationsInput | Date | string
    idioma?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorHasPublicacaoUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateWithoutAlunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: DateTimeFieldUpdateOperationsInput | Date | string
    idioma?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorHasPublicacaoUncheckedUpdateManyWithoutPublicacaoNestedInput
  }

  export type AlunaUpsertWithoutPublicacoesInput = {
    update: XOR<AlunaUpdateWithoutPublicacoesInput, AlunaUncheckedUpdateWithoutPublicacoesInput>
    create: XOR<AlunaCreateWithoutPublicacoesInput, AlunaUncheckedCreateWithoutPublicacoesInput>
    where?: AlunaWhereInput
  }

  export type AlunaUpdateToOneWithWhereWithoutPublicacoesInput = {
    where?: AlunaWhereInput
    data: XOR<AlunaUpdateWithoutPublicacoesInput, AlunaUncheckedUpdateWithoutPublicacoesInput>
  }

  export type AlunaUpdateWithoutPublicacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: AlunaHasAreaAtuacaoUpdateManyWithoutAlunaNestedInput
    impactoProjeto?: ImpactoProjetoUpdateOneWithoutAlunaNestedInput
  }

  export type AlunaUncheckedUpdateWithoutPublicacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAlunaNestedInput
    impactoProjeto?: ImpactoProjetoUncheckedUpdateOneWithoutAlunaNestedInput
  }

  export type ProfessorCreateWithoutAreasAtuacaoInput = {
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoCreateNestedManyWithoutProfessorInput
    historia?: HistoriaCreateNestedOneWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutAreasAtuacaoInput = {
    id?: number
    nome: string
    email: string
    descricao: string
    foto: string
    evento?: EventoUncheckedCreateNestedManyWithoutProfessorInput
    historia?: HistoriaUncheckedCreateNestedOneWithoutProfessorInput
    impactoProjeto?: ImpactoProjetoUncheckedCreateNestedOneWithoutProfessorInput
    publicacoes?: ProfessorHasPublicacaoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutAreasAtuacaoInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutAreasAtuacaoInput, ProfessorUncheckedCreateWithoutAreasAtuacaoInput>
  }

  export type AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput = {
    aluna: AlunaCreateNestedOneWithoutAreaAtuacaoInput
  }

  export type AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput = {
    idAluna: number
  }

  export type AlunaHasAreaAtuacaoCreateOrConnectWithoutAreaAtuacaoInput = {
    where: AlunaHasAreaAtuacaoWhereUniqueInput
    create: XOR<AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput>
  }

  export type AlunaHasAreaAtuacaoCreateManyAreaAtuacaoInputEnvelope = {
    data: AlunaHasAreaAtuacaoCreateManyAreaAtuacaoInput | AlunaHasAreaAtuacaoCreateManyAreaAtuacaoInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorUpsertWithoutAreasAtuacaoInput = {
    update: XOR<ProfessorUpdateWithoutAreasAtuacaoInput, ProfessorUncheckedUpdateWithoutAreasAtuacaoInput>
    create: XOR<ProfessorCreateWithoutAreasAtuacaoInput, ProfessorUncheckedCreateWithoutAreasAtuacaoInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutAreasAtuacaoInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutAreasAtuacaoInput, ProfessorUncheckedUpdateWithoutAreasAtuacaoInput>
  }

  export type ProfessorUpdateWithoutAreasAtuacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUpdateOneWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutAreasAtuacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUncheckedUpdateManyWithoutProfessorNestedInput
    historia?: HistoriaUncheckedUpdateOneWithoutProfessorNestedInput
    impactoProjeto?: ImpactoProjetoUncheckedUpdateOneWithoutProfessorNestedInput
    publicacoes?: ProfessorHasPublicacaoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type AlunaHasAreaAtuacaoUpsertWithWhereUniqueWithoutAreaAtuacaoInput = {
    where: AlunaHasAreaAtuacaoWhereUniqueInput
    update: XOR<AlunaHasAreaAtuacaoUpdateWithoutAreaAtuacaoInput, AlunaHasAreaAtuacaoUncheckedUpdateWithoutAreaAtuacaoInput>
    create: XOR<AlunaHasAreaAtuacaoCreateWithoutAreaAtuacaoInput, AlunaHasAreaAtuacaoUncheckedCreateWithoutAreaAtuacaoInput>
  }

  export type AlunaHasAreaAtuacaoUpdateWithWhereUniqueWithoutAreaAtuacaoInput = {
    where: AlunaHasAreaAtuacaoWhereUniqueInput
    data: XOR<AlunaHasAreaAtuacaoUpdateWithoutAreaAtuacaoInput, AlunaHasAreaAtuacaoUncheckedUpdateWithoutAreaAtuacaoInput>
  }

  export type AlunaHasAreaAtuacaoUpdateManyWithWhereWithoutAreaAtuacaoInput = {
    where: AlunaHasAreaAtuacaoScalarWhereInput
    data: XOR<AlunaHasAreaAtuacaoUpdateManyMutationInput, AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAreaAtuacaoInput>
  }

  export type AlunaCreateWithoutAreaAtuacaoInput = {
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    impactoProjeto?: ImpactoProjetoCreateNestedOneWithoutAlunaInput
    publicacoes?: AlunaHasPublicacaoCreateNestedManyWithoutAlunaInput
  }

  export type AlunaUncheckedCreateWithoutAreaAtuacaoInput = {
    id?: number
    nome: string
    linkedin: string
    foto: Uint8Array
    relato: string
    impactoProjeto?: ImpactoProjetoUncheckedCreateNestedOneWithoutAlunaInput
    publicacoes?: AlunaHasPublicacaoUncheckedCreateNestedManyWithoutAlunaInput
  }

  export type AlunaCreateOrConnectWithoutAreaAtuacaoInput = {
    where: AlunaWhereUniqueInput
    create: XOR<AlunaCreateWithoutAreaAtuacaoInput, AlunaUncheckedCreateWithoutAreaAtuacaoInput>
  }

  export type AreaAtuacaoCreateWithoutAlunasInput = {
    nome: string
    descricao: string
    professor: ProfessorCreateNestedOneWithoutAreasAtuacaoInput
  }

  export type AreaAtuacaoUncheckedCreateWithoutAlunasInput = {
    id?: number
    nome: string
    descricao: string
    idProfessor: number
  }

  export type AreaAtuacaoCreateOrConnectWithoutAlunasInput = {
    where: AreaAtuacaoWhereUniqueInput
    create: XOR<AreaAtuacaoCreateWithoutAlunasInput, AreaAtuacaoUncheckedCreateWithoutAlunasInput>
  }

  export type AlunaUpsertWithoutAreaAtuacaoInput = {
    update: XOR<AlunaUpdateWithoutAreaAtuacaoInput, AlunaUncheckedUpdateWithoutAreaAtuacaoInput>
    create: XOR<AlunaCreateWithoutAreaAtuacaoInput, AlunaUncheckedCreateWithoutAreaAtuacaoInput>
    where?: AlunaWhereInput
  }

  export type AlunaUpdateToOneWithWhereWithoutAreaAtuacaoInput = {
    where?: AlunaWhereInput
    data: XOR<AlunaUpdateWithoutAreaAtuacaoInput, AlunaUncheckedUpdateWithoutAreaAtuacaoInput>
  }

  export type AlunaUpdateWithoutAreaAtuacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
    impactoProjeto?: ImpactoProjetoUpdateOneWithoutAlunaNestedInput
    publicacoes?: AlunaHasPublicacaoUpdateManyWithoutAlunaNestedInput
  }

  export type AlunaUncheckedUpdateWithoutAreaAtuacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
    relato?: StringFieldUpdateOperationsInput | string
    impactoProjeto?: ImpactoProjetoUncheckedUpdateOneWithoutAlunaNestedInput
    publicacoes?: AlunaHasPublicacaoUncheckedUpdateManyWithoutAlunaNestedInput
  }

  export type AreaAtuacaoUpsertWithoutAlunasInput = {
    update: XOR<AreaAtuacaoUpdateWithoutAlunasInput, AreaAtuacaoUncheckedUpdateWithoutAlunasInput>
    create: XOR<AreaAtuacaoCreateWithoutAlunasInput, AreaAtuacaoUncheckedCreateWithoutAlunasInput>
    where?: AreaAtuacaoWhereInput
  }

  export type AreaAtuacaoUpdateToOneWithWhereWithoutAlunasInput = {
    where?: AreaAtuacaoWhereInput
    data: XOR<AreaAtuacaoUpdateWithoutAlunasInput, AreaAtuacaoUncheckedUpdateWithoutAlunasInput>
  }

  export type AreaAtuacaoUpdateWithoutAlunasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutAreasAtuacaoNestedInput
  }

  export type AreaAtuacaoUncheckedUpdateWithoutAlunasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type EventoCreateManyProfessorInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type AreaAtuacaoCreateManyProfessorInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type ProfessorHasPublicacaoCreateManyProfessorInput = {
    idPublicacao: number
  }

  export type EventoUpdateWithoutProfessorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AreaAtuacaoUpdateWithoutProfessorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    alunas?: AlunaHasAreaAtuacaoUpdateManyWithoutAreaAtuacaoNestedInput
  }

  export type AreaAtuacaoUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    alunas?: AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAreaAtuacaoNestedInput
  }

  export type AreaAtuacaoUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorHasPublicacaoUpdateWithoutProfessorInput = {
    publicacao?: PublicacaoUpdateOneRequiredWithoutProfessorNestedInput
  }

  export type ProfessorHasPublicacaoUncheckedUpdateWithoutProfessorInput = {
    idPublicacao?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessorHasPublicacaoUncheckedUpdateManyWithoutProfessorInput = {
    idPublicacao?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasAreaAtuacaoCreateManyAlunaInput = {
    idAreaAtuacao: number
  }

  export type AlunaHasPublicacaoCreateManyAlunaInput = {
    idPublicacao: number
  }

  export type AlunaHasAreaAtuacaoUpdateWithoutAlunaInput = {
    areaAtuacao?: AreaAtuacaoUpdateOneRequiredWithoutAlunasNestedInput
  }

  export type AlunaHasAreaAtuacaoUncheckedUpdateWithoutAlunaInput = {
    idAreaAtuacao?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAlunaInput = {
    idAreaAtuacao?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasPublicacaoUpdateWithoutAlunaInput = {
    publicacao?: PublicacaoUpdateOneRequiredWithoutAlunaNestedInput
  }

  export type AlunaHasPublicacaoUncheckedUpdateWithoutAlunaInput = {
    idPublicacao?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasPublicacaoUncheckedUpdateManyWithoutAlunaInput = {
    idPublicacao?: IntFieldUpdateOperationsInput | number
  }

  export type FotoCreateManyEventoInput = {
    id?: number
    foto: Uint8Array
  }

  export type FotoUpdateWithoutEventoInput = {
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type FotoUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type FotoUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type ProfessorHasPublicacaoCreateManyPublicacaoInput = {
    idProfessor: number
  }

  export type AlunaHasPublicacaoCreateManyPublicacaoInput = {
    idAluna: number
  }

  export type ProfessorHasPublicacaoUpdateWithoutPublicacaoInput = {
    professor?: ProfessorUpdateOneRequiredWithoutPublicacoesNestedInput
  }

  export type ProfessorHasPublicacaoUncheckedUpdateWithoutPublicacaoInput = {
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessorHasPublicacaoUncheckedUpdateManyWithoutPublicacaoInput = {
    idProfessor?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasPublicacaoUpdateWithoutPublicacaoInput = {
    aluna?: AlunaUpdateOneRequiredWithoutPublicacoesNestedInput
  }

  export type AlunaHasPublicacaoUncheckedUpdateWithoutPublicacaoInput = {
    idAluna?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasPublicacaoUncheckedUpdateManyWithoutPublicacaoInput = {
    idAluna?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasAreaAtuacaoCreateManyAreaAtuacaoInput = {
    idAluna: number
  }

  export type AlunaHasAreaAtuacaoUpdateWithoutAreaAtuacaoInput = {
    aluna?: AlunaUpdateOneRequiredWithoutAreaAtuacaoNestedInput
  }

  export type AlunaHasAreaAtuacaoUncheckedUpdateWithoutAreaAtuacaoInput = {
    idAluna?: IntFieldUpdateOperationsInput | number
  }

  export type AlunaHasAreaAtuacaoUncheckedUpdateManyWithoutAreaAtuacaoInput = {
    idAluna?: IntFieldUpdateOperationsInput | number
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