import { eventMap } from './event-map';

function getWindowFromNode(node) {
  return node.ownerDocument.defaultView;
}

// dispatch event
export function fireEvent(element, event) {
  return element.dispatchEvent(event);
}

// get event
function createEvent(eventName, node, init, { EventType = 'Event', defaultInit = {} } = {}) {
  if (!node) {
    throw new Error('Please provide a DOM element.');
  }
  const eventInit = { ...defaultInit, ...init };

  const window = getWindowFromNode(node);
  const EventConstructor = window[EventType] || window.Event;
  const event = new EventConstructor(eventName, eventInit);
  return event;
}

Object.keys(eventMap).forEach((key) => {
  const { EventType, defaultInit } = eventMap[key];
  const eventName = key.toLowerCase();

  createEvent[key] = (node, init) => createEvent(eventName, node, init, { EventType, defaultInit });
  fireEvent[key] = (node, init) => fireEvent(node, createEvent[key](node, init));
});
