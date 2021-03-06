import { IControllerAttribute, IParseHandler } from '../modules/types';
import { AttributeMetadata } from '../modules/metadata';

/**
 * Decorate on Action Parameters to validate and transform the values
 * @Throws InvalidArgumentException
 */
export function Parse(cb: IParseHandler, data?: any)
    : (target: any, propertyKey: string, parameterIndex: number) => void {
    return AttributeMetadata.parse(cb, data);
}

// if an API action wants to send response on its own, decorate @SendsResponse()
// this is used when action method directly sends response using express response object.
// ex: like read, download file contents must be decorated with @SendsResponse
// actions having @SendsResponse recommended to have void return type since return value is ignored
/**
 *  Decorate on API actions that sends response using response object
 */
export function SendsResponse(): (target: any, propertyKey: string) => void {
    return AttributeMetadata.sendsResponse();
}

// if an API action is async in nature, action should be decorated with @Async
// this is required to notify dino since action modifiers are not available at runtime in javascript
/**
 * Decorate on async API actions
 */
export function Async(): (target: any, propertyKey: string) => void {
    return AttributeMetadata.asyncAttr();
}

/**
 * Responds to HttpGet
 * @Throws InvalidRouteException
 */
export function HttpGet(route: string | RegExp): (target: any, propertyKey: string) => void {
    return AttributeMetadata.httpGet(route);
}

/**
 * Responds to HttpPost
 * @Throws InvalidRouteException
 */
export function HttpPost(route: string | RegExp): (target: any, propertyKey: string) => void {
    return AttributeMetadata.httpPost(route);
}

/**
 * Responds to HttpDelete
 * @Throws InvalidRouteException
 */
export function HttpDelete(route: string | RegExp): (target: any, propertyKey: string) => void {
    return AttributeMetadata.httpDelete(route);
}

/**
 * Responds to HttpPatch
 * @Throws InvalidRouteException
 */
export function HttpPatch(route: string | RegExp): (target: any, propertyKey: string) => void {
    return AttributeMetadata.httpPatch(route);
}

/**
 * Responds to HttpPut
 * @Throws InvalidRouteException
 */
export function HttpPut(route: string | RegExp): (target: any, propertyKey: string) => void {
    return AttributeMetadata.httpPut(route);
}

/**
 * Responds to HttpHead
 * @Throws InvalidRouteException
 */
export function HttpHead(route: string | RegExp): (target: any, propertyKey: string) => void {
    return AttributeMetadata.httpHead(route);
}

/**
 * Responds to HttpAll
 * @Throws InvalidRouteException
 */
export function HttpAll(route: string | RegExp): (target: any, propertyKey: string) => void {
    return AttributeMetadata.httpAll(route);
}

/**
 * Decorate on API Controller
 * @Throws InvalidRouteException
 */
export function Controller(prefix: string, attr?: IControllerAttribute): any {
    return AttributeMetadata.controller(prefix, attr);
}
