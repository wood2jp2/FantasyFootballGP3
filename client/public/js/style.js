import { StyleSheet } from 'react';

export default StyleSheet.create({
  // Custom Stylesheet
  // *
 * Use this file to override Materialize files so you can update
 * the core Materialize files in the future
 *
 * Made By MaterializeCSS.com
  'nav ul a': {
    'color': 'white'
  },
  'nav brand-logo': {
    'color': 'white'
  },
  'p': {
    'lineHeight': [{ 'unit': 'rem', 'value': 2 }]
  },
  'button-collapse': {
    'color': '#26a69a'
  },
  'parallax-container': {
    'minHeight': [{ 'unit': 'px', 'value': 380 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'color': 'rgba(255,255,255,.9)'
  },
  'parallax-container section': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'only screen&&max-width  992p': {
      'position': 'absolute',
      'top': [{ 'unit': '%V', 'value': 0.4 }]
    }
  },
  'icon-block': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'icon-block material-icons': {
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'footerpage-footer': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  }
});
