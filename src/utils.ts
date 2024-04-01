import fs from "fs";
import { promisify } from "util";

const exec = promisify(require("node:child_process").exec);

export const getCommitMessage = (): string => {
  const commitMsgContent = fs.readFileSync(".git/COMMIT_EDITMSG", "utf-8");
  const msg = commitMsgContent
    .toString()
    .split("\n")
    .shift()!
    .replace(/\s{2,}/g, " ");
  return msg;
};

export const getBranchName = async (): Promise<string> => {
  const gitCommand = await exec("git rev-parse --abbrev-ref HEAD");
  return gitCommand.stdout.replace("\n", "") as string;
};
