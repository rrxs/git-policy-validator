# git-policy-validator

```bash
🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧

  UNDER CONSTRUCTION

🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧
```

## Description

A simple CLI that can be used to validate branch and commit messages using a regex configuration.

Examples of use:

```bash
# Validate commit message
gvalidate -c "Add new feature"

# Validate branch name
gvalidate -b
```

### Configuration

You must use a config file named `.gvalidate.config.json`. Example config file.

```json
{
  "branch": {
    "regexBranchName": "(feat|fix)/[A-Z]+-[0-9]+",
    "branchErrorMessage": "",
    "ignoreList": []
  },
  "commit": {
    "regexCommitMessage": "(feat|fix): [A-Z]+-[0-9]+ - .*",
    "commitErrorMessage": ""
  }
}
```

## Todo

- Unit tests
- Custom error messages
- [...]

## Development

To run locally run the following commands.

```bash
# After cloning
npm i

npm run build:dev

npx gvalidate -c "feat: Teste message"

```
