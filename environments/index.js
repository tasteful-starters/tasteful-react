import default_ from './default';
import dev from './development';
import staging from './staging';
import prod from './production';

const environments = {
    dev,
    staging,
    prod
}

export default {
    ...default_,
    ...environments[process.env.TASTEFUL_ENV || 'development']
}