import { extendConfig, usePlugin } from '@nomiclabs/buidler/config'
import { defaultAragonConfig } from './params'
import path from 'path'
// TODO: Don't use any type below, try to use something like these...
// import { ResolvedBuidlerConfig, BuidlerConfig } from '@nomiclabs/buidler/types'

export default function(): void {
  // Resolve tsconfig-paths at runtime.
  require('../bootstrap-paths.js')

  // Plugin dependencies.
  usePlugin('@nomiclabs/buidler-truffle5')
  usePlugin('@nomiclabs/buidler-web3')

  // Task definitions.
  require(path.join(__dirname, '/tasks/start-task'))

  // Environment extensions.
  // No extensions atm.

  // Default configuration values.
  extendConfig((finalConfig: any, userConfig: any) => {
    finalConfig.aragon = {
      ...defaultAragonConfig,
      ...userConfig.aragon
    }
  })
}
