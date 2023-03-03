import type { AnyCommands, AnyQuery } from 'yaschema-ws-api';

import type { WsApiRequestors } from './WsApiRequestors';

export type WsApiConnectionChangeHandler<RequestCommandsT extends AnyCommands, QueryT extends AnyQuery> = (args: {
  ws: WebSocket;
  query: QueryT;
  output: WsApiRequestors<RequestCommandsT>;
}) => Promise<void>;
