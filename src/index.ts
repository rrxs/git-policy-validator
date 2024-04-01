#!/usr/bin/env node
import colors from "colors";
import { Config, createConfig, getConfig } from "./config";
import { getBranchName, getCommitMessage } from "./utils";
import { isBranchNameValid, isCommitMessageValid } from "./validators";

const run = async () => {
  let config: Config | undefined = await getConfig();
  if (!config) {
    config = (await createConfig()) as Config;
  }

  const flag = process.argv[2];
  let value = process.argv[3];

  if (flag === "-b") {
    try {
      if (!value) {
        value = await getBranchName();
      }
      const isValid = await isBranchNameValid(config, value);
      if (!isValid) {
        console.log(colors.red(`Invalid branch name`));
        console.log(colors.white(`Value provided: "${value}"`));
        console.log(
          colors.yellow(
            `Must match this pattern: ${config.branch.regexBranchName}`
          )
        );
        process.exit(1);
      }
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  if (flag === "-c") {
    try {
      if (!value) {
        value = getCommitMessage();
      }
      const isValid = await isCommitMessageValid(config, value);
      if (!isValid) {
        console.log(colors.red(`Invalid commit message`));
        console.log(colors.white(`Value provided: "${value}"`));
        console.log(
          colors.yellow(
            `Must match this pattern: ${config.commit.regexCommitMessage}`
          )
        );
        process.exit(1);
      }
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
};

run();
