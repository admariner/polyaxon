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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1EventKind.
* @enum {}
* @readonly
*/
export default class V1EventKind {
    
        /**
         * value: "run_status_created"
         * @const
         */
        "run_status_created" = "run_status_created";

    
        /**
         * value: "run_status_resuming"
         * @const
         */
        "run_status_resuming" = "run_status_resuming";

    
        /**
         * value: "run_status_compiled"
         * @const
         */
        "run_status_compiled" = "run_status_compiled";

    
        /**
         * value: "run_status_on_schedule"
         * @const
         */
        "run_status_on_schedule" = "run_status_on_schedule";

    
        /**
         * value: "run_status_queued"
         * @const
         */
        "run_status_queued" = "run_status_queued";

    
        /**
         * value: "run_status_scheduled"
         * @const
         */
        "run_status_scheduled" = "run_status_scheduled";

    
        /**
         * value: "run_status_starting"
         * @const
         */
        "run_status_starting" = "run_status_starting";

    
        /**
         * value: "run_status_running"
         * @const
         */
        "run_status_running" = "run_status_running";

    
        /**
         * value: "run_status_processing"
         * @const
         */
        "run_status_processing" = "run_status_processing";

    
        /**
         * value: "run_status_stopping"
         * @const
         */
        "run_status_stopping" = "run_status_stopping";

    
        /**
         * value: "run_status_failed"
         * @const
         */
        "run_status_failed" = "run_status_failed";

    
        /**
         * value: "run_status_stopped"
         * @const
         */
        "run_status_stopped" = "run_status_stopped";

    
        /**
         * value: "run_status_succeeded"
         * @const
         */
        "run_status_succeeded" = "run_status_succeeded";

    
        /**
         * value: "run_status_skipped"
         * @const
         */
        "run_status_skipped" = "run_status_skipped";

    
        /**
         * value: "run_status_warning"
         * @const
         */
        "run_status_warning" = "run_status_warning";

    
        /**
         * value: "run_status_unschedulable"
         * @const
         */
        "run_status_unschedulable" = "run_status_unschedulable";

    
        /**
         * value: "run_status_upstream_failed"
         * @const
         */
        "run_status_upstream_failed" = "run_status_upstream_failed";

    
        /**
         * value: "run_status_retrying"
         * @const
         */
        "run_status_retrying" = "run_status_retrying";

    
        /**
         * value: "run_status_unknown"
         * @const
         */
        "run_status_unknown" = "run_status_unknown";

    
        /**
         * value: "run_status_done"
         * @const
         */
        "run_status_done" = "run_status_done";

    
        /**
         * value: "run_approved_actor"
         * @const
         */
        "run_approved_actor" = "run_approved_actor";

    
        /**
         * value: "run_invalidated_actor"
         * @const
         */
        "run_invalidated_actor" = "run_invalidated_actor";

    
        /**
         * value: "run_new_artifacts"
         * @const
         */
        "run_new_artifacts" = "run_new_artifacts";

    
        /**
         * value: "connection_git_commit"
         * @const
         */
        "connection_git_commit" = "connection_git_commit";

    
        /**
         * value: "connection_dataset_version"
         * @const
         */
        "connection_dataset_version" = "connection_dataset_version";

    
        /**
         * value: "connection_registry_image"
         * @const
         */
        "connection_registry_image" = "connection_registry_image";

    
        /**
         * value: "alert_info"
         * @const
         */
        "alert_info" = "alert_info";

    
        /**
         * value: "alert_warning"
         * @const
         */
        "alert_warning" = "alert_warning";

    
        /**
         * value: "alert_critical"
         * @const
         */
        "alert_critical" = "alert_critical";

    
        /**
         * value: "model_version_new_metric"
         * @const
         */
        "model_version_new_metric" = "model_version_new_metric";

    
        /**
         * value: "project_custom_event"
         * @const
         */
        "project_custom_event" = "project_custom_event";

    
        /**
         * value: "org_custom_event"
         * @const
         */
        "org_custom_event" = "org_custom_event";

    

    /**
    * Returns a <code>V1EventKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1EventKind} The enum <code>V1EventKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
