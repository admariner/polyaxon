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
/**
 * 
 * @export
 * @interface V1User
 */
export interface V1User {
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof V1User
     */
    theme?: number;
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    organization?: string;
}

export function V1UserFromJSON(json: any): V1User {
    return V1UserFromJSONTyped(json, false);
}

export function V1UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'theme': !exists(json, 'theme') ? undefined : json['theme'],
        'organization': !exists(json, 'organization') ? undefined : json['organization'],
    };
}

export function V1UserToJSON(value?: V1User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'email': value.email,
        'name': value.name,
        'theme': value.theme,
        'organization': value.organization,
    };
}


