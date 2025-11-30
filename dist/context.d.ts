import { Client } from '@bugbybug/browser';
export interface BugByBugContextValue {
    client: Client | undefined;
}
export declare const BugByBugContext: import("react").Context<BugByBugContextValue>;
