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

/**
 * 
 * @export
 * @enum {string}
 */
export enum SparkDeployMode {
    Cluster = 'cluster',
    Client = 'client',
    InClusterClient = 'in_cluster_client'
}

export function SparkDeployModeFromJSON(json: any): SparkDeployMode {
    return SparkDeployModeFromJSONTyped(json, false);
}

export function SparkDeployModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SparkDeployMode {
    return json as SparkDeployMode;
}

export function SparkDeployModeToJSON(value?: SparkDeployMode | null): any {
    return value as any;
}

