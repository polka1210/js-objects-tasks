import _ from 'lodash';

// BEGIN
const normalize = (lesson) => {
  if (lesson.name) {
    lesson.name = _.capitalize(lesson.name);
  }
  if (lesson.description) {
    lesson.description = lesson.description.toLowerCase();
  }
};
export default normalize;
  // END