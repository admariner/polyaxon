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

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// RestartRunReader is a Reader for the RestartRun structure.
type RestartRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *RestartRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewRestartRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewRestartRunNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewRestartRunForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewRestartRunNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewRestartRunDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewRestartRunOK creates a RestartRunOK with default headers values
func NewRestartRunOK() *RestartRunOK {
	return &RestartRunOK{}
}

/* RestartRunOK describes a response with status code 200, with default header values.

A successful response.
*/
type RestartRunOK struct {
	Payload *service_model.V1Run
}

func (o *RestartRunOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/restart][%d] restartRunOK  %+v", 200, o.Payload)
}
func (o *RestartRunOK) GetPayload() *service_model.V1Run {
	return o.Payload
}

func (o *RestartRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Run)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestartRunNoContent creates a RestartRunNoContent with default headers values
func NewRestartRunNoContent() *RestartRunNoContent {
	return &RestartRunNoContent{}
}

/* RestartRunNoContent describes a response with status code 204, with default header values.

No content.
*/
type RestartRunNoContent struct {
	Payload interface{}
}

func (o *RestartRunNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/restart][%d] restartRunNoContent  %+v", 204, o.Payload)
}
func (o *RestartRunNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *RestartRunNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestartRunForbidden creates a RestartRunForbidden with default headers values
func NewRestartRunForbidden() *RestartRunForbidden {
	return &RestartRunForbidden{}
}

/* RestartRunForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type RestartRunForbidden struct {
	Payload interface{}
}

func (o *RestartRunForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/restart][%d] restartRunForbidden  %+v", 403, o.Payload)
}
func (o *RestartRunForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *RestartRunForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestartRunNotFound creates a RestartRunNotFound with default headers values
func NewRestartRunNotFound() *RestartRunNotFound {
	return &RestartRunNotFound{}
}

/* RestartRunNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type RestartRunNotFound struct {
	Payload interface{}
}

func (o *RestartRunNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/restart][%d] restartRunNotFound  %+v", 404, o.Payload)
}
func (o *RestartRunNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *RestartRunNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestartRunDefault creates a RestartRunDefault with default headers values
func NewRestartRunDefault(code int) *RestartRunDefault {
	return &RestartRunDefault{
		_statusCode: code,
	}
}

/* RestartRunDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type RestartRunDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the restart run default response
func (o *RestartRunDefault) Code() int {
	return o._statusCode
}

func (o *RestartRunDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/restart][%d] RestartRun default  %+v", o._statusCode, o.Payload)
}
func (o *RestartRunDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *RestartRunDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
