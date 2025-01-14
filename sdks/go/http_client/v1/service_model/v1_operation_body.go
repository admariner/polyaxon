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

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1OperationBody Operation creation
//
// swagger:model v1OperationBody
type V1OperationBody struct {

	// The Operation body content as dump string
	Content string `json:"content,omitempty"`

	// Optional, only useful if is_managed is false
	Description string `json:"description,omitempty"`

	// Optional, if the run is managed, true by default, this flag should be false if starting a non-managed run
	IsManaged bool `json:"is_managed,omitempty"`

	// Meta
	MetaInfo interface{} `json:"meta_info,omitempty"`

	// Optional, only usefule if is_managed is false
	Name string `json:"name,omitempty"`

	// Optional, if the run is approved, true by default, this flag should be false if a run requires human validation
	Pending *V1RunPending `json:"pending,omitempty"`

	// Optional, only useful if is_managed is false
	Tags []string `json:"tags"`
}

// Validate validates this v1 operation body
func (m *V1OperationBody) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validatePending(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1OperationBody) validatePending(formats strfmt.Registry) error {
	if swag.IsZero(m.Pending) { // not required
		return nil
	}

	if m.Pending != nil {
		if err := m.Pending.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("pending")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 operation body based on the context it is used
func (m *V1OperationBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidatePending(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1OperationBody) contextValidatePending(ctx context.Context, formats strfmt.Registry) error {

	if m.Pending != nil {
		if err := m.Pending.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("pending")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1OperationBody) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1OperationBody) UnmarshalBinary(b []byte) error {
	var res V1OperationBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
