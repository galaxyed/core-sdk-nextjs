import createDebug, { Debugger } from 'debug';

export default (name: string): Debugger => createDebug('icanid-sdk-nextjs').extend(name);
