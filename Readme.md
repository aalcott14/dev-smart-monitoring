				           
# ipm package: smart-monitoring

## Overview

A generic Smart Monitoring system for tracking sensor data on gateways at multiple locations, configuring alerts, and managing users and security.

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup
### Security

- Define your security model by specifying permissions for various Roles.
- Add employees into the system as Users and assign them Roles to grant them permissions.

### Edges

- Define and configure your gateways in the Edges table that will be housing sensors

### Devices

- Define your sensors in the Devices table, specifying the Edge each belongs to

### Alerts

- Define rules for alert configurations that will be used when processing sensor data to send alerts via test, email, or through internal messages to designated employees.
- Structure for Rules:
`{
  "sensor_id": "111111",
  "operator": "GT", - "GT"(greater than), "LT"(less than), "EQ"(equal)
  "value": "32",
  "property": "sensor_reading"
}`

## Usage

Sensor data published via MQTT to message topic sensor/{sensorName} will trigger a code service that handles the data. It is responsible for detecting and signaling alerts, as well as storing sensor and alert data in history collections.

## Assets

### Code Services

 * `createAlertConfiguration`: creates a new alert configuration in AlertConfigurations
 * `createEmployee`: creates a new employee in Users   
 * `createLocation`: creates a new locations in Locations
 * `createSensor`: creates a new sensor in Devices
 * `createSensorType`: creates a new sensor type in SensorTypes
 * `deleteAlertConfiguration`: deletes an alert configuration
 * `deleteLocation`: deletes a locations
 * `deleteSensor`: deletes a sensor
 * `deleteSensorType`: deletes a sensor type
 * `getAlertConfigurations`: fetches alert configurations
 * `getAlertHistory`: fetches alert history
 * `getAlerts`: fetches alerts
 * `getAlertTypes`: fetches alert types
 * `getEmployees`: fetches employees
 * `getHistoryForSensors`: fetches sensor history
 * `getLocations`: fetches locations
 * `getSensors`: fetches sensors
 * `getSensorTypes`: fetches sensor types
 * `processSensorMessage`: process sensor data when triggered by publishing to sensor/{sensorName}
 * `sendMessage`: sends text, email, or internal MQTT message
 * `updateAlert`: updates an alert
 * `updateAlertConfiguration`: updates an alert configuration
 * `updateEmployee`: updates an employee
 * `updateLocation`: updates a location
 * `updateSensor`: updates a sensor
 * `updateSensorType`: updates a sensor type          


### Code Libraries
 * `checkAlertViolated`: uses Rules stored in alert configuration to determine if alert should be sent
 * `Mailgun`: sends emails via Mailgun REST API
 * `MailgunConstants`: store constants to be used by Mailgun
 * `TwilioConstants`: store constants to be used by TwilioSMSLib
 * `TwilioSMSLib`: sends a text message using Twilio's REST API

### Collections
 * `AlertConfigurations`
 * `AlertHistory`
 * `Alerts`
 * `AlertTypes`
 * `Locations`
 * `sensors_data`
 * `SensorTypes`

### Portals
#### mobile_alerts
- send messages and view/acknowledge alerts from a mobile device

#### smart_monitoring
- Home Page: view locations, send, configure, and acknowledge alerts, view and send messages, view sensor data by location/edge groupings, view historical sensor data

- Alerts Page: view, edit, delete, and create alert configurations

- Sensor Analytics Page: view historical sensor data filtered by edge2sensor relationships and timeframes

- Admin Pages: view, edit, delete, and create Sensors, Edges, Sensor Types, Locations, and Employees 

# API

## Functions

<dl>
<dt><a href="#checkAlertViolated">checkAlertViolated(alertConfig)</a> ⇒ <code>string</code> | <code>boolean</code></dt>
<dd></dd>
<dt><a href="#createAlertConfiguration">createAlertConfiguration(alertConfiguration)</a> ⇒ <code>string</code> | <code><a href="#CreateAlertConfigurationResp">Array.&lt;CreateAlertConfigurationResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#createEmployee">createEmployee([employee], [employees])</a> ⇒ <code>string</code> | <code><a href="#CreateEmployeeResponse">CreateEmployeeResponse</a></code></dt>
<dd></dd>
<dt><a href="#createLocation">createLocation(location)</a> ⇒ <code>string</code> | <code><a href="#CreateLocationResponse">Array.&lt;CreateLocationResponse&gt;</a></code></dt>
<dd></dd>
<dt><a href="#createSensor">createSensor(sensor)</a> ⇒ <code>string</code> | <code><a href="#CreateSensorResponse">Array.&lt;CreateSensorResponse&gt;</a></code></dt>
<dd></dd>
<dt><a href="#createSensorType">createSensorType(sensor_type)</a> ⇒ <code>string</code> | <code><a href="#CreateSensorTypeResp">Array.&lt;CreateSensorTypeResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#deleteAlertConfiguration">deleteAlertConfiguration(item_id)</a> ⇒ <code>string</code> | <code><a href="#DeleteAlertConfigResp">Array.&lt;DeleteAlertConfigResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#deleteLocation">deleteLocation(location_id)</a> ⇒ <code>string</code> | <code><a href="#DeleteLocationResp">Array.&lt;DeleteLocationResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#deleteSensor">deleteSensor(sensor_id)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#deleteSensorType">deleteSensorType(sensor_type_id)</a> ⇒ <code>string</code> | <code><a href="#DeleteLocationResp">Array.&lt;DeleteLocationResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getAlertConfigurations">getAlertConfigurations([configuration_id], [type_id], [pageNum], [pageSize])</a> ⇒ <code>string</code> | <code><a href="#GetAlertConfigResp">Array.&lt;GetAlertConfigResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getAlertHistory">getAlertHistory([alert_id], [type_id], [configuration_id], [pageNum], [pageSize])</a> ⇒ <code>string</code> | <code><a href="#GetAlertConfigResp">Array.&lt;GetAlertConfigResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getAlertTypes">getAlertTypes([pageNum], [pageSize])</a> ⇒ <code>string</code> | <code><a href="#GetAlertTypesResp">Array.&lt;GetAlertTypesResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getAlerts">getAlerts([alert_id], [type_id], [configuration_id], [pageNum], [pageSize])</a> ⇒ <code>string</code> | <code><a href="#GetAlertsResp">Array.&lt;GetAlertsResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getEmployees">getEmployees([employee_id], [email], [pageNum], [pageSize])</a> ⇒ <code>string</code> | <code><a href="#GetEmployeesResp">Array.&lt;GetEmployeesResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getHistoryForSensors">getHistoryForSensors(sensor_ids, startTime, endTime)</a> ⇒ <code>string</code> | <code><a href="#GetHistoryForSensorsResp">Array.&lt;GetHistoryForSensorsResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getLocations">getLocations([location_id], [pageNum], [pageSize])</a> ⇒ <code>string</code> | <code><a href="#GetLocationsResp">Array.&lt;GetLocationsResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getSensorTypes">getSensorTypes([sensor_type_id], [pageNum], [pageSize])</a> ⇒ <code>string</code> | <code><a href="#GetSensorTypesResp">Array.&lt;GetSensorTypesResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getSensors">getSensors([sensor_id], [sensor_type_id], [edge_id], [pageNum], [pageSize])</a> ⇒ <code>string</code> | <code><a href="#GetSensorsResp">Array.&lt;GetSensorsResp&gt;</a></code></dt>
<dd></dd>
<dt><a href="#sendMessage">sendMessage(messageTypes, userEmails, payload)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#updateAlert">updateAlert(alert, item_id)</a> ⇒ <code>string</code> | <code><a href="#UpdateAlertResp">UpdateAlertResp</a></code></dt>
<dd></dd>
<dt><a href="#updateAlertConfiguration">updateAlertConfiguration(alertConfiguration, item_id)</a> ⇒ <code>string</code> | <code><a href="#UpdateAlertConfigResp">UpdateAlertConfigResp</a></code></dt>
<dd></dd>
<dt><a href="#updateEmployee">updateEmployee(employee, email)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#updateLocation">updateLocation(location, location_id)</a> ⇒ <code>string</code> | <code><a href="#UpdateLocationResp">UpdateLocationResp</a></code></dt>
<dd></dd>
<dt><a href="#updateSensor">updateSensor(sensor, sensor_id)</a> ⇒ <code>string</code> | <code><a href="#UpdateSensorResp">UpdateSensorResp</a></code></dt>
<dd></dd>
<dt><a href="#updateSensorType">updateSensorType(sensor_type, sensor_type_id)</a> ⇒ <code>string</code> | <code><a href="#UpdateSensorTypeResp">UpdateSensorTypeResp</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Mailgun">Mailgun</a></dt>
<dd><p>Mailgun - Send emails via Mailgun REST API</p>
</dd>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>This callback is displayed as part of this Library.</p>
</dd>
<dt><a href="#Twilio">Twilio</a> : <code>Object</code></dt>
<dd><p>Sends a text message using Twilio&#39;s REST API.</p>
</dd>
<dt><a href="#CheckAlertConfig">CheckAlertConfig</a></dt>
<dd></dd>
<dt><a href="#AlertRule">AlertRule</a></dt>
<dd></dd>
<dt><a href="#CreateAlertConfigurationReq">CreateAlertConfigurationReq</a></dt>
<dd></dd>
<dt><a href="#CreateAlertConfigurationResp">CreateAlertConfigurationResp</a></dt>
<dd></dd>
<dt><a href="#NewUser">NewUser</a></dt>
<dd></dd>
<dt><a href="#User">User</a></dt>
<dd></dd>
<dt><a href="#Employee">Employee</a></dt>
<dd></dd>
<dt><a href="#CreateEmployeeResponse">CreateEmployeeResponse</a></dt>
<dd></dd>
<dt><a href="#Location">Location</a></dt>
<dd></dd>
<dt><a href="#CreateLocationResponse">CreateLocationResponse</a></dt>
<dd></dd>
<dt><a href="#Sensor">Sensor</a></dt>
<dd></dd>
<dt><a href="#CreateSensorResponse">CreateSensorResponse</a></dt>
<dd></dd>
<dt><a href="#SensorType">SensorType</a></dt>
<dd></dd>
<dt><a href="#CreateSensorTypeResp">CreateSensorTypeResp</a></dt>
<dd></dd>
<dt><a href="#DeleteAlertConfigResp">DeleteAlertConfigResp</a></dt>
<dd></dd>
<dt><a href="#DeleteLocationResp">DeleteLocationResp</a></dt>
<dd></dd>
<dt><a href="#DeleteSensorTypeResp">DeleteSensorTypeResp</a></dt>
<dd></dd>
<dt><a href="#GetAlertConfigResp">GetAlertConfigResp</a></dt>
<dd></dd>
<dt><a href="#GetAlertHistoryResp">GetAlertHistoryResp</a></dt>
<dd></dd>
<dt><a href="#GetAlertTypesResp">GetAlertTypesResp</a></dt>
<dd></dd>
<dt><a href="#GetAlertsResp">GetAlertsResp</a></dt>
<dd></dd>
<dt><a href="#GetEmployeesResp">GetEmployeesResp</a></dt>
<dd></dd>
<dt><a href="#GetHistoryForSensorsResp">GetHistoryForSensorsResp</a></dt>
<dd></dd>
<dt><a href="#GetLocationsResp">GetLocationsResp</a></dt>
<dd></dd>
<dt><a href="#GetSensorTypesResp">GetSensorTypesResp</a></dt>
<dd></dd>
<dt><a href="#GetSensorsResp">GetSensorsResp</a></dt>
<dd></dd>
<dt><a href="#SensorMessage">SensorMessage</a></dt>
<dd></dd>
<dt><a href="#SensorPayload">SensorPayload</a></dt>
<dd></dd>
<dt><a href="#UpdateAlertReq">UpdateAlertReq</a></dt>
<dd></dd>
<dt><a href="#UpdateAlertResp">UpdateAlertResp</a></dt>
<dd></dd>
<dt><a href="#UpdateAlertConfigReq">UpdateAlertConfigReq</a></dt>
<dd></dd>
<dt><a href="#UpdateAlertConfigResp">UpdateAlertConfigResp</a></dt>
<dd></dd>
<dt><a href="#UpdateEmployeeReq">UpdateEmployeeReq</a></dt>
<dd></dd>
<dt><a href="#UpdateLocationReq">UpdateLocationReq</a></dt>
<dd></dd>
<dt><a href="#UpdateLocationResp">UpdateLocationResp</a></dt>
<dd></dd>
<dt><a href="#UpdateSensorReq">UpdateSensorReq</a></dt>
<dd></dd>
<dt><a href="#UpdateSensorResp">UpdateSensorResp</a></dt>
<dd></dd>
<dt><a href="#UpdateSensorTypeReq">UpdateSensorTypeReq</a></dt>
<dd></dd>
<dt><a href="#UpdateSensorTypeResp">UpdateSensorTypeResp</a></dt>
<dd></dd>
</dl>

<a name="checkAlertViolated"></a>

## checkAlertViolated(alertConfig) ⇒ <code>string</code> \| <code>boolean</code>
**Kind**: global function  
**Returns**: <code>string</code> - Error<code>boolean</code> - ruleViolated

Library to determine whether or not a rule is violated.  

| Param | Type | Description |
| --- | --- | --- |
| alertConfig | [<code>CheckAlertConfig</code>](#CheckAlertConfig) | Alert configuration to to check for violation. |

<a name="createAlertConfiguration"></a>

## createAlertConfiguration(alertConfiguration) ⇒ <code>string</code> \| [<code>Array.&lt;CreateAlertConfigurationResp&gt;</code>](#CreateAlertConfigurationResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;CreateAlertConfigurationResp&gt;</code>](#CreateAlertConfigurationResp) - Array of new item ids
Service for creating new alert configurations in AlertConfigurations collection  

| Param | Type |
| --- | --- |
| alertConfiguration | [<code>CreateAlertConfigurationReq</code>](#CreateAlertConfigurationReq) | 

<a name="createEmployee"></a>

## createEmployee([employee], [employees]) ⇒ <code>string</code> \| [<code>CreateEmployeeResponse</code>](#CreateEmployeeResponse)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>CreateEmployeeResponse</code>](#CreateEmployeeResponse) - Service for creating new employees in Users table  

| Param | Type | Description |
| --- | --- | --- |
| [employee] | [<code>NewUser</code>](#NewUser) |  |
| [employees] | [<code>Array.&lt;NewUser&gt;</code>](#NewUser) | Array containing multiple new user objects in the format above |

<a name="createLocation"></a>

## createLocation(location) ⇒ <code>string</code> \| [<code>Array.&lt;CreateLocationResponse&gt;</code>](#CreateLocationResponse)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;CreateLocationResponse&gt;</code>](#CreateLocationResponse) - Service for creating new locations in Locations collection  

| Param | Type |
| --- | --- |
| location | [<code>Location</code>](#Location) | 

<a name="createSensor"></a>

## createSensor(sensor) ⇒ <code>string</code> \| [<code>Array.&lt;CreateSensorResponse&gt;</code>](#CreateSensorResponse)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;CreateSensorResponse&gt;</code>](#CreateSensorResponse) - Service for creating new sensors in the Devices table  

| Param | Type |
| --- | --- |
| sensor | [<code>Sensor</code>](#Sensor) | 

<a name="createSensorType"></a>

## createSensorType(sensor_type) ⇒ <code>string</code> \| [<code>Array.&lt;CreateSensorTypeResp&gt;</code>](#CreateSensorTypeResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;CreateSensorTypeResp&gt;</code>](#CreateSensorTypeResp) - Service for creating new sensor type in SensorTypes collection  

| Param | Type |
| --- | --- |
| sensor_type | [<code>SensorType</code>](#SensorType) | 

<a name="deleteAlertConfiguration"></a>

## deleteAlertConfiguration(item_id) ⇒ <code>string</code> \| [<code>Array.&lt;DeleteAlertConfigResp&gt;</code>](#DeleteAlertConfigResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;DeleteAlertConfigResp&gt;</code>](#DeleteAlertConfigResp) - Service for deleting an alert configuration from AlertConfigurations collection  

| Param | Type |
| --- | --- |
| item_id | <code>string</code> | 

<a name="deleteLocation"></a>

## deleteLocation(location_id) ⇒ <code>string</code> \| [<code>Array.&lt;DeleteLocationResp&gt;</code>](#DeleteLocationResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;DeleteLocationResp&gt;</code>](#DeleteLocationResp) - Service for deleting a location from Locations collection  

| Param | Type |
| --- | --- |
| location_id | <code>string</code> | 

<a name="deleteSensor"></a>

## deleteSensor(sensor_id) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - Service for deleting a sensor from Devices table  

| Param | Type |
| --- | --- |
| sensor_id | <code>string</code> | 

<a name="deleteSensorType"></a>

## deleteSensorType(sensor_type_id) ⇒ <code>string</code> \| [<code>Array.&lt;DeleteLocationResp&gt;</code>](#DeleteLocationResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;DeleteLocationResp&gt;</code>](#DeleteLocationResp) - Service for deleting a sensor type from SensorTypes collection  

| Param | Type |
| --- | --- |
| sensor_type_id | <code>string</code> | 

<a name="getAlertConfigurations"></a>

## getAlertConfigurations([configuration_id], [type_id], [pageNum], [pageSize]) ⇒ <code>string</code> \| [<code>Array.&lt;GetAlertConfigResp&gt;</code>](#GetAlertConfigResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;GetAlertConfigResp&gt;</code>](#GetAlertConfigResp) - Service for fetching alert configuration from AlertConfigurations collection  

| Param | Type | Description |
| --- | --- | --- |
| [configuration_id] | <code>string</code> | To query for specific configuration by item_id |
| [type_id] | <code>string</code> | To query for configurations of specific type |
| [pageNum] | <code>number</code> | For pagination |
| [pageSize] | <code>number</code> | For pagination |

<a name="getAlertHistory"></a>

## getAlertHistory([alert_id], [type_id], [configuration_id], [pageNum], [pageSize]) ⇒ <code>string</code> \| [<code>Array.&lt;GetAlertConfigResp&gt;</code>](#GetAlertConfigResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;GetAlertConfigResp&gt;</code>](#GetAlertConfigResp) - Service for fetching alerts from Alert collection regardless of is_active status  

| Param | Type | Description |
| --- | --- | --- |
| [alert_id] | <code>string</code> | To query for specific configuration by item_id |
| [type_id] | <code>string</code> | To query for configurations of specific type |
| [configuration_id] | <code>string</code> | To query for a specific configuration |
| [pageNum] | <code>number</code> | For pagination |
| [pageSize] | <code>number</code> | For pagination |

<a name="getAlertTypes"></a>

## getAlertTypes([pageNum], [pageSize]) ⇒ <code>string</code> \| [<code>Array.&lt;GetAlertTypesResp&gt;</code>](#GetAlertTypesResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;GetAlertTypesResp&gt;</code>](#GetAlertTypesResp) - Service for fetching alert types from AlertTypes collection  

| Param | Type | Description |
| --- | --- | --- |
| [pageNum] | <code>number</code> | pagination |
| [pageSize] | <code>number</code> | For pagination |

<a name="getAlerts"></a>

## getAlerts([alert_id], [type_id], [configuration_id], [pageNum], [pageSize]) ⇒ <code>string</code> \| [<code>Array.&lt;GetAlertsResp&gt;</code>](#GetAlertsResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;GetAlertsResp&gt;</code>](#GetAlertsResp) - Service for fetching alerts from Alert collection with is_active status of true  

| Param | Type | Description |
| --- | --- | --- |
| [alert_id] | <code>string</code> | To query for specific configuration by item_id |
| [type_id] | <code>string</code> | To query for configurations of specific type |
| [configuration_id] | <code>string</code> | To query for a specific configuration |
| [pageNum] | <code>number</code> | For pagination |
| [pageSize] | <code>number</code> | For pagination |

<a name="getEmployees"></a>

## getEmployees([employee_id], [email], [pageNum], [pageSize]) ⇒ <code>string</code> \| [<code>Array.&lt;GetEmployeesResp&gt;</code>](#GetEmployeesResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;GetEmployeesResp&gt;</code>](#GetEmployeesResp) - Service for fetching employees from Users table  

| Param | Type | Description |
| --- | --- | --- |
| [employee_id] | <code>string</code> |  |
| [email] | <code>string</code> |  |
| [pageNum] | <code>number</code> | For pagination |
| [pageSize] | <code>number</code> | For pagination |

<a name="getHistoryForSensors"></a>

## getHistoryForSensors(sensor_ids, startTime, endTime) ⇒ <code>string</code> \| [<code>Array.&lt;GetHistoryForSensorsResp&gt;</code>](#GetHistoryForSensorsResp)
**Kind**: global function  
**Returns**: <code>string</code> - Err[<code>Array.&lt;GetHistoryForSensorsResp&gt;</code>](#GetHistoryForSensorsResp) - Service for fetching a range of sensor history for one or multiple sensors  

| Param | Type | Description |
| --- | --- | --- |
| sensor_ids | <code>Array.&lt;string&gt;</code> | Sensors to include in query |
| startTime | <code>string</code> | string Beginning of time range in ISO 8601 format |
| endTime | <code>string</code> | string Beginning of time range in ISO 8601 format |

<a name="getLocations"></a>

## getLocations([location_id], [pageNum], [pageSize]) ⇒ <code>string</code> \| [<code>Array.&lt;GetLocationsResp&gt;</code>](#GetLocationsResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;GetLocationsResp&gt;</code>](#GetLocationsResp) - Service for fetching locations from Locations collection  

| Param | Type | Description |
| --- | --- | --- |
| [location_id] | <code>string</code> |  |
| [pageNum] | <code>number</code> | For pagination |
| [pageSize] | <code>number</code> | For pagination |

<a name="getSensorTypes"></a>

## getSensorTypes([sensor_type_id], [pageNum], [pageSize]) ⇒ <code>string</code> \| [<code>Array.&lt;GetSensorTypesResp&gt;</code>](#GetSensorTypesResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;GetSensorTypesResp&gt;</code>](#GetSensorTypesResp) - Service for fetching sensor types from SensorTypes collection  

| Param | Type | Description |
| --- | --- | --- |
| [sensor_type_id] | <code>string</code> | To query for sensor types by item_id |
| [pageNum] | <code>number</code> | For pagination |
| [pageSize] | <code>number</code> | For pagination |

<a name="getSensors"></a>

## getSensors([sensor_id], [sensor_type_id], [edge_id], [pageNum], [pageSize]) ⇒ <code>string</code> \| [<code>Array.&lt;GetSensorsResp&gt;</code>](#GetSensorsResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>Array.&lt;GetSensorsResp&gt;</code>](#GetSensorsResp) - Service for fetching sensors from Devices table  

| Param | Type | Description |
| --- | --- | --- |
| [sensor_id] | <code>string</code> | To query for sensors by name |
| [sensor_type_id] | <code>string</code> | To query for sensors by item_id of type |
| [edge_id] | <code>string</code> | To query for sensors by edge_key of edge |
| [pageNum] | <code>number</code> | For pagination |
| [pageSize] | <code>number</code> | For pagination |

<a name="sendMessage"></a>

## sendMessage(messageTypes, userEmails, payload) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - Tally of errors for each type of message

Service that sends text, email, internal, or combination to designated employees  

| Param | Type | Description |
| --- | --- | --- |
| messageTypes | <code>Array.&lt;string&gt;</code> | Indicates the types of messages ("sms", "email", "internal") to send |
| userEmails | <code>Array.&lt;string&gt;</code> | Email addresses of users to send message to |
| payload | <code>string</code> | Message to send |

<a name="updateAlert"></a>

## updateAlert(alert, item_id) ⇒ <code>string</code> \| [<code>UpdateAlertResp</code>](#UpdateAlertResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>UpdateAlertResp</code>](#UpdateAlertResp) - Service that updates an alert in Alerts collection  

| Param | Type |
| --- | --- |
| alert | [<code>UpdateAlertReq</code>](#UpdateAlertReq) | 
| item_id | <code>string</code> | 

<a name="updateAlertConfiguration"></a>

## updateAlertConfiguration(alertConfiguration, item_id) ⇒ <code>string</code> \| [<code>UpdateAlertConfigResp</code>](#UpdateAlertConfigResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>UpdateAlertConfigResp</code>](#UpdateAlertConfigResp) - Service that updates an alert configuration in AlertConfigurations collection  

| Param | Type |
| --- | --- |
| alertConfiguration | [<code>UpdateAlertConfigReq</code>](#UpdateAlertConfigReq) | 
| item_id | <code>string</code> | 

<a name="updateEmployee"></a>

## updateEmployee(employee, email) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - Error
Service that updates an employee in Users table  

| Param | Type |
| --- | --- |
| employee | [<code>UpdateEmployeeReq</code>](#UpdateEmployeeReq) | 
| email | <code>string</code> | 

<a name="updateLocation"></a>

## updateLocation(location, location_id) ⇒ <code>string</code> \| [<code>UpdateLocationResp</code>](#UpdateLocationResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>UpdateLocationResp</code>](#UpdateLocationResp) - Service that updates a location in Locations collection  

| Param | Type |
| --- | --- |
| location | [<code>UpdateLocationReq</code>](#UpdateLocationReq) | 
| location_id | <code>string</code> | 

<a name="updateSensor"></a>

## updateSensor(sensor, sensor_id) ⇒ <code>string</code> \| [<code>UpdateSensorResp</code>](#UpdateSensorResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>UpdateSensorResp</code>](#UpdateSensorResp) - Service that updates a sensor in Devices table  

| Param | Type |
| --- | --- |
| sensor | [<code>UpdateSensorReq</code>](#UpdateSensorReq) | 
| sensor_id | <code>string</code> | 

<a name="updateSensorType"></a>

## updateSensorType(sensor_type, sensor_type_id) ⇒ <code>string</code> \| [<code>UpdateSensorTypeResp</code>](#UpdateSensorTypeResp)
**Kind**: global function  
**Returns**: <code>string</code> - Error[<code>UpdateSensorTypeResp</code>](#UpdateSensorTypeResp) - Service that updates a sensor type in SensorTypes collection  

| Param | Type |
| --- | --- |
| sensor_type | [<code>UpdateSensorTypeReq</code>](#UpdateSensorTypeReq) | 
| sensor_type_id | <code>string</code> | 

<a name="Mailgun"></a>

## Mailgun
Mailgun - Send emails via Mailgun REST API

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| apikey | <code>string</code> | API Key found in Mailgun Console (https://www.mailgun.com/) |
| domain | <code>string</code> | Domain ex. mg.yoursite.com, provided by Mailgun |
| originEmail | <code>string</code> | origin address from which to send emails, provided by Mailgun |

<a name="Mailgun.send"></a>

### Mailgun.send(body, subject, recipient)
**Kind**: static method of [<code>Mailgun</code>](#Mailgun)  

| Param | Type |
| --- | --- |
| body | <code>string</code> | 
| subject | <code>string</code> | 
| recipient | <code>string</code> | 

<a name="callback"></a>

## callback : <code>function</code>
This callback is displayed as part of this Library.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| err | <code>Object</code> | 
| resp | <code>Object</code> | 

<a name="Twilio"></a>

## Twilio : <code>Object</code>
Sends a text message using Twilio's REST API.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | Twilio API account ex. "BC218b72987d86855a5adb921370115a20" |
| pass | <code>string</code> | Twilio API passcode ex. "4579ac6ba4fae7b452c03c64aeae40e7" |
| sourceNumber | <code>string</code> | Origin phone number of text message, ex "(+1 512-713-2783)" |

**Example**  
```js
var twconf = TWILIO_CONFIG;
var twilio = Twilio(twconf.USER, twconf.PASS, twconf.SOURCE_NUMBER);
```
<a name="Twilio.sendSMS"></a>

### Twilio.sendSMS(text, recipientNumber, callback)
Send SMS message

**Kind**: static method of [<code>Twilio</code>](#Twilio)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | text body |
| recipientNumber | <code>string</code> | Formatted phone number ex. "(+1 339-987-2816)" |
| callback | [<code>callback</code>](#callback) | ex. function(err, data){} |

**Example**  
```js
var twconf = TWILIO_CONFIG;
var twilio = Twilio(twconf.USER, twconf.PASS, twconf.SOURCE_NUMBER);

twilio.sendSMS(text, recipientNumber, function(err, data){
    if(err){
        resp.error(err);
    }
    resp.success(data);
});
```
<a name="CheckAlertConfig"></a>

## CheckAlertConfig
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| rules | [<code>Array.&lt;AlertRule&gt;</code>](#AlertRule) | 
| disabled | <code>boolean</code> | 

<a name="AlertRule"></a>

## AlertRule
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| sensor_id | <code>string</code> | 
| operator | <code>string</code> | 
| value | <code>string</code> | 
| property | <code>string</code> | 

<a name="CreateAlertConfigurationReq"></a>

## CreateAlertConfigurationReq
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| name | <code>string</code> | 
| type_id | <code>string</code> | 
| rules | <code>Array.&lt;Rule&gt;</code> | 
| contacts | <code>Array.&lt;string&gt;</code> | 
| priority | <code>string</code> | 
| disabled | <code>boolean</code> | 
| message | <code>string</code> | 

<a name="CreateAlertConfigurationResp"></a>

## CreateAlertConfigurationResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| item_id | <code>string</code> | 

<a name="NewUser"></a>

## NewUser
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| user | [<code>User</code>](#User) | 
| employee | [<code>Employee</code>](#Employee) | 

<a name="User"></a>

## User
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | Email address of new user |
| password | <code>string</code> | Password for new user |

<a name="Employee"></a>

## Employee
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| first_name | <code>string</code> | 
| last_name | <code>string</code> | 
| locations | <code>Array.&lt;string&gt;</code> | 
| phone_number | <code>string</code> | 
| photo | <code>string</code> | 

<a name="CreateEmployeeResponse"></a>

## CreateEmployeeResponse
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| email | <code>string</code> | 
| password | <code>string</code> | 

<a name="Location"></a>

## Location
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> |  |
| description | <code>string</code> |  |
| icon | <code>string</code> |  |
| location_type | <code>string</code> | Corresponds to item_id of a LocationType |
| lat | <code>string</code> |  |
| long | <code>string</code> |  |

<a name="CreateLocationResponse"></a>

## CreateLocationResponse
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| item_id | <code>string</code> | 

<a name="Sensor"></a>

## Sensor
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> |  |
| description | <code>string</code> |  |
| sensor_label | <code>string</code> | Readable label to display as name of sensor |
| sensor_type_id | <code>string</code> | Corresponds to item_id of a SensorType |
| edge_id | <code>string</code> | Corresponds to edge_key of an Edge in Edges table |

<a name="CreateSensorResponse"></a>

## CreateSensorResponse
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| active_key | <code>string</code> | 
| allow_certificate_auth | <code>boolean</code> | 
| allow_key_auth | <code>boolean</code> | 
| certificate | <code>string</code> | 
| description | <code>string</code> | 
| enabled | <code>boolean</code> | 
| keys | <code>string</code> | 
| name | <code>string</code> | 
| state | <code>string</code> | 
| type | <code>string</code> | 

<a name="SensorType"></a>

## SensorType
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> |  |
| description | <code>string</code> |  |
| data_type | <code>string</code> | Data type of sensor's data value |
| attributes | <code>string</code> | Special character corresponding to data value provided |
| icon | <code>string</code> |  |
| isProbe | <code>boolean</code> | Whether or not sensor is a probe |

<a name="CreateSensorTypeResp"></a>

## CreateSensorTypeResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| item_id | <code>string</code> | 

<a name="DeleteAlertConfigResp"></a>

## DeleteAlertConfigResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| count | <code>number</code> | 

<a name="DeleteLocationResp"></a>

## DeleteLocationResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| count | <code>number</code> | 

<a name="DeleteSensorTypeResp"></a>

## DeleteSensorTypeResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| count | <code>number</code> | 

<a name="GetAlertConfigResp"></a>

## GetAlertConfigResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| contacts | <code>Array.&lt;string&gt;</code> | 
| item_id | <code>string</code> | 
| disabled | <code>boolean</code> | 
| message | <code>string</code> | 
| name | <code>string</code> | 
| priority | <code>string</code> | 
| rules | <code>Array.&lt;Rule&gt;</code> | 
| type_id | <code>string</code> | 

<a name="GetAlertHistoryResp"></a>

## GetAlertHistoryResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type_id | <code>Array.&lt;string&gt;</code> | 
| is_active | <code>string</code> | 
| configuration_id | <code>boolean</code> | 
| sent_date | <code>string</code> | 
| acknowledge_date | <code>string</code> | 
| target_users | <code>string</code> | 

<a name="GetAlertTypesResp"></a>

## GetAlertTypesResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| item_id | <code>string</code> | 
| name | <code>string</code> | 
| description | <code>string</code> | 
| icon | <code>string</code> | 

<a name="GetAlertsResp"></a>

## GetAlertsResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type_id | <code>Array.&lt;string&gt;</code> | 
| is_active | <code>string</code> | 
| configuration_id | <code>boolean</code> | 
| sent_date | <code>string</code> | 
| acknowledge_date | <code>string</code> | 
| target_users | <code>string</code> | 

<a name="GetEmployeesResp"></a>

## GetEmployeesResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| email | <code>string</code> | 
| creation_date | <code>string</code> | 
| first_name | <code>string</code> | 
| last_name | <code>string</code> | 
| phone_number | <code>string</code> | 
| locations | <code>Array.&lt;string&gt;</code> | 
| photo | <code>string</code> | 
| pin | <code>string</code> | 

<a name="GetHistoryForSensorsResp"></a>

## GetHistoryForSensorsResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| batter_level | <code>number</code> | 
| edge_id | <code>string</code> | 
| item_id | <code>string</code> | 
| reading_time | <code>string</code> | 
| sensor_id | <code>string</code> | 
| sensor_reading | <code>string</code> | 
| signal_strength | <code>number</code> | 

<a name="GetLocationsResp"></a>

## GetLocationsResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| location_type | <code>string</code> | 
| icon | <code>string</code> | 
| name | <code>string</code> | 
| description | <code>string</code> | 
| lat | <code>string</code> | 
| long | <code>string</code> | 
| address | <code>string</code> | 

<a name="GetSensorTypesResp"></a>

## GetSensorTypesResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| item_id | <code>string</code> | 
| name | <code>string</code> | 
| description | <code>string</code> | 
| icon | <code>string</code> | 

<a name="GetSensorsResp"></a>

## GetSensorsResp
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| allow_certificate_auth | <code>boolean</code> |  |
| allow_key_auth | <code>boolean</code> |  |
| battery_level | <code>number</code> |  |
| certificate | <code>string</code> |  |
| created_date | <code>number</code> | Epoch format |
| description | <code>string</code> |  |
| device_key | <code>string</code> |  |
| edge_id | <code>string</code> |  |
| enabled | <code>boolean</code> |  |
| has_keys | <code>boolean</code> |  |
| last_active_date | <code>number</code> | Epoch format |
| name | <code>string</code> |  |
| reading_time | <code>string</code> | ISO 8601 format |
| sensor_label | <code>string</code> |  |
| sensor_reading | <code>string</code> |  |
| sensor_type_id | <code>string</code> |  |
| signal_strength | <code>number</code> |  |
| state | <code>string</code> |  |
| system_key | <code>string</code> |  |
| type | <code>string</code> |  |

<a name="SensorMessage"></a>

## SensorMessage
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| batteryLevel | <code>string</code> |  |
| dataValue | <code>string</code> | Sensor reading to be processed |
| sensorID | <code>string</code> | Name of sensor from Devices table |
| signalStrength | <code>string</code> |  |
| messageDate | <code>string</code> | Stringified ISO 8601 date |

<a name="SensorPayload"></a>

## SensorPayload
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| edge_id | <code>string</code> | 
| sensor_message | [<code>SensorMessage</code>](#SensorMessage) | 

<a name="UpdateAlertReq"></a>

## UpdateAlertReq
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [is_active] | <code>boolean</code> |  |
| [type_id] | <code>string</code> |  |
| [configuration_id] | <code>string</code> |  |
| [sent_date] | <code>string</code> |  |
| [acknowledge_date] | <code>string</code> |  |
| [target_users] | <code>Array.&lt;string&gt;</code> | Array of users to be contacted when alert is violated |

<a name="UpdateAlertResp"></a>

## UpdateAlertResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| count | <code>number</code> | 

<a name="UpdateAlertConfigReq"></a>

## UpdateAlertConfigReq
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [name] | <code>boolean</code> |  |
| [type_id] | <code>string</code> |  |
| [rules] | <code>Array.&lt;Rule&gt;</code> | Rules to indicated when alert has been violated |
| [contacts] | <code>Array.&lt;string&gt;</code> | Employees to contact on violation |
| [message] | <code>string</code> |  |
| [priority] | <code>string</code> | "High", "medium", or "low" to indicate which types of messages to send |
| [disabled] | <code>Array.&lt;string&gt;</code> |  |

<a name="UpdateAlertConfigResp"></a>

## UpdateAlertConfigResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| count | <code>number</code> | 

<a name="UpdateEmployeeReq"></a>

## UpdateEmployeeReq
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [first_name] | <code>boolean</code> |  |
| [last_name] | <code>string</code> |  |
| [locations] | <code>Array.&lt;string&gt;</code> | Array of location ids from Locations collection |
| [phone_number] | <code>Array.&lt;string&gt;</code> |  |
| [photo] | <code>string</code> |  |
| [pin] | <code>string</code> |  |

<a name="UpdateLocationReq"></a>

## UpdateLocationReq
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [name] | <code>string</code> | 
| [location_type] | <code>string</code> | 
| [icon] | <code>string</code> | 
| [description] | <code>string</code> | 
| [address] | <code>string</code> | 
| [lat] | <code>string</code> | 
| [long] | <code>string</code> | 

<a name="UpdateLocationResp"></a>

## UpdateLocationResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| count | <code>number</code> | 

<a name="UpdateSensorReq"></a>

## UpdateSensorReq
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [enabled] | <code>boolean</code> |  |
| [description] | <code>string</code> |  |
| [edge_id] | <code>string</code> | Edge_key of sensor's edge |
| [sensor_reading] | <code>string</code> | Most recent reading from sensor |
| [battery_level] | <code>number</code> |  |
| [signal_strength] | <code>number</code> |  |
| [reading_time] | <code>string</code> | ISO 8601 format |
| [sensor_type_id] | <code>string</code> | Id of sensor type from SensorTypes collection |
| [sensor_label] | <code>string</code> | Readable label of sensor to be displayed in portal |

<a name="UpdateSensorResp"></a>

## UpdateSensorResp
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| allow_certificate_auth | <code>boolean</code> |  |
| allow_key_auth | <code>boolean</code> |  |
| created_date | <code>number</code> | Epoch format |
| device_key | <code>string</code> |  |
| edge_id | <code>string</code> |  |
| enabled | <code>boolean</code> |  |
| last_active_date | <code>number</code> | Epoch format |
| name | <code>string</code> |  |
| reading_time | <code>string</code> | ISO 8601 format |
| sensor_label | <code>string</code> |  |
| sensor_type_id | <code>string</code> |  |
| state | <code>string</code> |  |
| system_key | <code>string</code> |  |
| type | <code>string</code> |  |

<a name="UpdateSensorTypeReq"></a>

## UpdateSensorTypeReq
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> |  |
| [description] | <code>string</code> |  |
| [data_type] | <code>string</code> | Data type of sensor's data value |
| [attributes] | <code>string</code> | Special character corresponding to data value provided |
| [icon] | <code>string</code> |  |
| [isProbe] | <code>boolean</code> | Whether or not sensor is a probe |

<a name="UpdateSensorTypeResp"></a>

## UpdateSensorTypeResp
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| count | <code>number</code> | 



