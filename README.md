# Interview setup check

Do this as soon as your recruiter sends you this link, not on the day of your interview. It takes about ten minutes. Tell your recruiter straight away if anything fails: we can almost always fix it, but only if we hear in time.

## Part 1: everyone does this

Running `pnpm test` in the Codespace is the part that matters most. It proves our container opens and works on your own account, machine and network, so your interview does not start with a setup problem.

1. Make sure two-factor authentication is on for your GitHub account: https://github.com/settings/security. It is required for the repo you will work in on the day.
2. [Open this repo in a Codespace](https://codespaces.new/LeafLink/interview-setup-check). Accept the defaults on GitHub's create page. The first boot takes a couple of minutes.
3. Run `pnpm test` in the terminal. One test should pass.
4. Tell your recruiter if anything failed.

## Part 2: only if you plan to use an AI agent

Declining an agent costs you nothing in the interview.

5. Get your agent running and authenticated. Claude Code, Codex, anything you use, with your usual credential: a Claude or ChatGPT subscription, or an API key.
6. Paste in any config you want: your `CLAUDE.md`, your skills, your MCP setup. None of it is in the Codespace unless you bring it.
7. Ask the agent to make one trivial change, for example adding a second greeting.
8. Run `pnpm test` again. Tell your recruiter if anything failed.

## Why we ask

Setup is never the test. This check moves the container boot, and your agent's sign-in, off the interview clock. The round itself opens on a different repo, and its first minutes go on an invite and a boot. Those minutes are for getting you oriented.
