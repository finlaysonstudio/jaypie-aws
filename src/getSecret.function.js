import { ConfigurationError, JAYPIE, moduleLogger } from "@jaypie/core";

import axios from "axios";

//
//
// Constants
//

const HTTP = {
  HEADER: {
    AMAZON: {
      PARAMETERS_SECRETS_TOKEN: "X-Aws-Parameters-Secrets-Token",
    },
  },
};

const DEFAULT = {
  PARAMETERS_SECRETS_EXTENSION_HTTP_PORT: 2773,
};

//
//
// Main
//

async function getSecret(name) {
  const log = moduleLogger.with({ lib: JAYPIE.LIB.AWS });

  log.trace.var({ getSecret: name });

  if (!process.env.AWS_SESSION_TOKEN) {
    throw new ConfigurationError("No AWS_SESSION_TOKEN available");
  }
  if (!name) {
    throw new ConfigurationError("No secret name provided");
  }

  const headers = {
    [HTTP.HEADER.AMAZON.PARAMETERS_SECRETS_TOKEN]:
      process.env.AWS_SESSION_TOKEN,
  };
  const port =
    process.env.PARAMETERS_SECRETS_EXTENSION_HTTP_PORT ||
    DEFAULT.PARAMETERS_SECRETS_EXTENSION_HTTP_PORT;
  const params = { secretId: name };
  const endpoint = `http://localhost:${port}/secretsmanager/get`;
  const response = await axios.get(endpoint, { headers, params });
  return response.data.SecretString;
}

//
//
// Export
//

export default getSecret;
