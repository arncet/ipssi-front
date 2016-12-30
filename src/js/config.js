export const googleConfig = {
  CLIENT_ID:'290326366388-mmbkbc73bo46btfl5mtic5le70a0ts3n.apps.googleusercontent.com',
  SCOPES:[
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/drive.metadata.readonly'
  ]
}

export const toolbar = [
  {
    "label": "Formats",
    "type": "group",
    "items": [{
      "label": "Font",
      "type": "font",
      "items": [{
        "label": "Sans Serif",
        "value": "sans-serif",
        "selected": true
      }, {
        "label": "Serif",
        "value": "serif"
      }, {
        "label": "Monospace",
        "value": "monospace"
      }]
    }, {
      "type": "separator"
    }, {
      "label": "Size",
      "type": "size",
      "items": [{
        "label": "Small",
        "value": "10px"
      }, {
        "label": "Normal",
        "value": "13px",
        "selected": true
      }, {
        "label": "Large",
        "value": "18px"
      }, {
        "label": "Huge",
        "value": "32px"
      }]
    }, {
      "type": "separator"
    }, {
      "label": "Alignment",
      "type": "align",
      "items": [{
        "label": "",
        "value": "left",
        "selected": true
      }, {
        "label": "",
        "value": "center"
      }, {
        "label": "",
        "value": "right"
      }, {
        "label": "",
        "value": "justify"
      }]
    }]
  }, {
    "label": "Text",
    "type": "group",
    "items": [{
      "type": "bold",
      "label": "Bold"
    }, {
      "type": "italic",
      "label": "Italic"
    }, {
      "type": "strike",
      "label": "Strike"
    }, {
      "type": "underline",
      "label": "Underline"
    }, {
      "type": "separator"
    }, {
      "type": "color",
      "label": "Color",
      "items": [{
        "value": "rgb( 0, 0, 0)"
      }, {
        "value": "rgb(230, 0, 0)"
      }, {
        "value": "rgb(255, 153, 0)"
      }, {
        "value": "rgb(255, 255, 0)"
      }, {
        "value": "rgb( 0, 138, 0)"
      }, {
        "value": "rgb( 0, 102, 204)"
      }, {
        "value": "rgb(153, 51, 255)"
      }, {
        "value": "rgb(255, 255, 255)"
      }, {
        "value": "rgb(250, 204, 204)"
      }, {
        "value": "rgb(255, 235, 204)"
      }, {
        "value": "rgb(255, 255, 204)"
      }, {
        "value": "rgb(204, 232, 204)"
      }, {
        "value": "rgb(204, 224, 245)"
      }, {
        "value": "rgb(235, 214, 255)"
      }, {
        "value": "rgb(187, 187, 187)"
      }, {
        "value": "rgb(240, 102, 102)"
      }, {
        "value": "rgb(255, 194, 102)"
      }, {
        "value": "rgb(255, 255, 102)"
      }, {
        "value": "rgb(102, 185, 102)"
      }, {
        "value": "rgb(102, 163, 224)"
      }, {
        "value": "rgb(194, 133, 255)"
      }, {
        "value": "rgb(136, 136, 136)"
      }, {
        "value": "rgb(161, 0, 0)"
      }, {
        "value": "rgb(178, 107, 0)"
      }, {
        "value": "rgb(178, 178, 0)"
      }, {
        "value": "rgb( 0, 97, 0)"
      }, {
        "value": "rgb( 0, 71, 178)"
      }, {
        "value": "rgb(107, 36, 178)"
      }, {
        "value": "rgb( 68, 68, 68)"
      }, {
        "value": "rgb( 92, 0, 0)"
      }, {
        "value": "rgb(102, 61, 0)"
      }, {
        "value": "rgb(102, 102, 0)"
      }, {
        "value": "rgb( 0, 55, 0)"
      }, {
        "value": "rgb( 0, 41, 102)"
      }, {
        "value": "rgb( 61, 20, 10)"
      }]
    }, {
      "type": "background",
      "label": "Background color",
      "items": [{
        "value": "rgb( 0, 0, 0)"
      }, {
        "value": "rgb(230, 0, 0)"
      }, {
        "value": "rgb(255, 153, 0)"
      }, {
        "value": "rgb(255, 255, 0)"
      }, {
        "value": "rgb( 0, 138, 0)"
      }, {
        "value": "rgb( 0, 102, 204)"
      }, {
        "value": "rgb(153, 51, 255)"
      }, {
        "value": "rgb(255, 255, 255)"
      }, {
        "value": "rgb(250, 204, 204)"
      }, {
        "value": "rgb(255, 235, 204)"
      }, {
        "value": "rgb(255, 255, 204)"
      }, {
        "value": "rgb(204, 232, 204)"
      }, {
        "value": "rgb(204, 224, 245)"
      }, {
        "value": "rgb(235, 214, 255)"
      }, {
        "value": "rgb(187, 187, 187)"
      }, {
        "value": "rgb(240, 102, 102)"
      }, {
        "value": "rgb(255, 194, 102)"
      }, {
        "value": "rgb(255, 255, 102)"
      }, {
        "value": "rgb(102, 185, 102)"
      }, {
        "value": "rgb(102, 163, 224)"
      }, {
        "value": "rgb(194, 133, 255)"
      }, {
        "value": "rgb(136, 136, 136)"
      }, {
        "value": "rgb(161, 0, 0)"
      }, {
        "value": "rgb(178, 107, 0)"
      }, {
        "value": "rgb(178, 178, 0)"
      }, {
        "value": "rgb( 0, 97, 0)"
      }, {
        "value": "rgb( 0, 71, 178)"
      }, {
        "value": "rgb(107, 36, 178)"
      }, {
        "value": "rgb( 68, 68, 68)"
      }, {
        "value": "rgb( 92, 0, 0)"
      }, {
        "value": "rgb(102, 61, 0)"
      }, {
        "value": "rgb(102, 102, 0)"
      }, {
        "value": "rgb( 0, 55, 0)"
      }, {
        "value": "rgb( 0, 41, 102)"
      }, {
        "value": "rgb( 61, 20, 10)"
      }]
    }, {
      "type": "separator"
    }, {
      "type": "link",
      "label": "Link"
    }]
  }, {
    "label": "Blocks",
    "type": "group",
    "items": [{
      "type": "bullet",
      "label": "Bullet"
    }, {
      "type": "separator"
    }, {
      "type": "list",
      "label": "List"
    }]
  }, {
    "label": "Blocks",
    "type": "group",
    "items": [{
      "type": "image",
      "label": "Image"
    }]
  }
]
