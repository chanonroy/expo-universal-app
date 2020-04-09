const createExpoWebpackConfigAsync = require("@expo/webpack-config")
const path = require("path")
const fs = require("fs")

module.exports = async function(env, argv) {
  // Import the default expo config
  const config = await createExpoWebpackConfigAsync(env, argv)

  // Customize the config before returning it.
  for (rule of config.module.rules) {
    // Look for the 'oneOf' loader
    if (rule.oneOf) {
      // Search the rules for ones with loaders
      for (one of rule.oneOf) {
        if (one.use && one.use.loader) {
          // Find the babel loader
          if (one.use.loader.indexOf("babel-loader") !== -1) {
            // Inject the absolute path of react router native
            const loaderPath = one.use.loader
            const rrNative = path.resolve("./node_modules/react-router-native")
           
            const rule = {
              test: /\.(js|jsx|mjs)$/,
              include: [rrNative],
              loader: loaderPath,
            }

            // Push the rule to the end so it supercedes previous rules
            config.module.rules.push(rule)
          }
        }
      }
    }
  }

  return config
}
