const ttp = require('typescript-to-proptypes');
const path = require('path');


const tsconfig = ttp.loadConfig(path.resolve(__dirname, '../tsconfig.json'));

const program = ttp.createProgram(['./src/widgets/BasemapGallery.tsx'], tsconfig)

function generateProptypes(
  tsFile,
  program,
) {
  const proptypes = ttp.parseFromProgram(tsFile, program, {
    shouldResolveObject: ({ name }) => {
      if (name.toLowerCase().endsWith('classes') || name === 'theme' || name.endsWith('Props')) {
        return false;
      }
      return undefined;
    },
    checkDeclarations: true,
  });

  if (proptypes.body.length === 0) {
    return GenerateResult.NoComponent;
  }

  proptypes.body.forEach((component) => {
    component.types.forEach((prop) => {
      if (
        !prop.jsDoc ||
        (ignoreExternalDocumentation[component.name] &&
          ignoreExternalDocumentation[component.name].includes(prop.name))
      ) {
        prop.jsDoc = '@ignore';
      }
    });
  });

