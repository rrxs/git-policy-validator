import { Config } from "./config";

export const isBranchNameValid = async (
  config: Config,
  branchName: string
): Promise<boolean> => {
  if (config.branch.ignoreList.includes(branchName)) {
    return true;
  }

  const branchRegex = new RegExp(config.branch.regexBranchName);
  return branchRegex.test(branchName);
};

export const isCommitMessageValid = async (
  config: Config,
  commitMessage: string
): Promise<boolean> => {
  const regex = new RegExp(config.commit.regexCommitMessage);
  return regex.test(commitMessage);
};
