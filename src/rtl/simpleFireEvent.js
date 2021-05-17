import { eventMap } from './event-map';

function getWindowFromNode(node) {
  return node.ownerDocument.defaultView;
}

export function simpleFireEvent(element, eventName) {
  // get event configs from eventMap
  const { EventType, defaultInit } = eventMap[eventName];

  // create event
  const event = createEvent(eventName.toLowerCase(), element, { defaultInit, EventType });

  // fire event
  return element.dispatchEvent(event);
}

// get event
function createEvent(eventName, element, { defaultInit, EventType }) {
  if (!element) {
    throw new Error('Please provide a DOM element.');
  }

  const window = getWindowFromNode(element);
  const EventConstructor = window[EventType];
  console.log(EventConstructor);
  const event = new EventConstructor(eventName, defaultInit);
  return event;
}
