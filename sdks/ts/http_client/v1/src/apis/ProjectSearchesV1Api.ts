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


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ListSearchesResponse,
    V1ListSearchesResponseFromJSON,
    V1ListSearchesResponseToJSON,
    V1Search,
    V1SearchFromJSON,
    V1SearchToJSON,
} from '../models';

export interface CreateProjectSearchRequest {
    owner: string;
    project: string;
    body: V1Search;
}

export interface DeleteProjectSearchRequest {
    owner: string;
    entity: string;
    uuid: string;
}

export interface GetProjectSearchRequest {
    owner: string;
    entity: string;
    uuid: string;
}

export interface ListProjectSearchNamesRequest {
    owner: string;
    name: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    mode?: string;
}

export interface ListProjectSearchesRequest {
    owner: string;
    name: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    mode?: string;
}

export interface PatchProjectSearchRequest {
    owner: string;
    project: string;
    searchUuid: string;
    body: V1Search;
}

export interface PromoteProjectSearchRequest {
    owner: string;
    entity: string;
    uuid: string;
}

export interface UpdateProjectSearchRequest {
    owner: string;
    project: string;
    searchUuid: string;
    body: V1Search;
}

/**
 * 
 */
export class ProjectSearchesV1Api extends runtime.BaseAPI {

    /**
     * Create project search
     */
    async createProjectSearchRaw(requestParameters: CreateProjectSearchRequest): Promise<runtime.ApiResponse<V1Search>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createProjectSearch.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling createProjectSearch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createProjectSearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/searches`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1SearchToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SearchFromJSON(jsonValue));
    }

    /**
     * Create project search
     */
    async createProjectSearch(requestParameters: CreateProjectSearchRequest): Promise<V1Search> {
        const response = await this.createProjectSearchRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete project search
     */
    async deleteProjectSearchRaw(requestParameters: DeleteProjectSearchRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteProjectSearch.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling deleteProjectSearch.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteProjectSearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{entity}/searches/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete project search
     */
    async deleteProjectSearch(requestParameters: DeleteProjectSearchRequest): Promise<void> {
        await this.deleteProjectSearchRaw(requestParameters);
    }

    /**
     * Get project search
     */
    async getProjectSearchRaw(requestParameters: GetProjectSearchRequest): Promise<runtime.ApiResponse<V1Search>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getProjectSearch.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling getProjectSearch.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getProjectSearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{entity}/searches/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SearchFromJSON(jsonValue));
    }

    /**
     * Get project search
     */
    async getProjectSearch(requestParameters: GetProjectSearchRequest): Promise<V1Search> {
        const response = await this.getProjectSearchRaw(requestParameters);
        return await response.value();
    }

    /**
     * List project search names
     */
    async listProjectSearchNamesRaw(requestParameters: ListProjectSearchNamesRequest): Promise<runtime.ApiResponse<V1ListSearchesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listProjectSearchNames.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling listProjectSearchNames.');
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

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/searches/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListSearchesResponseFromJSON(jsonValue));
    }

    /**
     * List project search names
     */
    async listProjectSearchNames(requestParameters: ListProjectSearchNamesRequest): Promise<V1ListSearchesResponse> {
        const response = await this.listProjectSearchNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List project searches
     */
    async listProjectSearchesRaw(requestParameters: ListProjectSearchesRequest): Promise<runtime.ApiResponse<V1ListSearchesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listProjectSearches.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling listProjectSearches.');
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

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/searches`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListSearchesResponseFromJSON(jsonValue));
    }

    /**
     * List project searches
     */
    async listProjectSearches(requestParameters: ListProjectSearchesRequest): Promise<V1ListSearchesResponse> {
        const response = await this.listProjectSearchesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch project search
     */
    async patchProjectSearchRaw(requestParameters: PatchProjectSearchRequest): Promise<runtime.ApiResponse<V1Search>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchProjectSearch.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling patchProjectSearch.');
        }

        if (requestParameters.searchUuid === null || requestParameters.searchUuid === undefined) {
            throw new runtime.RequiredError('searchUuid','Required parameter requestParameters.searchUuid was null or undefined when calling patchProjectSearch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchProjectSearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/searches/{search.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))).replace(`{${"search.uuid"}}`, encodeURIComponent(String(requestParameters.searchUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1SearchToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SearchFromJSON(jsonValue));
    }

    /**
     * Patch project search
     */
    async patchProjectSearch(requestParameters: PatchProjectSearchRequest): Promise<V1Search> {
        const response = await this.patchProjectSearchRaw(requestParameters);
        return await response.value();
    }

    /**
     * Promote project search
     */
    async promoteProjectSearchRaw(requestParameters: PromoteProjectSearchRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling promoteProjectSearch.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling promoteProjectSearch.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling promoteProjectSearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{entity}/searches/{uuid}/promote`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Promote project search
     */
    async promoteProjectSearch(requestParameters: PromoteProjectSearchRequest): Promise<void> {
        await this.promoteProjectSearchRaw(requestParameters);
    }

    /**
     * Update project search
     */
    async updateProjectSearchRaw(requestParameters: UpdateProjectSearchRequest): Promise<runtime.ApiResponse<V1Search>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateProjectSearch.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling updateProjectSearch.');
        }

        if (requestParameters.searchUuid === null || requestParameters.searchUuid === undefined) {
            throw new runtime.RequiredError('searchUuid','Required parameter requestParameters.searchUuid was null or undefined when calling updateProjectSearch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateProjectSearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/searches/{search.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))).replace(`{${"search.uuid"}}`, encodeURIComponent(String(requestParameters.searchUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1SearchToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SearchFromJSON(jsonValue));
    }

    /**
     * Update project search
     */
    async updateProjectSearch(requestParameters: UpdateProjectSearchRequest): Promise<V1Search> {
        const response = await this.updateProjectSearchRaw(requestParameters);
        return await response.value();
    }

}
