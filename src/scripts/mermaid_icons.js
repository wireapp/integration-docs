import mermaid from 'mermaid';
import icons from '../../static/img/wire-icons.json';
mermaid.registerIconPacks([
  {
    name: icons.prefix,
    icons
  },
]);
