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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1EventArtifact from './V1EventArtifact';
import V1EventAudio from './V1EventAudio';
import V1EventChart from './V1EventChart';
import V1EventCurve from './V1EventCurve';
import V1EventDataframe from './V1EventDataframe';
import V1EventHistogram from './V1EventHistogram';
import V1EventImage from './V1EventImage';
import V1EventModel from './V1EventModel';
import V1EventVideo from './V1EventVideo';

/**
 * The V1Event model module.
 * @module model/V1Event
 * @version 1.1.4
 */
class V1Event {
    /**
     * Constructs a new <code>V1Event</code>.
     * @alias module:model/V1Event
     */
    constructor() { 
        
        V1Event.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Event} obj Optional instance to populate.
     * @return {module:model/V1Event} The populated <code>V1Event</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Event();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('step')) {
                obj['step'] = ApiClient.convertToType(data['step'], 'Number');
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], 'Number');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = V1EventImage.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('histogram')) {
                obj['histogram'] = V1EventHistogram.constructFromObject(data['histogram']);
            }
            if (data.hasOwnProperty('audio')) {
                obj['audio'] = V1EventAudio.constructFromObject(data['audio']);
            }
            if (data.hasOwnProperty('video')) {
                obj['video'] = V1EventVideo.constructFromObject(data['video']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = V1EventChart.constructFromObject(data['chart']);
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = V1EventModel.constructFromObject(data['model']);
            }
            if (data.hasOwnProperty('artifact')) {
                obj['artifact'] = V1EventArtifact.constructFromObject(data['artifact']);
            }
            if (data.hasOwnProperty('dataframe')) {
                obj['dataframe'] = V1EventDataframe.constructFromObject(data['dataframe']);
            }
            if (data.hasOwnProperty('curve')) {
                obj['curve'] = V1EventCurve.constructFromObject(data['curve']);
            }
        }
        return obj;
    }


}

/**
 * @member {Date} timestamp
 */
V1Event.prototype['timestamp'] = undefined;

/**
 * Global step of the event.
 * @member {Number} step
 */
V1Event.prototype['step'] = undefined;

/**
 * @member {Number} metric
 */
V1Event.prototype['metric'] = undefined;

/**
 * @member {module:model/V1EventImage} image
 */
V1Event.prototype['image'] = undefined;

/**
 * @member {module:model/V1EventHistogram} histogram
 */
V1Event.prototype['histogram'] = undefined;

/**
 * @member {module:model/V1EventAudio} audio
 */
V1Event.prototype['audio'] = undefined;

/**
 * @member {module:model/V1EventVideo} video
 */
V1Event.prototype['video'] = undefined;

/**
 * @member {String} html
 */
V1Event.prototype['html'] = undefined;

/**
 * @member {String} text
 */
V1Event.prototype['text'] = undefined;

/**
 * @member {module:model/V1EventChart} chart
 */
V1Event.prototype['chart'] = undefined;

/**
 * @member {module:model/V1EventModel} model
 */
V1Event.prototype['model'] = undefined;

/**
 * @member {module:model/V1EventArtifact} artifact
 */
V1Event.prototype['artifact'] = undefined;

/**
 * @member {module:model/V1EventDataframe} dataframe
 */
V1Event.prototype['dataframe'] = undefined;

/**
 * @member {module:model/V1EventCurve} curve
 */
V1Event.prototype['curve'] = undefined;






export default V1Event;

