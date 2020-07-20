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

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1AccessResource;
import org.openapitools.client.model.V1ListAccessResourcesResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AccessResourcesV1Api
 */
@Ignore
public class AccessResourcesV1ApiTest {

    private final AccessResourcesV1Api api = new AccessResourcesV1Api();

    
    /**
     * Create access resource
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAccessResourceTest() throws ApiException {
        String owner = null;
        V1AccessResource body = null;
        V1AccessResource response = api.createAccessResource(owner, body);

        // TODO: test validations
    }
    
    /**
     * Delete access resource
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteAccessResourceTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteAccessResource(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * Get access resource
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAccessResourceTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1AccessResource response = api.getAccessResource(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * List access resource names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listAccessResourceNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListAccessResourcesResponse response = api.listAccessResourceNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List access resources
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listAccessResourcesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListAccessResourcesResponse response = api.listAccessResources(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch access resource
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchAccessResourceTest() throws ApiException {
        String owner = null;
        String accessResourceUuid = null;
        V1AccessResource body = null;
        V1AccessResource response = api.patchAccessResource(owner, accessResourceUuid, body);

        // TODO: test validations
    }
    
    /**
     * Update access resource
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateAccessResourceTest() throws ApiException {
        String owner = null;
        String accessResourceUuid = null;
        V1AccessResource body = null;
        V1AccessResource response = api.updateAccessResource(owner, accessResourceUuid, body);

        // TODO: test validations
    }
    
}
