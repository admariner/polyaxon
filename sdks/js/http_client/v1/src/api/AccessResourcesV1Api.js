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
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1AccessResource from '../model/V1AccessResource';
import V1ListAccessResourcesResponse from '../model/V1ListAccessResourcesResponse';

/**
* AccessResourcesV1 service.
* @module api/AccessResourcesV1Api
* @version 1.1.4
*/
export default class AccessResourcesV1Api {

    /**
    * Constructs a new AccessResourcesV1Api. 
    * Polyaxon sdk
    * @alias module:api/AccessResourcesV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAccessResource operation.
     * @callback module:api/AccessResourcesV1Api~createAccessResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1AccessResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create access resource
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1AccessResource} body Artifact store body
     * @param {module:api/AccessResourcesV1Api~createAccessResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1AccessResource}
     */
    createAccessResource(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createAccessResource");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAccessResource");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1AccessResource;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/access_resources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAccessResource operation.
     * @callback module:api/AccessResourcesV1Api~deleteAccessResourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete access resource
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/AccessResourcesV1Api~deleteAccessResourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAccessResource(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteAccessResource");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteAccessResource");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/access_resources/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccessResource operation.
     * @callback module:api/AccessResourcesV1Api~getAccessResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1AccessResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get access resource
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/AccessResourcesV1Api~getAccessResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1AccessResource}
     */
    getAccessResource(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getAccessResource");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getAccessResource");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1AccessResource;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/access_resources/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAccessResourceNames operation.
     * @callback module:api/AccessResourcesV1Api~listAccessResourceNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListAccessResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List access resource names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/AccessResourcesV1Api~listAccessResourceNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListAccessResourcesResponse}
     */
    listAccessResourceNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listAccessResourceNames");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListAccessResourcesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/access_resources/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAccessResources operation.
     * @callback module:api/AccessResourcesV1Api~listAccessResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListAccessResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List access resources
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/AccessResourcesV1Api~listAccessResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListAccessResourcesResponse}
     */
    listAccessResources(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listAccessResources");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListAccessResourcesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/access_resources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchAccessResource operation.
     * @callback module:api/AccessResourcesV1Api~patchAccessResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1AccessResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch access resource
     * @param {String} owner Owner of the namespace
     * @param {String} access_resource_uuid UUID
     * @param {module:model/V1AccessResource} body Artifact store body
     * @param {module:api/AccessResourcesV1Api~patchAccessResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1AccessResource}
     */
    patchAccessResource(owner, access_resource_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchAccessResource");
      }
      // verify the required parameter 'access_resource_uuid' is set
      if (access_resource_uuid === undefined || access_resource_uuid === null) {
        throw new Error("Missing the required parameter 'access_resource_uuid' when calling patchAccessResource");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchAccessResource");
      }

      let pathParams = {
        'owner': owner,
        'access_resource.uuid': access_resource_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1AccessResource;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/access_resources/{access_resource.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAccessResource operation.
     * @callback module:api/AccessResourcesV1Api~updateAccessResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1AccessResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update access resource
     * @param {String} owner Owner of the namespace
     * @param {String} access_resource_uuid UUID
     * @param {module:model/V1AccessResource} body Artifact store body
     * @param {module:api/AccessResourcesV1Api~updateAccessResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1AccessResource}
     */
    updateAccessResource(owner, access_resource_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateAccessResource");
      }
      // verify the required parameter 'access_resource_uuid' is set
      if (access_resource_uuid === undefined || access_resource_uuid === null) {
        throw new Error("Missing the required parameter 'access_resource_uuid' when calling updateAccessResource");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateAccessResource");
      }

      let pathParams = {
        'owner': owner,
        'access_resource.uuid': access_resource_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1AccessResource;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/access_resources/{access_resource.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
