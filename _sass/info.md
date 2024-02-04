# Structure

```
src/
├── scripts/
│   ├── vendors/
│   │   └── -> 3rd party plugins
│   └── app.js
└── styles/
    ├── 0-plugins/
    │   └── -> any plugins that may correspond with js vendors
    ├── 1-helpers/
    │   └── -> variables (i.e. colours / breakpoints), mixins, functions
    ├── 2-base/
    │   └── -> global styles (i.e. html, containers, basic tags), reset, typography
    ├── 3-layout/
    │   └── -> navigation, site header, site main, footer
    ├── 4-modules/
    │   └── -> specific elements or custom elements
    ├── 5-templates/
    │   └── -> anything that overrides or makes things unique
    └── styles.scss
```

