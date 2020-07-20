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
import SparkDeployMode from './SparkDeployMode';
import V1SparkReplica from './V1SparkReplica';
import V1SparkType from './V1SparkType';

/**
 * The V1Spark model module.
 * @module model/V1Spark
 * @version 1.1.4
 */
class V1Spark {
    /**
     * Constructs a new <code>V1Spark</code>.
     * @alias module:model/V1Spark
     */
    constructor() { 
        
        V1Spark.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Spark</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Spark} obj Optional instance to populate.
     * @return {module:model/V1Spark} The populated <code>V1Spark</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Spark();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], [Object]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = V1SparkType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('spark_version')) {
                obj['spark_version'] = ApiClient.convertToType(data['spark_version'], 'String');
            }
            if (data.hasOwnProperty('python_version')) {
                obj['python_version'] = ApiClient.convertToType(data['python_version'], 'String');
            }
            if (data.hasOwnProperty('deploy_mode')) {
                obj['deploy_mode'] = SparkDeployMode.constructFromObject(data['deploy_mode']);
            }
            if (data.hasOwnProperty('main_class')) {
                obj['main_class'] = ApiClient.convertToType(data['main_class'], 'String');
            }
            if (data.hasOwnProperty('main_application_file')) {
                obj['main_application_file'] = ApiClient.convertToType(data['main_application_file'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], ['String']);
            }
            if (data.hasOwnProperty('hadoop_conf')) {
                obj['hadoop_conf'] = ApiClient.convertToType(data['hadoop_conf'], {'String': 'String'});
            }
            if (data.hasOwnProperty('spark_conf')) {
                obj['spark_conf'] = ApiClient.convertToType(data['spark_conf'], {'String': 'String'});
            }
            if (data.hasOwnProperty('spark_config_map')) {
                obj['spark_config_map'] = ApiClient.convertToType(data['spark_config_map'], 'String');
            }
            if (data.hasOwnProperty('hadoop_config_map')) {
                obj['hadoop_config_map'] = ApiClient.convertToType(data['hadoop_config_map'], 'String');
            }
            if (data.hasOwnProperty('executor')) {
                obj['executor'] = V1SparkReplica.constructFromObject(data['executor']);
            }
            if (data.hasOwnProperty('driver')) {
                obj['driver'] = V1SparkReplica.constructFromObject(data['driver']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'spark'
 */
V1Spark.prototype['kind'] = 'spark';

/**
 * @member {Array.<String>} connections
 */
V1Spark.prototype['connections'] = undefined;

/**
 * Volumes is a list of volumes that can be mounted.
 * @member {Array.<Object>} volumes
 */
V1Spark.prototype['volumes'] = undefined;

/**
 * @member {module:model/V1SparkType} type
 */
V1Spark.prototype['type'] = undefined;

/**
 * Spark version is the version of Spark the application uses.
 * @member {String} spark_version
 */
V1Spark.prototype['spark_version'] = undefined;

/**
 * Spark version is the version of Spark the application uses.
 * @member {String} python_version
 */
V1Spark.prototype['python_version'] = undefined;

/**
 * @member {module:model/SparkDeployMode} deploy_mode
 */
V1Spark.prototype['deploy_mode'] = undefined;

/**
 * MainClass is the fully-qualified main class of the Spark application. This only applies to Java/Scala Spark applications.
 * @member {String} main_class
 */
V1Spark.prototype['main_class'] = undefined;

/**
 * MainFile is the path to a bundled JAR, Python, or R file of the application.
 * @member {String} main_application_file
 */
V1Spark.prototype['main_application_file'] = undefined;

/**
 * Arguments is a list of arguments to be passed to the application.
 * @member {Array.<String>} arguments
 */
V1Spark.prototype['arguments'] = undefined;

/**
 * HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \"--conf\" option in spark-submit.  The SparkApplication controller automatically adds prefix \"spark.hadoop.\" to Hadoop configuration properties.
 * @member {Object.<String, String>} hadoop_conf
 */
V1Spark.prototype['hadoop_conf'] = undefined;

/**
 * HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \"--conf\" option in spark-submit.  The SparkApplication controller automatically adds prefix \"spark.hadoop.\" to Hadoop configuration properties.
 * @member {Object.<String, String>} spark_conf
 */
V1Spark.prototype['spark_conf'] = undefined;

/**
 * SparkConfigMap carries the name of the ConfigMap containing Spark configuration files such as log4j.properties. The controller will add environment variable SPARK_CONF_DIR to the path where the ConfigMap is mounted to.
 * @member {String} spark_config_map
 */
V1Spark.prototype['spark_config_map'] = undefined;

/**
 * HadoopConfigMap carries the name of the ConfigMap containing Hadoop configuration files such as core-site.xml. The controller will add environment variable HADOOP_CONF_DIR to the path where the ConfigMap is mounted to.
 * @member {String} hadoop_config_map
 */
V1Spark.prototype['hadoop_config_map'] = undefined;

/**
 * @member {module:model/V1SparkReplica} executor
 */
V1Spark.prototype['executor'] = undefined;

/**
 * @member {module:model/V1SparkReplica} driver
 */
V1Spark.prototype['driver'] = undefined;






export default V1Spark;

