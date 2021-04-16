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
    V1SettingsCatalog,
    V1SettingsCatalogFromJSON,
    V1SettingsCatalogFromJSONTyped,
    V1SettingsCatalogToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1TeamSettings
 */
export interface V1TeamSettings {
    /**
     * 
     * @type {Array<V1SettingsCatalog>}
     * @memberof V1TeamSettings
     */
    projects?: Array<V1SettingsCatalog>;
    /**
     * 
     * @type {Array<V1SettingsCatalog>}
     * @memberof V1TeamSettings
     */
    hubs?: Array<V1SettingsCatalog>;
    /**
     * 
     * @type {Array<V1SettingsCatalog>}
     * @memberof V1TeamSettings
     */
    registries?: Array<V1SettingsCatalog>;
}

export function V1TeamSettingsFromJSON(json: any): V1TeamSettings {
    return V1TeamSettingsFromJSONTyped(json, false);
}

export function V1TeamSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TeamSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(V1SettingsCatalogFromJSON)),
        'hubs': !exists(json, 'hubs') ? undefined : ((json['hubs'] as Array<any>).map(V1SettingsCatalogFromJSON)),
        'registries': !exists(json, 'registries') ? undefined : ((json['registries'] as Array<any>).map(V1SettingsCatalogFromJSON)),
    };
}

export function V1TeamSettingsToJSON(value?: V1TeamSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'projects': value.projects === undefined ? undefined : ((value.projects as Array<any>).map(V1SettingsCatalogToJSON)),
        'hubs': value.hubs === undefined ? undefined : ((value.hubs as Array<any>).map(V1SettingsCatalogToJSON)),
        'registries': value.registries === undefined ? undefined : ((value.registries as Array<any>).map(V1SettingsCatalogToJSON)),
    };
}


