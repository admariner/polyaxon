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

// Code generated by go-swagger; DO NOT EDIT.

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListAgentsReader is a Reader for the ListAgents structure.
type ListAgentsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListAgentsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListAgentsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListAgentsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListAgentsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListAgentsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListAgentsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListAgentsOK creates a ListAgentsOK with default headers values
func NewListAgentsOK() *ListAgentsOK {
	return &ListAgentsOK{}
}

/*ListAgentsOK handles this case with default header values.

A successful response.
*/
type ListAgentsOK struct {
	Payload *service_model.V1ListAgentsResponse
}

func (o *ListAgentsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents][%d] listAgentsOK  %+v", 200, o.Payload)
}

func (o *ListAgentsOK) GetPayload() *service_model.V1ListAgentsResponse {
	return o.Payload
}

func (o *ListAgentsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListAgentsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListAgentsNoContent creates a ListAgentsNoContent with default headers values
func NewListAgentsNoContent() *ListAgentsNoContent {
	return &ListAgentsNoContent{}
}

/*ListAgentsNoContent handles this case with default header values.

No content.
*/
type ListAgentsNoContent struct {
	Payload interface{}
}

func (o *ListAgentsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents][%d] listAgentsNoContent  %+v", 204, o.Payload)
}

func (o *ListAgentsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListAgentsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListAgentsForbidden creates a ListAgentsForbidden with default headers values
func NewListAgentsForbidden() *ListAgentsForbidden {
	return &ListAgentsForbidden{}
}

/*ListAgentsForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type ListAgentsForbidden struct {
	Payload interface{}
}

func (o *ListAgentsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents][%d] listAgentsForbidden  %+v", 403, o.Payload)
}

func (o *ListAgentsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListAgentsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListAgentsNotFound creates a ListAgentsNotFound with default headers values
func NewListAgentsNotFound() *ListAgentsNotFound {
	return &ListAgentsNotFound{}
}

/*ListAgentsNotFound handles this case with default header values.

Resource does not exist.
*/
type ListAgentsNotFound struct {
	Payload interface{}
}

func (o *ListAgentsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents][%d] listAgentsNotFound  %+v", 404, o.Payload)
}

func (o *ListAgentsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListAgentsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListAgentsDefault creates a ListAgentsDefault with default headers values
func NewListAgentsDefault(code int) *ListAgentsDefault {
	return &ListAgentsDefault{
		_statusCode: code,
	}
}

/*ListAgentsDefault handles this case with default header values.

An unexpected error response
*/
type ListAgentsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list agents default response
func (o *ListAgentsDefault) Code() int {
	return o._statusCode
}

func (o *ListAgentsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents][%d] ListAgents default  %+v", o._statusCode, o.Payload)
}

func (o *ListAgentsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListAgentsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}