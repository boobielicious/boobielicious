import { Logger } from 'tslog'

const logger = new Logger({
  prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t'
})

export default logger
