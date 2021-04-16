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
    V1Version,
    V1VersionFromJSON,
    V1VersionFromJSONTyped,
    V1VersionToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Compatibility
 */
export interface V1Compatibility {
    /**
     * 
     * @type {V1Version}
     * @memberof V1Compatibility
     */
    cli?: V1Version;
    /**
     * 
     * @type {V1Version}
     * @memberof V1Compatibility
     */
    platform?: V1Version;
    /**
     * 
     * @type {V1Version}
     * @memberof V1Compatibility
     */
    agent?: V1Version;
    /**
     * 
     * @type {V1Version}
     * @memberof V1Compatibility
     */
    ui?: V1Version;
}

export function V1CompatibilityFromJSON(json: any): V1Compatibility {
    return V1CompatibilityFromJSONTyped(json, false);
}

export function V1CompatibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Compatibility {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cli': !exists(json, 'cli') ? undefined : V1VersionFromJSON(json['cli']),
        'platform': !exists(json, 'platform') ? undefined : V1VersionFromJSON(json['platform']),
        'agent': !exists(json, 'agent') ? undefined : V1VersionFromJSON(json['agent']),
        'ui': !exists(json, 'ui') ? undefined : V1VersionFromJSON(json['ui']),
    };
}

export function V1CompatibilityToJSON(value?: V1Compatibility | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cli': V1VersionToJSON(value.cli),
        'platform': V1VersionToJSON(value.platform),
        'agent': V1VersionToJSON(value.agent),
        'ui': V1VersionToJSON(value.ui),
    };
}


