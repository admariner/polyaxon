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

package dashboards_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// NewListDashboardsParams creates a new ListDashboardsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewListDashboardsParams() *ListDashboardsParams {
	return &ListDashboardsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewListDashboardsParamsWithTimeout creates a new ListDashboardsParams object
// with the ability to set a timeout on a request.
func NewListDashboardsParamsWithTimeout(timeout time.Duration) *ListDashboardsParams {
	return &ListDashboardsParams{
		timeout: timeout,
	}
}

// NewListDashboardsParamsWithContext creates a new ListDashboardsParams object
// with the ability to set a context for a request.
func NewListDashboardsParamsWithContext(ctx context.Context) *ListDashboardsParams {
	return &ListDashboardsParams{
		Context: ctx,
	}
}

// NewListDashboardsParamsWithHTTPClient creates a new ListDashboardsParams object
// with the ability to set a custom HTTPClient for a request.
func NewListDashboardsParamsWithHTTPClient(client *http.Client) *ListDashboardsParams {
	return &ListDashboardsParams{
		HTTPClient: client,
	}
}

/* ListDashboardsParams contains all the parameters to send to the API endpoint
   for the list dashboards operation.

   Typically these are written to a http.Request.
*/
type ListDashboardsParams struct {

	/* Limit.

	   Limit size.

	   Format: int32
	*/
	Limit *int32

	/* NoPage.

	   No pagination.
	*/
	NoPage *bool

	/* Offset.

	   Pagination offset.

	   Format: int32
	*/
	Offset *int32

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Query.

	   Query filter the search.
	*/
	Query *string

	/* Sort.

	   Sort to order the search.
	*/
	Sort *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the list dashboards params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListDashboardsParams) WithDefaults() *ListDashboardsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the list dashboards params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListDashboardsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the list dashboards params
func (o *ListDashboardsParams) WithTimeout(timeout time.Duration) *ListDashboardsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the list dashboards params
func (o *ListDashboardsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the list dashboards params
func (o *ListDashboardsParams) WithContext(ctx context.Context) *ListDashboardsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the list dashboards params
func (o *ListDashboardsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the list dashboards params
func (o *ListDashboardsParams) WithHTTPClient(client *http.Client) *ListDashboardsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the list dashboards params
func (o *ListDashboardsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithLimit adds the limit to the list dashboards params
func (o *ListDashboardsParams) WithLimit(limit *int32) *ListDashboardsParams {
	o.SetLimit(limit)
	return o
}

// SetLimit adds the limit to the list dashboards params
func (o *ListDashboardsParams) SetLimit(limit *int32) {
	o.Limit = limit
}

// WithNoPage adds the noPage to the list dashboards params
func (o *ListDashboardsParams) WithNoPage(noPage *bool) *ListDashboardsParams {
	o.SetNoPage(noPage)
	return o
}

// SetNoPage adds the noPage to the list dashboards params
func (o *ListDashboardsParams) SetNoPage(noPage *bool) {
	o.NoPage = noPage
}

// WithOffset adds the offset to the list dashboards params
func (o *ListDashboardsParams) WithOffset(offset *int32) *ListDashboardsParams {
	o.SetOffset(offset)
	return o
}

// SetOffset adds the offset to the list dashboards params
func (o *ListDashboardsParams) SetOffset(offset *int32) {
	o.Offset = offset
}

// WithOwner adds the owner to the list dashboards params
func (o *ListDashboardsParams) WithOwner(owner string) *ListDashboardsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the list dashboards params
func (o *ListDashboardsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithQuery adds the query to the list dashboards params
func (o *ListDashboardsParams) WithQuery(query *string) *ListDashboardsParams {
	o.SetQuery(query)
	return o
}

// SetQuery adds the query to the list dashboards params
func (o *ListDashboardsParams) SetQuery(query *string) {
	o.Query = query
}

// WithSort adds the sort to the list dashboards params
func (o *ListDashboardsParams) WithSort(sort *string) *ListDashboardsParams {
	o.SetSort(sort)
	return o
}

// SetSort adds the sort to the list dashboards params
func (o *ListDashboardsParams) SetSort(sort *string) {
	o.Sort = sort
}

// WriteToRequest writes these params to a swagger request
func (o *ListDashboardsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Limit != nil {

		// query param limit
		var qrLimit int32

		if o.Limit != nil {
			qrLimit = *o.Limit
		}
		qLimit := swag.FormatInt32(qrLimit)
		if qLimit != "" {

			if err := r.SetQueryParam("limit", qLimit); err != nil {
				return err
			}
		}
	}

	if o.NoPage != nil {

		// query param no_page
		var qrNoPage bool

		if o.NoPage != nil {
			qrNoPage = *o.NoPage
		}
		qNoPage := swag.FormatBool(qrNoPage)
		if qNoPage != "" {

			if err := r.SetQueryParam("no_page", qNoPage); err != nil {
				return err
			}
		}
	}

	if o.Offset != nil {

		// query param offset
		var qrOffset int32

		if o.Offset != nil {
			qrOffset = *o.Offset
		}
		qOffset := swag.FormatInt32(qrOffset)
		if qOffset != "" {

			if err := r.SetQueryParam("offset", qOffset); err != nil {
				return err
			}
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if o.Query != nil {

		// query param query
		var qrQuery string

		if o.Query != nil {
			qrQuery = *o.Query
		}
		qQuery := qrQuery
		if qQuery != "" {

			if err := r.SetQueryParam("query", qQuery); err != nil {
				return err
			}
		}
	}

	if o.Sort != nil {

		// query param sort
		var qrSort string

		if o.Sort != nil {
			qrSort = *o.Sort
		}
		qSort := qrSort
		if qSort != "" {

			if err := r.SetQueryParam("sort", qSort); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
