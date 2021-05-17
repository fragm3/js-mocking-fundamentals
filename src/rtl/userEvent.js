import { fireEvent } from './fireEvent';
import { simpleFireEvent } from './simpleFireEvent';

function isElementType(element, tag) {
  const elementTag = element.tagName.toLowerCase();
  return elementTag === tag;
}

function hover(node) {
  fireEvent.mouseOver(node);
  fireEvent.mouseMove(node);
  //more things happen here
}

function clickLabel(node) {
  //todo
}

function clickBooleanElement(node) {
  //todo
}

function clickElement(node) {
  // hover(node);
  // fireEvent.mouseDown(node);
  // fireEvent.focus(node);
  // fireEvent.pointerUp(node);
  // fireEvent.click(node);

  simpleFireEvent(node, 'mouseDown');
  simpleFireEvent(node, 'focus');
  simpleFireEvent(node, 'pointerUp');
  simpleFireEvent(node, 'click');
}

function click(node) {
  if (isElementType(node, 'label')) {
    clickLabel(node);
  } else if (isElementType(node, 'input')) {
    if (element.type === 'checkbox' || element.type === 'radio') {
      clickBooleanElement(node);
    } else {
      clickElement(node);
    }
  } else clickElement(node);
}

const userEvent = {
  click,
};

export default userEvent;
