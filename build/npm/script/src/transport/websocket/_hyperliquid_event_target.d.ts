import { TypedEventTarget } from "typescript-event-target";
import * as v from "valibot";
/** Response to subscribe to or unsubscribe from an event. */
interface SubscribeUnsubscribeResponse {
    /** Type of response */
    method: "subscribe" | "unsubscribe";
    /** Original request. */
    subscription: unknown;
}
/** Response to post request. */
interface PostResponse {
    /** Unique request identifier. */
    id: number;
    /** Server response. */
    response: 
    /** Response containing requested information. */
    {
        /** Indicates that this is an informational response. */
        type: "info";
        /** Contains the information data. */
        payload: {
            /** Type of information being returned. */
            type: string;
            /** Information specific data. */
            data: unknown;
        };
    }
    /** Response containing action result. */
     | {
        /** Indicates that this is an action response. */
        type: "action";
        /** Action result. */
        payload: {
            /** Response status indicating success or failure of the action. */
            status: "ok" | "err";
            /** Success data or error message. */
            response: {
                /** Type of operation. */
                type: string;
                /** Specific data for the action. */
                data?: unknown;
            } | string;
        };
    };
}
/** Base system events and dynamic channel events for Hyperliquid WebSocket API. */
interface HyperliquidEventMap {
    subscriptionResponse: CustomEvent<SubscribeUnsubscribeResponse>;
    post: CustomEvent<PostResponse>;
    error: CustomEvent<string>;
    pong: CustomEvent<undefined>;
    _explorerBlock: CustomEvent<BlockDetails[]>;
    _explorerTxs: CustomEvent<TxDetails[]>;
    [key: string]: CustomEvent<any>;
}
declare const BlockDetails: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly blockTime: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.IntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    readonly hash: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.LengthAction<string, 66, undefined>]>;
    readonly height: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.IntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    readonly numTxs: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.IntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    readonly proposer: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.LengthAction<string, 42, undefined>]>;
}, undefined>]>;
type BlockDetails = v.InferOutput<typeof BlockDetails>;
declare const TxDetails: v.ObjectSchema<{
    readonly action: v.LooseObjectSchema<{
        readonly type: v.StringSchema<undefined>;
    }, undefined>;
    readonly block: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.IntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    readonly error: v.NullableSchema<v.StringSchema<undefined>, undefined>;
    readonly hash: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.LengthAction<string, 66, undefined>]>;
    readonly time: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.IntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
    readonly user: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.LengthAction<string, 42, undefined>]>;
}, undefined>;
type TxDetails = v.InferOutput<typeof TxDetails>;
/** Listens for WebSocket messages and sends them as Hyperliquid typed events. */
export declare class HyperliquidEventTarget extends TypedEventTarget<HyperliquidEventMap> {
    constructor(socket: WebSocket);
}
export {};
//# sourceMappingURL=_hyperliquid_event_target.d.ts.map