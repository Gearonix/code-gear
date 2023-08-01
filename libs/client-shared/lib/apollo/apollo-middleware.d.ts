import { AnyObject, ApolloOperation, Nullable } from '@/types';
type WithTypeName<P extends AnyObject> = P & {
    __typename: string;
};
type OperationType = 'query' | 'mutate';
export declare class ApolloMiddleware {
    operate<Payload extends AnyObject, Args extends AnyObject>(mutation: ApolloOperation, args?: Args, type?: OperationType): Promise<[Nullable<WithTypeName<Payload>>, Nullable<string>]>;
}
export {};
