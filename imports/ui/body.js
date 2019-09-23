import { Template } from "meteor/templating";

import { Profile } from "../api/tasks";

import "./task.js";
import "./body.html";

Template.body.helpers({
  eventos() {
    return Profile.find({}, { sort: { createdAt: -1 } });
  }
});

Template.body.events({
  "submit .new-evento"(event) {
    event.preventDefault();

    const e = event.target;

    const evento = {
      nombre: e.name.value,
      descripcion: e.description.value,
      location: e.location.value,
      fechaInicio: e.start.value,
      fechaFini: e.end.value,
      responsable: e.person.value
    };

    Profile.insert({
      evento,
      createdAt: new Date()
    });

    e.name.value = "";
    e.description.value = "";
    e.location.value = "";
    e.start.value = "";
    e.end.value = "";
    e.person.value = "";
  }
});
