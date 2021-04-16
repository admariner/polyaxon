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

// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/validate"
)

// V1EventKind v1 event kind
//
// swagger:model v1EventKind
type V1EventKind string

func NewV1EventKind(value V1EventKind) *V1EventKind {
	v := value
	return &v
}

const (

	// V1EventKindRunStatusCreated captures enum value "run_status_created"
	V1EventKindRunStatusCreated V1EventKind = "run_status_created"

	// V1EventKindRunStatusResuming captures enum value "run_status_resuming"
	V1EventKindRunStatusResuming V1EventKind = "run_status_resuming"

	// V1EventKindRunStatusCompiled captures enum value "run_status_compiled"
	V1EventKindRunStatusCompiled V1EventKind = "run_status_compiled"

	// V1EventKindRunStatusOnSchedule captures enum value "run_status_on_schedule"
	V1EventKindRunStatusOnSchedule V1EventKind = "run_status_on_schedule"

	// V1EventKindRunStatusQueued captures enum value "run_status_queued"
	V1EventKindRunStatusQueued V1EventKind = "run_status_queued"

	// V1EventKindRunStatusScheduled captures enum value "run_status_scheduled"
	V1EventKindRunStatusScheduled V1EventKind = "run_status_scheduled"

	// V1EventKindRunStatusAwaitingCache captures enum value "run_status_awaiting_cache"
	V1EventKindRunStatusAwaitingCache V1EventKind = "run_status_awaiting_cache"

	// V1EventKindRunStatusStarting captures enum value "run_status_starting"
	V1EventKindRunStatusStarting V1EventKind = "run_status_starting"

	// V1EventKindRunStatusRunning captures enum value "run_status_running"
	V1EventKindRunStatusRunning V1EventKind = "run_status_running"

	// V1EventKindRunStatusProcessing captures enum value "run_status_processing"
	V1EventKindRunStatusProcessing V1EventKind = "run_status_processing"

	// V1EventKindRunStatusStopping captures enum value "run_status_stopping"
	V1EventKindRunStatusStopping V1EventKind = "run_status_stopping"

	// V1EventKindRunStatusFailed captures enum value "run_status_failed"
	V1EventKindRunStatusFailed V1EventKind = "run_status_failed"

	// V1EventKindRunStatusStopped captures enum value "run_status_stopped"
	V1EventKindRunStatusStopped V1EventKind = "run_status_stopped"

	// V1EventKindRunStatusSucceeded captures enum value "run_status_succeeded"
	V1EventKindRunStatusSucceeded V1EventKind = "run_status_succeeded"

	// V1EventKindRunStatusSkipped captures enum value "run_status_skipped"
	V1EventKindRunStatusSkipped V1EventKind = "run_status_skipped"

	// V1EventKindRunStatusWarning captures enum value "run_status_warning"
	V1EventKindRunStatusWarning V1EventKind = "run_status_warning"

	// V1EventKindRunStatusUnschedulable captures enum value "run_status_unschedulable"
	V1EventKindRunStatusUnschedulable V1EventKind = "run_status_unschedulable"

	// V1EventKindRunStatusUpstreamFailed captures enum value "run_status_upstream_failed"
	V1EventKindRunStatusUpstreamFailed V1EventKind = "run_status_upstream_failed"

	// V1EventKindRunStatusRetrying captures enum value "run_status_retrying"
	V1EventKindRunStatusRetrying V1EventKind = "run_status_retrying"

	// V1EventKindRunStatusUnknown captures enum value "run_status_unknown"
	V1EventKindRunStatusUnknown V1EventKind = "run_status_unknown"

	// V1EventKindRunStatusDone captures enum value "run_status_done"
	V1EventKindRunStatusDone V1EventKind = "run_status_done"

	// V1EventKindRunApprovedActor captures enum value "run_approved_actor"
	V1EventKindRunApprovedActor V1EventKind = "run_approved_actor"

	// V1EventKindRunInvalidatedActor captures enum value "run_invalidated_actor"
	V1EventKindRunInvalidatedActor V1EventKind = "run_invalidated_actor"

	// V1EventKindRunNewArtifacts captures enum value "run_new_artifacts"
	V1EventKindRunNewArtifacts V1EventKind = "run_new_artifacts"

	// V1EventKindConnectionGitCommit captures enum value "connection_git_commit"
	V1EventKindConnectionGitCommit V1EventKind = "connection_git_commit"

	// V1EventKindConnectionDatasetVersion captures enum value "connection_dataset_version"
	V1EventKindConnectionDatasetVersion V1EventKind = "connection_dataset_version"

	// V1EventKindConnectionRegistryImage captures enum value "connection_registry_image"
	V1EventKindConnectionRegistryImage V1EventKind = "connection_registry_image"

	// V1EventKindAlertInfo captures enum value "alert_info"
	V1EventKindAlertInfo V1EventKind = "alert_info"

	// V1EventKindAlertWarning captures enum value "alert_warning"
	V1EventKindAlertWarning V1EventKind = "alert_warning"

	// V1EventKindAlertCritical captures enum value "alert_critical"
	V1EventKindAlertCritical V1EventKind = "alert_critical"

	// V1EventKindModelVersionNewMetric captures enum value "model_version_new_metric"
	V1EventKindModelVersionNewMetric V1EventKind = "model_version_new_metric"

	// V1EventKindProjectCustomEvent captures enum value "project_custom_event"
	V1EventKindProjectCustomEvent V1EventKind = "project_custom_event"

	// V1EventKindOrgCustomEvent captures enum value "org_custom_event"
	V1EventKindOrgCustomEvent V1EventKind = "org_custom_event"
)

// for schema
var v1EventKindEnum []interface{}

func init() {
	var res []V1EventKind
	if err := json.Unmarshal([]byte(`["run_status_created","run_status_resuming","run_status_compiled","run_status_on_schedule","run_status_queued","run_status_scheduled","run_status_awaiting_cache","run_status_starting","run_status_running","run_status_processing","run_status_stopping","run_status_failed","run_status_stopped","run_status_succeeded","run_status_skipped","run_status_warning","run_status_unschedulable","run_status_upstream_failed","run_status_retrying","run_status_unknown","run_status_done","run_approved_actor","run_invalidated_actor","run_new_artifacts","connection_git_commit","connection_dataset_version","connection_registry_image","alert_info","alert_warning","alert_critical","model_version_new_metric","project_custom_event","org_custom_event"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1EventKindEnum = append(v1EventKindEnum, v)
	}
}

func (m V1EventKind) validateV1EventKindEnum(path, location string, value V1EventKind) error {
	if err := validate.EnumCase(path, location, value, v1EventKindEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 event kind
func (m V1EventKind) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1EventKindEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 event kind based on context it is used
func (m V1EventKind) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}
