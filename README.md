
#karma-jasmine-sinon
An attempt at creating an karma "framework" plugin that uses the jasmine-sinon npm package. It however does not work because when jasmine-sinon file is executed, jasmine is not defined when integrating into another project using all three: karma,  jasmine and sinon.

The simple solution is to edit your karma.conf.js adding this to the files array:

```Javascript
      "node_modules/jasmine-sinon/lib/*",
```