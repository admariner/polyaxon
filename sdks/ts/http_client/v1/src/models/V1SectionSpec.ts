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
 * @interface V1SectionSpec
 */
export interface V1SectionSpec {
    /**
     * 
     * @type {string}
     * @memberof V1SectionSpec
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1SectionSpec
     */
    is_minimized?: boolean;
    /**
     * 
     * @type {number}
     * @memberof V1SectionSpec
     */
    columns?: number;
    /**
     * 
     * @type {number}
     * @memberof V1SectionSpec
     */
    height?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1SectionSpec
     */
    widgets?: Array<object>;
}

export function V1SectionSpecFromJSON(json: any): V1SectionSpec {
    return V1SectionSpecFromJSONTyped(json, false);
}

export function V1SectionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SectionSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'is_minimized': !exists(json, 'is_minimized') ? undefined : json['is_minimized'],
        'columns': !exists(json, 'columns') ? undefined : json['columns'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'widgets': !exists(json, 'widgets') ? undefined : json['widgets'],
    };
}

export function V1SectionSpecToJSON(value?: V1SectionSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'is_minimized': value.is_minimized,
        'columns': value.columns,
        'height': value.height,
        'widgets': value.widgets,
    };
}


