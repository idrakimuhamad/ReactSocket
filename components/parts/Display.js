import React, { Component } from 'react';

export const Display = (props) => (
  (props.display) ? <div>{props.children}</div> : null
)
