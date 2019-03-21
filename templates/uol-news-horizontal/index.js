import React from 'react';
import { default as Template } from "./template";

export const getadMooHTemplate = (props) => <Template {...props} />;
window.getadMooHTemplate = (props) => getadMooHTemplate(props);