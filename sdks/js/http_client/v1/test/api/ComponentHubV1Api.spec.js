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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.11.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.ComponentHubV1Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ComponentHubV1Api', function() {
    describe('archiveComponentHub', function() {
      it('should call archiveComponentHub successfully', function(done) {
        //uncomment below and update the code to test archiveComponentHub
        //instance.archiveComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bookmarkComponentHub', function() {
      it('should call bookmarkComponentHub successfully', function(done) {
        //uncomment below and update the code to test bookmarkComponentHub
        //instance.bookmarkComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createComponentHub', function() {
      it('should call createComponentHub successfully', function(done) {
        //uncomment below and update the code to test createComponentHub
        //instance.createComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createComponentVersion', function() {
      it('should call createComponentVersion successfully', function(done) {
        //uncomment below and update the code to test createComponentVersion
        //instance.createComponentVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createComponentVersionStage', function() {
      it('should call createComponentVersionStage successfully', function(done) {
        //uncomment below and update the code to test createComponentVersionStage
        //instance.createComponentVersionStage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteComponentHub', function() {
      it('should call deleteComponentHub successfully', function(done) {
        //uncomment below and update the code to test deleteComponentHub
        //instance.deleteComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteComponentVersion', function() {
      it('should call deleteComponentVersion successfully', function(done) {
        //uncomment below and update the code to test deleteComponentVersion
        //instance.deleteComponentVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComponentHub', function() {
      it('should call getComponentHub successfully', function(done) {
        //uncomment below and update the code to test getComponentHub
        //instance.getComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComponentHubActivities', function() {
      it('should call getComponentHubActivities successfully', function(done) {
        //uncomment below and update the code to test getComponentHubActivities
        //instance.getComponentHubActivities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComponentHubSettings', function() {
      it('should call getComponentHubSettings successfully', function(done) {
        //uncomment below and update the code to test getComponentHubSettings
        //instance.getComponentHubSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComponentVersion', function() {
      it('should call getComponentVersion successfully', function(done) {
        //uncomment below and update the code to test getComponentVersion
        //instance.getComponentVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComponentVersionStages', function() {
      it('should call getComponentVersionStages successfully', function(done) {
        //uncomment below and update the code to test getComponentVersionStages
        //instance.getComponentVersionStages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listComponentHubNames', function() {
      it('should call listComponentHubNames successfully', function(done) {
        //uncomment below and update the code to test listComponentHubNames
        //instance.listComponentHubNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listComponentHubs', function() {
      it('should call listComponentHubs successfully', function(done) {
        //uncomment below and update the code to test listComponentHubs
        //instance.listComponentHubs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listComponentVersionNames', function() {
      it('should call listComponentVersionNames successfully', function(done) {
        //uncomment below and update the code to test listComponentVersionNames
        //instance.listComponentVersionNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listComponentVersions', function() {
      it('should call listComponentVersions successfully', function(done) {
        //uncomment below and update the code to test listComponentVersions
        //instance.listComponentVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchComponentHub', function() {
      it('should call patchComponentHub successfully', function(done) {
        //uncomment below and update the code to test patchComponentHub
        //instance.patchComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchComponentHubSettings', function() {
      it('should call patchComponentHubSettings successfully', function(done) {
        //uncomment below and update the code to test patchComponentHubSettings
        //instance.patchComponentHubSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchComponentVersion', function() {
      it('should call patchComponentVersion successfully', function(done) {
        //uncomment below and update the code to test patchComponentVersion
        //instance.patchComponentVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreComponentHub', function() {
      it('should call restoreComponentHub successfully', function(done) {
        //uncomment below and update the code to test restoreComponentHub
        //instance.restoreComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unbookmarkComponentHub', function() {
      it('should call unbookmarkComponentHub successfully', function(done) {
        //uncomment below and update the code to test unbookmarkComponentHub
        //instance.unbookmarkComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateComponentHub', function() {
      it('should call updateComponentHub successfully', function(done) {
        //uncomment below and update the code to test updateComponentHub
        //instance.updateComponentHub(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateComponentHubSettings', function() {
      it('should call updateComponentHubSettings successfully', function(done) {
        //uncomment below and update the code to test updateComponentHubSettings
        //instance.updateComponentHubSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateComponentVersion', function() {
      it('should call updateComponentVersion successfully', function(done) {
        //uncomment below and update the code to test updateComponentVersion
        //instance.updateComponentVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
