import { eventMap } from './event-map';

function getWindowFromNode(node) {
  return node.ownerDocument.defaultView;
}

export function simpleFireEvent(element, eventName) {
  // get event configs from eventMap
  const { EventType, defaultInit } = eventMap[eventName];

  // create event object
  const event = createEvent(eventName.toLowerCase(), element, { defaultInit, EventType });

  // fire/dispatch custom event, then event handlers react on it
  return element.dispatchEvent(event);
}

// get event
function createEvent(eventName, element, { defaultInit, EventType }) {
  if (!element) {
    throw new Error('Please provide a DOM element.');
  }
  const window = getWindowFromNode(element);
  const Event = window.Event;

  // const event = new Event('click', {bubbles: true, cancelable: true})
  const event = new Event(eventName, defaultInit);
  return event;
}
