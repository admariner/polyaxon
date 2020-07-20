// Copyright 2018-2020 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.1.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ComponentHub,
    V1ComponentHubFromJSON,
    V1ComponentHubToJSON,
    V1ListComponentHubsResponse,
    V1ListComponentHubsResponseFromJSON,
    V1ListComponentHubsResponseToJSON,
} from '../models';

export interface CreateComponentHubRequest {
    owner: string;
    body: V1ComponentHub;
}

export interface DeleteComponentHubRequest {
    owner: string;
    uuid: string;
}

export interface GetComponentHubRequest {
    owner: string;
    uuid: string;
}

export interface ListComponentHubNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListComponentHubsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface PatchComponentHubRequest {
    owner: string;
    componentUuid: string;
    body: V1ComponentHub;
}

export interface UpdateComponentHubRequest {
    owner: string;
    componentUuid: string;
    body: V1ComponentHub;
}

/**
 * 
 */
export class ComponentHubV1Api extends runtime.BaseAPI {

    /**
     * Create hub component
     */
    async createComponentHubRaw(requestParameters: CreateComponentHubRequest): Promise<runtime.ApiResponse<V1ComponentHub>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createComponentHub.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createComponentHub.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1ComponentHubToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ComponentHubFromJSON(jsonValue));
    }

    /**
     * Create hub component
     */
    async createComponentHub(requestParameters: CreateComponentHubRequest): Promise<V1ComponentHub> {
        const response = await this.createComponentHubRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete hub component
     */
    async deleteComponentHubRaw(requestParameters: DeleteComponentHubRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteComponentHub.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteComponentHub.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete hub component
     */
    async deleteComponentHub(requestParameters: DeleteComponentHubRequest): Promise<void> {
        await this.deleteComponentHubRaw(requestParameters);
    }

    /**
     * Get hub component
     */
    async getComponentHubRaw(requestParameters: GetComponentHubRequest): Promise<runtime.ApiResponse<V1ComponentHub>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getComponentHub.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getComponentHub.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ComponentHubFromJSON(jsonValue));
    }

    /**
     * Get hub component
     */
    async getComponentHub(requestParameters: GetComponentHubRequest): Promise<V1ComponentHub> {
        const response = await this.getComponentHubRaw(requestParameters);
        return await response.value();
    }

    /**
     * List hub component names
     */
    async listComponentHubNamesRaw(requestParameters: ListComponentHubNamesRequest): Promise<runtime.ApiResponse<V1ListComponentHubsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listComponentHubNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListComponentHubsResponseFromJSON(jsonValue));
    }

    /**
     * List hub component names
     */
    async listComponentHubNames(requestParameters: ListComponentHubNamesRequest): Promise<V1ListComponentHubsResponse> {
        const response = await this.listComponentHubNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List hub components
     */
    async listComponentHubsRaw(requestParameters: ListComponentHubsRequest): Promise<runtime.ApiResponse<V1ListComponentHubsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listComponentHubs.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListComponentHubsResponseFromJSON(jsonValue));
    }

    /**
     * List hub components
     */
    async listComponentHubs(requestParameters: ListComponentHubsRequest): Promise<V1ListComponentHubsResponse> {
        const response = await this.listComponentHubsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch hub component
     */
    async patchComponentHubRaw(requestParameters: PatchComponentHubRequest): Promise<runtime.ApiResponse<V1ComponentHub>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchComponentHub.');
        }

        if (requestParameters.componentUuid === null || requestParameters.componentUuid === undefined) {
            throw new runtime.RequiredError('componentUuid','Required parameter requestParameters.componentUuid was null or undefined when calling patchComponentHub.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchComponentHub.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/{component.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"component.uuid"}}`, encodeURIComponent(String(requestParameters.componentUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1ComponentHubToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ComponentHubFromJSON(jsonValue));
    }

    /**
     * Patch hub component
     */
    async patchComponentHub(requestParameters: PatchComponentHubRequest): Promise<V1ComponentHub> {
        const response = await this.patchComponentHubRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update hub component
     */
    async updateComponentHubRaw(requestParameters: UpdateComponentHubRequest): Promise<runtime.ApiResponse<V1ComponentHub>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateComponentHub.');
        }

        if (requestParameters.componentUuid === null || requestParameters.componentUuid === undefined) {
            throw new runtime.RequiredError('componentUuid','Required parameter requestParameters.componentUuid was null or undefined when calling updateComponentHub.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateComponentHub.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/{component.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"component.uuid"}}`, encodeURIComponent(String(requestParameters.componentUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1ComponentHubToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ComponentHubFromJSON(jsonValue));
    }

    /**
     * Update hub component
     */
    async updateComponentHub(requestParameters: UpdateComponentHubRequest): Promise<V1ComponentHub> {
        const response = await this.updateComponentHubRaw(requestParameters);
        return await response.value();
    }

}
