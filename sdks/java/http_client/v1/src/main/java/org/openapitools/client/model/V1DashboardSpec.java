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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.11.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1SectionSpec;

/**
 * V1DashboardSpec
 */

public class V1DashboardSpec {
  public static final String SERIALIZED_NAME_SECTIONS = "sections";
  @SerializedName(SERIALIZED_NAME_SECTIONS)
  private List<V1SectionSpec> sections = null;


  public V1DashboardSpec sections(List<V1SectionSpec> sections) {
    
    this.sections = sections;
    return this;
  }

  public V1DashboardSpec addSectionsItem(V1SectionSpec sectionsItem) {
    if (this.sections == null) {
      this.sections = new ArrayList<V1SectionSpec>();
    }
    this.sections.add(sectionsItem);
    return this;
  }

   /**
   * Get sections
   * @return sections
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1SectionSpec> getSections() {
    return sections;
  }


  public void setSections(List<V1SectionSpec> sections) {
    this.sections = sections;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1DashboardSpec v1DashboardSpec = (V1DashboardSpec) o;
    return Objects.equals(this.sections, v1DashboardSpec.sections);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sections);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1DashboardSpec {\n");
    sb.append("    sections: ").append(toIndentedString(sections)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

