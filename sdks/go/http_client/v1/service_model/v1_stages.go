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

// V1Stages v1 stages
//
// swagger:model v1Stages
type V1Stages string

func NewV1Stages(value V1Stages) *V1Stages {
	v := value
	return &v
}

const (

	// V1StagesTesting captures enum value "testing"
	V1StagesTesting V1Stages = "testing"

	// V1StagesStaging captures enum value "staging"
	V1StagesStaging V1Stages = "staging"

	// V1StagesProduction captures enum value "production"
	V1StagesProduction V1Stages = "production"

	// V1StagesDisabled captures enum value "disabled"
	V1StagesDisabled V1Stages = "disabled"
)

// for schema
var v1StagesEnum []interface{}

func init() {
	var res []V1Stages
	if err := json.Unmarshal([]byte(`["testing","staging","production","disabled"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1StagesEnum = append(v1StagesEnum, v)
	}
}

func (m V1Stages) validateV1StagesEnum(path, location string, value V1Stages) error {
	if err := validate.EnumCase(path, location, value, v1StagesEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 stages
func (m V1Stages) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1StagesEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 stages based on context it is used
func (m V1Stages) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}
