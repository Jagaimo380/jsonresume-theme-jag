const fs = require('fs');
const handlebars = require('handlebars');
const handlebarsWax = require('handlebars-wax');
const moment = require('moment');

handlebars.registerHelper({
  removeProtocol: (url) => url.replace(/.*?:\/\//g, ''),
  concat: (...args) => args.filter((arg) => typeof arg !== 'object').join(''),
  formatDate: (str) => {
    const date = moment(str);

    return date.isValid() ? date.format('MM/YYYY') : str;
  },
  lowercase: (s) => s.toLowerCase(),
  eq: (a, b) => a === b,
  or: (...args) => args.splice(0, args.length - 1).some(Boolean),
  setVar: function (name, value) {
    this[name] = value;
  },
});

function render(resume) {
  const src = `${__dirname}/src`;
  const dist = `${__dirname}/dist`;
  const css = fs.readFileSync(`${dist}/style.css`, 'utf-8');
  const resumeTemplate = fs.readFileSync(`${src}/resume.hbs`, 'utf-8');

  const Handlebars = handlebarsWax(handlebars);

  Handlebars.partials(`${src}/components/**/*.{hbs,js}`);
  Handlebars.partials(`${src}/partials/**/*.{hbs,js}`);

  return Handlebars.compile(resumeTemplate)({
    style: `<style>${css}</style>`,
    resume,
  });
}

module.exports = {
  render,
};
