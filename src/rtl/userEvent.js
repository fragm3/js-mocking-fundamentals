// import { fireEvent } from './fireEvent';
import { fireEvent } from './simpleFireEvent';

function isElementType(element, tag) {
  const elementTag = element.tagName.toLowerCase();
  return elementTag === tag;
}

function hover(node) {
  // fireEvent.mouseOver(node);
  // fireEvent.mouseMove(node);

  fireEvent(node, 'mouseOver');
  fireEvent(node, 'mouseMove');

  //more things happen here
}

function clickLabel(node) {
  //todo
}

function clickBooleanElement(node) {
  //todo
}

function clickElement(node) {
  hover(node);
  // fireEvent.mouseDown(node);
  // fireEvent.focus(node);
  // fireEvent.pointerUp(node);
  // fireEvent.click(node);

  fireEvent(node, 'mouseDown');
  fireEvent(node, 'focus');
  fireEvent(node, 'pointerUp');
  fireEvent(node, 'click');
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
