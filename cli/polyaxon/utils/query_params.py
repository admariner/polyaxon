#!/usr/bin/python
#
# Copyright 2019 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8


def get_query_params(limit=None, offset=None, query=None, sort=None):
    params = {}
    if limit:
        params["limit"] = limit
    if offset:
        params["offset"] = offset
    if query:
        params["query"] = query
    if sort:
        params["sort"] = sort

    return params
