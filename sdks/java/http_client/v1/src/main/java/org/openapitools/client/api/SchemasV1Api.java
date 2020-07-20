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

/*
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


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1Schemas;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SchemasV1Api {
    private ApiClient localVarApiClient;

    public SchemasV1Api() {
        this(Configuration.getDefaultApiClient());
    }

    public SchemasV1Api(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for noOp
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> A successful response. </td><td>  -  </td></tr>
        <tr><td> 204 </td><td> No content. </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> You don&#39;t have permission to access the resource. </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Resource does not exist. </td><td>  -  </td></tr>
        <tr><td> 0 </td><td> An unexpected error response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call noOpCall(final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/schemas";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKey" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call noOpValidateBeforeCall(final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = noOpCall(_callback);
        return localVarCall;

    }

    /**
     * Get random
     * 
     * @return V1Schemas
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> A successful response. </td><td>  -  </td></tr>
        <tr><td> 204 </td><td> No content. </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> You don&#39;t have permission to access the resource. </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Resource does not exist. </td><td>  -  </td></tr>
        <tr><td> 0 </td><td> An unexpected error response </td><td>  -  </td></tr>
     </table>
     */
    public V1Schemas noOp() throws ApiException {
        ApiResponse<V1Schemas> localVarResp = noOpWithHttpInfo();
        return localVarResp.getData();
    }

    /**
     * Get random
     * 
     * @return ApiResponse&lt;V1Schemas&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> A successful response. </td><td>  -  </td></tr>
        <tr><td> 204 </td><td> No content. </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> You don&#39;t have permission to access the resource. </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Resource does not exist. </td><td>  -  </td></tr>
        <tr><td> 0 </td><td> An unexpected error response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<V1Schemas> noOpWithHttpInfo() throws ApiException {
        okhttp3.Call localVarCall = noOpValidateBeforeCall(null);
        Type localVarReturnType = new TypeToken<V1Schemas>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get random (asynchronously)
     * 
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> A successful response. </td><td>  -  </td></tr>
        <tr><td> 204 </td><td> No content. </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> You don&#39;t have permission to access the resource. </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Resource does not exist. </td><td>  -  </td></tr>
        <tr><td> 0 </td><td> An unexpected error response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call noOpAsync(final ApiCallback<V1Schemas> _callback) throws ApiException {

        okhttp3.Call localVarCall = noOpValidateBeforeCall(_callback);
        Type localVarReturnType = new TypeToken<V1Schemas>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
