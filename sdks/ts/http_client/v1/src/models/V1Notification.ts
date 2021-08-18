// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.11.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1Statuses,
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Notification
 */
export interface V1Notification {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Notification
     */
    connections?: Array<string>;
    /**
     * 
     * @type {V1Statuses}
     * @memberof V1Notification
     */
    trigger?: V1Statuses;
}

export function V1NotificationFromJSON(json: any): V1Notification {
    return V1NotificationFromJSONTyped(json, false);
}

export function V1NotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Notification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
        'trigger': !exists(json, 'trigger') ? undefined : V1StatusesFromJSON(json['trigger']),
    };
}

export function V1NotificationToJSON(value?: V1Notification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connections': value.connections,
        'trigger': V1StatusesToJSON(value.trigger),
    };
}


