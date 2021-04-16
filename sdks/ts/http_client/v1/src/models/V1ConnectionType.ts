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
 * The version of the OpenAPI document: 1.8.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1ConnectionKind,
    V1ConnectionKindFromJSON,
    V1ConnectionKindFromJSONTyped,
    V1ConnectionKindToJSON,
    V1K8sResourceSchema,
    V1K8sResourceSchemaFromJSON,
    V1K8sResourceSchemaFromJSONTyped,
    V1K8sResourceSchemaToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1ConnectionType
 */
export interface V1ConnectionType {
    /**
     * 
     * @type {string}
     * @memberof V1ConnectionType
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ConnectionType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ConnectionType
     */
    tags?: string;
    /**
     * 
     * @type {V1ConnectionKind}
     * @memberof V1ConnectionType
     */
    kind?: V1ConnectionKind;
    /**
     * 
     * @type {object}
     * @memberof V1ConnectionType
     */
    schema?: object;
    /**
     * 
     * @type {V1K8sResourceSchema}
     * @memberof V1ConnectionType
     */
    secret?: V1K8sResourceSchema;
    /**
     * 
     * @type {V1K8sResourceSchema}
     * @memberof V1ConnectionType
     */
    configMap?: V1K8sResourceSchema;
}

export function V1ConnectionTypeFromJSON(json: any): V1ConnectionType {
    return V1ConnectionTypeFromJSONTyped(json, false);
}

export function V1ConnectionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConnectionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'kind': !exists(json, 'kind') ? undefined : V1ConnectionKindFromJSON(json['kind']),
        'schema': !exists(json, 'schema') ? undefined : json['schema'],
        'secret': !exists(json, 'secret') ? undefined : V1K8sResourceSchemaFromJSON(json['secret']),
        'configMap': !exists(json, 'configMap') ? undefined : V1K8sResourceSchemaFromJSON(json['configMap']),
    };
}

export function V1ConnectionTypeToJSON(value?: V1ConnectionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'kind': V1ConnectionKindToJSON(value.kind),
        'schema': value.schema,
        'secret': V1K8sResourceSchemaToJSON(value.secret),
        'configMap': V1K8sResourceSchemaToJSON(value.configMap),
    };
}


