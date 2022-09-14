import data from './data.yaml';
import './resume.css';

const experienceSection = document.querySelector('#experience');
data.experience.forEach((exp) => {
  const section = document
    .querySelector('#experience-section')
    .content.cloneNode(true);
  section.querySelector('.experience-pos').textContent = exp.title;
  section.querySelector('.experience-org a').textContent =
    exp.organization.name;
  section
    .querySelector('.experience-org a')
    .setAttribute('href', exp.organization.href);
  section.querySelector('.experience-logistics').textContent = exp.date;
  if ('link' in exp) {
    const link = document.createElement('a');
    link.setAttribute('href', exp.link.href);
    link.textContent = exp.link.name;
    section.querySelector(
      '.experience-logistics',
    ).textContent = ` | ${exp.date}`;
    section.querySelector('.experience-logistics').prepend(link);
  }
  exp.description.forEach((desc) => {
    const child = document.createElement('li');
    child.innerHTML = desc;
    section.querySelector('ul').appendChild(child);
  });
  experienceSection.appendChild(section);
});

const projectsSection = document.querySelector('#projects');
data.projects.forEach((proj) => {
  const section = document
    .querySelector('#projects-section')
    .content.cloneNode(true);
  section.querySelector('.project-name').textContent = proj.name;

  if (proj.siteUrl == null) {
    section.querySelector('.project-logistics').childNodes[0].remove();
    section.querySelector('.project-logistics').childNodes[0].remove();
    section.querySelector('.project-logistics').childNodes[0].remove();
  } else {
    section
      .querySelector('.project-site-url')
      .setAttribute('href', proj.siteUrl);
  }

  section
    .querySelector('.project-github-url')
    .setAttribute('href', proj.githubUrl);
  proj.description.forEach((desc) => {
    const child = document.createElement('li');
    child.innerHTML = desc;
    section.querySelector('ul').appendChild(child);
  });
  projectsSection.appendChild(section);
});

document.querySelector('.relevant-coursework').textContent +=
  ' ' + data.education.courses.join(', ');

document
  .querySelector('#honors')
  .appendChild(document.createTextNode(data.honors.join(' • ')));

const [languages, tools, frameworks] =
  document.querySelector('.skills').children;
languages.after(
  document.createTextNode(' ' + data.skills.languages.join(' • ')),
);
tools.after(document.createTextNode(' ' + data.skills.tools.join(' • ')));
frameworks.after(
  document.createTextNode(' ' + data.skills.frameworks.join(' • ')),
);
