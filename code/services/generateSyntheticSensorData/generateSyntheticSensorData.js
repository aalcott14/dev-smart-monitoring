const TOPIC_BASE = "sensor";
const RELAY_TO_BROADCAST_TOPIC = "_broadcast"; //https://docs.clearblade.com/v/3/1-platform_concepts/messaging/message_relay/ 
const sensorIDs = ["111111", "222222"];
const sensorValueBounds=[25,35];
/**
 * Generate sensor data for demo purposes. This will run on Edge only. To be run on a timer with no user permissions.
 * 
 * Publishes an MQTT message on TOPIC_BASE
 */
function generateSyntheticSensorData(req, resp) {
  if ( ! ClearBlade.isEdge()) {
    resp.success("Disabled on platform")
  }
  ClearBlade.init({request:req})
  var messaging = ClearBlade.Messaging()

  var randomSensorIdx = Math.floor(Math.random() * sensorIDs.length);
  log(randomSensorIdx);
  var randomSensorId = sensorIDs[randomSensorIdx];
  var topic = [TOPIC_BASE,randomSensorId, RELAY_TO_BROADCAST_TOPIC].join('/')

  var range = sensorValueBounds[1] - sensorValueBounds[0]
  var lowerBound = sensorValueBounds[0]
  var randomSensorValue = new String(Math.floor(Math.random()*range + lowerBound));
  var signalStrength = new String(100)
  var messageDate = (new Date()).toISOString()
  var batteryLevel = "100"
  const systemKey =req.systemKey;
  var messageJSON = {
      edge_id: "first_edge",
      sensor_message:{
         batteryLevel,
         dataValue:randomSensorValue,
         sensorID: randomSensorId,
         signalStrength,
         messageDate
      }
  }
  log({messageJSON})

  messaging.publish(topic,JSON.stringify(messageJSON))
  resp.success(messageJSON)

}
